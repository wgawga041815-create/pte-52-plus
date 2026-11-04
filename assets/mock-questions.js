/* 模考题库：按官方题型自编，非真题原文 */
window.MOCK_QUESTIONS = [
  /* ---------------- Set A ---------------- */
  {
    id: "ma-fib1", type: "fib-rw", section: "reading", level: 1, time: 100,
    title: "城市树木", instruction: "每空选一个词。",
    content: "City trees do more than make streets look nice. They [[1]] air pollution and provide shade in summer. However, trees need water and space, and many cities [[2]] to plant enough of them. Experts argue that [[3]] planning is the key to a greener city.",
    blanks: [
      { options: ["reduce", "reduces", "reducing", "reduced"], answer: 0 },
      { options: ["struggle", "struggles", "struggling", "struggled"], answer: 0 },
      { options: ["careful", "carefully", "care", "caring"], answer: 0 }
    ],
    explanation: "① They 是复数，谓语用 reduce；② cities 是复数，用 struggle；③ 修饰 planning 需要形容词 careful。",
    tip: "先看主语单复数，再看空后词性。"
  },
  {
    id: "ma-ro1", type: "ro", section: "reading", level: 1, time: 130,
    title: "咖啡的传播", instruction: "按正确顺序点击句子。",
    sentences: [
      "As a result, coffee houses became meeting places for artists and businessmen.",
      "Coffee was first grown in Ethiopia and spread to the Middle East.",
      "By the 17th century, it had reached Europe.",
      "This new drink quickly became popular in cities such as London and Paris.",
      "Today, coffee is one of the most traded commodities in the world."
    ],
    answer: [1, 2, 3, 0, 4],
    explanation: "首句 B 交代起源，没有指代；C 接时间；D 的 This new drink 指咖啡；A 的 As a result 接在流行之后；E 的 Today 收尾。",
    tip: "先找首句，再抓 this / as a result / today 这些路标。"
  },
  {
    id: "ma-mcq1", type: "mcq-s", section: "reading", level: 1, time: 90,
    title: "公共交通", instruction: "选一个正确答案。",
    content: "Many cities are investing in public transport to reduce traffic. Buses and trains can carry far more people than cars, and they produce less pollution per passenger. However, systems are expensive to build and maintain, and some residents still prefer the convenience of driving.",
    question: "What is the main idea of the passage?",
    options: [
      "Public transport has benefits but also costs.",
      "Public transport is always cheaper than driving.",
      "Cars produce no pollution.",
      "All residents support public transport."
    ],
    answer: 0,
    explanation: "However 之后讲成本和习惯问题，所以是“有利有弊”。B/D 太绝对，C 与原文相反。",
    tip: "出现 However 的段落，主旨通常在转折后。"
  },
  {
    id: "ma-wfd1", type: "wfd", section: "listening", level: 1, time: 80,
    title: "听写 ×3（城市）", instruction: "每句只播一遍，整句听完再打。",
    audio: "The city council plans to build a new park near the river.||Residents are invited to share their opinions online.||The project will begin in September.",
    answers: [
      "The city council plans to build a new park near the river.",
      "Residents are invited to share their opinions online.",
      "The project will begin in September."
    ],
    explanation: "注意 council 拼写、are invited 被动、opinions 复数、September 大写。",
    tip: "一个正确单词 1 分；写半句也有分。"
  },
  {
    id: "ma-fibl1", type: "fib-l", section: "listening", level: 1, time: 80,
    title: "听写填空：城市树木", instruction: "听音频，补全 3 个空。",
    audio: "Trees in cities provide shade and lower temperatures. They also improve air quality, which improves public health. However, young trees need regular care during the first few years.",
    content: "Trees in cities [[1]] shade and lower temperatures. They also [[2]] air quality, which improves public health. However, young trees need [[3]] care during the first few years.",
    answers: [["provide"], ["improve"], ["regular"]],
    explanation: "三个空都是动词/形容词：provide（复数主语）、improve、regular（修饰 care）。",
    tip: "先判词性，再等那个词；拼写错 = 0 分。"
  },
  {
    id: "ma-hiw1", type: "hiw", section: "listening", level: 1, time: 60,
    title: "图书馆通知（点错词）", instruction: "听音频，点出与音频不一致的词。",
    audio: "The library will close early on Friday for staff training. Books can be returned to the box outside. Normal hours resume on Saturday.",
    content: "The library will closes early on Friday for staff training. Books can be returned to the box outside. Normal hours resume on Sunday.",
    wrong: [3, 22],
    explanation: "音频是 will close，文中是 will closes；音频是 Saturday，文中是 Sunday。",
    tip: "只点 100% 确定的，错点倒扣。"
  },

  /* ---------------- Set B ---------------- */
  {
    id: "mb-fib1", type: "fib-rw", section: "reading", level: 1, time: 100,
    title: "远程办公", instruction: "每空选一个词。",
    content: "Remote work has become common in many companies. Employees can [[1]] time by avoiding long commutes, and firms can save money on office space. [[2]], teamwork may suffer when people rarely meet. Many companies now [[3]] a hybrid model.",
    blanks: [
      { options: ["save", "saves", "saving", "saved"], answer: 0 },
      { options: ["Therefore", "However", "Moreover", "Although"], answer: 1 },
      { options: ["use", "uses", "using", "used"], answer: 0 }
    ],
    explanation: "① can 后接动词原形 save；② 前后是转折，用 However；③ companies 复数，用 use。",
    tip: "情态动词后一定是原形；逻辑词先判断转折还是因果。"
  },
  {
    id: "mb-ro1", type: "ro", section: "reading", level: 1, time: 130,
    title: "印刷术", instruction: "按正确顺序点击句子。",
    sentences: [
      "Before the printing press, books were copied by hand and very expensive.",
      "In the 15th century, Gutenberg developed a machine that could print pages quickly.",
      "As a result, books became cheaper and more widely available.",
      "This helped ideas spread across Europe more rapidly.",
      "Today, digital media has changed reading again."
    ],
    answer: [0, 1, 2, 3, 4],
    explanation: "时间线很清楚：手抄 → 印刷机 → 书变便宜 → 思想传播 → 今天。首句 A 没有指代。",
    tip: "有明显时间线的段落，按时间排最稳。"
  },
  {
    id: "mb-mcq1", type: "mcq-s", section: "reading", level: 1, time: 90,
    title: "运动与睡眠", instruction: "选一个正确答案。",
    content: "Regular exercise improves sleep quality. People who exercise during the day fall asleep faster and wake up less often. However, exercising late at night can have the opposite effect, because the body needs time to relax.",
    question: "What does the passage suggest?",
    options: [
      "Exercise at any time is equally good.",
      "Late-night exercise may make sleep worse.",
      "Sleep improves exercise performance.",
      "People should stop exercising."
    ],
    answer: 1,
    explanation: "However 之后说 late at night 可能相反，所以 B。A 与原文矛盾，C 无关，D 太绝对。",
    tip: "选项里出现 any / always / stop 这类绝对词，先怀疑。"
  },
  {
    id: "mb-wfd1", type: "wfd", section: "listening", level: 1, time: 80,
    title: "听写 ×3（校园）", instruction: "每句只播一遍。",
    audio: "Students should bring their student cards to the exam.||The results will be published next week.||Please check the notice board for updates.",
    answers: [
      "Students should bring their student cards to the exam.",
      "The results will be published next week.",
      "Please check the notice board for updates."
    ],
    explanation: "注意 students 复数、published 被动、notice board 两个词。",
    tip: "写完查单复数、时态、介词。"
  },
  {
    id: "mb-fibl1", type: "fib-l", section: "listening", level: 1, time: 80,
    title: "听写填空：咖啡", instruction: "听音频，补全 3 个空。",
    audio: "Coffee was first grown in Ethiopia. By the 17th century, it had become popular in Europe, where coffee houses served as meeting places. Today, the drink is consumed around the world.",
    content: "Coffee was first [[1]] in Ethiopia. By the 17th century, it had become popular in Europe, where coffee houses [[2]] as meeting places. Today, the drink is [[3]] around the world.",
    answers: [["grown"], ["served"], ["consumed"]],
    explanation: "was first grown（被动）、served as（固定搭配）、is consumed（被动）。",
    tip: "先听被动结构 was / is，再补过去分词。"
  },
  {
    id: "mb-hiw1", type: "hiw", section: "listening", level: 1, time: 60,
    title: "校园健身房（点错词）", instruction: "听音频，点出不一致的词。",
    audio: "The campus gym is open from six in the morning until ten at night. Students can use the pool for free. Classes must be booked online.",
    content: "The campus gym is open from seven in the morning until ten at night. Students can use the pool for free. Classes must be booked by phone.",
    wrong: [6, 26],
    explanation: "音频是 six，文中是 seven；音频是 online，文中是 by phone。",
    tip: "先扫文本，再听；只点确定的。"
  },

  /* ---------------- Set C ---------------- */
  {
    id: "mc-fib1", type: "fib-rw", section: "reading", level: 2, time: 100,
    title: "塑料回收", instruction: "每空选一个词。",
    content: "Plastic waste is a major environmental problem. Only a small [[1]] of plastic is recycled, and much of it ends up in the ocean. Governments are now [[2]] rules to reduce single-use plastic. However, [[3]] alternatives are often more expensive.",
    blanks: [
      { options: ["percentage", "number", "amount", "quantity"], answer: 0 },
      { options: ["introduce", "introduces", "introducing", "introduced"], answer: 2 },
      { options: ["green", "greener", "greening", "greenly"], answer: 1 }
    ],
    explanation: "① a small percentage of 是固定搭配；② are now 后接 doing，表示正在；③ 与单-use plastic 对比，用比较级 greener。",
    tip: "固定搭配和比较级是 FIB 的高频考点。"
  },
  {
    id: "mc-ro1", type: "ro", section: "reading", level: 2, time: 130,
    title: "互联网简史", instruction: "按正确顺序点击句子。",
    sentences: [
      "In the 1960s, researchers began to connect computers so they could share information.",
      "This network slowly grew into the internet we use today.",
      "At first, only universities and governments had access.",
      "In the 1990s, the web made it easy for ordinary people to go online.",
      "Today, billions of people use the internet every day."
    ],
    answer: [0, 2, 1, 3, 4],
    explanation: "A 交代起点；C 的 At first 接在早期之后；B 的 This network 指前面的网络；D 的 1990s 推进；E 的 Today 收尾。",
    tip: "At first / This network / Today 是三个最明显的路标。"
  },
  {
    id: "mc-mcq1", type: "mcq-m", section: "reading", level: 2, time: 100,
    title: "城市公园（多选）", instruction: "选 2 个正确选项。错选倒扣。",
    content: "City parks offer more than green space. They provide places for exercise, help reduce summer temperatures, and give children a safe place to play. However, parks are expensive to maintain, and some cities struggle to keep them clean.",
    question: "Which two statements are true according to the passage?",
    options: [
      "Parks help cool cities in summer.",
      "Parks are cheap to maintain.",
      "Parks give children a safe place to play.",
      "Cities never have problems with cleanliness."
    ],
    answer: [0, 2],
    explanation: "A 对应 help reduce summer temperatures；C 对应 a safe place to play。B 与 expensive 相反；D 与 struggle to keep them clean 相反。",
    tip: "每个选项都要找到原文依据，找不到就不选。"
  },
  {
    id: "mc-wfd1", type: "wfd", section: "listening", level: 2, time: 80,
    title: "听写 ×3（学术）", instruction: "每句只播一遍。",
    audio: "The lecture will discuss the effects of plastic on marine life.||Please write your answers in complete sentences.||The deadline for the assignment is Friday.",
    answers: [
      "The lecture will discuss the effects of plastic on marine life.",
      "Please write your answers in complete sentences.",
      "The deadline for the assignment is Friday."
    ],
    explanation: "effects 复数、marine 拼写、complete sentences 复数、assignment 拼写。",
    tip: "长词先记开头结尾，中间按音节补。"
  },
  {
    id: "mc-fibl1", type: "fib-l", section: "listening", level: 2, time: 80,
    title: "听写填空：塑料", instruction: "听音频，补全 3 个空。",
    audio: "Plastic waste is a serious environmental problem. Much of it ends up in the ocean, where it harms marine life. Some countries have introduced laws to reduce single-use plastic.",
    content: "Plastic waste is a serious [[1]] problem. Much of it ends up in the ocean, where it harms [[2]] life. Some countries have introduced [[3]] to reduce single-use plastic.",
    answers: [["environmental"], ["marine"], ["laws"]],
    explanation: "environmental（形容词）、marine life（海洋生物）、laws（可数复数）。",
    tip: "先看空前后：serious + 名词、marine + life、introduced + 名词。"
  },
  {
    id: "mc-hiw1", type: "hiw", section: "listening", level: 2, time: 60,
    title: "博物馆通知（点错词）", instruction: "听音频，点出不一致的词。",
    audio: "The museum is free for students on weekdays. Visitors should leave large bags at the desk. Photography is not allowed in the main hall.",
    content: "The museum is free for students on weekends. Visitors should leave large bags at the door. Photography is not allowed in the main hall.",
    wrong: [7, 15],
    explanation: "音频是 weekdays，文中是 weekends；音频是 desk，文中是 door。",
    tip: "数字、时间、地点词最容易被改，重点听。"
  },

  /* ---------------- Full mock: extra types ---------------- */
  {
    id: "fr-01", type: "fib-r", section: "reading", level: 1, time: 100,
    title: "城市蜜蜂（拖拽填空）", instruction: "从词库中选词填空，有两个干扰项。",
    content: "Bees are important for cities. They [[1]] flowers and help plants produce fruit. In recent years, beekeepers have [[2]] hives on rooftops. However, cities can be [[3]] for bees because there are fewer flowers. Experts suggest planting [[4]] gardens to support them.",
    bank: ["pollinate", "placed", "difficult", "community", "collect", "removed", "easy", "private"],
    blanks: [
      { answer: "pollinate" }, { answer: "placed" }, { answer: "difficult" }, { answer: "community" }
    ],
    explanation: "① They 后接动词原形 pollinate；② have + 过去分词 placed；③ be 后接形容词 difficult；④ community gardens 是固定搭配。",
    tip: "先把词库按词性分组：动词、形容词、名词，再逐空排除。"
  },
  {
    id: "fr-02", type: "fib-r", section: "reading", level: 2, time: 100,
    title: "线上博物馆（拖拽填空）", instruction: "从词库中选词填空。",
    content: "Museums are using the internet to reach more people. Many now [[1]] virtual tours of their collections. Visitors can [[2]] objects from different angles and read explanations. However, some curators worry that online visits may [[3]] the experience of seeing art in person. They argue that nothing can [[4]] the real thing.",
    bank: ["offer", "examine", "replace", "match", "refuse", "ignore", "improve", "create"],
    blanks: [{ answer: "offer" }, { answer: "examine" }, { answer: "replace" }, { answer: "match" }],
    explanation: "offer tours（提供）、examine objects（仔细观察）、replace the experience（取代）、match the real thing（比得上）。",
    tip: "先看搭配：offer / examine / replace / match 各有固定对象。"
  },
  {
    id: "fr-03", type: "fib-r", section: "reading", level: 2, time: 100,
    title: "食物浪费（拖拽填空）", instruction: "从词库中选词填空。",
    content: "Food waste is a growing problem. Supermarkets often [[1]] fruit that looks unusual, even if it is safe to eat. This waste [[2]] greenhouse gases when it rots. Some countries have [[3]] laws to encourage shops to donate food. Consumers can also help by planning meals and [[4]] less.",
    bank: ["reject", "produces", "introduced", "buying", "accept", "reduces", "removed", "selling"],
    blanks: [{ answer: "reject" }, { answer: "produces" }, { answer: "introduced" }, { answer: "buying" }],
    explanation: "reject fruit（拒收）、waste produces gases（单三）、have introduced（现在完成）、by planning and buying（并列动名词）。",
    tip: "空前后决定形式：have + 过去分词，by + doing。"
  },
  {
    id: "fr-04", type: "fib-r", section: "reading", level: 2, time: 100,
    title: "学习风格（拖拽填空）", instruction: "从词库中选词填空。",
    content: "Many people believe that students learn best in a particular [[1]], such as visual or auditory. However, research has not [[2]] strong evidence for this idea. Instead, experts argue that the [[3]] of teaching matters more than matching a style. Good teachers use a [[4]] of methods.",
    bank: ["style", "found", "quality", "range", "method", "ignored", "quantity", "limited"],
    blanks: [{ answer: "style" }, { answer: "found" }, { answer: "quality" }, { answer: "range" }],
    explanation: "a particular style（风格）、has not found（现在完成否定）、the quality of teaching（质量）、a range of（一系列）。",
    tip: "a range of / a quality of 都是高频搭配。"
  },
  {
    id: "lm-01", type: "mcq-l", section: "listening", level: 1, time: 90,
    title: "图书馆导览（多选）", instruction: "听录音，选 2 个正确选项。错选倒扣。",
    audio: "Welcome to the library induction. The ground floor has newspapers and new books. The first floor is for silent study, and group rooms can be booked online. Printing is available on the second floor. Please note that food is not allowed in the study areas.",
    question: "Which two statements are true?",
    options: [
      "Group rooms must be booked online.",
      "Food is allowed in the study areas.",
      "Printing is on the second floor.",
      "The first floor is for group discussion."
    ],
    answer: [0, 2], multi: true,
    explanation: "A 对应 group rooms can be booked online；C 对应 Printing is available on the second floor。B 与 food is not allowed 相反；D 与 silent study 相反。",
    tip: "先看选项关键词，再听对应句；只选有依据的。"
  },
  {
    id: "lm-02", type: "mcq-l", section: "listening", level: 2, time: 90,
    title: "步行与考试（多选）", instruction: "听录音，选 2 个正确选项。",
    audio: "Today we'll look at a study on walking. Researchers found that students who walked for twenty minutes before a test performed better than those who sat quietly. However, the effect was smaller for students who were already very fit. The researchers suggest that short walks may help concentration.",
    question: "Which two statements are true?",
    options: [
      "Walking before a test may improve performance.",
      "The effect was the same for everyone.",
      "Fit students benefited less.",
      "Walking has no effect on concentration."
    ],
    answer: [0, 2], multi: true,
    explanation: "A 对应 performed better；C 对应 the effect was smaller for students who were already very fit。B 与 smaller 矛盾；D 与 may help concentration 相反。",
    tip: "注意 however 后的转折，往往是第二个正确项。"
  },
  {
    id: "hc-01", type: "hcs", section: "listening", level: 1, time: 80,
    title: "电动公交（选摘要）", instruction: "听录音，选出最准确的摘要。",
    audio: "The city is planning to replace its old buses with electric ones. The new buses are quieter and produce less pollution, but they are more expensive. The city will start with ten buses and add more if the trial is successful.",
    options: [
      "The city is testing electric buses before buying more.",
      "The city has decided to buy only ten buses.",
      "Electric buses are cheaper than old buses.",
      "The old buses will be sold to another city."
    ],
    answer: 0,
    explanation: "原文说 start with ten and add more if the trial is successful，所以是“先试再买”。B 太绝对，C 与 more expensive 相反，D 未提及。",
    tip: "选“最全面但不极端”的摘要，排除原文没说的。"
  },
  {
    id: "hc-02", type: "hcs", section: "listening", level: 1, time: 80,
    title: "睡眠与记忆（选摘要）", instruction: "听录音，选出最准确的摘要。",
    audio: "Sleep is important for memory. During deep sleep, the brain organizes what you learned during the day. Students who sleep well before an exam remember more. However, sleeping too little or too much can both affect performance.",
    options: [
      "Sleep helps the brain organize new information.",
      "Sleeping more is always better.",
      "Memory is not affected by sleep.",
      "Students should study all night."
    ],
    answer: 0,
    explanation: "A 对应 the brain organizes what you learned；B 与 too much 也影响表现矛盾；C、D 与原文相反。",
    tip: "出现 always 的选项先怀疑。"
  },
  {
    id: "ls-01", type: "mcq-l", section: "listening", level: 1, time: 70,
    title: "健身房维修（单选）", instruction: "听录音，选一个正确答案。",
    audio: "The campus gym will close for repairs next Monday. It will reopen at the end of the month. Students can use the city pool for free during this period.",
    question: "What will happen next Monday?",
    options: [
      "The gym will close.",
      "The pool will close.",
      "The gym will reopen.",
      "Students will pay for the pool."
    ],
    answer: 0,
    explanation: "原文第一句：gym will close for repairs next Monday。B、C、D 都与原文不符。",
    tip: "听到时间点，立刻对应事件。"
  },
  {
    id: "ls-02", type: "mcq-l", section: "listening", level: 1, time: 70,
    title: "博物馆新展（单选）", instruction: "听录音，选一个正确答案。",
    audio: "The museum's new exhibition opens on Friday. Tickets are free for students, but they must be booked online. The exhibition runs until the end of August.",
    question: "How can students get tickets?",
    options: [
      "Book them online.",
      "Buy them at the door.",
      "Call the museum.",
      "Pay a small fee."
    ],
    answer: 0,
    explanation: "原文：free for students, but they must be booked online。B、C 未提及，D 与 free 相反。",
    tip: "but 后面常是考点。"
  },
  {
    id: "sm-01", type: "smw", section: "listening", level: 1, time: 50,
    title: "图书馆闭馆（选缺失词）", instruction: "听录音，最后一句缺一个词，选出最合适的。",
    audio: "The library will be closed on public",
    options: ["holidays", "mornings", "buildings", "numbers"],
    answer: 0,
    explanation: "public holidays 是固定搭配：公共假期闭馆。mornings 与 public 不搭；building / number 语义不通。",
    tip: "先听搭配，再听意思；public holidays 是高频短语。"
  },
  {
    id: "sm-02", type: "smw", section: "listening", level: 1, time: 50,
    title: "讲座时间（选缺失词）", instruction: "听录音，选出缺失的词。",
    audio: "The lecture will begin at nine o'clock in the",
    options: ["morning", "evening", "library", "building"],
    answer: 0,
    explanation: "in the morning 是固定搭配；nine o'clock in the morning 语义完整。",
    tip: "时间 + in the morning / afternoon / evening，是固定结构。"
  }
];

