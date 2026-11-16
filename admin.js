const endpoint = String(window.STORYBOOK_AI_ENDPOINT || "https://storybook-ai.snow-0310-52.workers.dev").replace(/\/$/, "");
const form = document.querySelector("#adminFilters");
const tokenInput = document.querySelector("#adminToken");
const participantInput = document.querySelector("#filterParticipant");
const roleInput = document.querySelector("#filterRole");
const statusText = document.querySelector("#adminStatus");
const rows = document.querySelector("#logRows");
const exportButton = document.querySelector("#exportCsv");
tokenInput.value = sessionStorage.getItem("storybookAdminToken") || "";

function roleName(role) {
  return ({ lali: "拉利", aban: "阿斑", dog: "狗狗" })[role] || role;
}

function renderRows(items) {
  rows.innerHTML = "";
  for (const item of items) {
    const row = document.createElement("tr");
    const values = [item.id, item.participant_code, roleName(item.role), item.question_type === "preset" ? "預設問題" : "自由輸入", item.user_message, item.ai_reply, new Date(item.created_at).toLocaleString("zh-TW")];
    for (const value of values) {
      const cell = document.createElement("td");
      cell.textContent = value;
      row.appendChild(cell);
    }
    rows.appendChild(row);
  }
}

async function authorizedFetch(path) {
  const token = tokenInput.value.trim();
  if (!token) throw new Error("請先輸入管理密碼。");
  sessionStorage.setItem("storybookAdminToken", token);
  const response = await fetch(endpoint + path, { headers: { Authorization: "Bearer " + token } });
  if (!response.ok) {
    const payload = await response.json().catch(() => ({}));
    throw new Error(payload.error || "無法讀取後台資料。");
  }
  return response;
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  statusText.textContent = "正在讀取……";
  const params = new URLSearchParams({ limit: "500" });
  const participant = participantInput.value.trim().toUpperCase();
  if (participant) params.set("participant", participant);
  if (roleInput.value) params.set("role", roleInput.value);
  try {
    const response = await authorizedFetch("/admin/logs?" + params);
    const payload = await response.json();
    renderRows(payload.rows || []);
    statusText.textContent = "共讀取 " + (payload.rows?.length || 0) + " 筆已同意保存的對話。";
  } catch (error) {
    rows.innerHTML = "";
    statusText.textContent = error.message;
  }
});

exportButton.addEventListener("click", async () => {
  statusText.textContent = "正在準備 CSV……";
  try {
    const response = await authorizedFetch("/admin/export.csv");
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "storybook-chat-" + new Date().toISOString().slice(0, 10) + ".csv";
    link.click();
    URL.revokeObjectURL(url);
    statusText.textContent = "CSV 已下載。";
  } catch (error) {
    statusText.textContent = error.message;
  }
});
