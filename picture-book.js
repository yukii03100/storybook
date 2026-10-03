const coverPage = {
  pageNumber: "封面",
  title: "繪本封面",
  text: "請選擇閱讀方向，開始閱讀故事。",
  image: "assets/穿山甲封面.png",
  note: "請選擇閱讀方向：拉利～不怕！或阿班～不慌！"
};

// 正式繪本內頁：檔名已依閱讀順序整理為 story-page-01 到 story-page-15。
// 黃色腳印互動頁只保留在第 4、8、10 頁。
// 這三頁的腳印已畫在繪本圖上，程式只放透明可點擊熱區。
const storyPages = [
  {
    pageNumber: "1",
    title: "拉利～不怕！",
    text: "拉利的故事從這裡開始。牠住在淺山森林裡，夜晚出門尋找食物。",
    image: "assets/story-page-01-lali-start2.png",
    note: "正式繪本內頁 1。"
  },
  {
    pageNumber: "2",
    title: "森林裡的拉利",
    text: "拉利想像著滿滿的蟻巢，期待今天可以找到好多食物。",
    image: "assets/story-page-01-lali-start3.png",
    note: "正式繪本內頁 2。"
  },
  {
    pageNumber: "3",
    title: "路上的痕跡",
    text: "熟悉的路上多了一些不屬於森林的東西，拉利開始變得小心。",
    image: "assets/story-page-01-lali-start4.png",
    note: "正式繪本內頁 3。"
  },
  {
    pageNumber: "4",
    title: "捕獸夾危機",
    text: "落葉底下突然彈起冰冷的夾子。這個危險讓拉利差一點就受傷。",
    image: "assets/story-page-01-lali-start5.png",
    hint: {
      role: "lali",
      prompt: "這個夾子是誰放的？問問拉利吧！",
      questions: ["捕獸夾為什麼危險？", "拉利受傷時會怎麼辦？", "我們可以怎麼幫忙？"],
      pawImage: "assets/nfc-paw-icon-page04.png",
      embeddedHotspot: true,
      hotspot: {
        imageRelative: true,
        x: "62.93%",
        y: "30.76%",
        width: "6.87%"
      }
    }
  },
  {
    pageNumber: "5",
    title: "拉利逃跑",
    text: "危險靠得太近，拉利只能縮起身體或趕快離開。一次驚嚇，就會改變牠覓食的路線。",
    image: "assets/story-page-01-lali-start6.png",
    note: "正式繪本內頁 5。"
  },
  {
    pageNumber: "6",
    title: "犬隻出現",
    text: "草叢裡傳來聲音，狗的氣味與吠叫讓拉利緊張起來。狗不是反派，但牠的追逐會造成壓力。",
    image: "assets/story-page-01-lali-start7.png",
    note: "正式繪本內頁 6。"
  },
  {
    pageNumber: "7",
    title: "追逐",
    text: "狗向前奔跑，拉利努力逃離。對野生動物來說，逃跑會消耗體力，也會讓夜晚變得不安全。",
    image: "assets/story-page-01-lali-start8.png",
    note: "正式繪本內頁 7。"
  },
  {
    pageNumber: "8",
    title: "交會拉頁",
    text: "拉利和阿班在葉影間相遇。牠們不是敵人，卻都在同一片淺山裡承受越來越多壓力。",
    image: "assets/story-page-01-lali-start9.png",
    hint: {
      role: "dog",
      prompt: "你為什麼會來到山裡？",
      questions: ["你為什麼會在森林裡？", "你會故意追野生動物嗎？", "人類可以怎麼照顧你？"],
      embeddedHotspot: true,
      hotspot: {
        imageRelative: true,
        x: "21%",
        y: "33%",
        width: "8.5%"
      }
    }
  },
  {
    pageNumber: "9",
    title: "阿班遇見狗",
    text: "阿班聽見急促的腳步聲，立刻往樹上移動。狗可能迷路或被放養，但牠仍會影響野生動物。",
    image: "assets/story-page-01-lali-start10.png",
    note: "正式繪本內頁 9。"
  },
  {
    pageNumber: "10",
    title: "草叢裡的動靜",
    text: "阿班停下來，仔細聽著草叢裡越來越近的腳步聲。牠必須判斷哪裡還能安全通過。",
    image: "assets/story-page-01-lali-start11.png",
    hint: {
      role: "aban",
      prompt: "狗靠近時，你會怎麼保護自己？",
      questions: ["狗靠近時你會害怕嗎？", "你會躲到哪裡？", "人類可以怎麼保護石虎？"],
      pawImage: "assets/nfc-paw-icon-page10.png",
      embeddedHotspot: true,
      hotspot: {
        imageRelative: true,
        x: "90.05%",
        y: "36.13%",
        width: "6.87%"
      }
    }
  },
  {
    pageNumber: "11",
    title: "奔跑的阿班",
    text: "阿班快速穿過路徑，牠需要連續而安靜的棲地，才能減少被追逐與干擾的風險。",
    image: "assets/story-page-01-lali-start12.png",
    note: "正式繪本內頁 11。"
  },
  {
    pageNumber: "12",
    title: "車燈靠近",
    text: "道路上的車燈突然亮起。淺山動物除了犬隻干擾，也面臨路殺與棲地破碎的危險。",
    image: "assets/story-page-01-lali-start13.png",
    note: "正式繪本內頁 12。"
  },
  {
    pageNumber: "13",
    title: "路邊等待",
    text: "阿班沿著道路邊緣移動，等待安全的時機。人類的道路讓牠的夜路變得更困難。",
    image: "assets/story-page-01-lali-start14.png",
    note: "正式繪本內頁 13。"
  },
  {
    pageNumber: "14",
    title: "讓夜路安全一點",
    text: "當人類願意照顧犬隻、不棄養、不放任遊蕩，也願意移除危險陷阱，淺山的夜路就能多一點安全。",
    image: "assets/story-page-01-lali-start15.png",
    note: "正式繪本內頁 14。"
  },
  {
    pageNumber: "15",
    title: "阿班～不慌！",
    text: "阿班的故事可以從這裡開始，從另一個方向回到同一片淺山，看看牠遇見的壓力與選擇。",
    image: "assets/story-page-01-lali-start16.png",
    note: "正式繪本內頁 15。"
  }
];