window.MOCK_QUESTIONS = (window.MOCK_QUESTIONS || []).concat([
  {
    "id": "r2-fib-rw-01",
    "type": "fib-rw",
    "section": "reading",
    "level": 4,
    "time": 160,
    "title": "15 分钟城市（高难）",
    "instruction": "每空选一个词。高难：先判词性，再看搭配/语篇逻辑。",
    "content": "Urban planners increasingly promote the idea of a 15-minute city, in which residents can reach schools, shops and health services within a short walk or cycle. The concept aims to [[1]] car dependence and improve quality of life. However, critics argue that it may [[2]] lower-income residents who cannot afford to live near the centre. Successful projects therefore require affordable housing and [[3]] public transport. Without these, the model risks becoming a [[4]] ideal rather than a practical solution.",
    "blanks": [
      {
        "options": [
          "reduction",
          "reducing",
          "reduce",
          "reduced"
        ],
        "answer": 2
      },
      {
        "options": [
          "displace",
          "displaces",
          "displaced",
          "displacing"
        ],
        "answer": 0
      },
      {
        "options": [
          "rely",
          "reliably",
          "reliability",
          "reliable"
        ],
        "answer": 3
      },
      {
        "options": [
          "romance",
          "romantic",
          "romantically",
          "romanticise"
        ],
        "answer": 1
      }
    ],
    "explanation": "① aims to + 动词原形 → reduce；② may + 动词原形 → displace；③ 修饰 public transport 用形容词 → reliable；④ 修饰 ideal 用形容词 → romantic。",
    "tip": "高难：to do / may do；形容词修饰名词；displace 是“迫使搬离”。"
  },
  {
    "id": "r2-fib-rw-02",
    "type": "fib-rw",
    "section": "reading",
    "level": 4,
    "time": 160,
    "title": "微塑料（高难）",
    "instruction": "每空选一个词。高难：先判词性，再看搭配/语篇逻辑。",
    "content": "Microplastics have been found in rivers, oceans and even human blood. They enter the environment through the [[1]] of plastic waste and the wear of synthetic clothing. Small organisms may [[2]] these particles, allowing them to move up the food chain. The long-term health [[3]] remain uncertain, but the evidence has prompted calls for stricter [[4]].",
    "blanks": [
      {
        "options": [
          "breakdown",
          "break down",
          "broke down",
          "breaking"
        ],
        "answer": 0
      },
      {
        "options": [
          "ingests",
          "ingested",
          "ingest",
          "ingesting"
        ],
        "answer": 2
      },
      {
        "options": [
          "implication",
          "implications",
          "implicated",
          "implicating"
        ],
        "answer": 1
      },
      {
        "options": [
          "regulate",
          "regulatory",
          "regulated",
          "regulation"
        ],
        "answer": 3
      }
    ],
    "explanation": "① the + 名词 → breakdown；② may + 动词原形 → ingest；③ health + 名词复数 → implications；④ stricter + 名词 → regulation。",
    "tip": "高难：breakdown 是名词；ingest 摄入；implications 影响/后果。"
  },
  {
    "id": "r2-fib-rw-03",
    "type": "fib-rw",
    "section": "reading",
    "level": 4,
    "time": 160,
    "title": "语言消亡（高难）",
    "instruction": "每空选一个词。高难：先判词性，再看搭配/语篇逻辑。",
    "content": "Many of the world's languages are at risk of disappearing. When older speakers die and younger generations switch to a dominant language, the knowledge [[1]] in the community can be lost. Linguists are racing to [[2]] recordings and grammars before the last speakers pass away. However, documentation alone cannot [[3]] a language; it must be used in daily life. Community-led schools and media are therefore [[4]] to revitalisation.",
    "blanks": [
      {
        "options": [
          "embed",
          "embedding",
          "embeds",
          "embedded"
        ],
        "answer": 3
      },
      {
        "options": [
          "records",
          "record",
          "recorded",
          "recording"
        ],
        "answer": 1
      },
      {
        "options": [
          "revive",
          "revives",
          "revived",
          "reviving"
        ],
        "answer": 0
      },
      {
        "options": [
          "essence",
          "essentially",
          "essential",
          "essentials"
        ],
        "answer": 2
      }
    ],
    "explanation": "① 修饰 knowledge 用过去分词 → embedded；② to + 动词原形 → record；③ cannot + 动词原形 → revive；④ are + 形容词 → essential。",
    "tip": "高难：embedded 嵌入的；revive 复兴；essential to 固定搭配。"
  },
  {
    "id": "r2-fib-rw-04",
    "type": "fib-rw",
    "section": "reading",
    "level": 4,
    "time": 160,
    "title": "照护经济（高难）",
    "instruction": "每空选一个词。高难：先判词性，再看搭配/语篇逻辑。",
    "content": "Care work, including childcare and elder care, is often [[1]] because it is associated with unpaid domestic labour. Economists argue that this omission [[2]] the true cost of an ageing population. Public investment in care services can [[3]] participation in the paid workforce, especially among women. However, expanding services requires a [[4]] distribution of costs between households, employers and the state.",
    "blanks": [
      {
        "options": [
          "undervalued",
          "undervalue",
          "undervaluing",
          "undervalues"
        ],
        "answer": 0
      },
      {
        "options": [
          "understate",
          "understated",
          "understating",
          "understates"
        ],
        "answer": 3
      },
      {
        "options": [
          "boosts",
          "boosted",
          "boost",
          "boosting"
        ],
        "answer": 2
      },
      {
        "options": [
          "equity",
          "equitable",
          "equitably",
          "equitableness"
        ],
        "answer": 1
      }
    ],
    "explanation": "① is often + 过去分词 → undervalued；② omission 单数，谓语 understates；③ can + 动词原形 → boost；④ a + 形容词 + distribution → equitable。",
    "tip": "高难：主谓一致 omission understates；equitable 公平的。"
  },
  {
    "id": "r2-fib-rw-05",
    "type": "fib-rw",
    "section": "reading",
    "level": 4,
    "time": 160,
    "title": "开放科学（高难）",
    "instruction": "每空选一个词。高难：先判词性，再看搭配/语篇逻辑。",
    "content": "Open-source science aims to make research data, code and methods freely [[1]] to others. Supporters argue that this can [[2]] collaboration and reduce duplication. However, opening data raises concerns about privacy and commercial [[3]]. Researchers therefore need clear guidelines on consent and [[4]].",
    "blanks": [
      {
        "options": [
          "available",
          "availability",
          "avail",
          "availably"
        ],
        "answer": 0
      },
      {
        "options": [
          "accelerates",
          "accelerate",
          "accelerated",
          "accelerating"
        ],
        "answer": 1
      },
      {
        "options": [
          "sensitive",
          "sensitively",
          "sensitivities",
          "sensitivity"
        ],
        "answer": 3
      },
      {
        "options": [
          "attribute",
          "attributed",
          "attribution",
          "attributing"
        ],
        "answer": 2
      }
    ],
    "explanation": "① make + 宾语 + 形容词 → available；② can + 动词原形 → accelerate；③ commercial + 名词 → sensitivity；④ on consent and + 名词 → attribution。",
    "tip": "高难：make sth available；commercial sensitivity；attribution 署名。"
  },
  {
    "id": "r2-mcq-m-01",
    "type": "mcq-m",
    "section": "reading",
    "level": 4,
    "time": 130,
    "title": "太空旅游（多选）",
    "instruction": "选 2 个正确选项。错选倒扣 1 分。",
    "content": "Space tourism companies promise short flights to the edge of space. Supporters say the industry could fund research and inspire young people. Critics argue that it produces large emissions per passenger and benefits only the wealthy. Regulations are still developing, and the long-term effects are uncertain.",
    "question": "Which two statements are supported by the passage?",
    "options": [
      "It benefits everyone equally.",
      "It may fund research.",
      "Regulations are complete.",
      "It produces large emissions per passenger."
    ],
    "answer": [
      1,
      3
    ],
    "explanation": "A 对应 fund research；B 对应 large emissions per passenger。C 与 benefits only the wealthy 相反；D 与 regulations are still developing 相反。",
    "tip": "多选：only / complete 这类绝对词先排除。"
  },
  {
    "id": "r2-mcq-m-02",
    "type": "mcq-m",
    "section": "reading",
    "level": 4,
    "time": 130,
    "title": "四天工作制（多选）",
    "instruction": "选 2 个正确选项。错选倒扣 1 分。",
    "content": "Some companies have trialled a four-day working week without cutting pay. Early results suggest that productivity can remain stable or even improve, while employees report less stress. However, critics note that the trials often involve small, motivated firms and may not suit hospitals or factories. Longer-term evidence is still limited.",
    "question": "Which two statements are supported?",
    "options": [
      "Some trials found stable or better productivity.",
      "All firms have adopted the model.",
      "The trials may not suit all industries.",
      "The evidence is conclusive."
    ],
    "answer": [
      0,
      2
    ],
    "explanation": "A 对应 productivity stable or improve；B 对应 may not suit hospitals or factories。C、D 过于绝对。",
    "tip": "多选：注意 small, motivated firms 这个限制。"
  },
  {
    "id": "r2-ro-01",
    "type": "ro",
    "section": "reading",
    "level": 4,
    "time": 160,
    "title": "纸币的历史（高难）",
    "instruction": "按正确顺序点击句子。先找首句，再顺指代。",
    "sentences": [
      "This made paper money a form of state-backed currency.",
      "Merchants began to accept paper certificates because carrying coins was dangerous.",
      "Today, most money exists digitally rather than in physical form.",
      "Paper money first appeared in China during the Tang dynasty.",
      "The government eventually took over the issue of these certificates."
    ],
    "answer": [
      3,
      1,
      4,
      0,
      2
    ],
    "explanation": "首句 D 讲纸币起源；B 的 paper certificates 接纸币；E 的 these certificates 指前句；A 的 This made 指政府接管；C 的 Today 收尾。",
    "tip": "D 是时间锚点；E 的 these certificates 必须紧接 B。"
  },
  {
    "id": "r2-ro-02",
    "type": "ro",
    "section": "reading",
    "level": 4,
    "time": 160,
    "title": "轮作（高难）",
    "instruction": "按正确顺序点击句子。先找首句，再顺指代。",
    "sentences": [
      "However, it requires planning and may reduce short-term profits.",
      "Different crops use different nutrients and disrupt pests, which helps maintain soil health.",
      "Today, rotation can reduce reliance on chemicals and improve yields.",
      "Crop rotation is the practice of growing different plants in the same field over successive seasons.",
      "Farmers in ancient Rome and China used rotation long before modern fertilisers."
    ],
    "answer": [
      3,
      1,
      4,
      2,
      0
    ],
    "explanation": "首句 D 定义轮作；B 解释机制；E 的 ancient 接历史；C 的 Today 转折到现在；A 的 However 讲限制。",
    "tip": "先定义再解释；E 的 ancient 是时间线；A 的 However 收尾。"
  },
  {
    "id": "r2-fib-r-01",
    "type": "fib-r",
    "section": "reading",
    "level": 4,
    "time": 150,
    "title": "灯塔（高难）",
    "instruction": "从词库选词填空。先按词性分组，再看搭配。",
    "content": "The first lighthouses were built to warn ships of dangerous rocks. Their lamps burned wood or oil, and keepers had to [[1]] them through the night. The invention of the Fresnel lens made the light [[2]] and visible from further away. Today, most lighthouses are automated, but many are [[3]] as historical monuments. Some are also used for tourism, which helps [[4]] their maintenance.",
    "bank": [
      "tend",
      "brighter",
      "preserved",
      "fund",
      "ignore",
      "weaker",
      "destroyed",
      "cost"
    ],
    "blanks": [
      {
        "answer": "tend"
      },
      {
        "answer": "brighter"
      },
      {
        "answer": "preserved"
      },
      {
        "answer": "fund"
      }
    ],
    "explanation": "① had to + 动词原形 → tend；② made the light + 形容词 → brighter；③ are + 过去分词 → preserved；④ helps + 动词原形 → fund。",
    "tip": "高难：tend a lamp 照看灯；preserved as monuments；fund maintenance。"
  },
  {
    "id": "r2-fib-r-02",
    "type": "fib-r",
    "section": "reading",
    "level": 4,
    "time": 150,
    "title": "回收（高难）",
    "instruction": "从词库选词填空。先按词性分组，再看搭配。",
    "content": "Recycling is often seen as a simple solution to waste, but the process is more [[1]] than it appears. Materials must be collected, sorted and cleaned before they can be [[2]]. If too much contamination enters the stream, whole batches may be [[3]]. Experts argue that reducing consumption and designing products for reuse are more [[4]] than recycling alone.",
    "bank": [
      "complex",
      "processed",
      "rejected",
      "effective",
      "simple",
      "sold",
      "accepted",
      "expensive"
    ],
    "blanks": [
      {
        "answer": "complex"
      },
      {
        "answer": "processed"
      },
      {
        "answer": "rejected"
      },
      {
        "answer": "effective"
      }
    ],
    "explanation": "① more + 形容词 → complex；② can be + 过去分词 → processed；③ may be + 过去分词 → rejected；④ are more + 形容词 → effective。",
    "tip": "高难：contamination 污染；batches rejected；effective than recycling alone。"
  },
  {
    "id": "r2-fib-r-03",
    "type": "fib-r",
    "section": "reading",
    "level": 4,
    "time": 150,
    "title": "疫苗（高难）",
    "instruction": "从词库选词填空。先按词性分组，再看搭配。",
    "content": "Vaccines train the immune system to recognise a pathogen without causing the disease. When enough people are [[1]], the spread of infection slows, which protects those who cannot be vaccinated. However, vaccine hesitancy can [[2]] herd immunity. Public health campaigns therefore need to [[3]] concerns and provide clear evidence. Trust is [[4]] to their success.",
    "bank": [
      "vaccinated",
      "undermine",
      "address",
      "essential",
      "infected",
      "support",
      "ignore",
      "optional"
    ],
    "blanks": [
      {
        "answer": "vaccinated"
      },
      {
        "answer": "undermine"
      },
      {
        "answer": "address"
      },
      {
        "answer": "essential"
      }
    ],
    "explanation": "① are + 过去分词 → vaccinated；② can + 动词原形 → undermine；③ need to + 动词原形 → address；④ is + 形容词 → essential。",
    "tip": "高难：herd immunity 群体免疫；undermine 削弱；address concerns 回应担忧。"
  },
  {
    "id": "r2-fib-r-04",
    "type": "fib-r",
    "section": "reading",
    "level": 4,
    "time": 150,
    "title": "电子竞技（高难）",
    "instruction": "从词库选词填空。先按词性分组，再看搭配。",
    "content": "Esports has grown from small gaming competitions into a global industry. Professional players train for long hours and compete for large prizes, but careers are often [[1]]. Injuries to the hands and wrists are common, and contracts can be [[2]]. Some leagues now provide health support and minimum pay. Critics argue that more [[3]] is needed to protect young players, while supporters say the industry is becoming more [[4]].",
    "bank": [
      "short",
      "unfair",
      "regulation",
      "professional",
      "long",
      "fair",
      "freedom",
      "amateur"
    ],
    "blanks": [
      {
        "answer": "short"
      },
      {
        "answer": "unfair"
      },
      {
        "answer": "regulation"
      },
      {
        "answer": "professional"
      }
    ],
    "explanation": "① careers are often + 形容词 → short；② can be + 形容词 → unfair；③ more + 名词 → regulation；④ becoming more + 形容词 → professional。",
    "tip": "高难：careers short；contracts unfair；regulation needed。"
  },
  {
    "id": "r2-mcq-s-01",
    "type": "mcq-s",
    "section": "reading",
    "level": 4,
    "time": 110,
    "title": "怀旧心理（高难）",
    "instruction": "读短文，选一个正确答案。",
    "content": "Nostalgia was once considered a medical disorder, but psychologists now see it as a normal emotion. Remembering positive past experiences can increase feelings of social connection and meaning, especially during periods of change. However, nostalgia can also be bittersweet and may intensify longing for a past that never existed. Researchers suggest that it is most useful when it inspires action rather than escape.",
    "question": "What is the main idea of the passage?",
    "options": [
      "Nostalgia can be beneficial but has limits.",
      "Nostalgia is a disease.",
      "Nostalgia always leads to escape.",
      "Nostalgia has no social benefits."
    ],
    "answer": 0,
    "explanation": "文章说 nostalgia 能增加 connection/meaning，但也可能 bittersweet，最后说 useful when inspires action，选 A。B 与 now see it as normal 相反；C、D 太绝对。",
    "tip": "主旨题：选“既……又……”的平衡项。"
  },
  {
    "id": "r2-sst-01",
    "type": "sst",
    "section": "listening",
    "level": 4,
    "time": 650,
    "title": "土壤健康（高难）",
    "instruction": "听讲座，10 分钟内写 50–70 词摘要。",
    "audio": "Today I want to discuss soil health. Healthy soil contains organic matter, minerals and a diverse community of microbes. These organisms break down waste and help plants absorb nutrients. However, intensive farming can compact soil and reduce organic matter. Farmers can restore soil by planting cover crops, reducing tillage and adding compost. The speaker argues that soil is a finite resource that must be protected.",
    "model": "The lecture discusses soil health. Healthy soil contains organic matter, minerals and microbes, which break down waste and help plants absorb nutrients. However, intensive farming can compact soil and reduce organic matter. In conclusion, farmers should use cover crops, reduce tillage and add compost to protect this finite resource.",
    "checklist": [
      "50–70 词",
      "主题 + 两个要点",
      "有结论",
      "没有整句照抄"
    ],
    "explanation": "SST 评分：内容 2、形式 2、语法/词汇/拼写各 2；少于 40 或多于 100 词 = 0。",
    "tip": "主题 + 组成 + 问题 + 三个措施；finite resource 是结论。"
  },
  {
    "id": "r2-mcq-l-01",
    "type": "mcq-l",
    "section": "listening",
    "level": 4,
    "time": 100,
    "title": "公开演讲（多选）",
    "instruction": "听录音，选 2 个正确选项。对 +1，错 −1。",
    "audio": "Many students feel anxious about public speaking. Preparation helps, but trying to memorise every word can make anxiety worse. Instead, speakers should practise the opening and closing and use brief notes. Slow breathing before starting can also reduce tension. The audience usually notices less nervousness than the speaker thinks.",
    "question": "Which two statements are true?",
    "options": [
      "Memorising every word can increase anxiety.",
      "Audiences notice more nervousness than speakers think.",
      "Breathing can reduce tension.",
      "Preparation is useless."
    ],
    "answer": [
      0,
      2
    ],
    "multi": true,
    "explanation": "A 对应 can make anxiety worse；B 对应 reduce tension。C 与 notices less 相反；D 与 Preparation helps 相反。",
    "tip": "多选：注意 less / more 方向。"
  },
  {
    "id": "r2-mcq-l-02",
    "type": "mcq-l",
    "section": "listening",
    "level": 4,
    "time": 100,
    "title": "校园可持续政策（多选）",
    "instruction": "听录音，选 2 个正确选项。对 +1，错 −1。",
    "audio": "The university has announced a new sustainability policy. All cafeterias will stop using single-use plastics by September, and students will receive a discount if they bring reusable cups. The university will also install more water fountains. However, the policy does not yet include a target for reducing food waste.",
    "question": "Which two statements are true?",
    "options": [
      "A food waste target is included.",
      "Cafeterias will stop using single-use plastics.",
      "Water fountains will be removed.",
      "Reusable cups receive a discount."
    ],
    "answer": [
      1,
      3
    ],
    "multi": true,
    "explanation": "A 对应 stop using single-use plastics；B 对应 discount for reusable cups。C 与 does not yet include 相反；D 与 install more 相反。",
    "tip": "多选：does not yet 是强信号。"
  },
  {
    "id": "r2-fib-l-01",
    "type": "fib-l",
    "section": "listening",
    "level": 4,
    "time": 110,
    "title": "土壤健康（高难）",
    "instruction": "听讲座，补全 4 个空。拼写必须正确。",
    "audio": "Soil is a finite resource. Healthy soil contains organic matter and microbes. However, intensive farming can compact soil and reduce fertility. Farmers can restore it by planting cover crops.",
    "content": "Soil is a [[1]] resource. Healthy soil contains organic matter and [[2]]. However, intensive farming can [[3]] soil and reduce fertility. Farmers can restore it by planting [[4]] crops.",
    "answers": [
      [
        [
          "finite"
        ]
      ],
      [
        [
          "microbes"
        ]
      ],
      [
        [
          "compact"
        ]
      ],
      [
        [
          "cover"
        ]
      ]
    ],
    "explanation": "finite（形容词）、microbes（复数）、compact（动词原形）、cover crops（固定搭配）。",
    "tip": "a + 形容词；organic matter and + 复数；can + 动词原形；cover crops。"
  },
  {
    "id": "r2-fib-l-02",
    "type": "fib-l",
    "section": "listening",
    "level": 4,
    "time": 110,
    "title": "博物馆经费（高难）",
    "instruction": "听讲座，补全 4 个空。拼写必须正确。",
    "audio": "Museums increasingly rely on memberships and donations. Free entry can increase visitors, but it does not cover conservation costs. Some museums now charge for special exhibitions.",
    "content": "Museums increasingly rely on [[1]] and donations. Free entry can increase [[2]], but it does not cover conservation [[3]]. Some museums now charge for special [[4]].",
    "answers": [
      [
        [
          "memberships"
        ]
      ],
      [
        [
          "visitors"
        ]
      ],
      [
        [
          "costs"
        ]
      ],
      [
        [
          "exhibitions"
        ]
      ]
    ],
    "explanation": "memberships（复数）、visitors（复数）、costs（复数）、exhibitions（复数）。",
    "tip": "rely on + 名词；increase + 复数；conservation costs；special exhibitions。"
  },
  {
    "id": "r2-hcs-01",
    "type": "hcs",
    "section": "listening",
    "level": 4,
    "time": 100,
    "title": "土壤健康（高难）",
    "instruction": "听讲座，选出最准确的摘要。",
    "audio": "Healthy soil contains organic matter, minerals and microbes that help plants absorb nutrients. Intensive farming can compact soil and reduce organic matter. Farmers can restore it by planting cover crops, reducing tillage and adding compost. Soil is a finite resource and must be protected.",
    "question": "Which summary is correct?",
    "options": [
      "Soil health depends on organic matter and microbes, but intensive farming damages it; restoration requires cover crops, less tillage and compost.",
      "Soil is an unlimited resource.",
      "Intensive farming always improves soil.",
      "Compost destroys soil microbes."
    ],
    "answer": 0,
    "explanation": "A 覆盖组成、问题、三个措施、finite resource；B、C、D 与原文相反。",
    "tip": "摘要选“组成+问题+措施”。"
  },
  {
    "id": "r2-hcs-02",
    "type": "hcs",
    "section": "listening",
    "level": 4,
    "time": 100,
    "title": "公开演讲（高难）",
    "instruction": "听讲座，选出最准确的摘要。",
    "audio": "Many students feel anxious about public speaking. Preparation helps, but memorising every word can make anxiety worse. Speakers should practise the opening and closing, use brief notes and breathe slowly before starting. The audience usually notices less nervousness than the speaker thinks.",
    "question": "Which summary is correct?",
    "options": [
      "Preparation and brief notes help, but memorising every word can increase anxiety.",
      "Memorising every word is the best method.",
      "The audience notices more nervousness than the speaker thinks.",
      "Breathing has no effect on anxiety."
    ],
    "answer": 0,
    "explanation": "A 覆盖 preparation/notes + memorising worsens；B、D 与原文相反；C 与 notices less 相反。",
    "tip": "摘要保留 but 后的转折。"
  },
  {
    "id": "r2-mcq-l-03",
    "type": "mcq-l",
    "section": "listening",
    "level": 4,
    "time": 90,
    "title": "校园夜班车（高难）",
    "instruction": "听录音，选一个正确答案。音频只放一遍。",
    "audio": "The university will run a night bus between the library and student residences during exam week. The bus will leave every thirty minutes from 10 p.m. until 2 a.m. Students must show their student card, but the service is free. The bus will not stop at the sports centre.",
    "question": "What must students do to use the night bus?",
    "options": [
      "Show their student card.",
      "Pay a small fee.",
      "Book a seat online.",
      "Go to the sports centre."
    ],
    "answer": 0,
    "explanation": "must show their student card 对应 A；B 与 free 相反；C、D 没有依据/与 not stop 相反。",
    "tip": "规则题：must / free / not 是关键词。"
  },
  {
    "id": "r2-mcq-l-04",
    "type": "mcq-l",
    "section": "listening",
    "level": 4,
    "time": 90,
    "title": "博物馆会员（高难）",
    "instruction": "听录音，选一个正确答案。音频只放一遍。",
    "audio": "The museum offers an annual membership for students at half price. Members can visit special exhibitions for free and receive a discount in the café. However, membership does not include parking. Applications can be completed online or at the front desk.",
    "question": "What is NOT included in the membership?",
    "options": [
      "Parking.",
      "Special exhibitions.",
      "Café discount.",
      "Online application."
    ],
    "answer": 0,
    "explanation": "does not include parking 对应 A；B、C 是会员权益；D 是申请方式。",
    "tip": "否定题：先圈 NOT，再听 however。"
  },
  {
    "id": "r2-smw-01",
    "type": "smw",
    "section": "listening",
    "level": 4,
    "time": 80,
    "title": "土壤（选缺失词）",
    "instruction": "听录音，选出最后缺失的词或短语。",
    "audio": "The lecture explains soil health. The dark material that stores carbon and nutrients in soil is called ...",
    "question": "Which word completes the recording?",
    "options": [
      "humus",
      "oxygen",
      "gravel",
      "sand"
    ],
    "answer": 0,
    "explanation": "储存碳和养分的深色物质是 humus（腐殖质）。",
    "tip": "soil + stores carbon/nutrients → humus。"
  },
  {
    "id": "r2-hiw-01",
    "type": "hiw",
    "section": "listening",
    "level": 4,
    "time": 90,
    "title": "招聘会（点错词）",
    "instruction": "听音频，点出文中与音频不一致的词。错点倒扣。",
    "audio": "The career fair will be held in the main hall on Thursday. Students should bring several copies of their CV. Employers will conduct short interviews in the afternoon.",
    "content": "The career fair will be held in the main hall on Tuesday Students should bring two copies of their CV. Employers will conduct short interviews in the morning",
    "wrong": [
      11,
      15,
      27
    ],
    "explanation": "音频是 Thursday / several / afternoon，文本改成 Tuesday / two / morning。",
    "tip": "时间、数量、时段是 HIW 高频替换点。"
  },
  {
    "id": "r2-hiw-02",
    "type": "hiw",
    "section": "listening",
    "level": 4,
    "time": 90,
    "title": "图书馆工作坊（点错词）",
    "instruction": "听音频，点出文中与音频不一致的词。错点倒扣。",
    "audio": "The library will hold a workshop on academic referencing next Monday. The session is free, but places are limited. Students can register online or ask at the front desk.",
    "content": "The library will hold a workshop on academic referencing next Friday. The session is free, but tickets are limited. Students can register offline or ask at the front desk.",
    "wrong": [
      10,
      16,
      22
    ],
    "explanation": "音频是 Monday / places / online，文本改成 Friday / tickets / offline。",
    "tip": "先看时间、名词、方式；只点确定的差异。"
  },
  {
    "id": "r2-wfd-01",
    "type": "wfd",
    "section": "listening",
    "level": 4,
    "time": 120,
    "title": "听写 ×3（校园）",
    "instruction": "点播放，每句只播一遍。整句听完再打字，写完检查单复数。",
    "audio": "The university will extend library hours during the examination period.||Students can book study rooms online up to one week in advance.||Late applications will not be considered after the deadline.",
    "answers": [
      "The university will extend library hours during the examination period.",
      "Students can book study rooms online up to one week in advance.",
      "Late applications will not be considered after the deadline."
    ],
    "explanation": "注意 examination、advance、considered 拼写。",
    "tip": "写半句也有分；先写主干，最后查拼写。"
  },
  {
    "id": "r2-wfd-02",
    "type": "wfd",
    "section": "listening",
    "level": 4,
    "time": 120,
    "title": "听写 ×3（土壤）",
    "instruction": "点播放，每句只播一遍。整句听完再打字，写完检查单复数。",
    "audio": "Soil health depends on organic matter and a diverse community of microbes.||Cover crops can reduce erosion and improve water retention.||Farmers should avoid compacting the soil with heavy machinery.",
    "answers": [
      "Soil health depends on organic matter and a diverse community of microbes.",
      "Cover crops can reduce erosion and improve water retention.",
      "Farmers should avoid compacting the soil with heavy machinery."
    ],
    "explanation": "注意 organic、microbes、erosion、retention、machinery 拼写。",
    "tip": "写半句也有分；先写主干，最后查拼写。"
  },
  {
    "id": "r2-wfd-03",
    "type": "wfd",
    "section": "listening",
    "level": 4,
    "time": 120,
    "title": "听写 ×3（博物馆）",
    "instruction": "点播放，每句只播一遍。整句听完再打字，写完检查单复数。",
    "audio": "The museum will open a new exhibition on ancient trade routes.||Members can attend the opening lecture free of charge.||Tickets are available online and at the front desk.",
    "answers": [
      "The museum will open a new exhibition on ancient trade routes.",
      "Members can attend the opening lecture free of charge.",
      "Tickets are available online and at the front desk."
    ],
    "explanation": "注意 exhibition、ancient、lecture、available 拼写。",
    "tip": "写半句也有分；先写主干，最后查拼写。"
  }
]);

