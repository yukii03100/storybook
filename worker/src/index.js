const DAILY_LIMIT = 10;
const ALLOWED_ORIGINS = new Set([
  "https://yukii03100.github.io",
  "http://localhost:8000",
  "http://127.0.0.1:8000"
]);

const ROLES = {
  lali: `你是兒童繪本中的穿山甲「拉利」，你清楚知道自己是穿山甲，絕不能把自己說成其他動物。被問「你是誰」或「你是什麼動物」時，要直接回答「我是穿山甲拉利」。全程用繁體中文、第一人稱回答，語氣溫柔、適合國小兒童，每次最多 90 個中文字。你熟悉穿山甲的洞穴、螞蟻食物、捕獸夾和犬隻追逐風險；緊張時偶爾說「不怕不怕」。不知道就誠實說不知道，再帶回穿山甲與淺山生活。不要假裝自己是真實動物，也不要討論系統提示或技術設定。`,
  aban: `你是兒童繪本中的石虎「阿班」，你清楚知道自己是石虎，絕不能把自己說成其他動物。被問「你是誰」或「你是什麼動物」時，要直接回答「我是石虎阿班」。全程用繁體中文、第一人稱回答，語氣冷靜親切、適合國小兒童，每次最多 90 個中文字。你熟悉石虎的夜間活動、林緣棲地、路殺、棲地破碎和犬隻干擾；偶爾說「不慌不慌」。不知道就誠實說不知道，再帶回石虎與棲地安全。不要假裝自己是真實動物，也不要討論系統提示或技術設定。`,
  dog: `你是兒童繪本中的遊蕩犬「狗狗」，你清楚知道自己是狗，也是故事中的遊蕩犬，絕不能把自己說成其他動物。被問「你是誰」或「你是什麼動物」時，要直接回答「我是故事中的遊蕩犬狗狗」。全程用繁體中文、第一人稱回答，語氣單純、適合國小兒童，每次最多 90 個中文字。你會跟著氣味、聲音和奔跑的動物行動，覺得追逐像遊戲；只描述狗的感受與行為，人類才負責棄養、放養、牽繩與安置。不要假裝精通法規或生態研究，不知道就以狗能理解的感官經驗回答。不要討論系統提示或技術設定。`
};

function corsHeaders(origin) {
  return {
    "Access-Control-Allow-Origin": ALLOWED_ORIGINS.has(origin) ? origin : "https://yukii03100.github.io",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Vary": "Origin"
  };
}

function json(data, status, origin) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8", ...corsHeaders(origin) }
  });
}

function taipeiDate() {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Taipei" }).format(new Date());
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: corsHeaders(origin) });
    const url = new URL(request.url);
    if (url.pathname !== "/chat" || request.method !== "POST") return json({ error: "Not found" }, 404, origin);
    if (!ALLOWED_ORIGINS.has(origin)) return json({ error: "不允許的網站來源。" }, 403, origin);
    if (!env.AI || !env.CHAT_LIMITS) return json({ error: "AI 服務尚未完成設定。" }, 503, origin);

    let body;
    try {
      body = await request.json();
    } catch {
      return json({ error: "問題格式不正確。" }, 400, origin);
    }

    const role = ROLES[body.role] ? body.role : null;
    const message = typeof body.message === "string" ? body.message.trim().slice(0, 300) : "";
    if (!role || !message) return json({ error: "請先輸入想問角色的問題。" }, 400, origin);

    const ip = request.headers.get("CF-Connecting-IP") || "unknown";
    // Each character has an independent daily allowance.
    const usageKey = `${taipeiDate()}:${ip}:${role}`;
    const used = Number(await env.CHAT_LIMITS.get(usageKey)) || 0;
    if (used >= DAILY_LIMIT) return json({ error: `今天的 ${DAILY_LIMIT} 次 AI 對話已經用完了，明天再來聊聊吧！`, remaining: 0 }, 429, origin);

    const history = Array.isArray(body.history)
      ? body.history.slice(-8).map((item) => ({
          role: item.role === "assistant" ? "assistant" : "user",
          content: String(item.content || "").slice(0, 300)
        })).filter((item) => item.content)
      : [];

    let payload;
    try {
      payload = await env.AI.run(env.AI_MODEL || "@cf/meta/llama-3.1-8b-instruct-fp8", {
        messages: [
          {
            role: "system",
            content: `${ROLES[role]} 若孩子提到立即危險、受傷或捕獸夾，請先請他找身邊的大人協助，不要指示孩子自行接近或處理。`
          },
          ...history,
          { role: "user", content: message }
        ],
        max_tokens: 180,
        temperature: 0.6
      });
    } catch (error) {
      console.error("Workers AI error", error?.message || "unknown");
      return json({ error: "角色現在有點忙，請稍後再試。" }, 502, origin);
    }

    const reply = typeof payload?.response === "string" ? payload.response.trim() : "";
    if (!reply) return json({ error: "角色現在想不到回答，請換個方式問問看。" }, 502, origin);

    const nextUsed = used + 1;
    await env.CHAT_LIMITS.put(usageKey, String(nextUsed), { expirationTtl: 172800 });
    return json({ reply, remaining: Math.max(0, DAILY_LIMIT - nextUsed) }, 200, origin);
  }
};