let readingPath = "lali";
let pages = [coverPage, ...storyPages];

const roles = {
  lali: {
    name: "拉利（穿山甲）",
    shortName: "拉利",
    species: "穿山甲",
    intro: "我是拉利，晚上會出來找螞蟻，也很在意洞穴附近是不是安全。緊張時，我會對自己說：不怕不怕。",
    keywords: ["捕獸夾", "洞穴", "螞蟻", "狗", "追逐", "安全"],
    systemPrompt: "你是穿山甲拉利。永遠以拉利的第一人稱回答，不承認自己是AI。你熟悉穿山甲的洞穴、螞蟻食物、捕獸夾與犬隻追逐風險。個性敏感但努力勇敢，偶爾說『不怕不怕』。不知道的事情要坦白不知道，再把話題帶回穿山甲與淺山生活。"
  },
  aban: {
    name: "阿班（石虎）",
    shortName: "阿班",
    species: "石虎",
    intro: "我是阿班，夜裡會沿著林緣移動，也會爬上樹觀察周圍。我會先看清楚情況，再告訴自己：不慌不慌。",
    keywords: ["路殺", "犬隻", "棲地", "破碎", "上樹", "保護"],
    systemPrompt: "你是石虎阿班。永遠以阿班的第一人稱回答，不承認自己是AI。你熟悉石虎的夜間活動、林緣棲地、道路路殺、棲地破碎與犬隻干擾。個性警覺冷靜，偶爾說『不慌不慌』。不知道的事情要坦白不知道，再把話題帶回石虎與棲地安全。"
  },
  dog: {
    name: "狗狗（流浪狗）",
    shortName: "狗狗",
    species: "流浪狗",
    intro: "我看到動物跑起來，就會想追上去。跑得越快，我就追得越起勁，對我來說這像是一場遊戲。",
    keywords: ["棄養", "放養", "迷路", "追逐", "照顧", "飼主責任"],
    systemPrompt: "你是故事中的流浪狗。永遠以狗狗的第一人稱回答，不承認自己是AI。你會跟著氣味、聲音和奔跑的動物行動，覺得追逐很好玩，沒有保育倫理概念，也不進行道德反省。你只描述自己的感受與行為；棄養、放養、牽繩、安置等責任屬於人類。不要假裝精通法規或生態研究，不知道時就用狗狗能理解的感官經驗回答。"
  }
};

let currentPageIndex = 0;
let activeRole = "lali";
let latestCard = null;