window.MOCKS = [
  {
    id: "FULL1",
    name: "全科模拟卷 · 四部分（适中）",
    tag: "全科",
    desc: "口语 25 + 写作 3 + 阅读 14 + 听力 15；按正式题量，口语/作文自评",
    sections: [
      { key: "speaking", name: "口语", time: 1500, qids: ["ra-01", "ra-02", "ra-03", "ra-04", "ra-05", "ra-06", "rs-10", "rs-11", "rs-12", "rs-13", "rs-14", "rs-15", "rs-16", "rs-17", "rs-18", "rs-19", "di-01", "di-02", "di-17", "rl-06", "asq-01", "asq-02", "asq-03", "asq-04", "asq-05"] },
      { key: "writing", name: "写作", time: 2400, qids: ["swt-01", "swt-02", "we-01"] },
      { key: "reading", name: "阅读", time: 1800, qids: ["fib-rw-01", "fib-rw-02", "fib-rw-03", "fib-rw-04", "fib-rw-05", "mcq-m-01", "mcq-m-02", "ro-01", "ro-02", "fib-r-01", "fib-r-02", "fib-r-03", "fib-r-04", "mcq-s-02"] },
      { key: "listening", name: "听力", time: 2100, qids: ["sst-01", "mcq-l-07", "mcq-l-12", "fib-l-01", "fib-l-02", "hcs-01", "hcs-02", "mcq-l-01", "mcq-l-02", "smw-01", "hiw-01", "hiw-02", "wfd-01", "wfd-02", "wfd-03"] }
    ]
  },
  {
    id: "R2",
    name: "阅读 + 听力模拟卷 · 进阶",
    tag: "进阶",
    desc: "阅读 14 + 听力 15，29 道全新题；正式题量，不抽取旧题",
    sections: [
      { key: "reading", name: "阅读", time: 1800, qids: ["r2-fib-rw-01", "r2-fib-rw-02", "r2-fib-rw-03", "r2-fib-rw-04", "r2-fib-rw-05", "r2-mcq-m-01", "r2-mcq-m-02", "r2-ro-01", "r2-ro-02", "r2-fib-r-01", "r2-fib-r-02", "r2-fib-r-03", "r2-fib-r-04", "r2-mcq-s-01"] },
      { key: "listening", name: "听力", time: 2100, qids: ["r2-sst-01", "r2-mcq-l-01", "r2-mcq-l-02", "r2-fib-l-01", "r2-fib-l-02", "r2-hcs-01", "r2-hcs-02", "r2-mcq-l-03", "r2-mcq-l-04", "r2-smw-01", "r2-hiw-01", "r2-hiw-02", "r2-wfd-01", "r2-wfd-02", "r2-wfd-03"] }
    ]
  },
  {
    id: "F", name: "全真模考（完整版）", tag: "完整版", desc: "阅读 14 + 听力 17，按真实题量与节奏",
    sections: [
      { key: "reading", name: "阅读", time: 1740, qids: ["fib-rw-01", "fib-rw-02", "fib-rw-03", "ma-fib1", "mb-fib1", "fr-01", "fr-02", "fr-03", "fr-04", "ro-01", "ro-02", "ma-ro1", "mcq-m-01", "mcq-s-01"] },
      { key: "listening", name: "听力", time: 2100, qids: ["sst-01", "lm-01", "lm-02", "fib-l-01", "ma-fibl1", "hc-01", "hc-02", "ls-01", "ls-02", "sm-01", "sm-02", "hiw-01", "ma-hiw1", "wfd-01", "ma-wfd1", "mb-wfd1", "mc-wfd1"] }
    ]
  },
  {
    id: "A", name: "迷你模考 A", tag: "迷你", desc: "城市与校园话题，适合第一次模考",
    sections: [
      { key: "reading", name: "阅读", time: 900, qids: ["ma-fib1", "ma-ro1", "ma-mcq1", "fib-rw-02", "ro-02", "mcq-s-02"] },
      { key: "listening", name: "听力", time: 900, qids: ["ma-wfd1", "ma-fibl1", "ma-hiw1", "wfd-02", "fib-l-02", "hiw-02"] }
    ]
  },
  {
    id: "B", name: "迷你模考 B", tag: "迷你", desc: "工作与科技话题，阅读陷阱更多",
    sections: [
      { key: "reading", name: "阅读", time: 900, qids: ["mb-fib1", "mb-ro1", "mb-mcq1", "fib-rw-03", "ro-01", "mcq-m-01"] },
      { key: "listening", name: "听力", time: 900, qids: ["mb-wfd1", "mb-fibl1", "mb-hiw1", "wfd-01", "fib-l-01", "hiw-01"] }
    ]
  },
  {
    id: "C", name: "迷你模考 C", tag: "迷你", desc: "环境与历史话题，接近考试难度",
    sections: [
      { key: "reading", name: "阅读", time: 900, qids: ["mc-fib1", "mc-ro1", "mc-mcq1", "fib-rw-01", "mcq-m-02", "ro-01"] },
      { key: "listening", name: "听力", time: 900, qids: ["mc-wfd1", "mc-fibl1", "mc-hiw1", "wfd-03", "fib-l-01", "hiw-01"] }
    ]
  }
];
