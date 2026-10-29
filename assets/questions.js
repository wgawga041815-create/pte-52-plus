/* PTE 52 Lab Plus — 扩充题库
 * 所有题目按官方题型自编，非真题原文。
 * 含第 2 课 RS / ASQ 全部例题。
 */
window.QUESTIONS = [
  {
    "id": "ra-01",
    "type": "ra",
    "section": "speaking",
    "level": 1,
    "time": 70,
    "title": "城市绿化屋顶",
    "instruction": "先用 30 秒准备，再用 40 秒朗读。录音后对照示范自评。",
    "content": "Urban planners are increasingly turning to green roofs as a way of reducing heat in dense cities. These roofs, which are covered with grass or small plants, absorb rainwater and lower the temperature of the buildings beneath them. However, the cost of installation remains a barrier for many developers.",
    "model": "Urban planners / are increasingly turning to green roofs / as a way of reducing heat in dense cities. / These roofs, / which are covered with grass or small plants, / absorb rainwater / and lower the temperature of the buildings beneath them. / However, / the cost of installation remains a barrier for many developers.",
    "checklist": [
      "每 5–8 个词停一次，全段停顿不超过 3 次",
      "读错没有回头重读",
      "句末降调，声音清楚"
    ],
    "explanation": "RA 同时给口语和阅读供分。内容看读对多少词，流利度看停顿和回读，发音只看清晰度，不看口音。",
    "tip": "52 分目标：把斜线处读顺，比追求“好听”重要得多。"
  },
  {
    "id": "ra-02",
    "type": "ra",
    "section": "speaking",
    "level": 1,
    "time": 70,
    "title": "睡眠与记忆",
    "instruction": "30 秒准备，40 秒朗读。先划意群，再开口。",
    "content": "Sleep is not just rest. During deep sleep, the brain replays what you learned during the day and moves it into long-term memory. Students who sleep for seven to eight hours before an exam remember more than those who stay up late.",
    "model": "Sleep / is not just rest. / During deep sleep, / the brain replays what you learned during the day / and moves it into long-term memory. / Students who sleep for seven to eight hours / before an exam / remember more than those who stay up late.",
    "checklist": [
      "四句话之间各停 0.2 秒",
      "没有因为生词停住",
      "最后一句没有越读越快"
    ],
    "explanation": "这段只有 48 词，40 秒很充裕。慢一点、清楚一点，流利度反而更高。",
    "tip": "遇到生词（replays、memory）读个大概就过，不要停下来想意思。"
  },
  {
    "id": "rs-01",
    "type": "rs",
    "section": "speaking",
    "level": 1,
    "time": 90,
    "title": "校园句子 ×5",
    "instruction": "点“播放”，每句只播一遍。听完立刻复述，然后展开原文自评。",
    "audio": "The library will extend its opening hours during exams.||Students must submit their assignments before the end of the week.||The lecture will focus on the causes of climate change.||Please collect your results from the student office.||The museum is closed on public holidays.",
    "model": "按意群记：The library / will extend / its opening hours / during exams.",
    "checklist": [
      "每句至少复述出一半",
      "没有加 um、没有改口",
      "长句只保前半句也算达标"
    ],
    "explanation": "RS 内容分：整句 3 分，复述一半以上 2 分，不到一半 1 分。说一半也有分，不要因为没听全就放弃。",
    "tip": "用首字母记 3–4 块，2 秒写完；写完整单词一定来不及。"
  },
  {
    "id": "rs-02",
    "type": "rs",
    "section": "speaking",
    "level": 2,
    "time": 90,
    "title": "校园句子 ×5（更快）",
    "instruction": "语速略快。每句听完立刻复述，不要等。",
    "audio": "The new café opens next to the library on Monday.||Most students prefer to study in the morning.||The professor asked us to read two chapters.||Applications close at five o'clock on Friday.||The campus bus runs every fifteen minutes.",
    "model": "The new café / opens next to the library / on Monday.",
    "checklist": [
      "5 句里至少 3 句复述出一半",
      "没有回头重说",
      "句末没有拖长音"
    ],
    "explanation": "这几句都在 8–10 词，是 RS 的典型长度。先抓“谁 + 做什么 + 什么时候”。",
    "tip": "复述时不要追求语法完美，词序对、不停顿就有分。"
  },
  {
    "id": "asq-01",
    "type": "asq",
    "section": "speaking",
    "level": 1,
    "time": 20,
    "title": "常识快答",
    "instruction": "点播放听问题，10 秒内输入答案（一个词或数字）。",
    "audio": "How many months are in a year?",
    "answers": [
      "twelve",
      "12",
      "twelve months"
    ],
    "explanation": "ASQ 只判对错，答对 1 分，答错 0 分，不扣分。一个词就够。",
    "tip": "不会也要猜一个最可能的词，沉默一定是 0 分。"
  },
  {
    "id": "asq-02",
    "type": "asq",
    "section": "speaking",
    "level": 1,
    "time": 20,
    "title": "学术定义",
    "instruction": "听问题，输入一个词。",
    "audio": "What do we call the study of plants?",
    "answers": [
      "botany",
      "plant biology"
    ],
    "explanation": "常考学科名：botany 植物学、astronomy 天文学、economics 经济学。",
    "tip": "听到 study of plants，直接对应 botany；不要解释。"
  },
  {
    "id": "asq-03",
    "type": "asq",
    "section": "speaking",
    "level": 1,
    "time": 20,
    "title": "反义词",
    "instruction": "听问题，输入一个词。",
    "audio": "What is the opposite of north?",
    "answers": [
      "south"
    ],
    "explanation": "方向、数字、单位是 ASQ 的高频三类。",
    "tip": "这类题 2 秒内必须出声，练的是反应，不是知识。"
  },
  {
    "id": "di-01",
    "type": "di",
    "section": "speaking",
    "level": 1,
    "time": 65,
    "title": "家庭网络接入率",
    "instruction": "25 秒准备，40 秒作答。用三句模板：开头 / 趋势 / 结论。",
    "chart": {
      "type": "bar",
      "title": "Households with internet access (%)",
      "labels": [
        "2015",
        "2017",
        "2019",
        "2021",
        "2023"
      ],
      "values": [
        55,
        62,
        70,
        78,
        85
      ],
      "unit": "%"
    },
    "model": "The chart shows the percentage of households with internet access from 2015 to 2023. Overall, the figure increased significantly, from 55 percent to 85 percent. In conclusion, internet access is likely to keep rising in the future.",
    "checklist": [
      "三句都说了",
      "说满 30 秒",
      "中间没有长时间停顿"
    ],
    "explanation": "DI 内容分看“关键元素 + 趋势 + 结论”，不要求描述每个数字。三句结构完整就能拿到 52 分需要的分。",
    "tip": "只挑最高、最低两个数字，其余用 increased / remained stable 带过。"
  },
  {
    "id": "di-02",
    "type": "di",
    "section": "speaking",
    "level": 2,
    "time": 65,
    "title": "博物馆访客数",
    "instruction": "25 秒准备，40 秒作答。注意 2020 年的下降。",
    "chart": {
      "type": "line",
      "title": "Museum visitors (thousands)",
      "labels": [
        "2018",
        "2019",
        "2020",
        "2021",
        "2022"
      ],
      "values": [
        20,
        25,
        12,
        22,
        38
      ],
      "unit": "k"
    },
    "model": "The line graph shows the number of museum visitors from 2018 to 2022. Overall, the figure rose, although it dropped sharply in 2020. In conclusion, visitor numbers recovered and are likely to grow.",
    "checklist": [
      "提到上升趋势",
      "提到 2020 的下降",
      "用 in conclusion 收尾"
    ],
    "explanation": "线图有波动时，用 although 把“总体上升 + 一次下降”连起来，比逐点描述更稳。",
    "tip": "不要念 5 个数字，挑起点、低点、终点三个就够。"
  },
  {
    "id": "rts-01",
    "type": "rts",
    "section": "speaking",
    "level": 1,
    "time": 55,
    "title": "同学借笔记",
    "instruction": "读情景，10 秒准备，40 秒作答。用“回应—建议—理由—收尾”。",
    "content": "Your classmate asks to borrow your notes the night before the exam. Respond to your classmate.",
    "model": "Sure, I can share my notes. I'd suggest we review them together for an hour, because they only make sense with the lecture context. Let's meet at the library at seven. Let me know if that works for you.",
    "checklist": [
      "先回应了对方",
      "给出了具体建议",
      "说满 30 秒"
    ],
    "explanation": "RTS 考“合不合适”，不是考观点深度。四步框架能覆盖内容分，理由要具体。",
    "tip": "不要背 DI 模板；这题一开口就要像在跟人说话。"
  },
  {
    "id": "rts-02",
    "type": "rts",
    "section": "speaking",
    "level": 2,
    "time": 55,
    "title": "朋友找自习室",
    "instruction": "10 秒准备，40 秒作答。给一个具体地点 + 两个理由。",
    "content": "A friend is visiting your city and asks where to study for a few hours. Respond to your friend.",
    "model": "I'd recommend the city library. It's quiet, free, and right next to the metro. If you need a coffee, there's a cafe downstairs. I can show you the way on Saturday.",
    "checklist": [
      "给了明确地点",
      "给了两个理由",
      "有收尾句"
    ],
    "explanation": "理由用 it's + 形容词 就够了：quiet、free、close to transport。",
    "tip": "卡住时用 Let me put it another way 争取 2 秒，不要沉默。"
  },
  {
    "id": "swt-01",
    "type": "swt",
    "section": "writing",
    "level": 1,
    "time": 600,
    "title": "空置办公室改公寓",
    "instruction": "10 分钟内用一句话概括（5–75 词），只能有一个句号。",
    "content": "Many cities are turning empty offices into apartments. Housing is scarce and remote work has left downtown buildings half empty. However, conversion is expensive and not every building can be adapted. Some developers argue that the costs are still lower than building new housing on the edge of the city.",
    "model": "Although converting empty offices into apartments is expensive and not every building can be adapted, many cities are doing so because housing is scarce and remote work has left downtown buildings half empty.",
    "checklist": [
      "只有一个句号",
      "字数在 30–60 之间",
      "覆盖了“原因 + 转折”两个要点"
    ],
    "explanation": "SWT 评分：内容 2 分、形式 1 分、语法 2 分、词汇 2 分。写成两句，形式 0 分且内容大幅扣分，几乎必挂。",
    "tip": "公式：Although + 让步, 主句 + because + 原因。"
  },
  {
    "id": "swt-02",
    "type": "swt",
    "section": "writing",
    "level": 1,
    "time": 600,
    "title": "远程办公",
    "instruction": "用一句话概括，5–75 词，一个句号。",
    "content": "Some companies allow employees to work from home. Studies show that productivity often rises, but teamwork can suffer. Many firms now use a hybrid model, with two or three days in the office.",
    "model": "Although remote work can raise productivity, some companies worry that teamwork suffers, so many now use a hybrid model with two or three days in the office.",
    "checklist": [
      "用 although 或 while 开头",
      "包含 productivity 和 teamwork",
      "结尾只有一个句号"
    ],
    "explanation": "三个信息点：远程办公、效率上升、团队受影响、混合模式。用 although + so 串起来最省事。",
    "tip": "先写主干，再补 although 从句；不要一边想一边写。"
  },
  {
    "id": "we-01",
    "type": "we",
    "section": "writing",
    "level": 1,
    "time": 1200,
    "title": "大学教育免费",
    "instruction": "20 分钟写 200–300 词，四段：观点 / 理由 1 / 理由 2 / 结论。",
    "content": "Some people think university education should be free for everyone. To what extent do you agree or disagree?",
    "outline": [
      "引言：背景 + 明确立场（支持）",
      "主体 1：减少家庭经济压力 + 例子",
      "主体 2：对社会长期有利（更多毕业生）",
      "结论：重申 + 一句收尾"
    ],
    "model": "It is often argued that university education should be free for all students. While this would be expensive, I believe it is a good idea because it gives everyone a fair chance.\n\nThe main reason is that free education reduces financial pressure on families. For example, in countries where tuition is free, more students from low-income backgrounds go to university.\n\nAnother consideration is that society benefits from a more educated workforce. Graduates pay more tax over their lifetime, which can cover part of the cost.\n\nIn conclusion, free university education is expensive but fair, and it is likely to benefit both individuals and society.",
    "checklist": [
      "四段清楚",
      "字数 200+",
      "每段都有例子或解释"
    ],
    "explanation": "WE 评分：内容 3、形式 2、展开 2、语法/词汇/拼写各 2。52 分不需要复杂论证，需要结构完整、字数够、不跑题。",
    "tip": "三个万能理由：save time / save money / more convenient。"
  },
  {
    "id": "we-02",
    "type": "we",
    "section": "writing",
    "level": 2,
    "time": 1200,
    "title": "实用技能 vs 学术科目",
    "instruction": "20 分钟，200–300 词。两边都讨论，最后给自己的观点。",
    "content": "Some people think schools should teach practical skills, such as cooking and managing money, instead of academic subjects. Discuss both views and give your own opinion.",
    "outline": [
      "引言：两种观点 + 我的立场",
      "主体 1：实用技能的价值（生活自理、就业）",
      "主体 2：学术科目的价值（思维、深造）",
      "结论：两者都需要，学校应平衡"
    ],
    "model": "It is often argued that schools should focus on practical skills rather than academic subjects. In my view, both are important, and schools should teach them together.\n\nOn the one hand, practical skills help students in daily life. For example, managing money and cooking can prevent debt and improve health.\n\nOn the other hand, academic subjects develop thinking and open the door to university. Without them, students may lose the chance to become doctors or engineers.\n\nIn conclusion, practical skills and academic subjects serve different purposes, so a balanced curriculum is the best choice.",
    "checklist": [
      "两边都讨论了",
      "有自己的明确观点",
      "字数 200+"
    ],
    "explanation": "discuss both views 题型必须两边都写，最后一段明确站队，否则内容分会掉。",
    "tip": "主体两段用 On the one hand / On the other hand，结构最清楚。"
  },
  {
    "id": "fib-rw-01",
    "type": "fib-rw",
    "section": "reading",
    "level": 1,
    "time": 120,
    "title": "创造力可以学吗",
    "instruction": "每空选一个词。先判词性，再看搭配和逻辑。",
    "content": "Many people believe that creativity is a gift that only a few people possess. In fact, research [[1]] that creativity can be learned. Psychologists argue that [[2]] environments, where mistakes are accepted, are more likely to produce new ideas. [[3]], companies that encourage experimentation tend to be more innovative.",
    "blanks": [
      {
        "options": [
          "suggests",
          "suggest",
          "suggestion",
          "suggesting"
        ],
        "answer": 0
      },
      {
        "options": [
          "support",
          "supportive",
          "supporting",
          "supported"
        ],
        "answer": 1
      },
      {
        "options": [
          "However",
          "Therefore",
          "Although",
          "Despite"
        ],
        "answer": 1
      }
    ],
    "explanation": "① research 是不可数名词，谓语用单三 suggests；② 空后是名词 environments，需要形容词 supportive；③ 前句说“支持试错”，后句说“鼓励实验的公司更创新”，是因果，用 Therefore。",
    "tip": "先判词性，四个选项里通常能排除两个；再看逻辑，最后才看意思。"
  },
  {
    "id": "fib-rw-02",
    "type": "fib-rw",
    "section": "reading",
    "level": 1,
    "time": 120,
    "title": "睡眠与学习",
    "instruction": "每空选一个词。注意词性和固定搭配。",
    "content": "Sleep plays an important [[1]] in learning. During deep sleep, the brain [[2]] information into long-term memory. Students who sleep well tend to [[3]] better in exams.",
    "blanks": [
      {
        "options": [
          "role",
          "rule",
          "place",
          "rate"
        ],
        "answer": 0
      },
      {
        "options": [
          "moves",
          "moving",
          "movement",
          "moved"
        ],
        "answer": 0
      },
      {
        "options": [
          "perform",
          "performance",
          "performing",
          "performed"
        ],
        "answer": 0
      }
    ],
    "explanation": "① play an important role in 是固定搭配；② the brain 是单数主语，谓语用 moves；③ tend to 后接动词原形 perform。",
    "tip": "固定搭配是 FIB 最快的得分点，平时按短语记，不要按单词记。"
  },
  {
    "id": "fib-rw-03",
    "type": "fib-rw",
    "section": "reading",
    "level": 2,
    "time": 120,
    "title": "城市绿地",
    "instruction": "每空选一个词。注意转折与因果。",
    "content": "Green spaces are important for cities. They [[1]] air quality and give residents a place to relax. [[2]], land is expensive, so some cities build parks on rooftops. These spaces are smaller, [[3]] they still improve life in dense areas.",
    "blanks": [
      {
        "options": [
          "improve",
          "improves",
          "improving",
          "improved"
        ],
        "answer": 0
      },
      {
        "options": [
          "However",
          "Therefore",
          "Moreover",
          "For example"
        ],
        "answer": 0
      },
      {
        "options": [
          "but",
          "because",
          "so",
          "unless"
        ],
        "answer": 0
      }
    ],
    "explanation": "① They 是复数，谓语用 improve；② 前句说绿地重要，后句说地贵，是转折，用 However；③ smaller 与 improve 是让步转折，用 but。",
    "tip": "逻辑词先判断关系：转折 however/but，因果 therefore/because，并列 moreover。"
  },
  {
    "id": "ro-01",
    "type": "ro",
    "section": "reading",
    "level": 1,
    "time": 150,
    "title": "公共图书馆的历史",
    "instruction": "按正确顺序点击句子。按相邻对给分，先连确定的。",
    "sentences": [
      "As a result, literacy rates began to rise.",
      "The first public libraries appeared in the 19th century.",
      "Today, libraries also offer digital services.",
      "This idea spread quickly across Europe and North America.",
      "They were funded by local taxpayers and open to everyone."
    ],
    "answer": [
      1,
      4,
      3,
      0,
      2
    ],
    "explanation": "首句 B 交代背景，没有指代；E 的 They 指 libraries；D 的 This idea 指“公共图书馆”这件事；A 的 As a result 接在传播之后；C 的 Today 是时间收尾。",
    "tip": "先找“没有 this / these / they”的首句，再顺着指代链往下排。"
  },
  {
    "id": "ro-02",
    "type": "ro",
    "section": "reading",
    "level": 1,
    "time": 150,
    "title": "城市热岛",
    "instruction": "按正确顺序点击句子。注意 This 指代什么。",
    "sentences": [
      "As a result, the city centre can be several degrees warmer than the countryside.",
      "Concrete and asphalt absorb heat during the day.",
      "At night, they release the heat slowly.",
      "This is known as the urban heat island effect.",
      "Planting trees can help reduce it."
    ],
    "answer": [
      1,
      2,
      0,
      3,
      4
    ],
    "explanation": "B 先讲白天吸热，C 的 they 指 concrete and asphalt；A 的 As a result 接结果；D 的 This 指前面整件事；E 的 it 指热岛效应。",
    "tip": "每连对一对就有 1 分，不需要全排对；先连最有把握的两对。"
  },
  {
    "id": "mcq-s-01",
    "type": "mcq-s",
    "section": "reading",
    "level": 1,
    "time": 100,
    "title": "远程办公的影响",
    "instruction": "读短文，选一个正确答案。",
    "content": "Remote work has changed how companies hire. Employers can now recruit from a wider pool of candidates, and staff save time on commuting. However, remote employees often report feeling isolated, and some managers find it harder to build team spirit.",
    "question": "What is the main idea of the passage?",
    "options": [
      "Remote work has both benefits and drawbacks.",
      "Remote work is always better for companies.",
      "Employees no longer need to commute.",
      "Managers prefer remote work."
    ],
    "answer": 0,
    "explanation": "文中有 However 转折：前面讲好处（招聘范围、通勤），后面讲问题（孤立、团队精神），所以是“有利有弊”。B、D 与原文矛盾，C 只是细节。",
    "tip": "出现 However 的段落，主旨通常在转折后；选项太绝对的（always）先排除。"
  },
  {
    "id": "mcq-s-02",
    "type": "mcq-s",
    "section": "reading",
    "level": 1,
    "time": 100,
    "title": "为什么睡眠有助学习",
    "instruction": "读短文，选一个正确答案。",
    "content": "During deep sleep, the brain replays what you learned during the day and moves it into long-term memory. Students who sleep for seven to eight hours before an exam remember more than those who stay up late.",
    "question": "According to the passage, why is sleep important for learning?",
    "options": [
      "It helps the brain store information in long-term memory.",
      "It reduces the amount of time needed to study.",
      "It makes students feel less stressed.",
      "It replaces the need for revision."
    ],
    "answer": 0,
    "explanation": "原文直接说 moves it into long-term memory。B、C、D 都是常见常识，但文中没有依据——PTE 阅读只按原文选。",
    "tip": "不要用常识答题；每个选项都要能在原文找到对应句。"
  },
  {
    "id": "mcq-m-01",
    "type": "mcq-m",
    "section": "reading",
    "level": 2,
    "time": 110,
    "title": "远程办公（多选）",
    "instruction": "选 2 个正确选项。注意：错选倒扣 1 分，只选有依据的。",
    "content": "Remote work has changed how companies hire. Employers can now recruit from a wider pool of candidates, and staff save time on commuting. However, remote employees often report feeling isolated, and some managers find it harder to build team spirit.",
    "question": "Which two statements are true according to the passage?",
    "options": [
      "Companies can hire from more places.",
      "Remote workers spend more time commuting.",
      "Some staff feel lonely when working remotely.",
      "Managers find it easier to build teams."
    ],
    "answer": [
      0,
      2
    ],
    "explanation": "A 对应 a wider pool of candidates；C 对应 feeling isolated。B 与 save time on commuting 相反；D 与 harder to build team spirit 相反。",
    "tip": "多选是阅读里唯一倒扣的题：写不出“原文哪一句支持”，就不要选。"
  },
  {
    "id": "mcq-m-02",
    "type": "mcq-m",
    "section": "reading",
    "level": 2,
    "time": 110,
    "title": "图书馆的变化（多选）",
    "instruction": "选 2 个正确选项。错选倒扣。",
    "content": "Public libraries have changed a lot in the last twenty years. They still lend books, but they also offer free internet access, quiet study spaces and workshops on digital skills. As a result, visits have increased in many cities, even though fewer people borrow printed books.",
    "question": "Which two statements are true according to the passage?",
    "options": [
      "Libraries now offer more than books.",
      "Fewer people visit libraries than before.",
      "Some libraries run digital skills workshops.",
      "Printed books are no longer available."
    ],
    "answer": [
      0,
      2
    ],
    "explanation": "A 概括 internet / study spaces / workshops；C 对应 workshops on digital skills。B 与 visits have increased 相反；D 与 still lend books 相反。",
    "tip": "先读题干，再回文定位；每个选项找一个对应句。"
  },
  {
    "id": "wfd-01",
    "type": "wfd",
    "section": "listening",
    "level": 1,
    "time": 90,
    "title": "听写 ×3（校园）",
    "instruction": "点播放，每句只播一遍。整句听完再打字，写完检查单复数。",
    "audio": "The tutorial will be held in the main library on Thursday.||Students should check the website for updated information.||Please submit your application before the end of March.",
    "answers": [
      "The tutorial will be held in the main library on Thursday.",
      "Students should check the website for updated information.",
      "Please submit your application before the end of March."
    ],
    "explanation": "WFD 每个正确单词 1 分（拼写错误算错）。常见失分：tutorial 拼写、will be held 被动、Thursday 的拼写、information 不可数。",
    "tip": "写半句也有分；不会的词用拼音占位，先把句子结构打出来。"
  },
  {
    "id": "wfd-02",
    "type": "wfd",
    "section": "listening",
    "level": 2,
    "time": 90,
    "title": "听写 ×3（学术）",
    "instruction": "整句听完再打，检查时态和介词。",
    "audio": "The research project requires a large amount of data.||Climate change affects the availability of fresh water.||The lecture will discuss the causes of urban growth.",
    "answers": [
      "The research project requires a large amount of data.",
      "Climate change affects the availability of fresh water.",
      "The lecture will discuss the causes of urban growth."
    ],
    "explanation": "注意：amount of 而不是 number of（data 不可数）；affects 单三；availability 拼写。",
    "tip": "WFD 是听力和写作双供分，是整场考试性价比最高的题。"
  },
  {
    "id": "wfd-03",
    "type": "wfd",
    "section": "listening",
    "level": 1,
    "time": 90,
    "title": "听写 ×3（校园通知）",
    "instruction": "先听完整句，再打字。",
    "audio": "The campus bus runs every fifteen minutes.||Please turn off your phone during the exam.||The student centre is open until nine o'clock.",
    "answers": [
      "The campus bus runs every fifteen minutes.",
      "Please turn off your phone during the exam.",
      "The student centre is open until nine o'clock."
    ],
    "explanation": "fifteen 与 fifty 易混；turn off 是分开的短语；nine o'clock 的撇号不影响单词计分，但拼写要完整。",
    "tip": "数字和时间为单位，听到就写数字，别写单词，省时间。"
  },
  {
    "id": "sst-01",
    "type": "sst",
    "section": "listening",
    "level": 1,
    "time": 600,
    "title": "睡眠与学习（讲座）",
    "instruction": "听讲座，10 分钟内写 50–70 词摘要。",
    "audio": "Today I want to talk about sleep and learning. Research shows that sleep is not just rest. During deep sleep, the brain replays what you learned during the day and moves it into long-term memory. Students who sleep seven to eight hours before an exam remember more than those who stay up late. So if you want to learn efficiently, the most effective revision plan may include a good night's sleep.",
    "model": "The lecture discusses the link between sleep and learning. First, the speaker explains that deep sleep helps the brain move information into long-term memory. In conclusion, students who sleep seven to eight hours remember more, so a good night's sleep is part of effective revision.",
    "checklist": [
      "字数 50–70",
      "包含主题 + 两个细节",
      "没有整句照抄"
    ],
    "explanation": "SST 评分：内容 2、形式 2（50–70 词，少于 40 或多于 100 直接 0）、语法/词汇/拼写各 2。",
    "tip": "模板：The lecture discusses … First … In conclusion …，只填关键词。"
  },
  {
    "id": "sst-02",
    "type": "sst",
    "section": "listening",
    "level": 2,
    "time": 600,
    "title": "城市热岛（讲座）",
    "instruction": "听讲座，写 50–70 词摘要。",
    "audio": "Today we'll look at why some cities are warmer than the countryside. This is called the urban heat island effect. There are three main causes. First, concrete and asphalt absorb heat during the day. Second, there are fewer trees, so less water evaporates. Third, cars and air conditioners add heat directly. The good news is that simple measures, such as planting trees and painting roofs white, can reduce the effect.",
    "model": "The lecture is mainly about the urban heat island effect. First, the speaker explains that concrete, fewer trees and cars make cities warmer. In conclusion, planting trees and painting roofs white can reduce the effect.",
    "checklist": [
      "写出 3 个原因中的 2 个",
      "有 conclusion",
      "字数 50–70"
    ],
    "explanation": "讲座结构很清楚：定义 → 三个原因 → 解决办法。摘要按这个顺序写，内容分最稳。",
    "tip": "听到 first / second / third 就记数字 + 名词，不要记整句。"
  },
  {
    "id": "hiw-01",
    "type": "hiw",
    "section": "listening",
    "level": 1,
    "time": 70,
    "title": "博物馆通知（点错词）",
    "instruction": "点播放听音频，然后点出文中与音频不一致的词。错点倒扣。",
    "audio": "The museum is open every day except Monday. Visitors can buy tickets online or at the entrance. Guided tours start at ten in the morning.",
    "content": "The museum is opens every day except Monday. Visitors can buy tickets online and at the entrance. Guided tours start at ten in the morning.",
    "wrong": [
      3,
      13
    ],
    "explanation": "音频是 is open，文中是 is opens；音频是 or，文中是 and。只点这两处，其他词不要动。",
    "tip": "HIW 只点 100% 确定的；不确定的点下去，对了 +1，错了 −1。"
  },
  {
    "id": "hiw-02",
    "type": "hiw",
    "section": "listening",
    "level": 1,
    "time": 70,
    "title": "图书馆工作坊（点错词）",
    "instruction": "听音频，点出被改掉的词。",
    "audio": "The library offers free workshops on academic writing. Students can book a place online or ask at the front desk. The workshops run every Tuesday afternoon.",
    "content": "The library offers free workshops on academic writing. Students can book a place online and ask at the front desk. The workshops run every Tuesday morning.",
    "wrong": [
      14,
      25
    ],
    "explanation": "音频是 or，文中是 and；音频是 afternoon，文中是 morning。",
    "tip": "先扫一遍文本，听的时候只盯“和原文不一样”的地方。"
  },
  {
    "id": "fib-l-01",
    "type": "fib-l",
    "section": "listening",
    "level": 1,
    "time": 90,
    "title": "讲座开场（听写填空）",
    "instruction": "点播放听讲座，补全 3 个空。拼写必须正确。",
    "audio": "Good morning everyone. Today's lecture is about communication in the workplace. We will discuss three factors that affect productivity, and then look at some practical solutions.",
    "content": "Good morning everyone. Today's lecture is about [[1]] in the workplace. We will discuss three [[2]] that affect productivity, and then look at some [[3]] solutions.",
    "answers": [
      [
        "communication"
      ],
      [
        "factors"
      ],
      [
        "practical"
      ]
    ],
    "explanation": "三个词都是学术高频词：communication（不可数）、factors（复数）、practical（形容词）。听写填空每空 1 分，拼错就是 0。",
    "tip": "先看空格前后判断词性，听的时候只等那个词，不要整句翻译。"
  },
  {
    "id": "fib-l-02",
    "type": "fib-l",
    "section": "listening",
    "level": 2,
    "time": 90,
    "title": "气候变化（听写填空）",
    "instruction": "听音频，补全 3 个空。",
    "audio": "Climate change is affecting the availability of fresh water. In many regions, rainfall has become less predictable, and farmers must adapt their methods.",
    "content": "Climate change is affecting the [[1]] of fresh water. In many regions, rainfall has become less [[2]], and farmers must [[3]] their methods.",
    "answers": [
      [
        "availability"
      ],
      [
        "predictable"
      ],
      [
        "adapt"
      ]
    ],
    "explanation": "availability 拼写较长，注意 -ability；predictable 是“可预测的”；adapt 是“调整、适应”。",
    "tip": "长词先记开头和结尾，中间用音节补；写完后检查词性。"
  },
  {
    "id": "ra-03",
    "type": "ra",
    "section": "speaking",
    "level": 1,
    "time": 70,
    "title": "远程办公的代价",
    "instruction": "先用 30 秒准备，再用 40 秒朗读。录音后对照示范自评。",
    "explanation": "RA 同时给口语和阅读供分。内容看读对多少词，流利度看停顿和回读，发音只看清晰度。",
    "tip": "52 分目标：按斜线停顿，读错不要回头重读。",
    "content": "Remote work has become common in many companies. Employees save time on commuting and can organize their day more flexibly. However, working alone for long periods can make people feel isolated. Some managers also find it harder to build trust within a team. As a result, many firms now combine remote work with regular office days.",
    "model": "Remote work / has become common / in many companies. / Employees save time / on commuting / and can organize their day / more flexibly. / However, / working alone for long periods / can make people feel isolated. / Some managers / also find it harder / to build trust within a team. / As a result, / many firms now combine remote work / with regular office days.",
    "checklist": [
      "每 5–8 个词停一次，全段停顿不超过 3 次",
      "读错没有回头重读",
      "句末降调，声音清楚"
    ]
  },
  {
    "id": "ra-04",
    "type": "ra",
    "section": "speaking",
    "level": 1,
    "time": 70,
    "title": "塑料污染",
    "instruction": "先用 30 秒准备，再用 40 秒朗读。录音后对照示范自评。",
    "explanation": "RA 同时给口语和阅读供分。内容看读对多少词，流利度看停顿和回读，发音只看清晰度。",
    "tip": "52 分目标：按斜线停顿，读错不要回头重读。",
    "content": "Plastic waste is a growing problem for the world's oceans. Every year, millions of tons of plastic enter the sea, where it breaks into tiny pieces. Fish and seabirds often mistake these pieces for food. Scientists warn that the pollution may take centuries to disappear. Some countries have banned single-use bags, but much more action is needed.",
    "model": "Plastic waste / is a growing problem / for the world's oceans. / Every year, / millions of tons of plastic / enter the sea, / where it breaks into tiny pieces. / Fish and seabirds / often mistake these pieces / for food. / Scientists warn / that the pollution may take centuries / to disappear. / Some countries / have banned single-use bags, / but much more action is needed.",
    "checklist": [
      "每 5–8 个词停一次，全段停顿不超过 3 次",
      "读错没有回头重读",
      "句末降调，声音清楚"
    ]
  },
  {
    "id": "ra-05",
    "type": "ra",
    "section": "speaking",
    "level": 1,
    "time": 70,
    "title": "公共图书馆的新角色",
    "instruction": "先用 30 秒准备，再用 40 秒朗读。录音后对照示范自评。",
    "explanation": "RA 同时给口语和阅读供分。内容看读对多少词，流利度看停顿和回读，发音只看清晰度。",
    "tip": "52 分目标：按斜线停顿，读错不要回头重读。",
    "content": "Public libraries are no longer just places to borrow books. Many now offer free internet access, language classes and quiet study rooms. In some cities, libraries also lend tools, cameras and musical instruments. These services help people who cannot afford to buy such items. As a result, the library has become a community centre rather than a storage room for books.",
    "model": "Public libraries / are no longer just places / to borrow books. / Many now offer / free internet access, / language classes / and quiet study rooms. / In some cities, / libraries also lend tools, / cameras / and musical instruments. / These services help people / who cannot afford to buy such items. / As a result, / the library has become a community centre / rather than a storage room for books.",
    "checklist": [
      "每 5–8 个词停一次，全段停顿不超过 3 次",
      "读错没有回头重读",
      "句末降调，声音清楚"
    ]
  },
  {
    "id": "ra-06",
    "type": "ra",
    "section": "speaking",
    "level": 1,
    "time": 70,
    "title": "睡眠与记忆",
    "instruction": "先用 30 秒准备，再用 40 秒朗读。录音后对照示范自评。",
    "explanation": "RA 同时给口语和阅读供分。内容看读对多少词，流利度看停顿和回读，发音只看清晰度。",
    "tip": "52 分目标：按斜线停顿，读错不要回头重读。",
    "content": "Sleep plays an important role in learning. During deep sleep, the brain replays information from the day and stores it in long-term memory. Students who sleep for seven or eight hours before an exam usually remember more than those who stay up late. However, many young people treat sleep as a luxury. Researchers argue that a regular sleep routine is just as important as revision.",
    "model": "Sleep plays an important role / in learning. / During deep sleep, / the brain replays information / from the day / and stores it / in long-term memory. / Students who sleep / for seven or eight hours / before an exam / usually remember more / than those who stay up late. / However, / many young people treat sleep / as a luxury. / Researchers argue / that a regular sleep routine / is just as important as revision.",
    "checklist": [
      "每 5–8 个词停一次，全段停顿不超过 3 次",
      "读错没有回头重读",
      "句末降调，声音清楚"
    ]
  },
  {
    "id": "ra-07",
    "type": "ra",
    "section": "speaking",
    "level": 1,
    "time": 70,
    "title": "城市交通",
    "instruction": "先用 30 秒准备，再用 40 秒朗读。录音后对照示范自评。",
    "explanation": "RA 同时给口语和阅读供分。内容看读对多少词，流利度看停顿和回读，发音只看清晰度。",
    "tip": "52 分目标：按斜线停顿，读错不要回头重读。",
    "content": "Traffic congestion costs cities both time and money. When roads are full, deliveries are delayed and air pollution increases. Some governments respond by building more roads, but this often attracts more cars. Others invest in buses, trains and cycle lanes. Evidence from several cities suggests that improving public transport is more effective than widening roads.",
    "model": "Traffic congestion / costs cities / both time and money. / When roads are full, / deliveries are delayed / and air pollution increases. / Some governments respond / by building more roads, / but this often attracts more cars. / Others invest in buses, / trains / and cycle lanes. / Evidence from several cities / suggests that improving public transport / is more effective / than widening roads.",
    "checklist": [
      "每 5–8 个词停一次，全段停顿不超过 3 次",
      "读错没有回头重读",
      "句末降调，声音清楚"
    ]
  },
  {
    "id": "ra-08",
    "type": "ra",
    "section": "speaking",
    "level": 1,
    "time": 70,
    "title": "海洋环流",
    "instruction": "先用 30 秒准备，再用 40 秒朗读。录音后对照示范自评。",
    "explanation": "RA 同时给口语和阅读供分。内容看读对多少词，流利度看停顿和回读，发音只看清晰度。",
    "tip": "52 分目标：按斜线停顿，读错不要回头重读。",
    "content": "The ocean moves heat around the planet. Warm water flows away from the equator, while cold water sinks near the poles. This circulation helps regulate the climate of coastal regions. Scientists are concerned that melting ice may slow the system down. A change in ocean currents could affect rainfall and temperatures far from the sea.",
    "model": "The ocean moves heat / around the planet. / Warm water flows away / from the equator, / while cold water sinks / near the poles. / This circulation helps regulate / the climate of coastal regions. / Scientists are concerned / that melting ice / may slow the system down. / A change in ocean currents / could affect rainfall / and temperatures / far from the sea.",
    "checklist": [
      "每 5–8 个词停一次，全段停顿不超过 3 次",
      "读错没有回头重读",
      "句末降调，声音清楚"
    ]
  },
  {
    "id": "rs-03",
    "type": "rs",
    "section": "speaking",
    "level": 1,
    "time": 100,
    "title": "数字与长句 ×5",
    "instruction": "点“播放”，每句只播一遍。听完立刻复述，然后展开原文自评。",
    "explanation": "RS 内容分：整句 3 分，复述一半以上 2 分，不到一半 1 分。说一半也有分。",
    "tip": "先保前半；数字读清楚，长句只保 2–3 块。",
    "audio": "The survey was conducted in 2019 and involved more than 1,200 participants.||Although the city has invested heavily in public transport, many residents still prefer to drive to work.||The university will open a new research centre next year.||The government plans to reduce carbon emissions by 2030.||The report recommends improving public transport in rural areas.",
    "model": "按意群记：先保块，再保词；长句只保前半。",
    "checklist": [
      "每句至少复述出一半",
      "没有加 um、没有改口",
      "长句只保前半句也算达标"
    ],
    "lesson": "L2"
  },
  {
    "id": "rs-04",
    "type": "rs",
    "section": "speaking",
    "level": 1,
    "time": 100,
    "title": "短句热身 ×5（A）",
    "instruction": "点“播放”，每句只播一遍。听完立刻复述，然后展开原文自评。",
    "explanation": "RS 内容分：整句 3 分，复述一半以上 2 分，不到一半 1 分。说一半也有分。",
    "tip": "3–5 词只求开口；听完立刻说，不许想 3 秒以上。",
    "audio": "The train leaves at nine.||Please close the window.||Students need more practice.||The library opens early.||She bought a new laptop.",
    "model": "按意群记：先保块，再保词；长句只保前半。",
    "checklist": [
      "每句至少复述出一半",
      "没有加 um、没有改口",
      "长句只保前半句也算达标"
    ],
    "lesson": "L2"
  },
  {
    "id": "rs-05",
    "type": "rs",
    "section": "speaking",
    "level": 1,
    "time": 100,
    "title": "短句热身 ×5（B）",
    "instruction": "点“播放”，每句只播一遍。听完立刻复述，然后展开原文自评。",
    "explanation": "RS 内容分：整句 3 分，复述一半以上 2 分，不到一半 1 分。说一半也有分。",
    "tip": "短句也要按块说；不要一个词一个词蹦。",
    "audio": "The meeting starts soon.||Keep the receipt safe.||The lecture was cancelled.||Turn off the lights.||We finished the project.",
    "model": "按意群记：先保块，再保词；长句只保前半。",
    "checklist": [
      "每句至少复述出一半",
      "没有加 um、没有改口",
      "长句只保前半句也算达标"
    ],
    "lesson": "L2"
  },
  {
    "id": "rs-06",
    "type": "rs",
    "section": "speaking",
    "level": 1,
    "time": 100,
    "title": "校园句子 ×5（A）",
    "instruction": "点“播放”，每句只播一遍。听完立刻复述，然后展开原文自评。",
    "explanation": "RS 内容分：整句 3 分，复述一半以上 2 分，不到一半 1 分。说一半也有分。",
    "tip": "每句切 3 块；说出 2 块就过，不重来。",
    "audio": "The library closes at six today.||Students must bring their student cards.||The train was delayed by heavy rain.||Please submit the form by Friday.||The museum attracts many foreign visitors.",
    "model": "按意群记：先保块，再保词；长句只保前半。",
    "checklist": [
      "每句至少复述出一半",
      "没有加 um、没有改口",
      "长句只保前半句也算达标"
    ],
    "lesson": "L2"
  },
  {
    "id": "rs-07",
    "type": "rs",
    "section": "speaking",
    "level": 1,
    "time": 100,
    "title": "校园句子 ×5（B）",
    "instruction": "点“播放”，每句只播一遍。听完立刻复述，然后展开原文自评。",
    "explanation": "RS 内容分：整句 3 分，复述一半以上 2 分，不到一半 1 分。说一半也有分。",
    "tip": "6–8 词最容易拿 2 分；注意单复数和介词。",
    "audio": "Our tutor explained the task again.||The research focuses on urban housing.||Most participants completed the survey online.||The café serves breakfast until eleven.||The city plans to build more parks.",
    "model": "按意群记：先保块，再保词；长句只保前半。",
    "checklist": [
      "每句至少复述出一半",
      "没有加 um、没有改口",
      "长句只保前半句也算达标"
    ],
    "lesson": "L2"
  },
  {
    "id": "rs-08",
    "type": "rs",
    "section": "speaking",
    "level": 1,
    "time": 100,
    "title": "学术句子 ×5（A）",
    "instruction": "点“播放”，每句只播一遍。听完立刻复述，然后展开原文自评。",
    "explanation": "RS 内容分：整句 3 分，复述一半以上 2 分，不到一半 1 分。说一半也有分。",
    "tip": "9–12 词：先写首字母，再按块还原。",
    "audio": "The university will open a new research centre next year.||Students should check the timetable before the semester begins.||The survey found that most residents support the new plan.||The lecture will discuss the impact of social media.||Please collect your assignment from the front office.",
    "model": "按意群记：先保块，再保词；长句只保前半。",
    "checklist": [
      "每句至少复述出一半",
      "没有加 um、没有改口",
      "长句只保前半句也算达标"
    ],
    "lesson": "L2"
  },
  {
    "id": "rs-09",
    "type": "rs",
    "section": "speaking",
    "level": 2,
    "time": 100,
    "title": "学术句子 ×7（B）",
    "instruction": "点“播放”，每句只播一遍。听完立刻复述，然后展开原文自评。",
    "explanation": "RS 内容分：整句 3 分，复述一半以上 2 分，不到一半 1 分。说一半也有分。",
    "tip": "最后两句是长句：只保前 2–3 块；说一半也比沉默多 2 分。",
    "audio": "The company has invested heavily in renewable energy.||Many tourists visit the museum during the summer holidays.||The report recommends improving public transport in rural areas.||The professor asked students to submit their drafts online.||The government plans to reduce carbon emissions by 2030.||Although the weather was bad, the outdoor event continued as planned.||The study suggests that regular exercise can improve memory and concentration.",
    "model": "按意群记：先保块，再保词；长句只保前半。",
    "checklist": [
      "每句至少复述出一半",
      "没有加 um、没有改口",
      "长句只保前半句也算达标"
    ],
    "lesson": "L2"
  },
  {
    "id": "asq-04",
    "type": "asq",
    "section": "speaking",
    "level": 1,
    "time": 20,
    "title": "ASQ · 常识",
    "instruction": "点播放听问题，10 秒内输入答案（一个词或数字）。",
    "explanation": "ASQ 只判对错：答对 1 分，答错 0 分。这题属于常识类，答案要短。",
    "tip": "不会也要猜一个最可能的词；沉默一定是 0 分。",
    "audio": "How many days are in a week?",
    "answers": [
      "seven",
      "7"
    ],
    "lesson": "L2"
  },
  {
    "id": "asq-05",
    "type": "asq",
    "section": "speaking",
    "level": 1,
    "time": 20,
    "title": "ASQ · 常识",
    "instruction": "点播放听问题，10 秒内输入答案（一个词或数字）。",
    "explanation": "ASQ 只判对错：答对 1 分，答错 0 分。这题属于常识类，答案要短。",
    "tip": "不会也要猜一个最可能的词；沉默一定是 0 分。",
    "audio": "What do bees make?",
    "answers": [
      "honey"
    ],
    "lesson": "L2"
  },
  {
    "id": "asq-06",
    "type": "asq",
    "section": "speaking",
    "level": 1,
    "time": 20,
    "title": "ASQ · 常识",
    "instruction": "点播放听问题，10 秒内输入答案（一个词或数字）。",
    "explanation": "ASQ 只判对错：答对 1 分，答错 0 分。这题属于常识类，答案要短。",
    "tip": "不会也要猜一个最可能的词；沉默一定是 0 分。",
    "audio": "What is the capital of Australia?",
    "answers": [
      "canberra"
    ],
    "lesson": "L2"
  },
  {
    "id": "asq-07",
    "type": "asq",
    "section": "speaking",
    "level": 1,
    "time": 20,
    "title": "ASQ · 常识",
    "instruction": "点播放听问题，10 秒内输入答案（一个词或数字）。",
    "explanation": "ASQ 只判对错：答对 1 分，答错 0 分。这题属于常识类，答案要短。",
    "tip": "不会也要猜一个最可能的词；沉默一定是 0 分。",
    "audio": "What gas do we breathe?",
    "answers": [
      "oxygen",
      "o2"
    ],
    "lesson": "L2"
  },
  {
    "id": "asq-08",
    "type": "asq",
    "section": "speaking",
    "level": 1,
    "time": 20,
    "title": "ASQ · 反义",
    "instruction": "点播放听问题，10 秒内输入答案（一个词或数字）。",
    "explanation": "ASQ 只判对错：答对 1 分，答错 0 分。这题属于反义类，答案要短。",
    "tip": "不会也要猜一个最可能的词；沉默一定是 0 分。",
    "audio": "What is the opposite of “expensive”?",
    "answers": [
      "cheap"
    ],
    "lesson": "L2"
  },
  {
    "id": "asq-09",
    "type": "asq",
    "section": "speaking",
    "level": 1,
    "time": 20,
    "title": "ASQ · 常识/数字",
    "instruction": "点播放听问题，10 秒内输入答案（一个词或数字）。",
    "explanation": "ASQ 只判对错：答对 1 分，答错 0 分。这题属于常识/数字类，答案要短。",
    "tip": "不会也要猜一个最可能的词；沉默一定是 0 分。",
    "audio": "How many sides does a triangle have?",
    "answers": [
      "three",
      "3"
    ],
    "lesson": "L2"
  },
  {
    "id": "asq-10",
    "type": "asq",
    "section": "speaking",
    "level": 1,
    "time": 20,
    "title": "ASQ · 常识",
    "instruction": "点播放听问题，10 秒内输入答案（一个词或数字）。",
    "explanation": "ASQ 只判对错：答对 1 分，答错 0 分。这题属于常识类，答案要短。",
    "tip": "不会也要猜一个最可能的词；沉默一定是 0 分。",
    "audio": "What do we call a doctor who treats animals?",
    "answers": [
      "vet",
      "veterinarian"
    ],
    "lesson": "L2"
  },
  {
    "id": "asq-11",
    "type": "asq",
    "section": "speaking",
    "level": 1,
    "time": 20,
    "title": "ASQ · 数字",
    "instruction": "点播放听问题，10 秒内输入答案（一个词或数字）。",
    "explanation": "ASQ 只判对错：答对 1 分，答错 0 分。这题属于数字类，答案要短。",
    "tip": "不会也要猜一个最可能的词；沉默一定是 0 分。",
    "audio": "What is 20% of 100?",
    "answers": [
      "twenty",
      "20"
    ],
    "lesson": "L2"
  },
  {
    "id": "asq-12",
    "type": "asq",
    "section": "speaking",
    "level": 1,
    "time": 20,
    "title": "ASQ · 常识",
    "instruction": "点播放听问题，10 秒内输入答案（一个词或数字）。",
    "explanation": "ASQ 只判对错：答对 1 分，答错 0 分。这题属于常识类，答案要短。",
    "tip": "不会也要猜一个最可能的词；沉默一定是 0 分。",
    "audio": "What is the largest ocean?",
    "answers": [
      "pacific",
      "the pacific"
    ],
    "lesson": "L2"
  },
  {
    "id": "asq-13",
    "type": "asq",
    "section": "speaking",
    "level": 1,
    "time": 20,
    "title": "ASQ · 学术",
    "instruction": "点播放听问题，10 秒内输入答案（一个词或数字）。",
    "explanation": "ASQ 只判对错：答对 1 分，答错 0 分。这题属于学术类，答案要短。",
    "tip": "不会也要猜一个最可能的词；沉默一定是 0 分。",
    "audio": "What do we call the study of stars?",
    "answers": [
      "astronomy"
    ],
    "lesson": "L2"
  },
  {
    "id": "asq-14",
    "type": "asq",
    "section": "speaking",
    "level": 1,
    "time": 20,
    "title": "ASQ · 学术",
    "instruction": "点播放听问题，10 秒内输入答案（一个词或数字）。",
    "explanation": "ASQ 只判对错：答对 1 分，答错 0 分。这题属于学术类，答案要短。",
    "tip": "不会也要猜一个最可能的词；沉默一定是 0 分。",
    "audio": "What do we call a person who studies ancient cultures?",
    "answers": [
      "archaeologist",
      "archeologist"
    ],
    "lesson": "L2"
  },
  {
    "id": "asq-15",
    "type": "asq",
    "section": "speaking",
    "level": 1,
    "time": 20,
    "title": "ASQ · 学术",
    "instruction": "点播放听问题，10 秒内输入答案（一个词或数字）。",
    "explanation": "ASQ 只判对错：答对 1 分，答错 0 分。这题属于学术类，答案要短。",
    "tip": "不会也要猜一个最可能的词；沉默一定是 0 分。",
    "audio": "What is the process by which plants make food?",
    "answers": [
      "photosynthesis"
    ],
    "lesson": "L2"
  },
  {
    "id": "asq-16",
    "type": "asq",
    "section": "speaking",
    "level": 1,
    "time": 20,
    "title": "ASQ · 学术",
    "instruction": "点播放听问题，10 秒内输入答案（一个词或数字）。",
    "explanation": "ASQ 只判对错：答对 1 分，答错 0 分。这题属于学术类，答案要短。",
    "tip": "不会也要猜一个最可能的词；沉默一定是 0 分。",
    "audio": "What gas do plants take in?",
    "answers": [
      "carbon dioxide",
      "co2"
    ],
    "lesson": "L2"
  },
  {
    "id": "asq-17",
    "type": "asq",
    "section": "speaking",
    "level": 1,
    "time": 20,
    "title": "ASQ · 学术",
    "instruction": "点播放听问题，10 秒内输入答案（一个词或数字）。",
    "explanation": "ASQ 只判对错：答对 1 分，答错 0 分。这题属于学术类，答案要短。",
    "tip": "不会也要猜一个最可能的词；沉默一定是 0 分。",
    "audio": "What force pulls objects toward the earth?",
    "answers": [
      "gravity"
    ],
    "lesson": "L2"
  },
  {
    "id": "asq-18",
    "type": "asq",
    "section": "speaking",
    "level": 1,
    "time": 20,
    "title": "ASQ · 学术",
    "instruction": "点播放听问题，10 秒内输入答案（一个词或数字）。",
    "explanation": "ASQ 只判对错：答对 1 分，答错 0 分。这题属于学术类，答案要短。",
    "tip": "不会也要猜一个最可能的词；沉默一定是 0 分。",
    "audio": "What do we call water turning into vapor?",
    "answers": [
      "evaporation"
    ],
    "lesson": "L2"
  },
  {
    "id": "asq-19",
    "type": "asq",
    "section": "speaking",
    "level": 1,
    "time": 20,
    "title": "ASQ · 学术",
    "instruction": "点播放听问题，10 秒内输入答案（一个词或数字）。",
    "explanation": "ASQ 只判对错：答对 1 分，答错 0 分。这题属于学术类，答案要短。",
    "tip": "不会也要猜一个最可能的词；沉默一定是 0 分。",
    "audio": "What do we call a person who writes books?",
    "answers": [
      "author",
      "writer"
    ],
    "lesson": "L2"
  },
  {
    "id": "asq-20",
    "type": "asq",
    "section": "speaking",
    "level": 1,
    "time": 20,
    "title": "ASQ · 学术",
    "instruction": "点播放听问题，10 秒内输入答案（一个词或数字）。",
    "explanation": "ASQ 只判对错：答对 1 分，答错 0 分。这题属于学术类，答案要短。",
    "tip": "不会也要猜一个最可能的词；沉默一定是 0 分。",
    "audio": "What do we call the study of weather?",
    "answers": [
      "meteorology"
    ],
    "lesson": "L2"
  },
  {
    "id": "asq-21",
    "type": "asq",
    "section": "speaking",
    "level": 1,
    "time": 20,
    "title": "ASQ · 学术",
    "instruction": "点播放听问题，10 秒内输入答案（一个词或数字）。",
    "explanation": "ASQ 只判对错：答对 1 分，答错 0 分。这题属于学术类，答案要短。",
    "tip": "不会也要猜一个最可能的词；沉默一定是 0 分。",
    "audio": "What do we call an animal that eats only plants?",
    "answers": [
      "herbivore"
    ],
    "lesson": "L2"
  },
  {
    "id": "asq-22",
    "type": "asq",
    "section": "speaking",
    "level": 1,
    "time": 20,
    "title": "ASQ · 数字",
    "instruction": "点播放听问题，10 秒内输入答案（一个词或数字）。",
    "explanation": "ASQ 只判对错：答对 1 分，答错 0 分。这题属于数字类，答案要短。",
    "tip": "不会也要猜一个最可能的词；沉默一定是 0 分。",
    "audio": "How many minutes are in an hour?",
    "answers": [
      "sixty",
      "60"
    ],
    "lesson": "L2"
  },
  {
    "id": "asq-23",
    "type": "asq",
    "section": "speaking",
    "level": 1,
    "time": 20,
    "title": "ASQ · 数字",
    "instruction": "点播放听问题，10 秒内输入答案（一个词或数字）。",
    "explanation": "ASQ 只判对错：答对 1 分，答错 0 分。这题属于数字类，答案要短。",
    "tip": "不会也要猜一个最可能的词；沉默一定是 0 分。",
    "audio": "How many seconds are in a minute?",
    "answers": [
      "sixty",
      "60"
    ],
    "lesson": "L2"
  },
  {
    "id": "asq-24",
    "type": "asq",
    "section": "speaking",
    "level": 1,
    "time": 20,
    "title": "ASQ · 数字",
    "instruction": "点播放听问题，10 秒内输入答案（一个词或数字）。",
    "explanation": "ASQ 只判对错：答对 1 分，答错 0 分。这题属于数字类，答案要短。",
    "tip": "不会也要猜一个最可能的词；沉默一定是 0 分。",
    "audio": "How many days are in February in a non-leap year?",
    "answers": [
      "twenty-eight",
      "28",
      "twenty eight"
    ],
    "lesson": "L2"
  },
  {
    "id": "asq-25",
    "type": "asq",
    "section": "speaking",
    "level": 1,
    "time": 20,
    "title": "ASQ · 数字",
    "instruction": "点播放听问题，10 秒内输入答案（一个词或数字）。",
    "explanation": "ASQ 只判对错：答对 1 分，答错 0 分。这题属于数字类，答案要短。",
    "tip": "不会也要猜一个最可能的词；沉默一定是 0 分。",
    "audio": "What is the boiling point of water at sea level?",
    "answers": [
      "one hundred",
      "100",
      "one hundred degrees"
    ],
    "lesson": "L2"
  },
  {
    "id": "asq-26",
    "type": "asq",
    "section": "speaking",
    "level": 1,
    "time": 20,
    "title": "ASQ · 数字",
    "instruction": "点播放听问题，10 秒内输入答案（一个词或数字）。",
    "explanation": "ASQ 只判对错：答对 1 分，答错 0 分。这题属于数字类，答案要短。",
    "tip": "不会也要猜一个最可能的词；沉默一定是 0 分。",
    "audio": "What is 25% of 200?",
    "answers": [
      "fifty",
      "50"
    ],
    "lesson": "L2"
  },
  {
    "id": "asq-27",
    "type": "asq",
    "section": "speaking",
    "level": 1,
    "time": 20,
    "title": "ASQ · 数字",
    "instruction": "点播放听问题，10 秒内输入答案（一个词或数字）。",
    "explanation": "ASQ 只判对错：答对 1 分，答错 0 分。这题属于数字类，答案要短。",
    "tip": "不会也要猜一个最可能的词；沉默一定是 0 分。",
    "audio": "What is half of 90?",
    "answers": [
      "forty-five",
      "45",
      "forty five"
    ],
    "lesson": "L2"
  },
  {
    "id": "asq-28",
    "type": "asq",
    "section": "speaking",
    "level": 1,
    "time": 20,
    "title": "ASQ · 数字",
    "instruction": "点播放听问题，10 秒内输入答案（一个词或数字）。",
    "explanation": "ASQ 只判对错：答对 1 分，答错 0 分。这题属于数字类，答案要短。",
    "tip": "不会也要猜一个最可能的词；沉默一定是 0 分。",
    "audio": "How many continents are there?",
    "answers": [
      "seven",
      "7"
    ],
    "lesson": "L2"
  },
  {
    "id": "asq-29",
    "type": "asq",
    "section": "speaking",
    "level": 1,
    "time": 20,
    "title": "ASQ · 数字",
    "instruction": "点播放听问题，10 秒内输入答案（一个词或数字）。",
    "explanation": "ASQ 只判对错：答对 1 分，答错 0 分。这题属于数字类，答案要短。",
    "tip": "不会也要猜一个最可能的词；沉默一定是 0 分。",
    "audio": "How many letters are in the English alphabet?",
    "answers": [
      "twenty-six",
      "26",
      "twenty six"
    ],
    "lesson": "L2"
  },
  {
    "id": "asq-30",
    "type": "asq",
    "section": "speaking",
    "level": 1,
    "time": 20,
    "title": "ASQ · 数字",
    "instruction": "点播放听问题，10 秒内输入答案（一个词或数字）。",
    "explanation": "ASQ 只判对错：答对 1 分，答错 0 分。这题属于数字类，答案要短。",
    "tip": "不会也要猜一个最可能的词；沉默一定是 0 分。",
    "audio": "How many meters are in one kilometer?",
    "answers": [
      "one thousand",
      "1000",
      "a thousand"
    ],
    "lesson": "L2"
  },
  {
    "id": "asq-31",
    "type": "asq",
    "section": "speaking",
    "level": 1,
    "time": 20,
    "title": "ASQ · 数字",
    "instruction": "点播放听问题，10 秒内输入答案（一个词或数字）。",
    "explanation": "ASQ 只判对错：答对 1 分，答错 0 分。这题属于数字类，答案要短。",
    "tip": "不会也要猜一个最可能的词；沉默一定是 0 分。",
    "audio": "What is 3/4 as a percentage?",
    "answers": [
      "seventy-five percent",
      "75%",
      "75",
      "seventy five percent"
    ],
    "lesson": "L2"
  },
  {
    "id": "asq-32",
    "type": "asq",
    "section": "speaking",
    "level": 1,
    "time": 20,
    "title": "ASQ · 常识/数字",
    "instruction": "点播放听问题，10 秒内输入答案（一个词或数字）。",
    "explanation": "ASQ 只判对错：答对 1 分，答错 0 分。这题属于常识/数字类，答案要短。",
    "tip": "不会也要猜一个最可能的词；沉默一定是 0 分。",
    "audio": "How many wheels does a car have?",
    "answers": [
      "four",
      "4"
    ],
    "lesson": "L2"
  },
  {
    "id": "asq-33",
    "type": "asq",
    "section": "speaking",
    "level": 1,
    "time": 20,
    "title": "ASQ · 常识",
    "instruction": "点播放听问题，10 秒内输入答案（一个词或数字）。",
    "explanation": "ASQ 只判对错：答对 1 分，答错 0 分。这题属于常识类，答案要短。",
    "tip": "不会也要猜一个最可能的词；沉默一定是 0 分。",
    "audio": "What do we call a baby dog?",
    "answers": [
      "puppy"
    ],
    "lesson": "L2"
  },
  {
    "id": "asq-34",
    "type": "asq",
    "section": "speaking",
    "level": 1,
    "time": 20,
    "title": "ASQ · 反义",
    "instruction": "点播放听问题，10 秒内输入答案（一个词或数字）。",
    "explanation": "ASQ 只判对错：答对 1 分，答错 0 分。这题属于反义类，答案要短。",
    "tip": "不会也要猜一个最可能的词；沉默一定是 0 分。",
    "audio": "What is the opposite of “increase”?",
    "answers": [
      "decrease",
      "reduce"
    ],
    "lesson": "L2"
  },
  {
    "id": "asq-35",
    "type": "asq",
    "section": "speaking",
    "level": 1,
    "time": 20,
    "title": "ASQ · 数字",
    "instruction": "点播放听问题，10 秒内输入答案（一个词或数字）。",
    "explanation": "ASQ 只判对错：答对 1 分，答错 0 分。这题属于数字类，答案要短。",
    "tip": "不会也要猜一个最可能的词；沉默一定是 0 分。",
    "audio": "How many hours are in a day?",
    "answers": [
      "twenty-four",
      "24",
      "twenty four"
    ],
    "lesson": "L2"
  },
  {
    "id": "asq-36",
    "type": "asq",
    "section": "speaking",
    "level": 1,
    "time": 20,
    "title": "ASQ · 常识",
    "instruction": "点播放听问题，10 秒内输入答案（一个词或数字）。",
    "explanation": "ASQ 只判对错：答对 1 分，答错 0 分。这题属于常识类，答案要短。",
    "tip": "不会也要猜一个最可能的词；沉默一定是 0 分。",
    "audio": "What do we call frozen water?",
    "answers": [
      "ice"
    ],
    "lesson": "L2"
  },
  {
    "id": "asq-37",
    "type": "asq",
    "section": "speaking",
    "level": 1,
    "time": 20,
    "title": "ASQ · 数字",
    "instruction": "点播放听问题，10 秒内输入答案（一个词或数字）。",
    "explanation": "ASQ 只判对错：答对 1 分，答错 0 分。这题属于数字类，答案要短。",
    "tip": "不会也要猜一个最可能的词；沉默一定是 0 分。",
    "audio": "What is 10% of 50?",
    "answers": [
      "five",
      "5"
    ],
    "lesson": "L2"
  },
  {
    "id": "asq-38",
    "type": "asq",
    "section": "speaking",
    "level": 1,
    "time": 20,
    "title": "ASQ · 常识",
    "instruction": "点播放听问题，10 秒内输入答案（一个词或数字）。",
    "explanation": "ASQ 只判对错：答对 1 分，答错 0 分。这题属于常识类，答案要短。",
    "tip": "不会也要猜一个最可能的词；沉默一定是 0 分。",
    "audio": "What do we call a person who flies a plane?",
    "answers": [
      "pilot"
    ],
    "lesson": "L2"
  },
  {
    "id": "asq-39",
    "type": "asq",
    "section": "speaking",
    "level": 1,
    "time": 20,
    "title": "ASQ · 数字",
    "instruction": "点播放听问题，10 秒内输入答案（一个词或数字）。",
    "explanation": "ASQ 只判对错：答对 1 分，答错 0 分。这题属于数字类，答案要短。",
    "tip": "不会也要猜一个最可能的词；沉默一定是 0 分。",
    "audio": "How many legs does a spider have?",
    "answers": [
      "eight",
      "8"
    ],
    "lesson": "L2"
  },
  {
    "id": "asq-40",
    "type": "asq",
    "section": "speaking",
    "level": 1,
    "time": 20,
    "title": "ASQ · 学术",
    "instruction": "点播放听问题，10 秒内输入答案（一个词或数字）。",
    "explanation": "ASQ 只判对错：答对 1 分，答错 0 分。这题属于学术类，答案要短。",
    "tip": "不会也要猜一个最可能的词；沉默一定是 0 分。",
    "audio": "What do we call the study of the human body?",
    "answers": [
      "anatomy"
    ],
    "lesson": "L2"
  },
  {
    "id": "asq-41",
    "type": "asq",
    "section": "speaking",
    "level": 1,
    "time": 20,
    "title": "ASQ · 反义",
    "instruction": "点播放听问题，10 秒内输入答案（一个词或数字）。",
    "explanation": "ASQ 只判对错：答对 1 分，答错 0 分。这题属于反义类，答案要短。",
    "tip": "不会也要猜一个最可能的词；沉默一定是 0 分。",
    "audio": "What is the opposite of “minimum”?",
    "answers": [
      "maximum"
    ],
    "lesson": "L2"
  },
  {
    "id": "di-03",
    "type": "di",
    "section": "speaking",
    "level": 2,
    "time": 65,
    "title": "图书馆访问量",
    "instruction": "25 秒准备，40 秒作答。用三句模板：开头 / 趋势 / 结论。",
    "explanation": "DI 内容分看“关键元素 + 趋势 + 结论”，不要求描述每个数字。",
    "tip": "只挑最高、最低两个数字，其余用 increased / remained stable 带过。",
    "chart": {
      "type": "bar",
      "title": "Library visits (thousands)",
      "labels": [
        "2019",
        "2020",
        "2021",
        "2022",
        "2023"
      ],
      "values": [
        120,
        150,
        180,
        210,
        240
      ],
      "unit": "thousand"
    },
    "model": "The chart shows library visits from 2019 to 2023. Overall, the number increased steadily, from 120 thousand to 240 thousand. In conclusion, visits are likely to remain high.",
    "checklist": [
      "三句都说了",
      "说满 30 秒",
      "中间没有长时间停顿"
    ]
  },
  {
    "id": "di-04",
    "type": "di",
    "section": "speaking",
    "level": 2,
    "time": 65,
    "title": "可再生能源占比",
    "instruction": "25 秒准备，40 秒作答。用三句模板：开头 / 趋势 / 结论。",
    "explanation": "DI 内容分看“关键元素 + 趋势 + 结论”，不要求描述每个数字。",
    "tip": "只挑最高、最低两个数字，其余用 increased / remained stable 带过。",
    "chart": {
      "type": "line",
      "title": "Renewable energy share (%)",
      "labels": [
        "2010",
        "2014",
        "2018",
        "2022",
        "2024"
      ],
      "values": [
        12,
        18,
        25,
        33,
        41
      ],
      "unit": "%"
    },
    "model": "The chart shows the share of renewable energy from 2010 to 2024. Overall, it rose significantly, from 12 percent to 41 percent. In conclusion, renewable energy is likely to keep growing.",
    "checklist": [
      "三句都说了",
      "说满 30 秒",
      "中间没有长时间停顿"
    ]
  },
  {
    "id": "di-05",
    "type": "di",
    "section": "speaking",
    "level": 2,
    "time": 65,
    "title": "通勤方式",
    "instruction": "25 秒准备，40 秒作答。用三句模板：开头 / 趋势 / 结论。",
    "explanation": "DI 内容分看“关键元素 + 趋势 + 结论”，不要求描述每个数字。",
    "tip": "只挑最高、最低两个数字，其余用 increased / remained stable 带过。",
    "chart": {
      "type": "bar",
      "title": "Main way to commute (%)",
      "labels": [
        "Car",
        "Bus",
        "Train",
        "Bike",
        "Walk"
      ],
      "values": [
        48,
        22,
        15,
        9,
        6
      ],
      "unit": "%"
    },
    "model": "The chart shows how people commute. The most common way is by car at 48 percent, while walking is the least common at 6 percent. In conclusion, private cars still dominate commuting.",
    "checklist": [
      "三句都说了",
      "说满 30 秒",
      "中间没有长时间停顿"
    ]
  },
  {
    "id": "di-06",
    "type": "di",
    "section": "speaking",
    "level": 2,
    "time": 65,
    "title": "在线课程注册",
    "instruction": "25 秒准备，40 秒作答。用三句模板：开头 / 趋势 / 结论。",
    "explanation": "DI 内容分看“关键元素 + 趋势 + 结论”，不要求描述每个数字。",
    "tip": "只挑最高、最低两个数字，其余用 increased / remained stable 带过。",
    "chart": {
      "type": "line",
      "title": "Online course enrollments (thousands)",
      "labels": [
        "2018",
        "2020",
        "2022",
        "2024"
      ],
      "values": [
        2.1,
        3.4,
        6.2,
        9.1
      ],
      "unit": "thousand"
    },
    "model": "The chart shows online course enrollments from 2018 to 2024. Overall, the figure more than quadrupled, from 2.1 thousand to 9.1 thousand. In conclusion, online learning is likely to expand further.",
    "checklist": [
      "三句都说了",
      "说满 30 秒",
      "中间没有长时间停顿"
    ]
  },
  {
    "id": "di-07",
    "type": "di",
    "section": "speaking",
    "level": 2,
    "time": 65,
    "title": "家庭用水",
    "instruction": "25 秒准备，40 秒作答。用三句模板：开头 / 趋势 / 结论。",
    "explanation": "DI 内容分看“关键元素 + 趋势 + 结论”，不要求描述每个数字。",
    "tip": "只挑最高、最低两个数字，其余用 increased / remained stable 带过。",
    "chart": {
      "type": "bar",
      "title": "Household water use (%)",
      "labels": [
        "Shower",
        "Toilet",
        "Laundry",
        "Kitchen",
        "Garden"
      ],
      "values": [
        35,
        25,
        18,
        12,
        10
      ],
      "unit": "%"
    },
    "model": "The chart shows how water is used in the home. Showering accounts for the largest share at 35 percent, while gardening is the smallest at 10 percent. In conclusion, personal hygiene is the biggest water use.",
    "checklist": [
      "三句都说了",
      "说满 30 秒",
      "中间没有长时间停顿"
    ]
  },
  {
    "id": "di-08",
    "type": "di",
    "section": "speaking",
    "level": 2,
    "time": 65,
    "title": "空气质量指数",
    "instruction": "25 秒准备，40 秒作答。用三句模板：开头 / 趋势 / 结论。",
    "explanation": "DI 内容分看“关键元素 + 趋势 + 结论”，不要求描述每个数字。",
    "tip": "只挑最高、最低两个数字，其余用 increased / remained stable 带过。",
    "chart": {
      "type": "line",
      "title": "Air quality index (lower is better)",
      "labels": [
        "2015",
        "2017",
        "2019",
        "2021",
        "2023"
      ],
      "values": [
        82,
        76,
        70,
        64,
        58
      ],
      "unit": "index"
    },
    "model": "The chart shows the air quality index from 2015 to 2023. Overall, the index fell from 82 to 58, which means air quality improved. In conclusion, the trend is likely to continue.",
    "checklist": [
      "三句都说了",
      "说满 30 秒",
      "中间没有长时间停顿"
    ]
  },
  {
    "id": "rts-03",
    "type": "rts",
    "section": "speaking",
    "level": 2,
    "time": 55,
    "title": "小组作业有人不出现",
    "instruction": "读情景，10 秒准备，40 秒作答。用“回应—建议—理由—收尾”。",
    "explanation": "RTS 考“合不合适”，不是考观点深度。四步框架能覆盖内容分。",
    "tip": "不要背 DI 模板；一开口就要像在跟人说话。",
    "content": "Your group is preparing a presentation. One member has missed two meetings and has not done their part. Talk to this group member.",
    "model": "Hi, I wanted to check in with you about the presentation. We've missed you at the last two meetings. Could you take the section on data analysis and send us a draft by Friday? If you're busy, tell me now so we can share the work.",
    "checklist": [
      "先回应了对方",
      "给出了具体建议",
      "说满 30 秒"
    ]
  },
  {
    "id": "rts-04",
    "type": "rts",
    "section": "speaking",
    "level": 2,
    "time": 55,
    "title": "错过讲座",
    "instruction": "读情景，10 秒准备，40 秒作答。用“回应—建议—理由—收尾”。",
    "explanation": "RTS 考“合不合适”，不是考观点深度。四步框架能覆盖内容分。",
    "tip": "不要背 DI 模板；一开口就要像在跟人说话。",
    "content": "You missed an important lecture because you were ill. Ask a classmate for help.",
    "model": "Hi, I missed yesterday's lecture because I was sick. Could you share your notes or the recording? I can meet you at the library this afternoon and copy them quickly. I'd really appreciate your help.",
    "checklist": [
      "先回应了对方",
      "给出了具体建议",
      "说满 30 秒"
    ]
  },
  {
    "id": "rts-05",
    "type": "rts",
    "section": "speaking",
    "level": 2,
    "time": 55,
    "title": "借不到书",
    "instruction": "读情景，10 秒准备，40 秒作答。用“回应—建议—理由—收尾”。",
    "explanation": "RTS 考“合不合适”，不是考观点深度。四步框架能覆盖内容分。",
    "tip": "不要背 DI 模板；一开口就要像在跟人说话。",
    "content": "The book you need is already borrowed from the library. Ask the librarian for another option.",
    "model": "Excuse me, I need this book for an assignment, but it's already on loan. Could you reserve it for me or show me a similar title? I only need two chapters, so a shorter loan would also work.",
    "checklist": [
      "先回应了对方",
      "给出了具体建议",
      "说满 30 秒"
    ]
  },
  {
    "id": "rts-06",
    "type": "rts",
    "section": "speaking",
    "level": 2,
    "time": 55,
    "title": "室友晚上太吵",
    "instruction": "读情景，10 秒准备，40 秒作答。用“回应—建议—理由—收尾”。",
    "explanation": "RTS 考“合不合适”，不是考观点深度。四步框架能覆盖内容分。",
    "tip": "不要背 DI 模板；一开口就要像在跟人说话。",
    "content": "Your roommate plays loud music late at night. Talk to your roommate.",
    "model": "Hi, can we talk about the music at night? I have an early class and I find it hard to sleep after midnight. Could you use headphones after eleven? I'm happy to keep my own noise down too.",
    "checklist": [
      "先回应了对方",
      "给出了具体建议",
      "说满 30 秒"
    ]
  },
  {
    "id": "rts-07",
    "type": "rts",
    "section": "speaking",
    "level": 2,
    "time": 55,
    "title": "实习与课程冲突",
    "instruction": "读情景，10 秒准备，40 秒作答。用“回应—建议—理由—收尾”。",
    "explanation": "RTS 考“合不合适”，不是考观点深度。四步框架能覆盖内容分。",
    "tip": "不要背 DI 模板；一开口就要像在跟人说话。",
    "content": "Your internship starts next week, but it clashes with a required class. Explain the situation to your supervisor.",
    "model": "Hello, I'd like to discuss a scheduling conflict. My internship starts next week, but it clashes with a required class on Tuesday mornings. Could I start after the class or make up the hours later? I want to keep both commitments.",
    "checklist": [
      "先回应了对方",
      "给出了具体建议",
      "说满 30 秒"
    ]
  },
  {
    "id": "rts-08",
    "type": "rts",
    "section": "speaking",
    "level": 2,
    "time": 55,
    "title": "搭档演讲紧张",
    "instruction": "读情景，10 秒准备，40 秒作答。用“回应—建议—理由—收尾”。",
    "explanation": "RTS 考“合不合适”，不是考观点深度。四步框架能覆盖内容分。",
    "tip": "不要背 DI 模板；一开口就要像在跟人说话。",
    "content": "Your partner is nervous about tomorrow's presentation. Encourage your partner.",
    "model": "I know you're nervous, but you've prepared well. Let's practise the opening together twice tonight, and I'll give you a signal if you lose your place. You only need to explain three slides; I'll handle the questions.",
    "checklist": [
      "先回应了对方",
      "给出了具体建议",
      "说满 30 秒"
    ]
  },
  {
    "id": "swt-03",
    "type": "swt",
    "section": "writing",
    "level": 2,
    "time": 600,
    "title": "城市种树",
    "instruction": "10 分钟内用一句话概括（5–75 词），只能有一个句号。",
    "explanation": "SWT 评分：内容 2 分、形式 1 分、语法 2 分、词汇 2 分。写成两句，形式 0 分且内容大幅扣分。",
    "tip": "公式：Although + 让步, 主句 + because + 原因；全句只留一个句号。",
    "content": "Many cities are planting trees to cool streets and improve air quality. Trees provide shade, absorb rainwater and make neighbourhoods more pleasant. However, they need water, space and regular maintenance, and some residents complain about leaves and roots. Despite these costs, most planners see trees as a long-term investment rather than a short-term expense.",
    "model": "Although trees require water, space and maintenance, many cities are planting them because they cool streets, improve air quality and make neighbourhoods more pleasant.",
    "checklist": [
      "只有一个句号",
      "字数在 30–60 之间",
      "覆盖了“原因 + 转折”两个要点"
    ]
  },
  {
    "id": "swt-04",
    "type": "swt",
    "section": "writing",
    "level": 2,
    "time": 600,
    "title": "混合式学习",
    "instruction": "10 分钟内用一句话概括（5–75 词），只能有一个句号。",
    "explanation": "SWT 评分：内容 2 分、形式 1 分、语法 2 分、词汇 2 分。写成两句，形式 0 分且内容大幅扣分。",
    "tip": "公式：Although + 让步, 主句 + because + 原因；全句只留一个句号。",
    "content": "Online courses give students flexibility and allow universities to reach people in remote areas. However, students who study alone often feel isolated and lose motivation. Some universities now combine online materials with weekly seminars and group projects. This blended model appears to improve completion rates while keeping the convenience of online study.",
    "model": "Although online courses offer flexibility, universities are combining them with seminars and group projects because students who study alone often feel isolated and lose motivation.",
    "checklist": [
      "只有一个句号",
      "字数在 30–60 之间",
      "覆盖了“原因 + 转折”两个要点"
    ]
  },
  {
    "id": "swt-05",
    "type": "swt",
    "section": "writing",
    "level": 2,
    "time": 600,
    "title": "食物浪费",
    "instruction": "10 分钟内用一句话概括（5–75 词），只能有一个句号。",
    "explanation": "SWT 评分：内容 2 分、形式 1 分、语法 2 分、词汇 2 分。写成两句，形式 0 分且内容大幅扣分。",
    "tip": "公式：Although + 让步, 主句 + because + 原因；全句只留一个句号。",
    "content": "Supermarkets often reject fruit and vegetables that look imperfect, even when they are safe to eat. Consumers also throw away food that has passed its best-before date. New apps connect shops with local buyers so that surplus food can be sold cheaply. However, reducing waste at the source is more effective than finding new uses for food that has already been produced.",
    "model": "Although apps now connect shops with buyers to sell surplus food, reducing waste at the source is more effective than finding new uses for food that has already been produced.",
    "checklist": [
      "只有一个句号",
      "字数在 30–60 之间",
      "覆盖了“原因 + 转折”两个要点"
    ]
  },
  {
    "id": "swt-06",
    "type": "swt",
    "section": "writing",
    "level": 2,
    "time": 600,
    "title": "电动汽车",
    "instruction": "10 分钟内用一句话概括（5–75 词），只能有一个句号。",
    "explanation": "SWT 评分：内容 2 分、形式 1 分、语法 2 分、词汇 2 分。写成两句，形式 0 分且内容大幅扣分。",
    "tip": "公式：Although + 让步, 主句 + because + 原因；全句只留一个句号。",
    "content": "Electric cars produce no exhaust fumes and are quieter than petrol cars. However, they remain expensive, and many cities still lack enough charging points. Governments offer subsidies to encourage buyers, while battery production creates emissions of its own. Most experts agree that electric vehicles will play a major role, but only if clean electricity and public transport develop at the same time.",
    "model": "Although electric cars are quiet and produce no exhaust fumes, they remain expensive and depend on charging points, so experts say they will only help if clean electricity and public transport develop at the same time.",
    "checklist": [
      "只有一个句号",
      "字数在 30–60 之间",
      "覆盖了“原因 + 转折”两个要点"
    ]
  },
  {
    "id": "we-03",
    "type": "we",
    "section": "writing",
    "level": 2,
    "time": 1200,
    "title": "自动化与就业",
    "instruction": "20 分钟写 200–300 词，四段：观点 / 理由 1 / 理由 2 / 结论。",
    "explanation": "WE 评分：内容 3、形式 2、展开 2、语法/词汇/拼写各 2。52 分不需要复杂论证，需要结构完整、字数够、不跑题。",
    "tip": "三个万能理由：save time / save money / more convenient，但每段要配一个具体例子。",
    "content": "Some people believe that automation will destroy millions of jobs. Others argue that it will create new types of work. Discuss both views and give your own opinion.",
    "outline": [
      "引言：自动化既替代也创造，关键在转型",
      "一方：重复性岗位消失，低技能工人受影响",
      "另一方：新岗位出现，生产率提高",
      "结论：政府培训 + 个人学习，不必悲观"
    ],
    "model": "It is often argued that automation will destroy millions of jobs, while others believe it will create new ones. In my view, the effect depends on how quickly workers can learn new skills.\n\nOn the one hand, machines are already replacing routine work in factories, offices and shops. Workers with limited education are likely to lose their jobs first, and finding new employment can take months.\n\nOn the other hand, automation creates demand for technicians, programmers and managers. It also lowers costs, which can increase spending and generate service jobs. Countries that invest in training have moved through previous industrial changes successfully.\n\nIn conclusion, automation is neither a disaster nor a guarantee of prosperity. Governments should fund retraining, and individuals should keep learning, so that the benefits are shared.",
    "checklist": [
      "四段清楚",
      "字数 200+",
      "每段都有例子或解释"
    ]
  },
  {
    "id": "we-04",
    "type": "we",
    "section": "writing",
    "level": 2,
    "time": 1200,
    "title": "年轻人该住城市还是乡村",
    "instruction": "20 分钟写 200–300 词，四段：观点 / 理由 1 / 理由 2 / 结论。",
    "explanation": "WE 评分：内容 3、形式 2、展开 2、语法/词汇/拼写各 2。52 分不需要复杂论证，需要结构完整、字数够、不跑题。",
    "tip": "三个万能理由：save time / save money / more convenient，但每段要配一个具体例子。",
    "content": "Some young people prefer to live in large cities, while others choose to live in the countryside. Which do you think is better for young people? Give reasons for your answer.",
    "outline": [
      "引言：我选城市，但承认乡村优点",
      "理由 1：工作与学习机会多",
      "理由 2：交通、医疗、社交资源集中",
      "让步 + 结论：乡村适合后期，年轻时先城市"
    ],
    "model": "Many young people move to large cities, while others prefer the countryside. In my opinion, cities are usually a better choice for people who are starting their careers.\n\nThe main reason is opportunity. Cities bring together employers, universities and training centres, so young people can change jobs or courses more easily. A wider labour market also makes it easier to recover from a bad first job.\n\nAnother advantage is access to services. Public transport, hospitals, libraries and social groups are concentrated in cities. These resources save time and make it easier to build professional and personal networks.\n\nAdmittedly, the countryside offers cheaper housing and a quieter life. However, for a young person who needs experience and contacts, the city is usually the more practical choice.",
    "checklist": [
      "四段清楚",
      "字数 200+",
      "每段都有例子或解释"
    ]
  },
  {
    "id": "we-05",
    "type": "we",
    "section": "writing",
    "level": 2,
    "time": 1200,
    "title": "政府是否该资助艺术",
    "instruction": "20 分钟写 200–300 词，四段：观点 / 理由 1 / 理由 2 / 结论。",
    "explanation": "WE 评分：内容 3、形式 2、展开 2、语法/词汇/拼写各 2。52 分不需要复杂论证，需要结构完整、字数够、不跑题。",
    "tip": "三个万能理由：save time / save money / more convenient，但每段要配一个具体例子。",
    "content": "Some people think governments should spend money on the arts, while others believe this money should be used for health and education. Discuss both views and give your own opinion.",
    "outline": [
      "引言：艺术有价值，但公共资金有限",
      "一方：艺术带来文化、旅游和就业",
      "另一方：医疗教育更紧急",
      "结论：保留艺术预算，但要求透明和社区收益"
    ],
    "model": "Governments face difficult choices when public money is limited. Some argue that funding the arts is a luxury, while others see it as an investment. In my view, a small but stable arts budget is justified.\n\nSupporters of arts funding point to cultural and economic benefits. Museums, theatres and music venues attract tourists, create jobs and give communities a shared identity. They also provide young people with opportunities that commercial markets may ignore.\n\nCritics argue that health and education are more urgent. A hospital bed or a smaller class directly improves lives, while a new gallery may benefit only a few visitors. In a recession, they say, arts spending should be cut first.\n\nIn conclusion, I believe governments should keep arts funding, but require clear public benefit and community access. Health and education must remain the priority, yet a society without culture is poorer in other ways.",
    "checklist": [
      "四段清楚",
      "字数 200+",
      "每段都有例子或解释"
    ]
  },
  {
    "id": "fib-rw-04",
    "type": "fib-rw",
    "section": "reading",
    "level": 2,
    "time": 120,
    "title": "城市树木",
    "instruction": "每空选一个词。先判词性，再看搭配和逻辑。",
    "explanation": "① 主语 They 复数，用 absorb；② 修饰 amounts 用形容词 significant；③ 前后是因果，用 Therefore。",
    "tip": "先判词性，四个选项里通常能排除两个；再看逻辑，最后才看意思。",
    "content": "Trees are often described as the lungs of a city. They [[1]] carbon dioxide and release oxygen, which improves air quality. However, street trees need [[2]] amounts of water, especially in hot weather. [[3]], cities that invest in tree planting often save money on cooling and health care.",
    "blanks": [
      {
        "options": [
          "absorb",
          "absorbs",
          "absorbing",
          "absorption"
        ],
        "answer": 0
      },
      {
        "options": [
          "significant",
          "significantly",
          "significance",
          "signify"
        ],
        "answer": 0
      },
      {
        "options": [
          "Therefore",
          "However",
          "Although",
          "Despite"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": "fib-rw-05",
    "type": "fib-rw",
    "section": "reading",
    "level": 2,
    "time": 120,
    "title": "远程工作",
    "instruction": "每空选一个词。先判词性，再看搭配和逻辑。",
    "explanation": "① become more + 形容词 common；② can 后接动词原形 organize；③ 前后是转折，用 However。",
    "tip": "先判词性，四个选项里通常能排除两个；再看逻辑，最后才看意思。",
    "content": "Remote work has become more [[1]] since the pandemic. Employees can save time on commuting and [[2]] their schedules around family needs. [[3]], working alone can reduce creativity, so many companies now offer a mix of home and office days.",
    "blanks": [
      {
        "options": [
          "common",
          "commonly",
          "commonness",
          "commoner"
        ],
        "answer": 0
      },
      {
        "options": [
          "organize",
          "organizing",
          "organization",
          "organized"
        ],
        "answer": 0
      },
      {
        "options": [
          "However",
          "Therefore",
          "For example",
          "As a result"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": "fib-rw-06",
    "type": "fib-rw",
    "section": "reading",
    "level": 2,
    "time": 120,
    "title": "塑料污染",
    "instruction": "每空选一个词。先判词性，再看搭配和逻辑。",
    "explanation": "① 修饰名词 problem 用现在分词 growing；② it 是单数，谓语 breaks；③ can 后接动词原形 last。",
    "tip": "先判词性，四个选项里通常能排除两个；再看逻辑，最后才看意思。",
    "content": "Plastic waste is a [[1]] problem for the world's oceans. Every year, millions of tons of plastic enter the sea, where it [[2]] into tiny pieces. Fish often mistake these pieces for food, and the pollution can [[3]] for centuries.",
    "blanks": [
      {
        "options": [
          "grow",
          "growing",
          "growth",
          "grown"
        ],
        "answer": 1
      },
      {
        "options": [
          "break",
          "breaks",
          "breaking",
          "broke"
        ],
        "answer": 1
      },
      {
        "options": [
          "last",
          "lasts",
          "lasting",
          "lasted"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": "fib-rw-07",
    "type": "fib-rw",
    "section": "reading",
    "level": 2,
    "time": 120,
    "title": "睡眠",
    "instruction": "每空选一个词。先判词性，再看搭配和逻辑。",
    "explanation": "① be essential for 是固定搭配；② 主语 Students 复数，用 remember；③ 前句说睡眠重要，后句得出结论，用 Therefore。",
    "tip": "先判词性，四个选项里通常能排除两个；再看逻辑，最后才看意思。",
    "content": "Sleep is [[1]] for learning. During deep sleep, the brain replays information and stores it in long-term memory. Students who sleep seven to eight hours before an exam usually [[2]] more than those who stay up late. [[3]], a regular sleep routine is as important as revision.",
    "blanks": [
      {
        "options": [
          "essentially",
          "essential",
          "essence",
          "essentialism"
        ],
        "answer": 1
      },
      {
        "options": [
          "remember",
          "remembers",
          "remembering",
          "remembered"
        ],
        "answer": 0
      },
      {
        "options": [
          "However",
          "Therefore",
          "Although",
          "Despite"
        ],
        "answer": 1
      }
    ]
  },
  {
    "id": "fib-rw-08",
    "type": "fib-rw",
    "section": "reading",
    "level": 2,
    "time": 120,
    "title": "博物馆",
    "instruction": "每空选一个词。先判词性，再看搭配和逻辑。",
    "explanation": "① places to 后接动词原形 display；② This + 单数名词 approach；③ 前后是转折，用 However。",
    "tip": "先判词性，四个选项里通常能排除两个；再看逻辑，最后才看意思。",
    "content": "Museums are no longer just places to [[1]] objects. Many now run workshops, talks and digital tours. This [[2]] helps them attract younger visitors and remain relevant. [[3]], museums still face the challenge of funding these activities.",
    "blanks": [
      {
        "options": [
          "display",
          "displays",
          "displaying",
          "displayed"
        ],
        "answer": 0
      },
      {
        "options": [
          "approach",
          "approaches",
          "approaching",
          "approached"
        ],
        "answer": 0
      },
      {
        "options": [
          "However",
          "Therefore",
          "For example",
          "As a result"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": "ro-03",
    "type": "ro",
    "section": "reading",
    "level": 2,
    "time": 150,
    "title": "网上购物",
    "instruction": "按正确顺序点击句子。按相邻对给分，先连确定的。",
    "explanation": "首句交代时间背景；第二句讲最初的担心；第三句讲安全支付；第四句是结果；第五句 Today 收尾。",
    "tip": "先找“没有 this / these / they”的首句，再顺着指代链往下排。",
    "sentences": [
      "Online shopping began as a small experiment in the 1990s.",
      "At first, customers were worried about paying by card on the internet.",
      "Banks and retailers then introduced secure payment systems.",
      "As a result, online sales grew rapidly and many physical shops closed.",
      "Today, even groceries and furniture are bought online."
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ]
  },
  {
    "id": "ro-04",
    "type": "ro",
    "section": "reading",
    "level": 2,
    "time": 150,
    "title": "咖啡的传播",
    "instruction": "按正确顺序点击句子。按相邻对给分，先连确定的。",
    "explanation": "按时间线：埃塞俄比亚 → 17 世纪欧洲 → 咖啡馆功能 → 统治者担忧 → 今天。",
    "tip": "先找“没有 this / these / they”的首句，再顺着指代链往下排。",
    "sentences": [
      "Coffee was first grown in Ethiopia.",
      "By the 17th century, coffee houses had spread across Europe.",
      "These cafés became places where people exchanged news and ideas.",
      "However, some rulers tried to close them because they feared political discussion.",
      "Today, coffee is one of the most traded commodities in the world."
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ]
  },
  {
    "id": "ro-05",
    "type": "ro",
    "section": "reading",
    "level": 2,
    "time": 150,
    "title": "城市自行车",
    "instruction": "按正确顺序点击句子。按相邻对给分，先连确定的。",
    "explanation": "先现象，再好处，再结果，再转折，最后结论。",
    "tip": "先找“没有 this / these / they”的首句，再顺着指代链往下排。",
    "sentences": [
      "Many cities are building separate lanes for bicycles.",
      "These lanes make cycling safer and encourage more people to ride.",
      "As a result, traffic and air pollution can be reduced.",
      "However, building lanes is expensive and can take road space from cars.",
      "Planners must therefore balance the needs of different road users."
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ]
  },
  {
    "id": "ro-06",
    "type": "ro",
    "section": "reading",
    "level": 2,
    "time": 150,
    "title": "志愿服务",
    "instruction": "按正确顺序点击句子。按相邻对给分，先连确定的。",
    "explanation": "首句定义；第二、三句讲学生收益；第四句转折；第五句结论。",
    "tip": "先找“没有 this / these / they”的首句，再顺着指代链往下排。",
    "sentences": [
      "Volunteering can take many forms, from helping at a shelter to teaching online.",
      "For students, it offers a chance to develop skills that employers value.",
      "It also connects them with people outside their usual social circle.",
      "However, volunteers need training and support to be effective.",
      "Organisations should therefore treat volunteers as long-term partners."
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ]
  },
  {
    "id": "mcq-s-03",
    "type": "mcq-s",
    "section": "reading",
    "level": 2,
    "time": 100,
    "title": "城市绿地",
    "instruction": "读短文，选一个正确答案。",
    "explanation": "文中有 However 转折：前面讲好处，后面讲维护成本，所以是“有益处也有成本”。",
    "tip": "出现 However 的段落，主旨通常在转折后；选项太绝对的先排除。",
    "content": "Urban green spaces are more than decoration. Parks provide shade, absorb rainwater and give residents a place to exercise. Studies also show that people who live near trees report lower stress. However, maintaining parks is costly, and some cities struggle to keep them safe and clean.",
    "question": "What is the main idea of the passage?",
    "options": [
      "Green spaces have several benefits but also costs.",
      "Parks are only useful for exercise.",
      "Cities should remove parks to save money.",
      "Trees reduce stress but cause flooding."
    ],
    "answer": 0
  },
  {
    "id": "mcq-s-04",
    "type": "mcq-s",
    "section": "reading",
    "level": 2,
    "time": 100,
    "title": "在线学习",
    "instruction": "读短文，选一个正确答案。",
    "explanation": "However 后面指出 self-discipline 和反馈问题，最后说混合模式，因此“有用但有要求”。",
    "tip": "出现 However 的段落，主旨通常在转折后；选项太绝对的先排除。",
    "content": "Online learning allows students to study at their own pace and from any location. It can be especially useful for people with jobs or caring responsibilities. However, it requires self-discipline, and students may miss the immediate feedback of a classroom. Many institutions now combine online materials with face-to-face sessions.",
    "question": "What does the author suggest about online learning?",
    "options": [
      "It is useful but requires self-discipline.",
      "It is suitable for everyone.",
      "It has no disadvantages.",
      "It should replace classrooms completely."
    ],
    "answer": 0
  },
  {
    "id": "mcq-s-05",
    "type": "mcq-s",
    "section": "reading",
    "level": 2,
    "time": 100,
    "title": "噪音",
    "instruction": "读短文，选一个正确答案。",
    "explanation": "文中说居民欢迎、建筑商认为成本增加，推断“有益健康但有反对”。",
    "tip": "出现 However 的段落，主旨通常在转折后；选项太绝对的先排除。",
    "content": "Noise from traffic and construction is often seen as an unavoidable part of city life. Yet research links long-term exposure to sleep problems and heart disease. Some cities have introduced quiet zones and stricter rules for night work. These measures are popular with residents, although builders argue that they increase costs.",
    "question": "What can be inferred about noise rules?",
    "options": [
      "They may benefit health but face opposition.",
      "They are welcomed by builders.",
      "They have no effect on health.",
      "They are only about construction."
    ],
    "answer": 0
  },
  {
    "id": "mcq-s-06",
    "type": "mcq-s",
    "section": "reading",
    "level": 2,
    "time": 100,
    "title": "食物浪费",
    "instruction": "读短文，选一个正确答案。",
    "explanation": "最后一句 Solutions need to differ by region 对应“原因因地区而异”。",
    "tip": "出现 However 的段落，主旨通常在转折后；选项太绝对的先排除。",
    "content": "A third of the food produced for human consumption is wasted. In wealthy countries, much of this waste happens in shops and homes, where food is thrown away after passing a label date. In poorer countries, waste often occurs after harvest because storage is inadequate. Solutions therefore need to differ by region.",
    "question": "What is the main point about food waste?",
    "options": [
      "Its causes differ between rich and poor countries.",
      "It happens only in supermarkets.",
      "Label dates are the only cause.",
      "Poor countries waste the most food."
    ],
    "answer": 0
  },
  {
    "id": "mcq-s-07",
    "type": "mcq-s",
    "section": "reading",
    "level": 2,
    "time": 100,
    "title": "博物馆免费开放",
    "instruction": "读短文，选一个正确答案。",
    "explanation": "文章讲免费开放的好处和经费问题，核心是“如何平衡”。",
    "tip": "出现 However 的段落，主旨通常在转折后；选项太绝对的先排除。",
    "content": "Many museums now offer free entry to attract wider audiences. Free admission can increase visitor numbers and make culture more accessible. However, museums still need income for conservation and staff, so some rely on donations or charge for special exhibitions. The debate is therefore about who should pay, not whether culture matters.",
    "question": "What is the passage mainly about?",
    "options": [
      "How free museums balance access and funding.",
      "Why museums should close.",
      "Why visitors dislike exhibitions.",
      "How to sell more tickets."
    ],
    "answer": 0
  },
  {
    "id": "mcq-m-03",
    "type": "mcq-m",
    "section": "reading",
    "level": 3,
    "time": 110,
    "title": "公共交通",
    "instruction": "选 2 个正确选项。注意：错选倒扣 1 分，只选有依据的。",
    "explanation": "A 对应 reduces air pollution；B 对应 must be frequent and reliable；C、D 与原文相反。",
    "tip": "多选是阅读里唯一倒扣的题：写不出“原文哪一句支持”，就不要选。",
    "content": "Cities that invest in buses and trains can move more people with less road space. Good public transport also reduces air pollution and gives low-income residents access to jobs. However, services must be frequent and reliable, or passengers return to their cars. Fare levels matter too: if tickets are too expensive, the poorest travellers are excluded.",
    "question": "Which two statements are supported by the passage?",
    "options": [
      "Public transport can reduce pollution.",
      "Frequent and reliable service is important.",
      "Cars are always cheaper than buses.",
      "Ticket prices have no effect on passengers."
    ],
    "answer": [
      0,
      1
    ]
  },
  {
    "id": "mcq-m-04",
    "type": "mcq-m",
    "section": "reading",
    "level": 3,
    "time": 110,
    "title": "大学图书馆",
    "instruction": "选 2 个正确选项。注意：错选倒扣 1 分，只选有依据的。",
    "explanation": "A 对应 support for online students；C 对应 students still value quiet study areas；B、D 过于绝对且与原文相反。",
    "tip": "多选是阅读里唯一倒扣的题：写不出“原文哪一句支持”，就不要选。",
    "content": "University libraries are changing. Many now provide group study rooms, digital databases and support for online students. Some have reduced their printed collections to make space for collaborative work. However, students still value quiet individual study areas, and researchers need access to specialist archives. Libraries therefore have to serve several groups at once.",
    "question": "Which two statements are true?",
    "options": [
      "Libraries now support online students.",
      "All printed books have been removed.",
      "Quiet study space is still valued.",
      "Researchers no longer need archives."
    ],
    "answer": [
      0,
      2
    ]
  },
  {
    "id": "mcq-m-05",
    "type": "mcq-m",
    "section": "reading",
    "level": 3,
    "time": 110,
    "title": "运动与健康",
    "instruction": "选 2 个正确选项。注意：错选倒扣 1 分，只选有依据的。",
    "explanation": "A 对应 walking for thirty minutes；C 对应 should seek advice；B、D 与原文相反。",
    "tip": "多选是阅读里唯一倒扣的题：写不出“原文哪一句支持”，就不要选。",
    "content": "Regular exercise improves heart health, sleep and mood. It does not need to be intense: walking for thirty minutes most days can bring benefits. However, people with injuries or health conditions should seek advice before starting a new programme. Consistency matters more than a single hard session.",
    "question": "Which two statements are supported?",
    "options": [
      "Walking can improve health.",
      "Only intense exercise helps.",
      "People with injuries should get advice.",
      "One hard session is enough."
    ],
    "answer": [
      0,
      2
    ]
  },
  {
    "id": "mcq-m-06",
    "type": "mcq-m",
    "section": "reading",
    "level": 3,
    "time": 110,
    "title": "远程会议",
    "instruction": "选 2 个正确选项。注意：错选倒扣 1 分，只选有依据的。",
    "explanation": "A 对应 include quiet colleagues；C 对应 poor connections interrupt discussion；B、D 与原文相反。",
    "tip": "多选是阅读里唯一倒扣的题：写不出“原文哪一句支持”，就不要选。",
    "content": "Video meetings save travel time and allow teams to work across countries. They can also make it easier to include quiet colleagues who dislike speaking in large rooms. However, long video calls cause fatigue, and poor connections interrupt discussion. Many organisations now limit meetings to thirty minutes and encourage written updates instead.",
    "question": "Which two statements are true?",
    "options": [
      "Video meetings can include quieter colleagues.",
      "Long video calls never cause fatigue.",
      "Poor connections can interrupt discussion.",
      "Written updates are always banned."
    ],
    "answer": [
      0,
      2
    ]
  },
  {
    "id": "sst-03",
    "type": "sst",
    "section": "listening",
    "level": 2,
    "time": 600,
    "title": "城市树木（讲座）",
    "instruction": "听讲座，10 分钟内写 50–70 词摘要。",
    "explanation": "SST 评分：内容 2、形式 2（50–70 词，少于 40 或多于 100 直接 0）、语法/词汇/拼写各 2。",
    "tip": "模板：The lecture discusses … First … In conclusion …，只填关键词。",
    "audio": "Today I want to discuss the role of trees in cities. Trees cool the air through shade and evaporation, which can reduce the need for air conditioning. They also capture dust and provide habitats for birds and insects. However, trees need water and maintenance, and not every species survives in polluted streets. Planners therefore need to choose carefully and budget for long-term care.",
    "model": "The lecture discusses the role of trees in cities. Trees cool the air, capture dust and support wildlife. However, they need water, maintenance and careful species selection. In conclusion, planners should budget for long-term care.",
    "checklist": [
      "字数 50–70",
      "包含主题 + 两个细节",
      "没有整句照抄"
    ]
  },
  {
    "id": "sst-04",
    "type": "sst",
    "section": "listening",
    "level": 2,
    "time": 600,
    "title": "海洋塑料（讲座）",
    "instruction": "听讲座，10 分钟内写 50–70 词摘要。",
    "explanation": "SST 评分：内容 2、形式 2（50–70 词，少于 40 或多于 100 直接 0）、语法/词汇/拼写各 2。",
    "tip": "模板：The lecture discusses … First … In conclusion …，只填关键词。",
    "audio": "This lecture is about plastic in the ocean. Most plastic enters the sea from rivers and coastal cities. Sunlight and waves break it into microplastics, which are eaten by fish and can enter the food chain. Cleaning the ocean is expensive and incomplete, so the speaker argues that reducing production and improving waste collection are more effective solutions.",
    "model": "The lecture discusses plastic pollution in the ocean. Plastic enters from rivers and cities, breaks into microplastics and enters the food chain. In conclusion, reducing production and improving waste collection are more effective than cleaning the ocean.",
    "checklist": [
      "字数 50–70",
      "包含主题 + 两个细节",
      "没有整句照抄"
    ]
  },
  {
    "id": "sst-05",
    "type": "sst",
    "section": "listening",
    "level": 2,
    "time": 600,
    "title": "博物馆与社区（讲座）",
    "instruction": "听讲座，10 分钟内写 50–70 词摘要。",
    "explanation": "SST 评分：内容 2、形式 2（50–70 词，少于 40 或多于 100 直接 0）、语法/词汇/拼写各 2。",
    "tip": "模板：The lecture discusses … First … In conclusion …，只填关键词。",
    "audio": "Today's topic is the changing role of museums. Museums used to be mainly storehouses of objects, but many now run workshops, talks and school programmes. These activities attract local residents who rarely visit traditional exhibitions. However, they require staff time and funding. The speaker suggests that museums should measure their community impact, not only visitor numbers.",
    "model": "The lecture discusses the changing role of museums. Museums now run workshops and school programmes to attract local residents, but these activities need staff and funding. In conclusion, museums should measure community impact, not only visitor numbers.",
    "checklist": [
      "字数 50–70",
      "包含主题 + 两个细节",
      "没有整句照抄"
    ]
  },
  {
    "id": "sst-06",
    "type": "sst",
    "section": "listening",
    "level": 2,
    "time": 600,
    "title": "睡眠与记忆（讲座）",
    "instruction": "听讲座，10 分钟内写 50–70 词摘要。",
    "explanation": "SST 评分：内容 2、形式 2（50–70 词，少于 40 或多于 100 直接 0）、语法/词汇/拼写各 2。",
    "tip": "模板：The lecture discusses … First … In conclusion …，只填关键词。",
    "audio": "The lecture explains how sleep affects memory. During deep sleep, the brain replays information from the day and moves it into long-term memory. Students who sleep seven to eight hours before an exam remember more than those who stay up late. The speaker recommends a regular routine and warns that caffeine and screens can delay sleep.",
    "model": "The lecture explains how sleep affects memory. Deep sleep helps the brain move information into long-term memory. In conclusion, students should keep a regular routine and avoid caffeine and screens before bed.",
    "checklist": [
      "字数 50–70",
      "包含主题 + 两个细节",
      "没有整句照抄"
    ]
  },
  {
    "id": "wfd-04",
    "type": "wfd",
    "section": "listening",
    "level": 2,
    "time": 100,
    "title": "听写 ×3（校园服务）",
    "instruction": "点播放，每句只播一遍。整句听完再打字，写完检查单复数。",
    "explanation": "WFD 每个正确单词 1 分（拼写错误算错）。常见失分：vacation、renew、student card。",
    "tip": "写半句也有分；不会的词先占位，把句子结构打出来。",
    "audio": "The library will be closed during the summer vacation.||Students can renew their books online.||Please bring your student card to the front desk.",
    "answers": [
      "The library will be closed during the summer vacation.",
      "Students can renew their books online.",
      "Please bring your student card to the front desk."
    ]
  },
  {
    "id": "wfd-05",
    "type": "wfd",
    "section": "listening",
    "level": 2,
    "time": 100,
    "title": "听写 ×3（学术）",
    "instruction": "点播放，每句只播一遍。整句听完再打字，写完检查单复数。",
    "explanation": "WFD 每个正确单词 1 分。常见失分：research 不可数、participants 复数、climate 拼写。",
    "tip": "写半句也有分；不会的词先占位，把句子结构打出来。",
    "audio": "The research shows that regular exercise improves memory.||Most participants completed the survey before the deadline.||The lecture will discuss the causes of climate change.",
    "answers": [
      "The research shows that regular exercise improves memory.",
      "Most participants completed the survey before the deadline.",
      "The lecture will discuss the causes of climate change."
    ]
  },
  {
    "id": "wfd-06",
    "type": "wfd",
    "section": "listening",
    "level": 2,
    "time": 100,
    "title": "听写 ×3（通知）",
    "instruction": "点播放，每句只播一遍。整句听完再打字，写完检查单复数。",
    "explanation": "WFD 每个正确单词 1 分。注意被动 will be held、at least、switched off。",
    "tip": "写半句也有分；不会的词先占位，把句子结构打出来。",
    "audio": "The examination will be held in the main hall.||Please arrive at least fifteen minutes early.||Mobile phones must be switched off during the test.",
    "answers": [
      "The examination will be held in the main hall.",
      "Please arrive at least fifteen minutes early.",
      "Mobile phones must be switched off during the test."
    ]
  },
  {
    "id": "wfd-07",
    "type": "wfd",
    "section": "listening",
    "level": 2,
    "time": 100,
    "title": "听写 ×3（环境）",
    "instruction": "点播放，每句只播一遍。整句听完再打字，写完检查单复数。",
    "explanation": "WFD 每个正确单词 1 分。注意 reduce、planted、encouraged 的拼写。",
    "tip": "写半句也有分；不会的词先占位，把句子结构打出来。",
    "audio": "The city plans to reduce traffic in the city centre.||More trees will be planted along the river.||Residents are encouraged to use public transport.",
    "answers": [
      "The city plans to reduce traffic in the city centre.",
      "More trees will be planted along the river.",
      "Residents are encouraged to use public transport."
    ]
  },
  {
    "id": "hiw-03",
    "type": "hiw",
    "section": "listening",
    "level": 3,
    "time": 80,
    "title": "校园参观（点错词）",
    "instruction": "点播放听音频，然后点出文中与音频不一致的词。错点倒扣。",
    "explanation": "音频是 main gate / ninety minutes，文中被改成 north gate / sixty minutes。",
    "tip": "HIW 只点 100% 确定的；不确定的点下去，对了 +1，错了 −1。",
    "audio": "The campus tour begins at the main gate at ten. Visitors should wear comfortable shoes and bring water. The tour lasts about ninety minutes.",
    "content": "The campus tour north at the main gate at ten. Visitors should wear comfortable shoes and bring water. The tour sixty about ninety minutes.",
    "wrong": [
      3,
      20
    ]
  },
  {
    "id": "hiw-04",
    "type": "hiw",
    "section": "listening",
    "level": 3,
    "time": 80,
    "title": "图书馆通知（点错词）",
    "instruction": "点播放听音频，然后点出文中与音频不一致的词。错点倒扣。",
    "explanation": "音频是 Friday / front desk，文中被改成 Monday / side desk。",
    "tip": "HIW 只点 100% 确定的；不确定的点下去，对了 +1，错了 −1。",
    "audio": "The library will close early on Friday for staff training. Books can be returned at the front desk. Online services will remain available.",
    "content": "The library will close early on Friday Monday staff training. Books can be returned at the front side Online services will remain available.",
    "wrong": [
      7,
      17
    ]
  },
  {
    "id": "hiw-05",
    "type": "hiw",
    "section": "listening",
    "level": 3,
    "time": 80,
    "title": "讲座开场（点错词）",
    "instruction": "点播放听音频，然后点出文中与音频不一致的词。错点倒扣。",
    "explanation": "音频是 urban flooding / three cities，文中被改成 rural flooding / four cities。",
    "tip": "HIW 只点 100% 确定的；不确定的点下去，对了 +1，错了 −1。",
    "audio": "Today's lecture examines the causes of urban flooding. We will compare three cities and discuss practical solutions. The final section reviews policy options.",
    "content": "Today's lecture examines the causes of rural flooding. We will compare three cities and four practical solutions. The final section reviews policy options.",
    "wrong": [
      6,
      14
    ]
  },
  {
    "id": "hiw-06",
    "type": "hiw",
    "section": "listening",
    "level": 3,
    "time": 80,
    "title": "健身房规则（点错词）",
    "instruction": "点播放听音频，然后点出文中与音频不一致的词。错点倒扣。",
    "explanation": "音频是 six / entrance，文中被改成 seven / stairs。",
    "tip": "HIW 只点 100% 确定的；不确定的点下去，对了 +1，错了 −1。",
    "audio": "The gym is open from six in the morning until ten at night. Students must bring their ID cards. Lockers are available near the entrance.",
    "content": "The gym is open seven six in the morning until ten at night. Students must bring their ID cards. Lockers are available near the stairs",
    "wrong": [
      4,
      24
    ]
  },
  {
    "id": "fib-l-03",
    "type": "fib-l",
    "section": "listening",
    "level": 2,
    "time": 100,
    "title": "建筑能耗（讲座填空）",
    "instruction": "点播放听讲座，补全 3 个空。拼写必须正确。",
    "explanation": "三个词都是学术高频词：energy、sources（复数）、practical（形容词）。",
    "tip": "先看空格前后判断词性，听的时候只等那个词，不要整句翻译。",
    "audio": "Good morning everyone. Today's lecture is about energy use in buildings. We will discuss three main sources of waste and then look at some practical solutions.",
    "content": "Good morning everyone. Today's lecture is about [[1]] use in buildings. We will discuss three main [[2]] of waste and then look at some [[3]] solutions.",
    "answers": [
      [
        "energy"
      ],
      [
        "sources"
      ],
      [
        "practical"
      ]
    ]
  },
  {
    "id": "fib-l-04",
    "type": "fib-l",
    "section": "listening",
    "level": 2,
    "time": 100,
    "title": "步行街区（通知填空）",
    "instruction": "点播放听讲座，补全 3 个空。拼写必须正确。",
    "explanation": "pedestrian 拼写较长；reduce 是动词原形；cafes 可带重音。",
    "tip": "先看空格前后判断词性，听的时候只等那个词，不要整句翻译。",
    "audio": "The city plans to build a new pedestrian zone in the city centre. The project will reduce traffic and create more space for shops and cafes.",
    "content": "The city plans to build a new [[1]] zone in the city centre. The project will [[2]] traffic and create more space for shops and [[3]].",
    "answers": [
      [
        "pedestrian"
      ],
      [
        "reduce"
      ],
      [
        "cafes",
        "cafés"
      ]
    ]
  },
  {
    "id": "fib-l-05",
    "type": "fib-l",
    "section": "listening",
    "level": 2,
    "time": 100,
    "title": "运动与健康（讲座填空）",
    "instruction": "点播放听讲座，补全 3 个空。拼写必须正确。",
    "explanation": "heart health、sleep quality、make a difference 都是固定搭配。",
    "tip": "先看空格前后判断词性，听的时候只等那个词，不要整句翻译。",
    "audio": "Regular exercise can improve heart health and sleep quality. Even a short walk after dinner can make a difference.",
    "content": "Regular exercise can improve [[1]] health and sleep [[2]]. Even a short walk after dinner can make a [[3]].",
    "answers": [
      [
        "heart"
      ],
      [
        "quality"
      ],
      [
        "difference"
      ]
    ]
  },
  {
    "id": "fib-l-06",
    "type": "fib-l",
    "section": "listening",
    "level": 2,
    "time": 100,
    "title": "学习偏好（研究填空）",
    "instruction": "点播放听讲座，补全 3 个空。拼写必须正确。",
    "explanation": "prefer 后接名词；materials 复数；discussions 复数。",
    "tip": "先看空格前后判断词性，听的时候只等那个词，不要整句翻译。",
    "audio": "The survey found that most students prefer online materials. However, they still value face-to-face discussions with their tutors.",
    "content": "The survey found that most students [[1]] online [[2]]. However, they still value face-to-face [[3]] with their tutors.",
    "answers": [
      [
        "prefer"
      ],
      [
        "materials"
      ],
      [
        "discussions"
      ]
    ]
  },
  {
    "id": "fib-r-01",
    "type": "fib-r",
    "section": "reading",
    "level": 2,
    "time": 150,
    "title": "旅游与环境",
    "instruction": "从词库选词填空。先判词性，再看搭配和逻辑。",
    "explanation": "① bring income 是固定搭配；② fragile environments 脆弱的生态环境；③ limit numbers 限制人数；④ public transport 公共交通。",
    "tip": "词库有干扰项：先按词性排除，再看搭配。",
    "content": "Tourism can bring [[1]] to local communities, but it can also damage [[2]] environments. Some destinations now [[3]] visitor numbers and invest in public [[4]].",
    "bank": [
      "income",
      "fragile",
      "limit",
      "transport",
      "fragile",
      "income",
      "increase",
      "private"
    ],
    "blanks": [
      {
        "answer": "income"
      },
      {
        "answer": "fragile"
      },
      {
        "answer": "limit"
      },
      {
        "answer": "transport"
      }
    ]
  },
  {
    "id": "fib-r-02",
    "type": "fib-r",
    "section": "reading",
    "level": 2,
    "time": 150,
    "title": "远程工作",
    "instruction": "从词库选词填空。先判词性，再看搭配和逻辑。",
    "explanation": "① reduce time 减少时间；② more flexibility 更灵活；③ contact between colleagues 同事间联系；④ offer a mix 提供混合模式。",
    "tip": "词库有干扰项：先按词性排除，再看搭配。",
    "content": "Remote work can [[1]] commuting time and give employees more [[2]]. However, it may reduce [[3]] between colleagues. Many companies therefore [[4]] a mix of home and office work.",
    "bank": [
      "reduce",
      "flexibility",
      "contact",
      "offer",
      "increase",
      "flexibility",
      "contact",
      "refuse"
    ],
    "blanks": [
      {
        "answer": "reduce"
      },
      {
        "answer": "flexibility"
      },
      {
        "answer": "contact"
      },
      {
        "answer": "offer"
      }
    ]
  },
  {
    "id": "fib-r-03",
    "type": "fib-r",
    "section": "reading",
    "level": 2,
    "time": 150,
    "title": "植物与城市",
    "instruction": "从词库选词填空。先判词性，再看搭配和逻辑。",
    "explanation": "① improve air quality；② lower temperatures；③ provide habitats；④ need water。",
    "tip": "词库有干扰项：先按词性排除，再看搭配。",
    "content": "Plants in cities can [[1]] air quality and lower [[2]]. They also provide [[3]] for birds and insects. However, they need [[4]] and careful maintenance.",
    "bank": [
      "improve",
      "temperatures",
      "habitats",
      "water",
      "damage",
      "temperatures",
      "habitats",
      "space"
    ],
    "blanks": [
      {
        "answer": "improve"
      },
      {
        "answer": "temperatures"
      },
      {
        "answer": "habitats"
      },
      {
        "answer": "water"
      }
    ]
  },
  {
    "id": "fib-r-04",
    "type": "fib-r",
    "section": "reading",
    "level": 2,
    "time": 150,
    "title": "博物馆",
    "instruction": "从词库选词填空。先判词性，再看搭配和逻辑。",
    "explanation": "① offer workshops；② engage communities；③ require funding；④ plan spending。",
    "tip": "词库有干扰项：先按词性排除，再看搭配。",
    "content": "Museums now [[1]] workshops and digital tours to attract younger visitors. These activities can [[2]] local communities and create jobs. However, they require [[3]] and staff time. Museums must therefore [[4]] their spending carefully.",
    "bank": [
      "offer",
      "engage",
      "funding",
      "plan",
      "refuse",
      "engage",
      "funding",
      "ignore"
    ],
    "blanks": [
      {
        "answer": "offer"
      },
      {
        "answer": "engage"
      },
      {
        "answer": "funding"
      },
      {
        "answer": "plan"
      }
    ]
  },
  {
    "id": "mcq-l-01",
    "type": "mcq-l",
    "section": "listening",
    "level": 2,
    "time": 90,
    "title": "宿舍申请",
    "instruction": "点播放听录音，选一个正确答案。音频只放一遍。",
    "explanation": "听力选择考“同义替换”，正确选项通常不是原词，而是意思相同的表达。",
    "tip": "先读题干关键词，听的时候等它出现；没听清就选最符合主题的。",
    "audio": "Welcome to the housing office. Applications for next year open on the first of March. Students who apply before the fifteenth will receive priority. Please note that all rooms are single study bedrooms, and shared kitchens are available on every floor.",
    "question": "When should students apply to receive priority?",
    "options": [
      "Before 15 March",
      "After 15 March",
      "On 1 April",
      "At the end of the year"
    ],
    "answer": 0
  },
  {
    "id": "mcq-l-02",
    "type": "mcq-l",
    "section": "listening",
    "level": 2,
    "time": 90,
    "title": "睡眠讲座",
    "instruction": "点播放听录音，选一个正确答案。音频只放一遍。",
    "explanation": "听力选择考“同义替换”，正确选项通常不是原词，而是意思相同的表达。",
    "tip": "先读题干关键词，听的时候等它出现；没听清就选最符合主题的。",
    "audio": "Today's lecture looks at sleep and memory. Deep sleep helps the brain move information into long-term memory. Students who sleep seven to eight hours before an exam usually remember more. However, caffeine and screens can delay sleep, so the speaker recommends a regular routine.",
    "question": "What does the speaker recommend?",
    "options": [
      "A regular sleep routine",
      "More caffeine",
      "Less revision",
      "Sleeping after the exam"
    ],
    "answer": 0
  },
  {
    "id": "mcq-l-03",
    "type": "mcq-l",
    "section": "listening",
    "level": 2,
    "time": 90,
    "title": "图书馆工作坊",
    "instruction": "点播放听录音，选一个正确答案。音频只放一遍。",
    "explanation": "听力选择考“同义替换”，正确选项通常不是原词，而是意思相同的表达。",
    "tip": "先读题干关键词，听的时候等它出现；没听清就选最符合主题的。",
    "audio": "The library is running a workshop on referencing this Thursday at two. The session will cover citation styles and plagiarism. Places are limited, so students should sign up at the front desk or online. The workshop will be repeated next month.",
    "question": "What is the workshop about?",
    "options": [
      "Referencing and plagiarism",
      "Finding a job",
      "Exam preparation",
      "Library design"
    ],
    "answer": 0
  },
  {
    "id": "mcq-l-04",
    "type": "mcq-l",
    "section": "listening",
    "level": 2,
    "time": 90,
    "title": "城市交通",
    "instruction": "点播放听录音，选一个正确答案。音频只放一遍。",
    "explanation": "听力选择考“同义替换”，正确选项通常不是原词，而是意思相同的表达。",
    "tip": "先读题干关键词，听的时候等它出现；没听清就选最符合主题的。",
    "audio": "The city plans to replace two car lanes on the bridge with a bus lane and a cycle path. The change will begin next month and last for a year. Officials say the trial will reduce congestion and pollution, but some drivers are worried about longer journeys.",
    "question": "What will happen on the bridge?",
    "options": [
      "Two car lanes will be replaced.",
      "The bridge will close completely.",
      "A new airport will be built.",
      "Bus fares will increase."
    ],
    "answer": 0
  },
  {
    "id": "hcs-01",
    "type": "hcs",
    "section": "listening",
    "level": 3,
    "time": 100,
    "title": "城市绿地（讲座）",
    "instruction": "听讲座，选出最准确的摘要。",
    "explanation": "HCS 考主旨，不是细节；排除只讲一个细节或与原文矛盾的选项。",
    "tip": "先听开头和结尾，再选覆盖全文的选项。",
    "audio": "Urban green spaces are more than decoration. Parks cool the air, absorb rainwater and give residents a place to exercise. Studies show that people who live near trees report lower stress. However, maintaining parks is costly. Cities therefore need to design green spaces that are cheap to maintain and safe to use.",
    "question": "Which summary is correct?",
    "options": [
      "Green spaces have health and environmental benefits, but cities must consider maintenance costs.",
      "Parks are too expensive and should be removed.",
      "Trees only help with decoration.",
      "Green spaces cause flooding and stress."
    ],
    "answer": 0
  },
  {
    "id": "hcs-02",
    "type": "hcs",
    "section": "listening",
    "level": 3,
    "time": 100,
    "title": "远程工作（讲座）",
    "instruction": "听讲座，选出最准确的摘要。",
    "explanation": "HCS 考主旨，不是细节；排除只讲一个细节或与原文矛盾的选项。",
    "tip": "先听开头和结尾，再选覆盖全文的选项。",
    "audio": "Remote work has become common. Employees save time on commuting and can organize their day flexibly. However, working alone for long periods can make people feel isolated. Many companies now combine remote work with regular office days so that teams can build trust.",
    "question": "Which summary is correct?",
    "options": [
      "Remote work has advantages but can isolate workers, so many companies use a hybrid model.",
      "Remote work is always better for everyone.",
      "Office work has no benefits.",
      "Employees should never work from home."
    ],
    "answer": 0
  },
  {
    "id": "hcs-03",
    "type": "hcs",
    "section": "listening",
    "level": 3,
    "time": 100,
    "title": "食物浪费（讲座）",
    "instruction": "听讲座，选出最准确的摘要。",
    "explanation": "HCS 考主旨，不是细节；排除只讲一个细节或与原文矛盾的选项。",
    "tip": "先听开头和结尾，再选覆盖全文的选项。",
    "audio": "A third of the food produced for human consumption is wasted. In wealthy countries, much waste happens in shops and homes. In poorer countries, waste often occurs after harvest because storage is inadequate. Solutions therefore need to differ by region, and prevention is better than finding new uses for wasted food.",
    "question": "Which summary is correct?",
    "options": [
      "Food waste has different causes in rich and poor countries, so solutions must differ.",
      "Food waste only happens in supermarkets.",
      "Storage is the only cause of waste.",
      "Rich countries waste no food."
    ],
    "answer": 0
  },
  {
    "id": "smw-01",
    "type": "smw",
    "section": "listening",
    "level": 2,
    "time": 80,
    "title": "记忆讲座（选缺失词）",
    "instruction": "听录音，选出最后缺失的词或短语。",
    "explanation": "讲座讲记忆巩固，缺失词是 consolidation。",
    "tip": "先听上下文，再选最符合主题的词；不要因为听不懂就空着。",
    "audio": "Today's lecture is about memory. When we learn new information, the brain forms connections between neurons. Repeating the information strengthens these connections. This process is called ...",
    "question": "Which word completes the recording?",
    "options": [
      "consolidation",
      "inflammation",
      "navigation",
      "pollution"
    ],
    "answer": 0
  },
  {
    "id": "smw-02",
    "type": "smw",
    "section": "listening",
    "level": 2,
    "time": 80,
    "title": "图书馆通知（选缺失词）",
    "instruction": "听录音，选出最后缺失的词或短语。",
    "explanation": "通知说工作坊在 Room 2；其他地点与原文不符。",
    "tip": "先听上下文，再选最符合主题的词；不要因为听不懂就空着。",
    "audio": "The library workshop will be held in ...",
    "question": "Which word completes the recording?",
    "options": [
      "Room 2",
      "the main hall",
      "the cafe",
      "the car park"
    ],
    "answer": 0
  },
  {
    "id": "smw-03",
    "type": "smw",
    "section": "listening",
    "level": 2,
    "time": 80,
    "title": "气候讲座（选缺失词）",
    "instruction": "听录音，选出最后缺失的词或短语。",
    "explanation": "温室效应主要气体是 carbon dioxide。",
    "tip": "先听上下文，再选最符合主题的词；不要因为听不懂就空着。",
    "audio": "The lecture explains the greenhouse effect. Heat from the sun is trapped in the atmosphere by gases. The main cause is ...",
    "question": "Which word completes the recording?",
    "options": [
      "carbon dioxide",
      "oxygen",
      "nitrogen",
      "hydrogen"
    ],
    "answer": 0
  }
];