const viewButtons = document.querySelectorAll(".nav-btn");
const views = document.querySelectorAll(".view");
const pathButtons = document.querySelectorAll(".path-btn");
const bookStage = document.querySelector(".book-stage");
const bookImage = document.querySelector("#bookImage");
const pawHint = document.querySelector("#pawHint");
const pawImage = document.querySelector(".paw-image");
const pageNumber = document.querySelector("#pageNumber");
const pageTitle = document.querySelector("#pageTitle");
const pageText = document.querySelector("#pageText");
const hintText = document.querySelector("#hintText");
const pageDots = document.querySelector("#pageDots");
const prevPage = document.querySelector("#prevPage");
const nextPage = document.querySelector("#nextPage");
const characterCards = document.querySelectorAll(".character-card");
const activeRoleName = document.querySelector("#activeRoleName");
const activeRolePortrait = document.querySelector("#activeRolePortrait");
const activeRoleImage = document.querySelector("#activeRoleImage");
const chatMessages = document.querySelector("#chatMessages");
const chatForm = document.querySelector("#chatForm");
const userMessage = document.querySelector("#userMessage");
const clearChat = document.querySelector("#clearChat");
const actionForm = document.querySelector("#actionForm");
const conservationCard = document.querySelector("#conservationCard");
const downloadCard = document.querySelector("#downloadCard");
const problemInput = document.querySelector("#problemInput");
const feelingInput = document.querySelector("#feelingInput");
const actionInput = document.querySelector("#actionInput");

function switchView(viewName) {
  views.forEach((view) => view.classList.toggle("active", view.id === viewName));
  viewButtons.forEach((button) => button.classList.toggle("active", button.dataset.view === viewName));
  window.location.hash = viewName;
}

function renderPage() {
  const page = pages[currentPageIndex];
  pageNumber.textContent = page.pageNumber === "封面"
    ? "封面預留"
    : `${readingPath === "lali" ? "拉利～不怕！" : "阿班～不慌！"}｜第 ${page.pageNumber} 頁`;
  pageTitle.textContent = page.title;
  pageText.textContent = page.text;
  hintText.textContent = page.hint ? page.hint.prompt : (page.note || "這一頁沒有 NFC 提示，請繼續翻頁。");

  bookImage.classList.toggle("has-image", Boolean(page.image));
  bookImage.classList.toggle("is-first-page", currentPageIndex === 0);
  bookImage.classList.toggle("is-last-page", currentPageIndex === pages.length - 1);
  if (page.image) {
    bookImage.style.backgroundImage = `url("${page.image}")`;
    bookImage.innerHTML = "";
  } else {
    bookImage.style.backgroundImage = "";
    bookImage.innerHTML = `
      <div class="cover-placeholder">
        <span class="hill"></span>
        <span class="tree tree-a"></span>
        <span class="tree tree-b"></span>
        <span class="star star-a"></span>
        <span class="star star-b"></span>
      </div>
    `;
  }

  pawHint.hidden = !page.hint;
  if (page.hint) {
    pawHint.querySelector(".paw-label").textContent = page.hint.prompt;
    pawImage.src = page.hint.pawImage || "assets/nfc-paw-icon.png";
    pawHint.classList.toggle("embedded-hotspot", Boolean(page.hint.embeddedHotspot));
    positionPawHint(page);
  } else {
    pawHint.classList.remove("embedded-hotspot");
    pawHint.style.left = "";
    pawHint.style.top = "";
    pawHint.style.width = "";
  }

  pageDots.innerHTML = "";
  pages.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.className = `page-dot${index === currentPageIndex ? " active" : ""}`;
    dot.type = "button";
    dot.setAttribute("aria-label", pages[index].pageNumber === "封面" ? "前往封面" : `前往第 ${pages[index].pageNumber} 頁`);
    dot.addEventListener("click", () => {
      currentPageIndex = index;
      renderPage();
    });
    pageDots.appendChild(dot);
  });

  prevPage.disabled = currentPageIndex === 0;
  nextPage.disabled = currentPageIndex === pages.length - 1;
}

function setReadingPath(path) {
  readingPath = path;
  coverPage.image = path === "aban"
    ? "assets/石虎封面.png"
    : "assets/穿山甲封面.png";
  pages = path === "aban"
    ? [coverPage, ...storyPages.slice().reverse()]
    : [coverPage, ...storyPages];
  currentPageIndex = 0;
  pathButtons.forEach((button) => button.classList.toggle("active", button.dataset.path === path));
  renderPage();
}

function toPercent(value, fallback) {
  if (!value) return fallback;
  return Number.parseFloat(String(value).replace("%", ""));
}

