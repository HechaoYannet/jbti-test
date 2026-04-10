import type { Question } from './types';

export const questionsV3: Question[] = [
  // 第一部分：游戏信仰与审美（1-9题） - 测试mihoyo和porridge维度
  {
    id: 1,
    text: "当有人问'你玩原神吗？'，你的反应是：",
    category: 'social',
    options: [
      {
        id: 1,
        text: "'原神启动！'并开始讲解元素反应",
        meme: "原神启动",
        scores: [
          { dimension: 'mihoyo', value: 2 },
          { dimension: 'dragon', value: 1 },
          { dimension: 'abstract', value: 1 }
        ]
      },
      {
        id: 2,
        text: "'我玩鸣潮，原神抄袭！'（其实没玩过）",
        meme: "鸣潮启动",
        scores: [
          { dimension: 'mihoyo', value: -2 },
          { dimension: 'fake', value: 1 },
          { dimension: 'chaos', value: 1 }
        ]
      }
    ]
  },
  {
    id: 2,
    text: "看到明日方舟的角色立绘，你首先关注：",
    category: 'abstract',
    options: [
      {
        id: 1,
        text: "角色强度、技能机制、配队思路",
        meme: "强度党",
        scores: [
          { dimension: 'porridge', value: 0 },
          { dimension: 'balance', value: 1 },
          { dimension: 'pill', value: 1 }
        ]
      },
      {
        id: 2,
        text: "'这玉足画得真不错，合乎粥礼！'",
        meme: "玉足鉴赏",
        scores: [
          { dimension: 'porridge', value: 2 },
          { dimension: 'abstract', value: 1 },
          { dimension: 'cringe', value: 1 }
        ]
      }
    ]
  },
  {
    id: 3,
    text: "米哈游出新游戏了，你会：",
    category: 'life',
    options: [
      {
        id: 1,
        text: "第一时间预下载，准备开服冲榜",
        meme: "米卫兵冲锋",
        scores: [
          { dimension: 'mihoyo', value: 2 },
          { dimension: 'chaos', value: 1 },
          { dimension: 'dragon', value: 1 }
        ]
      },
      {
        id: 2,
        text: "'又抄袭！等一个鸣潮2.0'（在评论区开战）",
        meme: "专业米黑",
        scores: [
          { dimension: 'mihoyo', value: -2 },
          { dimension: 'chaos', value: 2 },
          { dimension: 'cringe', value: 1 }
        ]
      }
    ]
  },
  {
    id: 4,
    text: "明日方舟的剧情越来越抽象，你：",
    category: 'abstract',
    options: [
      {
        id: 1,
        text: "写万字考据分析，研究世界观细节",
        meme: "粥学大师",
        scores: [
          { dimension: 'porridge', value: 2 },
          { dimension: 'abstract', value: 2 },
          { dimension: 'balance', value: 1 }
        ]
      },
      {
        id: 2,
        text: "'跳过跳过，我是来抽卡的'",
        meme: "skip党",
        scores: [
          { dimension: 'porridge', value: 0 },
          { dimension: 'pill', value: 1 },
          { dimension: 'balance', value: -1 }
        ]
      }
    ]
  },
  {
    id: 5,
    text: "有人说'原神是国产游戏之光'，你：",
    category: 'social',
    options: [
      {
        id: 1,
        text: "疯狂点赞，并开始安利给朋友",
        meme: "光之传播者",
        scores: [
          { dimension: 'mihoyo', value: 2 },
          { dimension: 'fake', value: 1 },
          { dimension: 'cringe', value: 1 }
        ]
      },
      {
        id: 2,
        text: "'笑了，抄袭塞尔达的东西也配？'",
        meme: "塞尔达正统",
        scores: [
          { dimension: 'mihoyo', value: -2 },
          { dimension: 'chaos', value: 1 },
          { dimension: 'cringe', value: 1 }
        ]
      }
    ]
  },
  {
    id: 6,
    text: "明日方舟出限定池了，你的反应：",
    category: 'life',
    options: [
      {
        id: 1,
        text: "'鹰角飞马！但还是要抽'（一边骂一边氪金）",
        meme: "口嫌体正直",
        scores: [
          { dimension: 'porridge', value: 1 },
          { dimension: 'fake', value: 1 },
          { dimension: 'chaos', value: 1 }
        ]
      },
      {
        id: 2,
        text: "'这立绘，这特效，这声优！抽爆！'",
        meme: "抽爆就完事",
        scores: [
          { dimension: 'porridge', value: 2 },
          { dimension: 'abstract', value: 1 },
          { dimension: 'chaos', value: 1 }
        ]
      }
    ]
  },
  {
    id: 7,
    text: "崩坏：星穹铁道和原神，你更喜欢：",
    category: 'life',
    options: [
      {
        id: 1,
        text: "原神！开放世界才是未来",
        meme: "原神正统",
        scores: [
          { dimension: 'mihoyo', value: 2 },
          { dimension: 'dragon', value: 1 },
          { dimension: 'balance', value: -1 }
        ]
      },
      {
        id: 2,
        text: "星铁！回合制才是王道，而且不用跑图",
        meme: "星铁启动",
        scores: [
          { dimension: 'mihoyo', value: 1 },
          { dimension: 'pill', value: 1 },
          { dimension: 'balance', value: 1 }
        ]
      }
    ]
  },
  {
    id: 8,
    text: "看到'博士，你还有很多事要做'，你：",
    category: 'work',
    options: [
      {
        id: 1,
        text: "立刻打开游戏开始清体力",
        meme: "条件反射",
        scores: [
          { dimension: 'porridge', value: 2 },
          { dimension: 'pill', value: -1 },
          { dimension: 'balance', value: -1 }
        ]
      },
      {
        id: 2,
        text: "'知道了知道了，这就去刷1-7'（继续躺平）",
        meme: "佛系博士",
        scores: [
          { dimension: 'porridge', value: 1 },
          { dimension: 'pill', value: 2 },
          { dimension: 'balance', value: 1 }
        ]
      }
    ]
  },
  {
    id: 9,
    text: "米哈游和鹰角同时出新活动，你优先玩：",
    category: 'life',
    options: [
      {
        id: 1,
        text: "米哈游！技术力碾压，美术音乐顶级",
        meme: "米哈游技术宅",
        scores: [
          { dimension: 'mihoyo', value: 2 },
          { dimension: 'porridge', value: -1 },
          { dimension: 'abstract', value: 1 }
        ]
      },
      {
        id: 2,
        text: "鹰角！剧情深度和角色塑造更胜一筹",
        meme: "鹰角剧情党",
        scores: [
          { dimension: 'mihoyo', value: -1 },
          { dimension: 'porridge', value: 2 },
          { dimension: 'abstract', value: 1 }
        ]
      }
    ]
  },

  // 第二部分：抽象网络行为（10-18题） - 测试abstract、meme、cringe维度
  {
    id: 10,
    text: "你朋友突然对你说：'你可曾在雪山上救过一只狐狸？'你的第一反应是：",
    category: 'social',
    options: [
      {
        id: 1,
        text: "救了，然后它变成酱板鸭来找我寻仇了",
        meme: "酱板鸭寻仇",
        scores: [
          { dimension: 'abstract', value: 2 },
          { dimension: 'meme', value: 1 },
          { dimension: 'chaos', value: 1 }
        ]
      },
      {
        id: 2,
        text: "我不是狐狸，我是……沃尔玛购物袋",
        meme: "沃尔玛购物袋",
        scores: [
          { dimension: 'abstract', value: 2 },
          { dimension: 'pill', value: 1 },
          { dimension: 'cringe', value: 1 }
        ]
      }
    ]
  },
  {
    id: 11,
    text: "你在群里发了一条消息，没人理你。你会：",
    category: 'social',
    options: [
      {
        id: 1,
        text: "再发一条'家人们谁懂啊'",
        meme: "家人们谁懂啊",
        scores: [
          { dimension: 'cringe', value: 2 },
          { dimension: 'fake', value: 1 },
          { dimension: 'meme', value: 1 }
        ]
      },
      {
        id: 2,
        text: "自己回自己：'不知道，我的身材很曼妙'",
        meme: "身材很曼妙",
        scores: [
          { dimension: 'abstract', value: 2 },
          { dimension: 'chaos', value: 1 },
          { dimension: 'cringe', value: 1 }
        ]
      }
    ]
  },
  {
    id: 12,
    text: "有人在你朋友圈底下评论'你玩抽象吗？'，你会：",
    category: 'social',
    options: [
      {
        id: 1,
        text: "'此人绝非扇贝'",
        meme: "此人绝非扇贝",
        scores: [
          { dimension: 'abstract', value: 2 },
          { dimension: 'meme', value: 1 },
          { dimension: 'balance', value: -1 }
        ]
      },
      {
        id: 2,
        text: "'房子着火我睡觉'",
        meme: "房子着火我睡觉",
        scores: [
          { dimension: 'pill', value: 2 },
          { dimension: 'chaos', value: 1 },
          { dimension: 'balance', value: 1 }
        ]
      }
    ]
  },
  {
    id: 13,
    text: "朋友说'你这班味太重了'，你会：",
    category: 'social',
    options: [
      {
        id: 1,
        text: "'做完你的，做你的……这种场面我还是在控制'",
        meme: "场面控制",
        scores: [
          { dimension: 'fake', value: 2 },
          { dimension: 'cringe', value: 1 },
          { dimension: 'balance', value: 1 }
        ]
      },
      {
        id: 2,
        text: "回一个😅然后继续打工",
        meme: "流汗黄豆",
        scores: [
          { dimension: 'pill', value: 2 },
          { dimension: 'meme', value: 1 },
          { dimension: 'balance', value: -1 }
        ]
      }
    ]
  },
  {
    id: 14,
    text: "别人问你为什么不谈恋爱，你回答：",
    category: 'social',
    options: [
      {
        id: 1,
        text: "'如何呢又能怎'",
        meme: "如何呢又能怎",
        scores: [
          { dimension: 'pill', value: 2 },
          { dimension: 'abstract', value: 1 },
          { dimension: 'balance', value: 1 }
        ]
      },
      {
        id: 2,
        text: "'随橙想，这反耳给了我一些古力'",
        meme: "抽象谐音梗",
        scores: [
          { dimension: 'abstract', value: 2 },
          { dimension: 'chaos', value: 1 },
          { dimension: 'balance', value: -1 }
        ]
      }
    ]
  },
  {
    id: 15,
    text: "你在网上看到两个人吵架，一个说'你红温了'，另一个说'你才红温'：",
    category: 'social',
    options: [
      {
        id: 1,
        text: "默默吃瓜不说话",
        meme: "吃瓜群众",
        scores: [
          { dimension: 'pill', value: 2 },
          { dimension: 'balance', value: 1 },
          { dimension: 'cringe', value: -1 }
        ]
      },
      {
        id: 2,
        text: "发一句'那咋了？'让两边都破防",
        meme: "那咋了",
        scores: [
          { dimension: 'chaos', value: 2 },
          { dimension: 'cringe', value: 1 },
          { dimension: 'balance', value: -1 }
        ]
      }
    ]
  },
  {
    id: 16,
    text: "你朋友发了一张自拍配文'今天city不city'：",
    category: 'social',
    options: [
      {
        id: 1,
        text: "回'好city啊'",
        meme: "city文学",
        scores: [
          { dimension: 'fake', value: 2 },
          { dimension: 'cringe', value: 1 },
          { dimension: 'meme', value: 1 }
        ]
      },
      {
        id: 2,
        text: "回'不知道，我的身材很曼妙'",
        meme: "身材很曼妙",
        scores: [
          { dimension: 'abstract', value: 2 },
          { dimension: 'chaos', value: 1 },
          { dimension: 'cringe', value: 1 }
        ]
      }
    ]
  },
  {
    id: 17,
    text: "有人对你说'你这人偷感很重'，你：",
    category: 'social',
    options: [
      {
        id: 1,
        text: "承认'确实，我偷走了你的心'（然后被拉黑）",
        meme: "土味情话",
        scores: [
          { dimension: 'cringe', value: 2 },
          { dimension: 'fake', value: 1 },
          { dimension: 'balance', value: -1 }
        ]
      },
      {
        id: 2,
        text: "回'世界是一个巨大的草台班子，我偷点东西怎么了'",
        meme: "草台班子",
        scores: [
          { dimension: 'abstract', value: 2 },
          { dimension: 'chaos', value: 1 },
          { dimension: 'balance', value: 1 }
        ]
      }
    ]
  },
  {
    id: 18,
    text: "你发了一条很认真的动态，评论区全是'典急孝'：",
    category: 'social',
    options: [
      {
        id: 1,
        text: "一个一个对线，奋战到天亮",
        meme: "对线战士",
        scores: [
          { dimension: 'chaos', value: 2 },
          { dimension: 'dragon', value: 1 },
          { dimension: 'balance', value: -2 }
        ]
      },
      {
        id: 2,
        text: "'不讲不讲'然后消失",
        meme: "不讲不讲",
        scores: [
          { dimension: 'pill', value: 2 },
          { dimension: 'balance', value: 1 },
          { dimension: 'chaos', value: -1 }
        ]
      }
    ]
  },

  // 第三部分：幻想与现实（19-27题） - 测试dragon、pill、balance维度
  {
    id: 19,
    text: "你的人生格言更接近：",
    category: 'life',
    options: [
      {
        id: 1,
        text: "'差不多得了'",
        meme: "差不多得了",
        scores: [
          { dimension: 'pill', value: 2 },
          { dimension: 'balance', value: 1 },
          { dimension: 'dragon', value: -1 }
        ]
      },
      {
        id: 2,
        text: "'爱你老己'——先爱自己，再爱别人",
        meme: "爱你老己",
        scores: [
          { dimension: 'abstract', value: 2 },
          { dimension: 'pill', value: 1 },
          { dimension: 'balance', value: 1 }
        ]
      }
    ]
  },
  {
    id: 20,
    text: "你如何看待'内卷'？",
    category: 'work',
    options: [
      {
        id: 1,
        text: "卷死别人",
        meme: "卷王",
        scores: [
          { dimension: 'fake', value: 2 },
          { dimension: 'chaos', value: 1 },
          { dimension: 'balance', value: -2 }
        ]
      },
      {
        id: 2,
        text: "'从从容容游刃有余'做不到，'匆匆忙忙连滚带爬'就完事了",
        meme: "连滚带爬",
        scores: [
          { dimension: 'pill', value: 2 },
          { dimension: 'abstract', value: 1 },
          { dimension: 'balance', value: 0 }
        ]
      }
    ]
  },
  {
    id: 21,
    text: "如果明天世界毁灭，你今天会：",
    category: 'life',
    options: [
      {
        id: 1,
        text: "正常上班/上学",
        meme: "正常作息",
        scores: [
          { dimension: 'pill', value: 2 },
          { dimension: 'balance', value: 2 },
          { dimension: 'chaos', value: -2 }
        ]
      },
      {
        id: 2,
        text: "'敬自己一杯'，然后把所有钱买奶茶和炸鸡",
        meme: "敬自己一杯",
        scores: [
          { dimension: 'abstract', value: 2 },
          { dimension: 'chaos', value: 1 },
          { dimension: 'balance', value: -1 }
        ]
      }
    ]
  },
  {
    id: 22,
    text: "你看到'00后已经年入百万'的视频：",
    category: 'work',
    options: [
      {
        id: 1,
        text: "焦虑",
        meme: "焦虑",
        scores: [
          { dimension: 'fake', value: 2 },
          { dimension: 'cringe', value: 1 },
          { dimension: 'balance', value: -1 }
        ]
      },
      {
        id: 2,
        text: "'低山臭水遇知音'——我和评论区破防的人都是兄弟",
        meme: "低山臭水遇知音",
        scores: [
          { dimension: 'abstract', value: 2 },
          { dimension: 'pill', value: 1 },
          { dimension: 'balance', value: 1 }
        ]
      }
    ]
  },
  {
    id: 23,
    text: "有人对你说'你这个年纪怎么睡得着的'，你回：",
    category: 'life',
    options: [
      {
        id: 1,
        text: "'我还能再睡十年'",
        meme: "再睡十年",
        scores: [
          { dimension: 'pill', value: 2 },
          { dimension: 'abstract', value: 1 },
          { dimension: 'balance', value: 0 }
        ]
      },
      {
        id: 2,
        text: "'我预制了20年的睡眠计划'",
        meme: "预制睡眠",
        scores: [
          { dimension: 'abstract', value: 2 },
          { dimension: 'chaos', value: 1 },
          { dimension: 'balance', value: -1 }
        ]
      }
    ]
  },
  {
    id: 24,
    text: "你相信星座/MBTI吗？",
    category: 'life',
    options: [
      {
        id: 1,
        text: "玩玩而已",
        meme: "理性看待",
        scores: [
          { dimension: 'pill', value: 2 },
          { dimension: 'balance', value: 1 },
          { dimension: 'dragon', value: -1 }
        ]
      },
      {
        id: 2,
        text: "相信，因为我是'古希腊掌管抽象的神'",
        meme: "古希腊掌管抽象的神",
        scores: [
          { dimension: 'abstract', value: 2 },
          { dimension: 'dragon', value: 1 },
          { dimension: 'balance', value: -1 }
        ]
      }
    ]
  },
  {
    id: 25,
    text: "你如何看待'情绪价值'？",
    category: 'social',
    options: [
      {
        id: 1,
        text: "很重要，需要互相提供",
        meme: "互相提供",
        scores: [
          { dimension: 'fake', value: 2 },
          { dimension: 'pill', value: 1 },
          { dimension: 'balance', value: 1 }
        ]
      },
      {
        id: 2,
        text: "我给别人提供负情绪价值——主打一个反向输出",
        meme: "反向输出",
        scores: [
          { dimension: 'chaos', value: 2 },
          { dimension: 'abstract', value: 1 },
          { dimension: 'balance', value: -1 }
        ]
      }
    ]
  },
  {
    id: 26,
    text: "你发了一条'哈哈哈哈哈哈哈'，实际你：",
    category: 'social',
    options: [
      {
        id: 1,
        text: "真笑了",
        meme: "真笑",
        scores: [
          { dimension: 'pill', value: 2 },
          { dimension: 'balance', value: 1 },
          { dimension: 'fake', value: -1 }
        ]
      },
      {
        id: 2,
        text: "面无表情，甚至有点想哭——'千百次练习只为这一刻'的假笑",
        meme: "假笑练习",
        scores: [
          { dimension: 'fake', value: 2 },
          { dimension: 'cringe', value: 1 },
          { dimension: 'balance', value: -1 }
        ]
      }
    ]
  },
  {
    id: 27,
    text: "你相信'努力就有回报'吗？",
    category: 'work',
    options: [
      {
        id: 1,
        text: "信，但不完全信",
        meme: "半信半疑",
        scores: [
          { dimension: 'pill', value: 2 },
          { dimension: 'balance', value: 1 },
          { dimension: 'chaos', value: -1 }
        ]
      },
      {
        id: 2,
        text: "'信我是秦始皇还是信这个'",
        meme: "秦始皇梗",
        scores: [
          { dimension: 'abstract', value: 2 },
          { dimension: 'chaos', value: 1 },
          { dimension: 'balance', value: -1 }
        ]
      }
    ]
  },

  // 第四部分：终极抽象（28-36题） - 综合测试所有维度
  {
    id: 28,
    text: "你走在路上看到一根树枝特别像奶龙，你会：",
    category: 'abstract',
    options: [
      {
        id: 1,
        text: "无视",
        meme: "无视",
        scores: [
          { dimension: 'pill', value: 2 },
          { dimension: 'balance', value: 1 },
          { dimension: 'abstract', value: -1 }
        ]
      },
      {
        id: 2,
        text: "拍照发朋友圈：'捡到野生奶龙幼崽，求鉴定'",
        meme: "奶龙幼崽",
        scores: [
          { dimension: 'abstract', value: 2 },
          { dimension: 'chaos', value: 1 },
          { dimension: 'cringe', value: 1 }
        ]
      }
    ]
  },
  {
    id: 29,
    text: "你上厕所没带手机，你会：",
    category: 'abstract',
    options: [
      {
        id: 1,
        text: "认真解决，赶紧出来",
        meme: "高效解决",
        scores: [
          { dimension: 'pill', value: 2 },
          { dimension: 'balance', value: 1 },
          { dimension: 'abstract', value: -1 }
        ]
      },
      {
        id: 2,
        text: "看洗发水成分表，并开始'赛博对账'——'这款和我上次用的不一样'",
        meme: "赛博对账",
        scores: [
          { dimension: 'abstract', value: 2 },
          { dimension: 'chaos', value: 1 },
          { dimension: 'balance', value: -1 }
        ]
      }
    ]
  },
  {
    id: 30,
    text: "你朋友说'你是真饿了'，你回：",
    category: 'social',
    options: [
      {
        id: 1,
        text: "'我确实该吃饭了'",
        meme: "正常回应",
        scores: [
          { dimension: 'pill', value: 2 },
          { dimension: 'balance', value: 1 },
          { dimension: 'abstract', value: -1 }
        ]
      },
      {
        id: 2,
        text: "'丝瓜汤喝多了吧你'",
        meme: "丝瓜汤",
        scores: [
          { dimension: 'abstract', value: 2 },
          { dimension: 'chaos', value: 1 },
          { dimension: 'cringe', value: 1 }
        ]
      }
    ]
  },
  {
    id: 31,
    text: "如果让你选一个超能力，你选：",
    category: 'abstract',
    options: [
      {
        id: 1,
        text: "隐身",
        meme: "隐身",
        scores: [
          { dimension: 'fake', value: 2 },
          { dimension: 'pill', value: 1 },
          { dimension: 'balance', value: 0 }
        ]
      },
      {
        id: 2,
        text: "'让所有人听到他们心里最真实的那句'你其实很无聊''——然后大家一起喝丝瓜汤",
        meme: "丝瓜汤超能力",
        scores: [
          { dimension: 'abstract', value: 2 },
          { dimension: 'chaos', value: 1 },
          { dimension: 'balance', value: -1 }
        ]
      }
    ]
  },
  {
    id: 32,
    text: "你看到一个帖子标题'进来猜猜我是谁'，你：",
    category: 'social',
    options: [
      {
        id: 1,
        text: "直接退出",
        meme: "直接退出",
        scores: [
          { dimension: 'pill', value: 2 },
          { dimension: 'balance', value: 1 },
          { dimension: 'chaos', value: -1 }
        ]
      },
      {
        id: 2,
        text: "回'你是那个欠我两百块不还的初中同学'",
        meme: "欠钱同学",
        scores: [
          { dimension: 'abstract', value: 2 },
          { dimension: 'chaos', value: 1 },
          { dimension: 'balance', value: -1 }
        ]
      }
    ]
  },
  {
    id: 33,
    text: "你听到'法拉利老了还是法拉利'这句话：",
    category: 'abstract',
    options: [
      {
        id: 1,
        text: "觉得很有道理",
        meme: "认同",
        scores: [
          { dimension: 'pill', value: 2 },
          { dimension: 'balance', value: 1 },
          { dimension: 'abstract', value: -1 }
        ]
      },
      {
        id: 2,
        text: "'我老了还是沃尔玛购物袋'",
        meme: "沃尔玛购物袋",
        scores: [
          { dimension: 'abstract', value: 2 },
          { dimension: 'pill', value: 1 },
          { dimension: 'balance', value: 0 }
        ]
      }
    ]
  },
  {
    id: 34,
    text: "你觉得自己像什么：",
    category: 'life',
    options: [
      {
        id: 1,
        text: "卡皮巴拉（佛系）",
        meme: "卡皮巴拉",
        scores: [
          { dimension: 'pill', value: 2 },
          { dimension: 'balance', value: 1 },
          { dimension: 'chaos', value: -1 }
        ]
      },
      {
        id: 2,
        text: "'浪浪山小妖怪'——想躺平但被生活推着走",
        meme: "浪浪山小妖怪",
        scores: [
          { dimension: 'abstract', value: 2 },
          { dimension: 'pill', value: 1 },
          { dimension: 'balance', value: 0 }
        ]
      }
    ]
  },
  {
    id: 35,
    text: "你发了一条'家人们'，后面会接：",
    category: 'social',
    options: [
      {
        id: 1,
        text: "'谁懂啊'",
        meme: "谁懂啊",
        scores: [
          { dimension: 'cringe', value: 2 },
          { dimension: 'fake', value: 1 },
          { dimension: 'balance', value: -1 }
        ]
      },
      {
        id: 2,
        text: "'我要讲一个'下身基础上身就不基础'的故事'",
        meme: "下身基础上身就不基础",
        scores: [
          { dimension: 'abstract', value: 2 },
          { dimension: 'chaos', value: 1 },
          { dimension: 'balance', value: -1 }
        ]
      }
    ]
  },
  {
    id: 36,
    text: "最后一题，你现在的精神状态：",
    category: 'life',
    options: [
      {
        id: 1,
        text: "'还行，能活'",
        meme: "还能活",
        scores: [
          { dimension: 'pill', value: 2 },
          { dimension: 'balance', value: 1 },
          { dimension: 'chaos', value: -1 }
        ]
      },
      {
        id: 2,
        text: "'我将辞职在家研究这份问卷'",
        meme: "我将辞职",
        scores: [
          { dimension: 'abstract', value: 2 },
          { dimension: 'chaos', value: 1 },
          { dimension: 'balance', value: -1 }
        ]
      }
    ]
  }
];