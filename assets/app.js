/* PTE 52 Lab — practice app */
(function () {
  "use strict";

  const QS = window.QUESTIONS || [];
  const MOCK_QS = window.MOCK_QUESTIONS || [];
  const BY_ID = {};
  QS.concat(MOCK_QS).forEach(q => { BY_ID[q.id] = q; });

  /* Lesson 2 (RS + ASQ) examples from the 120-minute PPT */
  const L2_IDS = QS.filter(q => q.lesson === "L2").map(q => q.id);
  ["asq-01", "asq-02"].forEach(id => {
    if (BY_ID[id] && !L2_IDS.includes(id)) L2_IDS.push(id);
  });

  const TYPE = {
    ra:      { name: "Read Aloud",              sec: "speaking",  label: "朗读" },
    rs:      { name: "Repeat Sentence",         sec: "speaking",  label: "复述" },
    di:      { name: "Describe Image",          sec: "speaking",  label: "描述图片" },
    rts:     { name: "Respond to a Situation",  sec: "speaking",  label: "情景应答" },
    asq:     { name: "Answer Short Question",   sec: "speaking",  label: "简答" },
    swt:     { name: "Summarize Written Text",  sec: "writing",   label: "一句话概括" },
    we:      { name: "Write Essay",             sec: "writing",   label: "大作文" },
    "fib-rw":{ name: "Reading: Fill in the Blanks", sec: "reading", label: "阅读填空" },
    ro:      { name: "Re-order Paragraphs",     sec: "reading",   label: "排序" },
    "mcq-s": { name: "Multiple Choice (Single)",sec: "reading",   label: "单选" },
    "mcq-m": { name: "Multiple Choice (Multiple)", sec: "reading", label: "多选" },
    sst:     { name: "Summarize Spoken Text",   sec: "listening", label: "听力摘要" },
    wfd:     { name: "Write from Dictation",    sec: "listening", label: "听写" },
    hiw:     { name: "Highlight Incorrect Words", sec: "listening", label: "点错词" },
    "fib-l": { name: "Listening: Fill in the Blanks", sec: "listening", label: "听力填空" },
    "fib-r": { name: "Reading: Fill in the Blanks (Drag)", sec: "reading", label: "拖拽填空" },
    "mcq-l": { name: "Listening: Multiple Choice", sec: "listening", label: "听力选择" },
    hcs: { name: "Highlight Correct Summary", sec: "listening", label: "选摘要" },
    smw: { name: "Select Missing Word", sec: "listening", label: "选缺失词" }
  };

  const SECTIONS = [
    { id: "speaking",  name: "口语", en: "Speaking",  color: "#0e8f80", tip: "RA / RS / DI 先练，说满时间" },
    { id: "writing",   name: "写作", en: "Writing",   color: "#d9482a", tip: "SWT 一个句号，WE 四段 200 词" },
    { id: "reading",   name: "阅读", en: "Reading",   color: "#5b45c7", tip: "FIB 每空 1 分，先词性再搭配" },
    { id: "listening", name: "听力", en: "Listening", color: "#b7791f", tip: "WFD 每词 1 分，最后一题别放" }
  ];

  const PLAN = [
    { day: 1, title: "规则 + RA", desc: "认识考试，练朗读节奏", types: ["ra"] },
    { day: 2, title: "RS + ASQ", desc: "短时记忆，敢开口", types: ["rs", "asq"] },
    { day: 3, title: "DI + RTS", desc: "三句话讲完图，情景能应对", types: ["di", "rts"] },
    { day: 4, title: "SWT + WE", desc: "一句话 + 四段作文", types: ["swt", "we"] },
    { day: 5, title: "阅读 FIB", desc: "词性、搭配、逻辑", types: ["fib-rw"] },
    { day: 6, title: "RO + 多选", desc: "找首句，只选有依据的", types: ["ro", "mcq-s", "mcq-m"] },
    { day: 7, title: "WFD + SST", desc: "听力双供分，重点练", types: ["wfd", "sst"] },
    { day: 8, title: "FIB-L + HIW", desc: "听写填空，收尾", types: ["fib-l", "hiw"] }
  ];

  /* ---------------- storage ---------------- */
  const PKEY = "pte52.progress.v1";
  function loadProgress() {
    try {
      const raw = localStorage.getItem(PKEY);
      const p = raw ? JSON.parse(raw) : null;
      if (p && p.records && p.days) return p;
    } catch (e) {}
    return { records: {}, days: [] };
  }
  function saveProgress() {
    try { localStorage.setItem(PKEY, JSON.stringify(progress)); } catch (e) {}
  }
  const progress = loadProgress();

  function isoDate(d) {
    const x = d ? new Date(d) : new Date();
    return x.getFullYear() + "-" + String(x.getMonth() + 1).padStart(2, "0") + "-" + String(x.getDate()).padStart(2, "0");
  }
  function touchDay() {
    const t = isoDate();
    if (!progress.days.includes(t)) { progress.days.push(t); }
  }
  function streak() {
    const set = new Set(progress.days);
    let d = new Date();
    if (!set.has(isoDate(d))) d.setDate(d.getDate() - 1);
    let n = 0;
    while (set.has(isoDate(d))) { n++; d.setDate(d.getDate() - 1); }
    return n;
  }
  function record(q, res) {
    const prev = progress.records[q.id];
    const merged = {
      done: true,
      correct: prev && prev.correct ? true : !!res.correct,
      score: res.score || 0,
      total: res.total || 0,
      productive: !!res.productive,
      ts: Date.now()
    };
    progress.records[q.id] = merged;
    touchDay();
    saveProgress();
  }
  function isDone(id) { return !!(progress.records[id] && progress.records[id].done); }
  function isRight(id) { return !!(progress.records[id] && progress.records[id].correct); }

  function statsFor(type) {
    const list = QS.filter(q => q.type === type);
    const done = list.filter(q => isDone(q.id));
    const right = list.filter(q => isRight(q.id));
    return { total: list.length, done: done.length, right: right.length };
  }
  function overall() {
    const attempted = QS.filter(q => isDone(q.id) && !(progress.records[q.id] || {}).productive);
    const right = attempted.filter(q => isRight(q.id));
    return {
      attempted: attempted.length,
      right: right.length,
      accuracy: attempted.length ? Math.round(right.length / attempted.length * 100) : 0,
      done: QS.filter(q => isDone(q.id)).length
    };
  }
  function nextDay() {
    for (const d of PLAN) {
      const list = QS.filter(q => d.types.includes(q.type));
      if (list.some(q => !isDone(q.id))) return d;
    }
    return PLAN[PLAN.length - 1];
  }
  function dayDone(d) {
    return QS.filter(q => d.types.includes(q.type)).every(q => isDone(q.id));
  }

  /* ---------------- utils ---------------- */
  const $ = sel => document.querySelector(sel);
  const app = $("#view");
  const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, m => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));
  const fmt = s => String(Math.max(0, Math.floor(s))).padStart(2, "0");
  function words(s) { return String(s || "").toLowerCase().replace(/[’']/g, "'").replace(/[^a-z0-9'\s]/g, " ").split(/\s+/).filter(Boolean); }
  function normWord(w) { return String(w).toLowerCase().replace(/[’']/g, "'").replace(/[^a-z0-9']/g, ""); }
  function lcsMatch(a, b) {
    const n = a.length, m = b.length;
    const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
    for (let i = 1; i <= n; i++) for (let j = 1; j <= m; j++) {
      dp[i][j] = a[i - 1] === b[j - 1] ? dp[i - 1][j - 1] + 1 : Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
    const set = new Set();
    let i = n, j = m;
    while (i > 0 && j > 0) {
      if (a[i - 1] === b[j - 1]) { set.add(i - 1); i--; j--; }
      else if (dp[i - 1][j] >= dp[i][j - 1]) i--; else j--;
    }
    return set;
  }
  function lcs(a, b) {
    const n = a.length, m = b.length;
    if (!n || !m) return 0;
    let prev = new Array(m + 1).fill(0), cur = new Array(m + 1).fill(0);
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= m; j++) {
        cur[j] = a[i - 1] === b[j - 1] ? prev[j - 1] + 1 : Math.max(prev[j], cur[j - 1]);
      }
      const t = prev; prev = cur; cur = t; cur.fill(0);
    }
    return prev[m];
  }
  function countWords(s) { return words(s).length; }
  function countSentences(s) { return (String(s).match(/[.!?]+(?=\s|$)/g) || []).length; }

  /* ---------------- speech ---------------- */
  let voices = [];
  function loadVoices() {
    if (!("speechSynthesis" in window)) return;
    voices = window.speechSynthesis.getVoices() || [];
  }
  if ("speechSynthesis" in window) {
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }
  function pickVoice() {
    return voices.find(v => /en[-_]US/i.test(v.lang)) || voices.find(v => /^en/i.test(v.lang)) || null;
  }
  function speakText(text, btn) {
    if (!("speechSynthesis" in window)) {
      alert("当前浏览器不支持语音播放，请使用 Chrome 或 Edge。");
      return;
    }
    window.speechSynthesis.cancel();
    const parts = String(text).split("||").map(s => s.trim()).filter(Boolean);
    const box = btn ? btn.closest(".audio-box") : null;
    if (btn) { btn.disabled = true; btn.dataset.old = btn.textContent; btn.textContent = "播放中…"; }
    if (box) box.querySelector(".wave")?.classList.add("playing");
    const done = () => {
      if (btn) { btn.disabled = false; btn.textContent = btn.dataset.old || "▶ 播放"; }
      if (box) box.querySelector(".wave")?.classList.remove("playing");
    };
    parts.forEach((p, i) => {
      const u = new SpeechSynthesisUtterance(p);
      u.lang = "en-US";
      u.rate = 0.92;
      const v = pickVoice();
      if (v) u.voice = v;
      if (i === parts.length - 1) { u.onend = done; u.onerror = done; }
      window.speechSynthesis.speak(u);
    });
  }

  /* ---------------- recording ---------------- */
  const rec = { media: null, chunks: [], stream: null, url: null };
  async function toggleRecord(btn) {
    if (rec.media && rec.media.state === "recording") { rec.media.stop(); return; }
    if (!navigator.mediaDevices || !window.MediaRecorder) {
      alert("当前浏览器不支持录音，可以直接练习，练完对照示范自评。");
      return;
    }
    try {
      rec.stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      rec.chunks = [];
      rec.media = new MediaRecorder(rec.stream);
      rec.media.ondataavailable = e => { if (e.data.size) rec.chunks.push(e.data); };
      rec.media.onstop = () => {
        const blob = new Blob(rec.chunks, { type: "audio/webm" });
        if (rec.url) URL.revokeObjectURL(rec.url);
        rec.url = URL.createObjectURL(blob);
        const holder = document.getElementById("rec-holder");
        if (holder) holder.innerHTML = '<audio controls src="' + rec.url + '"></audio>';
        if (btn) { btn.textContent = "● 重新录音"; btn.classList.remove("recording"); }
        rec.stream.getTracks().forEach(t => t.stop());
      };
      rec.media.start();
      if (btn) { btn.textContent = "■ 停止录音"; btn.classList.add("recording"); }
    } catch (e) {
      alert("没有拿到麦克风权限。可以继续用计时练习，最后对照示范自评。");
    }
  }

  /* ---------------- router ---------------- */
  const player = { queue: [], idx: 0, mode: "single", q: null, submitted: false, timer: null, remain: 0, phase: "", results: [] };

  window.addEventListener("hashchange", route);
  function route() {
    stopTimer();
    syncChrome();
    const raw = location.hash.replace(/^#\/?/, "");
    const [page, arg] = raw.split("/");
    if (page === "q" && arg && BY_ID[arg]) {
      startQueue([arg], "single");
    } else if (page === "today") {
      startQueue(todayQueue(), "today");
    } else if (page === "mock") {
      startQueue(mockQueue(), "mock");
    } else if (page === "practice") {
      renderPractice();
    } else if (page === "exam") {
      if (arg && examById(arg)) startExam(arg); else renderExamHome();
    } else if (page === "report") {
      renderReport(EXAM.last || lastMock());
    } else if (page === "progress") {
      renderProgress();
    } else {
      renderHome();
    }
  }
  function go(hash) { location.hash = hash; }
  function syncChrome() {
    const s = document.getElementById("streak");
    if (s) s.textContent = streak();
    let page = (location.hash.replace(/^#\/?/, "").split("/")[0]) || "home";
    if (page === "q" || page === "today" || page === "mock") page = "practice";
    if (page === "report") page = "exam";
    if (page === "day" || page === "weak") page = "progress";
    document.querySelectorAll("[data-nav]").forEach(a => a.classList.toggle("active", a.dataset.nav === page));
  }

  function todayQueue() {
    const d = nextDay();
    let ids = QS.filter(q => d.types.includes(q.type) && !isDone(q.id)).map(q => q.id);
    if (!ids.length) ids = QS.filter(q => d.types.includes(q.type)).map(q => q.id);
    return ids.slice(0, 4);
  }
  function mockQueue() {
    const auto = QS.filter(q => !["ra", "rs", "di", "rts", "swt", "we", "sst"].includes(q.type));
    const shuffled = auto.slice().sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 10).map(q => q.id);
  }

  /* ---------------- home ---------------- */
  function ringSVG(pct) {
    const r = 46, c = 2 * Math.PI * r, off = c * (1 - pct / 100);
    return '<svg width="128" height="128" viewBox="0 0 120 120">' +
      '<circle cx="60" cy="60" r="' + r + '" fill="none" stroke="rgba(255,255,255,.12)" stroke-width="9"/>' +
      '<circle cx="60" cy="60" r="' + r + '" fill="none" stroke="#6f8ff5" stroke-width="9" stroke-linecap="round" ' +
      'stroke-dasharray="' + c + '" stroke-dashoffset="' + off + '" transform="rotate(-90 60 60)"/>' +
      '<text x="60" y="58" text-anchor="middle" fill="#fff" font-size="26" font-weight="800">' + pct + '%</text>' +
      '<text x="60" y="78" text-anchor="middle" fill="#9db4f0" font-size="9" letter-spacing="2">READY</text></svg>';
  }

  function renderHome() {
    const o = overall();
    const coverage = Math.round(o.done / QS.length * 100);
    const nd = nextDay();
    const st = streak();
    const sections = SECTIONS.map(s => {
      const list = QS.filter(q => q.section === s.id);
      const done = list.filter(q => isDone(q.id)).length;
      return { ...s, total: list.length, done, pct: list.length ? Math.round(done / list.length * 100) : 0 };
    });

    let planHTML = "";
    PLAN.forEach(d => {
      const done = dayDone(d);
      const isToday = d.day === nd.day && !done;
      const count = QS.filter(q => d.types.includes(q.type)).length;
      planHTML += '<div class="day ' + (done ? "done" : "") + " " + (isToday ? "today" : "") + '" data-day="' + d.day + '">' +
        '<div class="day-top"><span class="day-num">DAY ' + d.day + "</span>" +
        (done ? '<span class="check">✓ 完成</span>' : '<span class="mini">' + count + " 题</span>") + "</div>" +
        "<h3>" + esc(d.title) + "</h3><p>" + esc(d.desc) + "</p></div>";
    });

    app.innerHTML =
      '<div class="container">' +
        '<section class="hero">' +
          "<div>" +
            '<div class="eyebrow">PTE Academic · 52 分冲刺</div>' +
            "<h1>8 天，把该拿的分拿到</h1>" +
            "<p>" + QS.length + " 道题，覆盖 19 种题型：RA、RS、DI、WFD、SWT、FIB，以及第 2 课 RS/ASQ 全部例题。做完立刻看解析。</p>" +
            '<div class="hero-actions">' +
              '<button class="btn btn-light" id="startToday">开始第 ' + nd.day + " 天练习 →</button>" +
              '<button class="btn btn-ghost" id="startExam" style="color:#fff;border-color:rgba(255,255,255,.25)">全真模考</button>' +
            "</div>" +
          "</div>" +
          '<div class="ring">' + ringSVG(coverage) + '<div class="ring-label">题库完成度</div></div>' +
        "</section>" +

        '<div class="stats">' +
          '<div class="stat accent"><b>' + o.done + "</b><span>已练题目</span></div>" +
          '<div class="stat"><b>' + o.accuracy + "%</b><span>自动批改正确率</span></div>" +
          '<div class="stat"><b>' + st + "</b><span>连续练习天数</span></div>" +
          '<div class="stat"><b>' + (QS.length - o.done) + "</b><span>还没练的题</span></div>" +
        "</div>" +

        '<div class="lesson-strip"><div><b>第 2 课 · RS + ASQ</b><span>PPT 里的 37 句 RS + 40 题 ASQ 已收录，一键练这一组。</span></div><button class="btn btn-primary" id="startL2">做这一组 →</button></div>' +

        '<div class="section-title"><h2>8 天路线</h2><span>每天 4 题，约 15 分钟；其余自由加练</span></div>' +
        '<div class="plan">' + planHTML + "</div>" +

        '<div class="section-title"><h2>按科目练</h2><span>每科只保留能提分的题</span></div>' +
        '<div class="section-cards">' + sections.map(s =>
          '<div class="section-card"><h3>' + s.name + " · " + s.en + "</h3><p>" + esc(s.tip) + "</p>" +
          '<div class="bar"><i style="width:' + s.pct + "%;background:" + s.color + '"></i></div>' +
          '<div class="pct">' + s.done + " / " + s.total + " 题 · " + s.pct + "%</div></div>").join("") +
        "</div>" +

        '<div class="section-title"><h2>52 分怎么来</h2><span>不追求全对，先把会做的做对</span></div>' +
        '<div class="grid">' +
          '<div class="card" style="cursor:default"><div class="type">策略 01</div><h3>抓大放小</h3><p style="font-size:13px;color:var(--muted)">RA / RS / DI / WFD 每天练；RL、RTS、SGD 认识即可，别平均用力。</p></div>' +
          '<div class="card" style="cursor:default"><div class="type">策略 02</div><h3>部分给分</h3><p style="font-size:13px;color:var(--muted)">FIB 每空 1 分，RO 每对 1 分，WFD 每词 1 分。写一半也有分。</p></div>' +
          '<div class="card" style="cursor:default"><div class="type">策略 03</div><h3>只有两处倒扣</h3><p style="font-size:13px;color:var(--muted)">多选和 HIW 错选 −1。其余题型猜了不亏，绝不空着。</p></div>' +
        "</div>" +
      "</div>";

    $("#startToday").onclick = () => go("#/today");
    $("#startExam").onclick = () => go("#/exam");
    $("#startL2").onclick = () => startQueue(L2_IDS, "l2");
    document.querySelectorAll(".day").forEach(el => {
      el.onclick = () => {
        const d = PLAN.find(x => x.day === Number(el.dataset.day));
        const ids = QS.filter(q => d.types.includes(q.type)).map(q => q.id).slice(0, 4);
        startQueue(ids, "day");
      };
    });
  }

  /* ---------------- practice ---------------- */
  const ui = { section: "all", type: "all" };

  function renderPractice() {
    const types = Object.keys(TYPE).filter(t => QS.some(q => q.type === t) && (ui.section === "all" || TYPE[t].sec === ui.section));
    const list = QS.filter(q =>
      (ui.section === "all" || q.section === ui.section) &&
      (ui.type === "all" || q.type === ui.type));

    const chips = '<button class="chip ' + (ui.section === "all" ? "active" : "") + '" data-sec="all">全部</button>' +
      SECTIONS.map(s => '<button class="chip ' + (ui.section === s.id ? "active" : "") + '" data-sec="' + s.id + '">' + s.name + "</button>").join("");

    const typeChips = '<button class="chip ' + (ui.type === "all" ? "active" : "") + '" data-type="all">所有题型</button>' +
      types.map(t => '<button class="chip ' + (ui.type === t ? "active" : "") + '" data-type="' + t + '">' + TYPE[t].name + "</button>").join("");

    const cards = list.map(q => {
      const done = isDone(q.id), right = isRight(q.id);
      const status = !done ? '<span class="status new">未练</span>'
        : right ? '<span class="status ok">✓ 已掌握</span>'
        : '<span class="status retry">再练一次</span>';
      return '<div class="card" data-q="' + q.id + '">' +
        '<div class="type">' + TYPE[q.type].label + " · " + TYPE[q.type].name + (q.lesson === "L2" ? ' · <span style="color:var(--blue)">第2课</span>' : "") + "</div>" +
        "<h3>" + esc(q.title) + "</h3>" +
        '<div class="meta"><span>' + Math.round(q.time / 60 * 10) / 10 + " 分钟</span><span>难度 " + "★".repeat(q.level || 1) + "</span></div>" +
        status + "</div>";
    }).join("");

    app.innerHTML = '<div class="container">' +
      '<div class="section-title" style="margin-top:0"><h2>题库练习</h2><span>' + list.length + " 道题 · 做完立即看解析</span></div>" +
      '<div class="filters">' + chips + "</div>" +
      '<div class="filters">' + typeChips + "</div>" +
      (list.length ? '<div class="grid">' + cards + "</div>" : '<div class="empty"><h3>这个筛选下还没有题</h3><p>换个题型试试。</p></div>') +
      '<p class="note">口语和写作题不自动打分：提交后会给出示范答案和自查清单，按清单自评即可。</p>' +
      "</div>";

    document.querySelectorAll("[data-sec]").forEach(el => el.onclick = () => { ui.section = el.dataset.sec; ui.type = "all"; renderPractice(); });
    document.querySelectorAll("[data-type]").forEach(el => el.onclick = () => { ui.type = el.dataset.type; renderPractice(); });
    document.querySelectorAll("[data-q]").forEach(el => el.onclick = () => go("#/q/" + el.dataset.q));
  }

  /* ---------------- progress ---------------- */
  function renderProgress() {
    const o = overall();
    const rows = Object.keys(TYPE).filter(t => QS.some(q => q.type === t)).map(t => {
      const s = statsFor(t);
      const acc = s.done ? Math.round(s.right / s.done * 100) : 0;
      return { t, ...s, acc };
    }).filter(r => r.total > 0 && r.done > 0);

    const weak = rows.filter(r => r.done >= 1 && r.acc < 60).sort((a, b) => a.acc - b.acc);

    app.innerHTML = '<div class="container">' +
      '<div class="section-title" style="margin-top:0"><h2>我的进度</h2><span>只统计自动批改的题</span></div>' +
      '<div class="stats">' +
        '<div class="stat accent"><b>' + o.done + "</b><span>完成题目</span></div>" +
        '<div class="stat"><b>' + o.accuracy + "%</b><span>正确率</span></div>" +
        '<div class="stat"><b>' + streak() + "</b><span>连续天数</span></div>" +
        '<div class="stat"><b>' + weak.length + "</b><span>薄弱题型</span></div>" +
      "</div>" +
      '<div class="section-title"><h2>各题型正确率</h2><span>低于 60% 的会标红</span></div>' +
      (rows.length ? '<div class="table-wrap"><table class="table"><thead><tr><th>题型</th><th>已练</th><th>正确率</th><th style="width:160px">进度</th></tr></thead><tbody>' +
      rows.map(r => '<tr><td><b>' + TYPE[r.t].name + "</b><br><span style='color:var(--faint);font-size:11px'>" + TYPE[r.t].label + "</span></td>" +
        "<td>" + r.done + " / " + r.total + "</td>" +
        '<td class="' + (r.done && r.acc < 60 ? "bad" : "") + '">' + (r.done ? r.acc + "%" : "—") + "</td>" +
        '<td><div class="bar"><i style="width:' + (r.done ? r.acc : 0) + "%;background:" + (r.acc < 60 ? "var(--coral)" : "var(--teal)") + '"></i></div></td></tr>').join("") +
      "</tbody></table></div>" : '<div class="empty" style="padding:36px 20px"><h3>还没有练习记录</h3><p>先从第 1 天开始，做 2 道题就会出现在这里。</p></div>') +
      (weak.length ? '<div class="section-title"><h2>下一步练这些</h2></div><div class="grid">' +
        weak.slice(0, 3).map(w => '<div class="card" data-weak="' + w.t + '"><div class="type">薄弱题型</div><h3>' + TYPE[w.t].name + "</h3>" +
          '<div class="meta"><span>正确率 ' + w.acc + "%</span></div><span class='status retry'>去练 3 题 →</span></div>").join("") + "</div>" : "") +
      '<div class="section-title"><h2>模考记录</h2><span>阅读 + 听力估分</span></div>' +
      (mockHistory().length ? '<div class="mock-history">' + mockHistory().map((r, i) =>
        '<div class="mock-row"><div><b>' + esc(r.name) + "</b><span>" + new Date(r.date).toLocaleDateString("zh-CN") + "</span></div>" +
        '<div class="mock-score">阅读 ' + (r.reading ? r.reading.scaled : "—") + " · 听力 " + (r.listening ? r.listening.scaled : "—") +
        ' · 总分 ' + (r.overall || "—") + "</div>" +
        '<button class="btn btn-ghost" data-mrep="' + i + '">看解析</button></div>').join("") + "</div>"
        : '<p class="note">还没有模考记录，去“模考”做一套。</p>') +
      '<div class="actions"><button class="btn btn-ghost" id="reset">清空进度</button></div>' +
      '<p class="note">数据只保存在这台设备的浏览器里，不会上传。</p>' +
      "</div>";

    document.querySelectorAll("[data-weak]").forEach(el => el.onclick = () => {
      const ids = QS.filter(q => q.type === el.dataset.weak).slice(0, 3).map(q => q.id);
      startQueue(ids, "weak");
    });
    document.querySelectorAll("[data-mrep]").forEach(el => el.onclick = () => {
      renderReport(mockHistory()[Number(el.dataset.mrep)]);
    });
    $("#reset").onclick = () => {
      if (confirm("确定清空所有练习记录？")) {
        localStorage.removeItem(PKEY);
        location.reload();
      }
    };
  }

  /* ---------------- player ---------------- */
  function startQueue(ids, mode) {
    player.queue = ids.slice();
    player.idx = 0;
    player.mode = mode;
    player.results = [];
    renderPlayer();
  }
  function stopTimer() {
    if (player.timer) { clearInterval(player.timer); player.timer = null; }
    if (typeof EXAM !== "undefined" && EXAM.timer) { clearInterval(EXAM.timer); EXAM.timer = null; }
  }
  function setTimerLabel(text, warn) {
    const el = $("#timer");
    if (!el) return;
    el.textContent = text;
    el.classList.toggle("warn", !!warn);
  }
  function startTimer() {
    stopTimer();
    const q = player.q;
    const two = ["ra", "di", "rts"].includes(q.type);
    player.phase = two ? "prep" : "work";
    player.remain = two ? q.prep || 25 : q.time || 60;
    tick();
    player.timer = setInterval(() => {
      player.remain--;
      tick();
      if (player.remain <= 0) {
        if (two && player.phase === "prep") {
          player.phase = "speak";
          player.remain = q.speak || 40;
          tick();
        } else {
          stopTimer();
          timeUp();
        }
      }
    }, 1000);
  }
  function tick() {
    const two = player.phase === "prep" || player.phase === "speak";
    const label = player.phase === "prep" ? "准备 " : player.phase === "speak" ? "作答 " : "";
    setTimerLabel((two ? label : "") + fmt(player.remain / 60) + ":" + fmt(player.remain % 60), player.remain <= 10);
  }
  function timeUp() {
    if (player.submitted) return;
    const el = $("#timer");
    if (el) el.textContent = "时间到";
    const btn = $("#submitBtn");
    if (btn) submit(true);
    else revealOnly();
  }

  function renderPlayer() {
    stopTimer();
    if (player.idx >= player.queue.length) { renderSummary(); return; }
    const q = BY_ID[player.queue[player.idx]];
    player.q = q;
    player.submitted = false;
    const total = player.queue.length;
    const type = TYPE[q.type];

    app.innerHTML = '<div class="container"><div class="player-wrap">' +
      '<div class="player-top">' +
        '<a class="back" href="#/practice">← 返回题库</a>' +
        '<span class="pill">' + type.name + "</span>" +
        '<span style="font-size:12px;color:var(--faint)">' + (player.idx + 1) + " / " + total + "</span>" +
        '<div class="timer" id="timer">--:--</div>' +
      "</div>" +
      '<div class="q-card">' +
        "<h1>" + esc(q.title) + "</h1>" +
        '<p class="q-instruction">' + esc(q.instruction) + "</p>" +
        '<div id="qbody">' + bodyHTML(q) + "</div>" +
        '<div id="feedback"></div>' +
        '<div class="actions" id="actions">' +
          '<button class="btn btn-primary" id="submitBtn">提交答案</button>' +
          '<button class="btn btn-ghost" id="revealBtn" style="display:none">查看示范</button>' +
          '<div class="spacer"></div>' +
          '<button class="btn btn-ghost" id="nextBtn" style="display:none">下一题 →</button>' +
        "</div>" +
      "</div></div></div>";

    bind(q);
    if (q.type === "ra" || q.type === "di" || q.type === "rts") {
      $("#revealBtn").style.display = "none";
    }
    $("#submitBtn").onclick = () => submit(false);
    $("#nextBtn").onclick = () => {
      if (player.mode === "single") { location.hash = "#/practice"; return; }
      player.idx++; renderPlayer();
    };
    startTimer();
    if (q.type === "wfd" || q.type === "sst" || q.type === "fib-l" || q.type === "rs" || q.type === "asq") {
      setTimeout(() => { const b = document.querySelector("[data-play]"); if (b) b.click(); }, 350);
    }
  }

  function bodyHTML(q) {
    switch (q.type) {
      case "mcq-s":
      case "mcq-m": {
        const multi = q.type === "mcq-m";
        return (q.content ? '<div class="passage fit">' + esc(q.content) + "</div>" : "") +
          '<p class="question-line">' + esc(q.question) + "</p>" +
          '<div class="options" id="options">' + q.options.map((o, i) =>
            '<label class="opt" data-i="' + i + '"><input type="' + (multi ? "checkbox" : "radio") + '" name="opt" value="' + i + '"><span>' + esc(o) + "</span></label>").join("") + "</div>" +
          (multi ? '<p class="note">多选：对 +1，错 −1，最低 0 分。只选有原文依据的。</p>' : "");
      }
      case "fib-rw": {
        const parts = q.content.split(/\[\[(\d+)\]\]/);
        let html = '<div class="passage">';
        parts.forEach((p, i) => {
          if (i % 2 === 1) {
            const bi = Number(p) - 1;
            html += '<select data-blank="' + bi + '" style="margin:0 4px"><option value="">选择</option>' +
              q.blanks[bi].options.map((o, oi) => '<option value="' + oi + '">' + esc(o) + "</option>").join("") + "</select>";
          } else html += esc(p);
        });
        return html + "</div>";
      }
      case "fib-r": {
        const parts = q.content.split(/\[\[(\d+)\]\]/);
        let html = '<div class="passage">';
        parts.forEach((p, i) => {
          if (i % 2 === 1) {
            const bi = Number(p) - 1;
            html += '<select data-fr="' + bi + '" style="margin:0 4px"><option value="">选择</option>' +
              q.bank.map(w => '<option>' + esc(w) + "</option>").join("") + "</select>";
          } else html += esc(p);
        });
        return html + "</div>" +
          '<p class="note">词库里有干扰项：先按词性排除，再看搭配。</p>';
      }
      case "ro": {
        return '<div class="order-box" id="orderBox"><div class="empty-hint">按顺序点击下面的句子</div></div>' +
          '<div class="order-area" id="orderArea">' + q.sentences.map((s, i) =>
            '<div class="sent" data-s="' + i + '"><span class="n">' + String.fromCharCode(65 + i) + "</span><span>" + esc(s) + "</span></div>").join("") + "</div>" +
          '<p class="note">按相邻对给分：连对 1 对得 1 分，不需要全排对。</p>';
      }
      case "hiw": {
        return '<div class="audio-box"><div class="wave"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>' +
          '<button class="btn btn-primary" data-play>▶ 播放录音</button><span class="label">文本与音频不一致，点出被改掉的词</span></div>' +
          '<div class="words" id="words">' + q.content.split(/\s+/).map((w, i) =>
            '<span data-w="' + i + '">' + esc(w) + "</span>").join(" ") + "</div>" +
          '<p class="note">只点 100% 确定的；错点 −1。</p>';
      }
      case "asq": {
        return '<div class="audio-box"><div class="wave"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>' +
          '<button class="btn btn-primary" data-play>▶ 播放问题</button><span class="label">10 秒内作答，一个词就够</span></div>' +
          '<input type="text" id="asqInput" placeholder="输入答案" autocomplete="off" style="width:260px">';
      }
      case "wfd": {
        const sents = q.audio.split("||");
        return sents.map((s, i) =>
          '<div class="blank-row" style="align-items:flex-start;margin-bottom:14px">' +
            '<span class="idx">' + (i + 1) + "</span>" +
            '<button class="btn btn-ghost" data-play="' + i + '" style="padding:8px 14px">▶</button>' +
            '<textarea data-wfd="' + i + '" style="min-height:64px" placeholder="听完这一句再打"></textarea>' +
          "</div>").join("") +
          '<p class="note">每个正确单词 1 分；拼写错误算错。写半句也有分。</p>';
      }
      case "sst": {
        return '<div class="audio-box"><div class="wave"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>' +
          '<button class="btn btn-primary" data-play>▶ 播放讲座</button><span class="label">10 分钟，50–70 词</span></div>' +
          '<textarea id="sstText" class="tall" placeholder="The lecture discusses … First … In conclusion …"></textarea>' +
          '<div class="wordcount" id="wc"></div>';
      }
      case "swt": {
        return '<div class="passage">' + esc(q.content) + "</div>" +
          '<textarea id="swtText" placeholder="用一句话概括（5–75 词），只能有一个句号"></textarea><div class="wordcount" id="wc"></div>';
      }
      case "we": {
        return '<div class="passage">' + esc(q.content) + "</div>" +
          '<details style="margin:14px 0"><summary style="cursor:pointer;font-size:13px;color:var(--muted)">看提纲（先自己想，再展开）</summary><ul style="font-size:13px;color:var(--muted)">' +
          q.outline.map(o => "<li>" + esc(o) + "</li>").join("") + "</ul></details>" +
          '<textarea id="weText" class="tall" placeholder="四段：观点 / 理由 1 / 理由 2 / 结论"></textarea><div class="wordcount" id="wc"></div>';
      }
      case "ra": {
        return '<div class="passage">' + esc(q.content) + "</div>" +
          '<div class="actions"><button class="btn btn-ghost" id="recBtn">● 开始录音</button><span class="note" style="margin:0">先准备 30 秒，再朗读 40 秒</span></div>' +
          '<div id="rec-holder" style="margin-top:12px"></div>';
      }
      case "di": {
        return '<div style="background:var(--paper);border-radius:12px;padding:12px">' + chartSVG(q.chart) + "</div>" +
          '<div class="actions"><button class="btn btn-ghost" id="recBtn">● 开始录音</button><span class="note" style="margin:0">25 秒准备，40 秒作答</span></div>' +
          '<div id="rec-holder" style="margin-top:12px"></div>';
      }
      case "rs": {
        return '<div class="audio-box"><div class="wave"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>' +
          '<button class="btn btn-primary" data-play>▶ 播放 5 句</button><span class="label">每句听完立刻复述</span></div>' +
          '<div class="actions"><button class="btn btn-ghost" id="recBtn">● 开始录音</button></div><div id="rec-holder" style="margin-top:12px"></div>' +
          '<p class="note">复述完再看示范：先按记忆说，再看漏了哪块。</p>';
      }
      case "rts": {
        return '<div class="passage">' + esc(q.content) + "</div>" +
          '<div class="actions"><button class="btn btn-ghost" id="recBtn">● 开始录音</button><span class="note" style="margin:0">10 秒准备，40 秒作答</span></div>' +
          '<div id="rec-holder" style="margin-top:12px"></div>';
      }
      case "fib-l": {
        const parts = q.content.split(/\[\[(\d+)\]\]/);
        let html = '<div class="audio-box"><div class="wave"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>' +
          '<button class="btn btn-primary" data-play>▶ 播放录音</button><span class="label">音频只放一遍（可重播练习）</span></div><div class="passage">';
        parts.forEach((p, i) => {
          if (i % 2 === 1) html += '<input type="text" data-lblank="' + (Number(p) - 1) + '" style="width:150px;margin:0 4px" autocomplete="off">';
          else html += esc(p);
        });
        return html + "</div>";
      }
      case "mcq-l":
      case "hcs":
      case "smw": {
        const multi = !!q.multi;
        const label = q.type === "hcs" ? "▶ 播放讲座" : q.type === "smw" ? "▶ 播放（最后一句缺失）" : "▶ 播放录音";
        return '<div class="audio-box"><div class="wave"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>' +
          '<button class="btn btn-primary" data-play>' + label + '</button>' +
          '<span class="label">音频只放一遍</span></div>' +
          (q.question ? '<p class="question-line">' + esc(q.question) + "</p>" : "") +
          '<div class="options" id="options">' + q.options.map((o, i) =>
            '<label class="opt" data-i="' + i + '"><input type="' + (multi ? "checkbox" : "radio") +
            '" name="opt" value="' + i + '"><span>' + esc(o) + "</span></label>").join("") + "</div>";
      }
      default: return "";
    }
  }

  function chartSVG(c) {
    const w = 640, h = 280, pad = { l: 46, r: 16, t: 24, b: 36 };
    const max = Math.max.apply(null, c.values) * 1.18;
    const iw = w - pad.l - pad.r, ih = h - pad.t - pad.b;
    const n = c.values.length;
    let g = '<svg viewBox="0 0 ' + w + " " + h + '" style="width:100%;height:auto">';
    g += '<text x="' + pad.l + '" y="16" font-size="12" fill="#6b7c90">' + esc(c.title) + "</text>";
    for (let i = 0; i <= 4; i++) {
      const y = pad.t + ih * i / 4;
      g += '<line x1="' + pad.l + '" y1="' + y + '" x2="' + (w - pad.r) + '" y2="' + y + '" stroke="#e6ecf5" stroke-width="1"/>';
      g += '<text x="' + (pad.l - 8) + '" y="' + (y + 4) + '" text-anchor="end" font-size="10" fill="#9aa8b7">' + Math.round(max * (4 - i) / 4) + "</text>";
    }
    if (c.type === "line") {
      let pts = [];
      c.values.forEach((v, i) => {
        const x = pad.l + iw * (i + 0.5) / n;
        const y = pad.t + ih * (1 - v / max);
        pts.push(x + "," + y);
        g += '<circle cx="' + x + '" cy="' + y + '" r="4" fill="#2f5fe0"/>';
        g += '<text x="' + x + '" y="' + (y - 10) + '" text-anchor="middle" font-size="11" fill="#0f1b2a">' + v + "</text>";
        g += '<text x="' + x + '" y="' + (h - 12) + '" text-anchor="middle" font-size="11" fill="#6b7c90">' + esc(c.labels[i]) + "</text>";
      });
      g += '<polyline points="' + pts.join(" ") + '" fill="none" stroke="#2f5fe0" stroke-width="2.5" stroke-linejoin="round"/>';
    } else {
      const bw = iw / n * 0.52;
      c.values.forEach((v, i) => {
        const x = pad.l + iw * (i + 0.5) / n - bw / 2;
        const y = pad.t + ih * (1 - v / max);
        g += '<rect x="' + x + '" y="' + y + '" width="' + bw + '" height="' + (pad.t + ih - y) + '" rx="4" fill="#2f5fe0"/>';
        g += '<text x="' + (x + bw / 2) + '" y="' + (y - 8) + '" text-anchor="middle" font-size="11" fill="#0f1b2a">' + v + "</text>";
        g += '<text x="' + (x + bw / 2) + '" y="' + (h - 12) + '" text-anchor="middle" font-size="11" fill="#6b7c90">' + esc(c.labels[i]) + "</text>";
      });
    }
    g += "</svg>";
    return g;
  }

  function bind(q) {
    document.querySelectorAll("[data-play]").forEach(btn => {
      btn.onclick = () => {
        let text = q.audio;
        const idx = btn.dataset.play;
        if (idx !== undefined && idx !== "" && q.type === "wfd") {
          text = q.audio.split("||")[Number(idx)];
        }
        speakText(text, btn);
      };
    });
    const recBtn = document.getElementById("recBtn");
    if (recBtn) recBtn.onclick = () => toggleRecord(recBtn);

    if (q.type === "ro") {
      const box = $("#orderBox"), area = $("#orderArea");
      let order = [];
      const render = () => {
        if (!order.length) box.innerHTML = '<div class="empty-hint">按顺序点击下面的句子</div>';
        else box.innerHTML = order.map(i => '<div class="sent" data-o="' + i + '"><span class="n">' + (order.indexOf(i) + 1) + '</span><span>' + esc(q.sentences[i]) + "</span></div>").join("");
        area.querySelectorAll(".sent").forEach(el => el.classList.toggle("used", order.includes(Number(el.dataset.s))));
        box.querySelectorAll("[data-o]").forEach(el => el.onclick = () => { order = order.filter(x => x !== Number(el.dataset.o)); render(); });
      };
      area.querySelectorAll(".sent").forEach(el => el.onclick = () => { if (!order.includes(Number(el.dataset.s))) { order.push(Number(el.dataset.s)); render(); } });
      area._getOrder = () => order;
    }
    if (q.type === "hiw") {
      document.querySelectorAll("#words span").forEach(el => el.onclick = () => el.classList.toggle("picked"));
    }
    if (["swt", "we", "sst"].includes(q.type)) {
      const ta = document.querySelector("textarea");
      const wc = $("#wc");
      const upd = () => {
        const n = countWords(ta.value);
        let html = "字数 <b>" + n + "</b>";
        if (q.type === "swt") html += " · 句号数 <b class='" + (countSentences(ta.value) === 1 ? "good" : "bad") + "'>" + countSentences(ta.value) + "</b>（只能 1 个）";
        if (q.type === "we") html += " · 目标 <b>200–300</b>";
        if (q.type === "sst") html += " · 目标 <b>50–70</b>";
        wc.innerHTML = html;
      };
      ta.addEventListener("input", upd);
      upd();
    }
  }

  function getAnswer(q) {
    switch (q.type) {
      case "mcq-s": {
        const el = document.querySelector('input[name="opt"]:checked');
        return el ? Number(el.value) : null;
      }
      case "mcq-m": {
        return Array.from(document.querySelectorAll('input[name="opt"]:checked')).map(el => Number(el.value));
      }
      case "fib-rw": {
        return q.blanks.map((_, i) => {
          const el = document.querySelector('[data-blank="' + i + '"]');
          return el && el.value !== "" ? Number(el.value) : null;
        });
      }
      case "fib-r": {
        return q.blanks.map((_, i) => {
          const el = document.querySelector('[data-fr="' + i + '"]');
          return el && el.value ? el.value : null;
        });
      }
      case "ro": {
        return Array.from(document.querySelectorAll("#orderBox [data-o]")).map(el => Number(el.dataset.o));
      }
      case "hiw": return Array.from(document.querySelectorAll("#words span.picked")).map(el => Number(el.dataset.w));
      case "asq": {
        const el = $("#asqInput");
        return el ? el.value : "";
      }
      case "wfd": return q.answers.map((_, i) => {
        const el = document.querySelector('[data-wfd="' + i + '"]');
        return el ? el.value : "";
      });
      case "sst": return $("#sstText") ? $("#sstText").value : "";
      case "swt": return $("#swtText") ? $("#swtText").value : "";
      case "we": return $("#weText") ? $("#weText").value : "";
      case "fib-l": {
        return q.answers.map((_, i) => {
          const el = document.querySelector('[data-lblank="' + i + '"]');
          return el ? el.value : "";
        });
      }
      case "mcq-l": {
        if (q.multi) {
          return Array.from(document.querySelectorAll('input[name="opt"]:checked')).map(el => Number(el.value));
        }
        const el = document.querySelector('input[name="opt"]:checked');
        return el ? Number(el.value) : null;
      }
      case "hcs":
      case "smw": {
        const el = document.querySelector('input[name="opt"]:checked');
        return el ? Number(el.value) : null;
      }
      default: return null;
    }
  }

  function score(q, a) {
    switch (q.type) {
      case "mcq-s":
        return { score: a === q.answer ? 1 : 0, total: 1, correct: a === q.answer };
      case "mcq-m": {
        const arr = a || [];
        let s = 0;
        arr.forEach(i => { s += q.answer.includes(i) ? 1 : -1; });
        s = Math.max(0, s);
        const correct = q.answer.length === arr.length && q.answer.every(i => arr.includes(i));
        return { score: s, total: q.answer.length, correct };
      }
      case "fib-rw": {
        const arr = a || [];
        let s = 0;
        q.blanks.forEach((b, i) => { if (arr[i] === b.answer) s++; });
        return { score: s, total: q.blanks.length, correct: s === q.blanks.length };
      }
      case "fib-r": {
        const arr = a || [];
        let s = 0;
        q.blanks.forEach((b, i) => {
          if (words(b.answer).join(" ") === words(arr[i] || "").join(" ")) s++;
        });
        return { score: s, total: q.blanks.length, correct: s === q.blanks.length };
      }
      case "fib-l": {
        const arr = a || [];
        let s = 0;
        q.answers.forEach((acc, i) => {
          if (acc.some(x => words(x).join(" ") === words(arr[i] || "").join(" "))) s++;
        });
        return { score: s, total: q.answers.length, correct: s === q.answers.length };
      }
      case "ro": {
        const order = a || [];
        let pair = 0;
        for (let i = 0; i < q.answer.length - 1; i++) {
          const x = q.answer[i], y = q.answer[i + 1];
          for (let j = 0; j < order.length - 1; j++) {
            if (order[j] === x && order[j + 1] === y) { pair++; break; }
          }
        }
        return { score: pair, total: q.answer.length - 1, correct: pair === q.answer.length - 1 && order.length === q.answer.length };
      }
      case "hiw": {
        const wrong = new Set(q.wrong);
        const arr = a || [];
        let s = 0;
        arr.forEach(i => { s += wrong.has(i) ? 1 : -1; });
        s = Math.max(0, s);
        const correct = arr.length === q.wrong.length && q.wrong.every(i => arr.includes(i));
        return { score: s, total: q.wrong.length, correct };
      }
      case "asq": {
        const ok = (q.answers || []).some(x => words(x).join(" ") === words(a).join(" "));
        return { score: ok ? 1 : 0, total: 1, correct: ok };
      }
      case "wfd": {
        const arr = a || [];
        let s = 0, t = 0;
        q.answers.forEach((ans, i) => {
          const aw = words(ans), sw = words(arr[i] || "");
          t += aw.length;
          s += lcs(aw, sw);
        });
        return { score: s, total: t, correct: s === t };
      }
      case "mcq-l": {
        if (!q.multi) {
          return { score: a === q.answer ? 1 : 0, total: 1, correct: a === q.answer };
        }
        const arr = a || [];
        let s = 0;
        arr.forEach(i => { s += q.answer.includes(i) ? 1 : -1; });
        s = Math.max(0, s);
        const right = q.answer.length === arr.length && q.answer.every(i => arr.includes(i));
        return { score: s, total: q.answer.length, correct: right };
      }
      case "hcs":
      case "smw":
        return { score: a === q.answer ? 1 : 0, total: 1, correct: a === q.answer };
      default:
        return { productive: true, done: true };
    }
  }

  function submit(auto) {
    if (player.submitted) return;
    const q = player.q;
    const a = getAnswer(q);
    const res = score(q, a);

    if (!res.productive) {
      const missing = q.type === "mcq-s" ? a === null
        : q.type === "mcq-m" ? !a.length
        : q.type === "ro" ? a.length !== q.answer.length
        : q.type === "asq" ? !String(a).trim()
        : q.type === "hiw" ? !a.length
        : q.type === "wfd" ? !a.some(x => String(x).trim())
        : q.type === "fib-l" ? !a.some(x => String(x).trim())
        : (a || []).some(x => x === null);
      if (missing && !auto) { alert("还有没作答的部分，先做完再提交。"); return; }
    }

    player.submitted = true;
    stopTimer();
    setTimerLabel("已提交", false);
    document.querySelectorAll(".opt input, select, textarea, input[type=text]").forEach(el => { el.disabled = true; });
    record(q, res);
    const fb = $("#feedback");
    fb.innerHTML = feedbackHTML(q, res, a);
    $("#submitBtn").style.display = "none";
    $("#revealBtn").style.display = "none";
    $("#nextBtn").style.display = "inline-flex";
    $("#nextBtn").textContent = player.idx + 1 < player.queue.length ? "下一题 →" : (player.mode === "single" ? "完成，返回题库" : "查看本组结果 →");
    player.results.push({ id: q.id, res });
    if (res.productive) {
      const self = document.getElementById("selfOk");
      if (self) self.onclick = () => {
        progress.records[q.id].correct = true;
        saveProgress();
        self.textContent = "✓ 已标记达标";
        self.disabled = true;
      };
    }
    const card = document.querySelector(".q-card");
    if (card) card.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function revealOnly() {
    const q = player.q;
    if (!q) return;
    const fb = $("#feedback");
    fb.innerHTML = feedbackHTML(q, { productive: true }, null);
    $("#submitBtn").style.display = "none";
  }

  function feedbackHTML(q, res, a) {
    if (res.productive) {
      return '<div class="feedback ok"><div class="fb-head">✓ 已提交 · 对照示范自评</div><div class="fb-body">' +
        (q.model ? '<div><h4>示范 / 参考</h4><div class="model">' + esc(q.model) + "</div></div>" : "") +
        (q.checklist ? '<div><h4>自查清单</h4><div class="checklist">' +
          q.checklist.map(c => "<label><input type='checkbox'> " + esc(c) + "</label>").join("") + "</div></div>" : "") +
        '<div class="fb-tip">52 分提示：' + esc(q.tip || "") + "</div>" +
        '<div><button class="btn btn-ghost" id="selfOk">标记为达标</button></div>' +
        "</div></div>";
    }

    const pct = res.total ? res.score / res.total : 0;
    const ok = res.correct;
    let detail = "";
    if (q.type === "mcq-s" || q.type === "mcq-m") {
      document.querySelectorAll("#options .opt").forEach(el => {
        const i = Number(el.dataset.i);
        const isAns = Array.isArray(q.answer) ? q.answer.includes(i) : q.answer === i;
        const picked = Array.isArray(a) ? a.includes(i) : a === i;
        el.classList.toggle("right", isAns);
        el.classList.toggle("wrong", picked && !isAns);
        const tag = document.createElement("span");
        tag.className = "tag " + (isAns ? "ok" : "no");
        tag.textContent = isAns ? "正确答案" : (picked ? "你选的" : "");
        if (tag.textContent) el.appendChild(tag);
      });
    }
    if (q.type === "fib-rw") {
      detail = '<div class="model">' + q.blanks.map((b, i) =>
        "第 " + (i + 1) + " 空：" + esc(b.options[b.answer])).join("<br>") + "</div>";
    }
    if (q.type === "fib-l") {
      detail = '<div class="model">' + q.answers.map((acc, i) => "第 " + (i + 1) + " 空：" + esc(acc[0])).join("<br>") + "</div>";
    }
    if (q.type === "ro") {
      detail = '<div class="model">正确顺序：' + q.answer.map(i => String.fromCharCode(65 + i)).join(" → ") + "</div>";
    }
    if (q.type === "asq") {
      detail = '<div class="model">参考答案：' + esc(q.answers[0]) + "</div>";
    }
    if (q.type === "wfd") {
      detail = q.answers.map((ans, i) => {
        const disp = ans.split(/\s+/);
        const aw = disp.map(normWord);
        const sw = String((a && a[i]) || "").split(/\s+/).map(normWord).filter(Boolean);
        const hit = lcsMatch(aw, sw);
        const marks = disp.map((w, idx) =>
          hit.has(idx) ? '<span style="color:#0e8f80">' + esc(w) + "</span>"
                       : '<span style="color:#d9482a;text-decoration:underline">' + esc(w) + "</span>");
        return '<div class="model" style="margin-bottom:8px"><b>第 ' + (i + 1) + " 句</b><br>" + marks.join(" ") + "</div>";
      }).join("");
    }
    if (q.type === "hiw") {
      const picked = new Set(a || []), wrong = new Set(q.wrong);
      const all = q.content.split(/\s+/);
      detail = '<div class="model">应点：' + q.wrong.map(i => esc(all[i])).join("、") +
        (a && a.length ? "；你点了：" + a.map(i => esc(all[i])).join("、") : "") + "</div>";
    }

    return '<div class="feedback ' + (ok ? "ok" : "bad") + '">' +
      '<div class="fb-head">' + (ok ? "✓ 全对" : pct >= 0.5 ? "△ 部分正确" : "✗ 再练一次") +
      '<span class="score">得分 ' + res.score + " / " + res.total + "</span></div>" +
      '<div class="fb-body">' +
        (detail ? "<div>" + detail + "</div>" : "") +
        '<div><h4>解析</h4><p>' + esc(q.explanation) + "</p></div>" +
        '<div class="fb-tip">52 分提示：' + esc(q.tip) + "</div>" +
        (q.model ? '<div><h4>示范</h4><div class="model">' + esc(q.model) + "</div></div>" : "") +
      "</div></div>";
  }

  function renderSummary() {
    stopTimer();
    const auto = player.results.filter(r => !r.res.productive);
    const score = auto.reduce((s, r) => s + r.res.score, 0);
    const total = auto.reduce((s, r) => s + r.res.total, 0);
    const right = player.results.filter(r => r.res.correct).length;
    app.innerHTML = '<div class="container"><div class="summary">' +
      '<div class="eyebrow" style="color:var(--blue)">' + (player.mode === "mock" ? "10 题小测" : "本组练习") + "完成</div>" +
      '<div class="big">' + score + " <small>/ " + total + " 分</small></div>" +
      "<p>共 " + player.results.length + " 题，" + right + " 题完全正确。错题已记入进度表。</p>" +
      '<div class="result-list">' + player.results.map(r => {
        const q = BY_ID[r.id];
        return '<div class="result-row ' + (r.res.correct ? "ok" : "no") + '"><span class="t">' + TYPE[q.type].name + "</span><span>" + esc(q.title) +
          '</span><span class="s">' + (r.res.productive ? "自评" : r.res.score + "/" + r.res.total) + "</span></div>";
      }).join("") + "</div>" +
      '<div class="actions" style="justify-content:center">' +
        '<a class="btn btn-primary" href="#/today">再练一组</a>' +
        '<a class="btn btn-ghost" href="#/practice">返回题库</a>' +
      "</div></div></div>";
  }


  /* ---------------- mock exam ---------------- */
  const EXAM = { set: null, si: 0, qi: 0, answers: {}, timer: null, remain: 0, results: null, last: null };
  const MKEY = "pte52.mocks.v1";

  function examById(id) { return (window.MOCKS || []).find(m => m.id === id) || null; }
  function mockHistory() {
    try { return JSON.parse(localStorage.getItem(MKEY)) || []; } catch (e) { return []; }
  }
  function saveMock(rec) {
    const h = mockHistory();
    h.unshift(rec);
    try { localStorage.setItem(MKEY, JSON.stringify(h.slice(0, 12))); } catch (e) {}
  }
  function lastMock() { return mockHistory()[0] || null; }

  function renderExamHome() {
    const mocks = window.MOCKS || [];
    const hist = mockHistory();
    const cards = mocks.map(m => {
      const qn = m.sections.reduce((n, x) => n + x.qids.length, 0);
      const mins = Math.round(m.sections.reduce((n, x) => n + x.time, 0) / 60);
      return '<div class="exam-card" data-ex="' + m.id + '">' +
        '<div class="exam-tag">' + esc(m.tag) + "</div>" +
        "<h3>" + esc(m.name) + "</h3>" +
        '<p>' + esc(m.desc) + "</p>" +
        '<div class="exam-meta"><span>' + qn + " 题</span><span>" + mins + " 分钟</span><span>阅读 + 听力</span></div>" +
        '<span class="exam-go">开始模考 →</span></div>';
    }).join("");

    const histHTML = hist.length ? hist.map((r, i) =>
      '<div class="mock-row"><div><b>' + esc(r.name) + "</b><span>" + new Date(r.date).toLocaleDateString("zh-CN") + "</span></div>" +
      '<div class="mock-score">阅读 ' + (r.reading ? r.reading.scaled : "—") + " · 听力 " + (r.listening ? r.listening.scaled : "—") +
      ' · 总分 ' + (r.overall || "—") + "</div>" +
      '<button class="btn btn-ghost" data-rep="' + i + '">看解析</button></div>').join("")
      : '<p class="note">还没有模考记录。完成一套后，这里会显示分数和解析入口。</p>';

    app.innerHTML = '<div class="container">' +
      '<section class="exam-hero"><div class="eyebrow">MOCK TEST</div>' +
      "<h1>全真模考：阅读 + 听力</h1>" +
      "<p>完整版按真实题量组卷：阅读 14 题 / 29 分钟，听力 17 题 / 35 分钟，不可回看；交卷后给估分和逐题解析。</p>" +
      '<div class="exam-hero-tags"><span>4 套题</span><span>31 题完整版</span><span>自动评分 + 解析</span></div></section>' +
      '<div class="section-title"><h2>选择一套</h2><span>完整版考前 2 周做；迷你卷用于日常</span></div>' +
      '<div class="exam-grid">' + cards + "</div>" +
      '<div class="section-title"><h2>考试规则</h2></div>' +
      '<div class="exam-rules">' +
        '<div><b>1</b><p>每节独立计时，时间到自动交卷。</p></div>' +
        '<div><b>2</b><p>不可回看：点了“下一题”就不能改。</p></div>' +
        '<div><b>3</b><p>听力音频只放一遍，可以点播放。</p></div>' +
        '<div><b>4</b><p>交卷后给估分与逐题解析，不提供即时对错。</p></div>' +
      "</div>" +
      '<div class="section-title"><h2>历史记录</h2></div><div class="mock-history">' + histHTML + "</div>" +
      '<p class="note">估分公式：10 + 正确率 × 80，仅用于练习定位，不是官方 PTE 成绩。</p>' +
      "</div>";

    document.querySelectorAll("[data-ex]").forEach(el => el.onclick = () => go("#/exam/" + el.dataset.ex));
    document.querySelectorAll("[data-rep]").forEach(el => el.onclick = () => renderReport(hist[Number(el.dataset.rep)]));
  }

  function startExam(id) {
    const set = examById(id);
    if (!set) { go("#/exam"); return; }
    EXAM.set = set; EXAM.si = 0; EXAM.qi = 0; EXAM.answers = {}; EXAM.results = null;
    stopTimer();
    renderExamIntro();
  }

  function renderExamIntro() {
    const set = EXAM.set, sec = set.sections[EXAM.si];
    const mins = Math.round(sec.time / 60);
    app.innerHTML = '<div class="container"><div class="exam-intro">' +
      '<div class="eyebrow">' + esc(set.name) + "</div>" +
      "<h1>" + esc(sec.name) + "部分</h1>" +
      '<p class="exam-sub">' + sec.qids.length + " 题 · " + mins + " 分钟 · 不可回看</p>" +
      '<div class="exam-intro-list">' +
        "<p>· 计时开始后不暂停；时间到自动交卷。</p>" +
        "<p>· 每题只能提交一次，点了“下一题”不能返回。</p>" +
        "<p>· 听力题可以点播放，但建议只放一遍。</p>" +
        "<p>· 交卷前不显示对错。</p>" +
      "</div>" +
      '<button class="btn btn-primary" id="exStart">开始' + esc(sec.name) + " →</button>" +
      "</div></div>";
    $("#exStart").onclick = () => startExamSection();
  }

  function startExamSection() {
    const sec = EXAM.set.sections[EXAM.si];
    EXAM.qi = 0;
    EXAM.remain = sec.time;
    renderExamQuestion();
    stopTimer();
    EXAM.timer = setInterval(() => {
      EXAM.remain--;
      updateExamTimer();
      if (EXAM.remain <= 0) {
        stopTimer();
        submitExamSection(true);
      }
    }, 1000);
  }

  function updateExamTimer() {
    const el = $("#exTimer");
    if (!el) return;
    el.textContent = fmt(EXAM.remain / 60) + ":" + fmt(EXAM.remain % 60);
    el.classList.toggle("warn", EXAM.remain <= 60);
  }

  function renderExamQuestion() {
    const set = EXAM.set, sec = set.sections[EXAM.si];
    const q = BY_ID[sec.qids[EXAM.qi]];
    const n = sec.qids.length;
    app.innerHTML = '<div class="container"><div class="exam-wrap">' +
      '<div class="exam-top"><span class="pill">' + esc(set.name) + "</span>" +
        '<span class="exam-sec">' + esc(sec.name) + "</span>" +
        '<span class="exam-count">' + (EXAM.qi + 1) + " / " + n + "</span>" +
        '<div class="timer" id="exTimer">--:--</div></div>' +
      '<div class="exam-bar"><i style="width:' + Math.round((EXAM.qi) / n * 100) + '%"></i></div>' +
      '<div class="q-card"><h1>' + esc(q.title) + "</h1>" +
        '<p class="q-instruction">' + esc(q.instruction) + "</p>" +
        '<div id="qbody">' + bodyHTML(q) + "</div></div>" +
      '<div class="actions exam-actions"><span class="note">提交后不能修改</span>' +
        '<div class="spacer"></div>' +
        '<button class="btn btn-primary" id="exNext">' + (EXAM.qi === n - 1 ? "提交本节" : "下一题 →") + "</button></div>" +
      "</div></div>";
    bind(q);
    updateExamTimer();
    $("#exNext").onclick = examNext;
    if (["wfd", "fib-l", "hiw", "mcq-l", "hcs", "smw"].includes(q.type)) {
      const b = document.querySelector("[data-play]");
      if (b) b.focus();
    }
  }

  function examNext() {
    const sec = EXAM.set.sections[EXAM.si];
    const q = BY_ID[sec.qids[EXAM.qi]];
    EXAM.answers[q.id] = getAnswer(q);
    if (EXAM.qi < sec.qids.length - 1) {
      EXAM.qi++;
      renderExamQuestion();
    } else {
      if (!confirm("提交本节？提交后不能修改。")) return;
      submitExamSection(false);
    }
  }

  function examSectionScore(key) {
    const list = (EXAM.results && EXAM.results[key]) || [];
    let s = 0, t = 0;
    list.forEach(r => {
      if (r.res.productive) return;
      s += r.res.score || 0;
      t += r.res.total || 0;
    });
    const pct = t ? s / t : 0;
    return { score: s, total: t, pct, scaled: t ? Math.round(10 + pct * 80) : 0 };
  }

  function submitExamSection(auto) {
    stopTimer();
    const set = EXAM.set, sec = set.sections[EXAM.si];
    const cur = BY_ID[sec.qids[EXAM.qi]];
    if (cur && EXAM.answers[cur.id] === undefined) EXAM.answers[cur.id] = getAnswer(cur);
    EXAM.results = EXAM.results || {};
    if (EXAM.results[sec.key]) return;
    EXAM.results[sec.key] = sec.qids.map(id => {
      const q = BY_ID[id];
      const a = EXAM.answers[id];
      return { id, res: score(q, a == null ? undefined : a) };
    });
    if (EXAM.si < set.sections.length - 1) {
      renderExamBreak();
    } else {
      finishExam();
    }
  }

  function renderExamBreak() {
    const set = EXAM.set, sec = set.sections[EXAM.si];
    const next = set.sections[EXAM.si + 1];
    app.innerHTML = '<div class="container"><div class="exam-break">' +
      '<div class="eyebrow">SECTION COMPLETE</div>' +
      "<h1>" + esc(sec.name) + "部分完成</h1>" +
      "<p>已提交 " + sec.qids.length + " 题。成绩会在全部结束后统一显示。</p>" +
      '<div class="exam-break-next">下一节：' + esc(next.name) + " · " + Math.round(next.time / 60) + " 分钟</div>" +
      '<button class="btn btn-primary" id="exContinue">进入' + esc(next.name) + " →</button>" +
      "</div></div>";
    $("#exContinue").onclick = () => {
      EXAM.si++;
      renderExamIntro();
    };
  }

  function finishExam() {
    const set = EXAM.set;
    const rec = {
      setId: set.id, name: set.name, date: new Date().toISOString(),
      reading: examSectionScore("reading"),
      listening: examSectionScore("listening"),
      answers: EXAM.answers,
      results: EXAM.results
    };
    rec.overall = Math.round(((rec.reading.scaled || 0) + (rec.listening.scaled || 0)) / 2);
    saveMock(rec);
    EXAM.last = rec;
    try { history.replaceState(null, "", "#/report"); } catch (e) {}
    renderReport(rec);
  }

  function answerSummary(q) {
    switch (q.type) {
      case "mcq-s": return String.fromCharCode(65 + q.answer);
      case "mcq-m": return q.answer.map(i => String.fromCharCode(65 + i)).join("、");
      case "fib-rw": return q.blanks.map(b => b.options[b.answer]).join(" / ");
      case "fib-l": return q.answers.map(a => a[0]).join(" / ");
      case "ro": return q.answer.map(i => String.fromCharCode(65 + i)).join(" → ");
      case "hiw": { const all = q.content.split(/\s+/); return q.wrong.map(i => all[i]).join("、"); }
      case "wfd": return q.answers.join(" / ");
      case "asq": return q.answers[0];
      case "fib-r": return q.blanks.map(b => b.answer).join(" / ");
      case "mcq-l": return q.multi ? q.answer.map(i => String.fromCharCode(65 + i)).join("、") : String.fromCharCode(65 + q.answer);
      case "hcs":
      case "smw": return String.fromCharCode(65 + q.answer);
      default: return "";
    }
  }

  function userSummary(q, a) {
    if (a == null || a === "" || (Array.isArray(a) && !a.length)) return "（未作答）";
    if (Array.isArray(a) && a.every(x => x == null || x === "")) return "（未作答）";
    switch (q.type) {
      case "mcq-s": return String.fromCharCode(65 + a);
      case "mcq-m": return a.map(i => String.fromCharCode(65 + i)).join("、");
      case "fib-rw": return a.map((v, i) => v == null ? "—" : q.blanks[i].options[v]).join(" / ");
      case "fib-l": return a.join(" / ");
      case "ro": return a.map(i => String.fromCharCode(65 + i)).join(" → ");
      case "hiw": { const all = q.content.split(/\s+/); return a.map(i => all[i]).join("、"); }
      case "wfd": return a.map((x, i) => "第" + (i + 1) + "句：" + (x || "—")).join("；");
      case "asq": return a;
      case "fib-r": return a.map(x => x || "—").join(" / ");
      case "mcq-l": return q.multi ? (a || []).map(i => String.fromCharCode(65 + i)).join("、") : String.fromCharCode(65 + a);
      case "hcs":
      case "smw": return String.fromCharCode(65 + a);
      default: return String(a);
    }
  }

  function renderReport(rec) {
    if (!rec) { renderExamHome(); return; }
    const set = rec.setId ? examById(rec.setId) : null;
    const sections = set ? set.sections : [];
    const rows = [];
    sections.forEach(sec => {
      const list = (rec.results && rec.results[sec.key]) || [];
      const prodN = list.filter(r => r.res.productive).length;
      rows.push('<div class="rv-sec">' + esc(sec.name) + " · " + list.length + " 题" +
        (prodN ? "（含 " + prodN + " 题自评）" : "") + "</div>");
      list.forEach((r, i) => {
        const q = BY_ID[r.id];
        if (!q) return;
        const prod = !!r.res.productive;
        const ok = !prod && r.res.correct;
        let bodyHtml = "";
        if (prod) {
          bodyHtml = '<div class="rv-exp"><b>参考</b><p>' + esc(q.model || "") + "</p></div>" +
            '<div class="rv-tip">52 分提示：' + esc(q.tip || "") + "</div>";
        } else {
          bodyHtml = '<div class="rv-line"><b>你的答案</b><span>' +
            esc(userSummary(q, rec.answers ? rec.answers[q.id] : null)) + "</span></div>" +
            '<div class="rv-line"><b>正确答案</b><span>' + esc(answerSummary(q)) + "</span></div>" +
            '<div class="rv-exp"><b>解析</b><p>' + esc(q.explanation) + "</p></div>" +
            '<div class="rv-tip">52 分提示：' + esc(q.tip || "") + "</div>";
        }
        rows.push('<div class="review-item ' + (prod ? "neutral" : ok ? "ok" : "no") + '">' +
          '<button class="review-head" data-r="' + rows.length + '">' +
            '<span class="rv-type">' + TYPE[q.type].name + "</span>" +
            '<span class="rv-title">' + esc(q.title) + "</span>" +
            '<span class="rv-score">' + (prod ? "自评" : (r.res.score || 0) + " / " + (r.res.total || 0)) + "</span>" +
            '<span class="rv-mark">' + (prod ? "—" : ok ? "✓" : "✗") + "</span>" +
          "</button>" +
          '<div class="review-body" hidden>' + bodyHtml + "</div></div>");
      });
    });

    app.innerHTML = '<div class="container"><div class="report">' +
      '<div class="eyebrow">MOCK REPORT</div>' +
      "<h1>" + esc(rec.name || "模考报告") + "</h1>" +
      '<p class="report-date">' + new Date(rec.date).toLocaleString("zh-CN") + "</p>" +
      '<div class="report-hero"><div class="report-big">' + (rec.overall || "—") + '<small>/ 90</small></div>' +
        '<div class="report-skills">' +
          '<div><span>阅读 R</span><b>' + (rec.reading ? rec.reading.scaled : "—") + '</b><small>' + (rec.reading ? Math.round(rec.reading.pct * 100) + "%" : "") + '</small></div>' +
          '<div><span>听力 L</span><b>' + (rec.listening ? rec.listening.scaled : "—") + '</b><small>' + (rec.listening ? Math.round(rec.listening.pct * 100) + "%" : "") + '</small></div>' +
        "</div></div>" +
      '<p class="note">估分 = 10 + 正确率 × 80，只反映本次阅读/听力的练习水平，不是官方成绩。</p>' +
      '<div class="section-title"><h2>逐题解析</h2><span>点开看你的答案、正确答案和原因</span></div>' +
      '<div class="review-list">' + rows.join("") + "</div>" +
      '<div class="actions" style="justify-content:center;margin-top:28px">' +
        (rec.setId ? '<a class="btn btn-primary" href="#/exam/' + rec.setId + '">再考一次</a>' : "") +
        '<a class="btn btn-ghost" href="#/exam">返回模考</a>' +
        '<a class="btn btn-ghost" href="#/progress">看进度</a>' +
      "</div></div></div>";

    let idx = 0;
    document.querySelectorAll(".review-body").forEach((body, i) => { body.dataset.i = i; });
    document.querySelectorAll(".review-head").forEach(head => {
      head.onclick = () => {
        const body = head.nextElementSibling;
        if (body) body.hidden = !body.hidden;
      };
    });
  }

  /* ---------------- boot ---------------- */
  window.addEventListener("DOMContentLoaded", () => {
    if (!location.hash) location.hash = "#/home";
    route();
  });
  if (document.readyState !== "loading") {
    if (!location.hash) location.hash = "#/home";
    route();
  }
})();