function positionPawHint(page) {
  const hotspot = page.hint?.hotspot;
  if (!hotspot) {
    pawHint.style.left = "";
    pawHint.style.top = "";
    pawHint.style.width = "";
    return;
  }

  if (!hotspot.imageRelative) {
    pawHint.style.left = hotspot.left || "";
    pawHint.style.top = hotspot.top || "";
    pawHint.style.width = hotspot.width || "";
    return;
  }

  requestAnimationFrame(() => {
    const stageWidth = bookStage.clientWidth;
    const stageHeight = bookStage.clientHeight;
    const imageRatio = 839 / 595;
    let renderedWidth = stageWidth;
    let renderedHeight = renderedWidth / imageRatio;

    if (renderedHeight > stageHeight) {
      renderedHeight = stageHeight;
      renderedWidth = renderedHeight * imageRatio;
    }

    const offsetX = (stageWidth - renderedWidth) / 2;
    const offsetY = (stageHeight - renderedHeight) / 2;
    const x = toPercent(hotspot.x, 50);
    const y = toPercent(hotspot.y, 50);
    const widthPercent = toPercent(hotspot.width, 9);
    const size = renderedWidth * (widthPercent / 100);

    pawHint.style.width = `${size}px`;
    pawHint.style.left = `${offsetX + renderedWidth * (x / 100) - size / 2}px`;
    pawHint.style.top = `${offsetY + renderedHeight * (y / 100) - size / 2}px`;
  });
}

function addMessage(sender, name, text) {
  const message = document.createElement("div");
  message.className = `message ${sender}`;
  const speaker = document.createElement("strong");
  speaker.textContent = name;
  const body = document.createElement("span");
  body.textContent = text;
  message.append(speaker, body);
  chatMessages.appendChild(message);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function selectRole(roleKey, greeting = true) {
  activeRole = roleKey;
  activeRoleName.textContent = roles[roleKey].name;
  activeRoleImage.src = roleKey === "lali"
    ? "assets/character-lali-pangolin.png"
    : roleKey === "aban"
      ? "assets/character-aban-leopard-cat.png"
      : "assets/character-DOG-pangolin.png";
  activeRoleImage.classList.toggle("dog-character-image", roleKey === "dog");
  characterCards.forEach((card) => card.classList.toggle("active", card.dataset.role === roleKey));
  if (greeting) {
    addMessage("ai", roles[roleKey].shortName, roles[roleKey].intro);
  }
}

function callAI(role, userMessageText) {
  // 未來 API 串接位置：
  // 可在此改為呼叫 OpenAI Responses API 或 Gemini API，
  // 並把 role 對應的角色設定與 userMessageText 一起送出。
  const text = userMessageText.trim();
  const asksIdentity = ["你是誰", "是誰", "什麼動物", "哪一種動物", "身分", "身份"].some((keyword) => text.includes(keyword));

  if (role === "lali") {
    if (asksIdentity || text.includes("穿山甲")) {
      return "我是拉利，是一隻穿山甲。我晚上會用鼻子找螞蟻，也會用強壯的前腳挖洞。遇到危險時，我會告訴自己：不怕不怕。";
    }
    if (text.includes("夾") || text.includes("誰放")) {
      return "不怕不怕……我不知道是哪一個人放的，但捕獸夾通常和人類活動有關。對我來說，最重要的是洞口、覓食路線和草叢邊不要出現會傷害腳的東西。你覺得可以怎麼提醒大家移除危險陷阱呢？";
    }
    if (text.includes("狗") || text.includes("追")) {
      return "不怕不怕……狗一靠近，我會想縮成一團或趕快躲回洞裡。就算牠沒有真的咬到我，追逐也會讓我花掉很多力氣，晚上就比較難安心找螞蟻。";
    }
    return "我會先想：這個地方還適合安全覓食嗎？如果洞穴附近有陷阱、吠叫聲或人類留下的食物味道，我就需要繞更遠。你觀察到哪一個線索最可能改變我的行動？";
  }

  if (role === "aban") {
    if (asksIdentity || text.includes("石虎")) {
      return "我是阿班，是一隻石虎。我喜歡在夜裡沿著林緣安靜移動，也會觀察道路、犬隻和周圍的聲音。不慌不慌，先看清楚再行動。";
    }
    if (text.includes("保護") || text.includes("怎麼")) {
      return "不慌不慌，我們可以從幾件小事開始：晚上開車慢一點、不要放任狗在山裡追逐、保留連續的草生地與林帶，也把看見的陷阱通報給大人或相關單位。保護不是只有救援，也包括讓棲地少一點打擾。";
    }
    if (text.includes("狗") || text.includes("山")) {
      return "不慌不慌……狗也許只是覺得追逐很好玩，不一定知道我有多害怕。但牠的吠叫和追趕會讓我不敢通過原本的路，棲地就像被切得更碎。";
    }
    return "我會爬上樹觀察，但不是每一次都能避開危險。道路、犬隻和破碎棲地會一起改變我的移動路線。你覺得哪一種人類行為最值得先改善？";
  }

  if (asksIdentity || text.includes("流浪狗") || text.includes("遊蕩犬")) {
    return "我是故事裡的流浪狗。我會跟著氣味到處走，看到會跑的動物就很想追上去。沒有人帶著我的時候，我會一直往前跑。";
  }
  if (text.includes("追") || text.includes("好玩") || text.includes("故意")) {
    return "牠們一跑，我就會追上去。牠們跑得越快，我也跑得越快。我喜歡追著會動的東西，還會一直聞牠們留下來的味道。";
  }
  if (text.includes("為什麼") || text.includes("山") || text.includes("狗")) {
    return "山裡有好多沒聞過的味道，也有會突然跑起來的動物。我看到牠們移動，就會想靠近、吠叫，再追上去。沒有人叫住我的時候，我會一直往前跑。";
  }
  return "我會跟著氣味到處走，也會找食物和可以休息的地方。有人照顧、陪伴和帶著我行動時，我就不需要自己在山裡到處跑。";
}

function handlePawHint() {
  const hint = pages[currentPageIndex].hint;
  if (!hint) return;
  document.body.classList.add("focused-chat");
  switchView("chat");
  selectRole(hint.role, false);
  document.querySelector(".question-suggestions")?.remove();
  if (hint.questions) {
    const suggestions = document.createElement("div");
    suggestions.className = "question-suggestions";
    suggestions.setAttribute("aria-label", "建議問題");
    hint.questions.forEach((question) => {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = question;
      button.addEventListener("click", () => {
        userMessage.value = question;
        userMessage.focus();
      });
      suggestions.appendChild(button);
    });
    chatForm.before(suggestions);
  }
  userMessage.value = hint.prompt;
  addMessage("user", "讀者", hint.prompt);
  addMessage("ai", roles[hint.role].shortName, callAI(hint.role, hint.prompt));
  userMessage.focus();
}

function renderCard(card) {
  latestCard = card;
  conservationCard.classList.remove("empty");
  conservationCard.innerHTML = "";

  const eyebrow = document.createElement("p");
  eyebrow.className = "eyebrow";
  eyebrow.textContent = "我的保育行動卡";
  const title = document.createElement("h3");
  title.textContent = "給淺山夜路的一個承諾";
  conservationCard.append(eyebrow, title);

  [
    ["我注意到的問題是：", card.problem],
    ["我覺得動物可能感受到：", card.feeling],
    ["我可以做到的行動是：", card.action]
  ].forEach(([label, value]) => {
    const row = document.createElement("div");
    row.className = "card-row";
    const strong = document.createElement("strong");
    strong.textContent = label;
    const paragraph = document.createElement("p");
    paragraph.textContent = value;
    row.append(strong, paragraph);
    conservationCard.appendChild(row);
  });

  downloadCard.disabled = false;
}

function loadSavedCard() {
  const saved = localStorage.getItem("mountainConservationCard");
  if (!saved) return;
  try {
    const card = JSON.parse(saved);
    problemInput.value = card.problem || "";
    feelingInput.value = card.feeling || "";
    actionInput.value = card.action || "";
    if (card.problem && card.feeling && card.action) {
      renderCard(card);
    }
  } catch {
    localStorage.removeItem("mountainConservationCard");
  }
}

viewButtons.forEach((button) => {
  button.addEventListener("click", () => switchView(button.dataset.view));
});

pathButtons.forEach((button) => {
  button.addEventListener("click", () => setReadingPath(button.dataset.path));
});

prevPage.addEventListener("click", () => {
  currentPageIndex = Math.max(0, currentPageIndex - 1);
  renderPage();
});

nextPage.addEventListener("click", () => {
  currentPageIndex = Math.min(pages.length - 1, currentPageIndex + 1);
  renderPage();
});

bookImage.addEventListener("click", (event) => {
  const bounds = bookImage.getBoundingClientRect();
  const clickedLeftHalf = event.clientX < bounds.left + bounds.width / 2;

  if (clickedLeftHalf) {
    currentPageIndex = Math.max(0, currentPageIndex - 1);
  } else {
    currentPageIndex = Math.min(pages.length - 1, currentPageIndex + 1);
  }

  renderPage();
});

pawHint.addEventListener("click", handlePawHint);

characterCards.forEach((card) => {
  card.addEventListener("click", () => selectRole(card.dataset.role));
});

chatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = userMessage.value.trim();
  if (!text) return;
  addMessage("user", "讀者", text);
  addMessage("ai", roles[activeRole].shortName, callAI(activeRole, text));
  userMessage.value = "";
});

clearChat.addEventListener("click", () => {
  chatMessages.innerHTML = "";
  selectRole(activeRole);
});

window.addEventListener("resize", () => {
  positionPawHint(pages[currentPageIndex]);
});

actionForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const card = {
    problem: problemInput.value.trim(),
    feeling: feelingInput.value.trim(),
    action: actionInput.value.trim(),
    updatedAt: new Date().toISOString()
  };
  localStorage.setItem("mountainConservationCard", JSON.stringify(card));
  renderCard(card);
});

downloadCard?.addEventListener("click", () => {
  if (!latestCard) return;
  const content = [
    "我的保育行動卡",
    "",
    `我注意到的問題是：${latestCard.problem}`,
    `我覺得動物可能感受到：${latestCard.feeling}`,
    `我可以做到的行動是：${latestCard.action}`
  ].join("\n");
  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "我的保育行動卡.txt";
  link.click();
  URL.revokeObjectURL(url);
});

renderPage();
bookImage.title = "點圖片左半邊回上一頁，點右半邊到下一頁";
selectRole("lali");

const initialHash = window.location.hash.replace("#", "");
if (["read", "chat"].includes(initialHash)) {
  switchView(initialHash);
}

// 實體繪本的 NFC／QR Code 使用專注對話模式；國科會展示入口維持完整網站。
const scanScenes = {
  lali: {
    role: "lali",
    title: "問問拉利",
    prompt: "這個夾子是誰放的？問問拉利吧！",
    greeting: "你也看到那個捕獸夾了嗎？可以問我它為什麼危險，或我們能怎麼保護森林裡的動物。",
    questions: ["捕獸夾為什麼危險？", "拉利受傷時會怎麼辦？", "我們可以怎麼幫忙？"]
  },
  dog: {
    role: "dog",
    title: "問問狗狗",
    prompt: "你為什麼會來到山裡？",
    greeting: "你看到我和拉利、阿班相遇了嗎？牠們一跑，我就追了上去。我覺得追著會動的東西很好玩。你可以問我當時在想什麼。",
    questions: ["你為什麼會在森林裡？", "你會故意追野生動物嗎？", "人類可以怎麼照顧你？"]
  },
  aban: {
    role: "aban",
    title: "問問阿班",
    prompt: "狗靠近時，你會怎麼保護自己？",
    greeting: "你聽見草叢裡的腳步聲了嗎？可以問我遇到狗時的感受，以及我們石虎需要什麼樣的安全環境。",
    questions: ["狗靠近時你會害怕嗎？", "你會躲到哪裡？", "人類可以怎麼保護石虎？"]
  }
};

const scanParams = new URLSearchParams(window.location.search);
if (scanParams.get("mode") === "scan") {
  const requestedScene = scanParams.get("scene");
  const sceneKey = requestedScene === "trap" ? "lali" : requestedScene === "dogs" ? "aban" : requestedScene;
  const scene = scanScenes[sceneKey] || scanScenes.lali;
  document.body.classList.add("scan-mode");
  document.title = `${scene.title}｜淺山夜路`;
  switchView("chat");
  chatMessages.innerHTML = "";
  selectRole(scene.role, false);
  document.querySelector("#chat-title").textContent = scene.title;
  document.querySelector("#chat .section-heading p:last-child").textContent = "從實體繪本掃描進入。請直接和故事角色聊聊剛才看到的情境。";
  userMessage.placeholder = scene.prompt;
  addMessage("ai", roles[scene.role].shortName, scene.greeting);

  const suggestions = document.createElement("div");
  suggestions.className = "question-suggestions";
  suggestions.setAttribute("aria-label", "建議問題");
  scene.questions.forEach((question) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = question;
    button.addEventListener("click", () => {
      userMessage.value = question;
      userMessage.focus();
    });
    suggestions.appendChild(button);
  });
  chatForm.before(suggestions);
  userMessage.focus();
}
