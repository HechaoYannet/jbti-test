import type { PersonalityType } from './types';

export const personalityTypesV3: PersonalityType[] = [
  // J开头：主动倾向 + 高米哈游指数
  {
    id: 'jtmp', // J:主动 T:思考 M:理性 P:感知
    name: '原神启动魔怔人',
    description: '米哈游在逃员工，认为原神是第九艺术，随时准备对线',
    characteristics: [
      '原神启动！崩铁启动！绝区零启动！',
      '能背诵所有角色生日和技能描述',
      '认为米哈游抄袭是友商抹黑',
      '在评论区战斗到天亮'
    ],
    memeExamples: [
      '原神启动',
      '米卫兵冲锋',
      '对线战士'
    ],
    color: '#FF6B6B', // 原神的红色
  },
  {
    id: 'jtnp', // J:主动 T:思考 N:感性 P:感知
    name: '粥礼宗师',
    description: '深谙粥游美学，玉足鉴赏家，讲究合乎粥礼',
    characteristics: [
      '能写万字剧情考据',
      '关注每个角色的脚部细节',
      '认为鹰角是艺术公司',
      '在二创区有百万播放'
    ],
    memeExamples: [
      '合乎粥礼',
      '玉足鉴赏',
      '粥学大师'
    ],
    color: '#4ECDC4', // 明日方舟的青色
  },
  {
    id: 'jimp', // J:主动 I:直觉 M:理性 P:感知
    name: '双修抽象带师',
    description: '同时精通米哈游和鹰角，用抽象话分析游戏机制',
    characteristics: [
      '能同时玩三个米哈游游戏',
      '用抽象比喻解释元素反应',
      '认为抽卡是量子力学',
      '在双修和精分之间反复横跳'
    ],
    memeExamples: [
      '量子抽卡',
      '双修大佬',
      '抽象分析'
    ],
    color: '#9B59B6', // 紫色的抽象
  },
  {
    id: 'jinp', // J:主动 I:直觉 N:感性 P:感知
    name: '二创之神',
    description: '不玩游戏，只玩二创，是梗的创造者',
    characteristics: [
      '只看二创不玩游戏',
      '能创造全网流行的新梗',
      '认为游戏本体不如二创有趣',
      '在现实和二次元之间选择二创'
    ],
    memeExamples: [
      '二创比本体好玩',
      '梗的创造者',
      '云玩家之神'
    ],
    color: '#3498DB', // 创意的蓝色
  },
  {
    id: 'jtmq', // J:主动 T:思考 M:理性 Q:判断
    name: '强度计算器',
    description: '用Excel玩游戏，每个角色都要算DPS',
    characteristics: [
      '能背出所有角色的伤害公式',
      '用数学模型配队',
      '认为厨力是浪费资源',
      '在强度和爱之间选择强度'
    ],
    memeExamples: [
      'Excel战士',
      'DPS警察',
      '强度至上'
    ],
    color: '#2ECC71', // 计算的绿色
  },
  {
    id: 'jtnq', // J:主动 T:思考 N:感性 Q:判断
    name: '剧情考据党',
    description: '研究游戏世界观比玩游戏还认真',
    characteristics: [
      '能画出完整的世界观时间线',
      '研究每个NPC的背景故事',
      '认为剧情比玩法重要',
      '在玩和研之间选择研究'
    ],
    memeExamples: [
      '万字考据',
      '剧情警察',
      '世界观大师'
    ],
    color: '#F1C40F', // 知识的黄色
  },
  {
    id: 'jimq', // J:主动 I:直觉 M:理性 Q:判断
    name: '抽卡玄学家',
    description: '相信玄学抽卡，有完整的抽卡仪式',
    characteristics: [
      '在特定时间特定地点抽卡',
      '相信UP池有保底机制外的规律',
      '能说出十种提高出货率的方法',
      '在科学和玄学之间选择玄学'
    ],
    memeExamples: [
      '玄学抽卡',
      '抽卡仪式',
      '欧气研究'
    ],
    color: '#E67E22', // 玄学的橙色
  },
  {
    id: 'jinq', // J:主动 I:直觉 N:感性 Q:判断
    name: '厨力放出者',
    description: '为爱发电，不管强度只看立绘',
    characteristics: [
      '为厨的角色氪穿卡池',
      '能说出角色所有细节',
      '认为强度是暂时的，厨力是永恒的',
      '在理性和感性之间选择厨力'
    ],
    memeExamples: [
      '为爱买单',
      '厨力放出',
      '立绘党'
    ],
    color: '#E74C3C', // 爱的红色
  },

  // B开头：被动倾向 + 低米哈游/高佛系
  {
    id: 'btmp', // B:被动 T:思考 M:理性 P:感知
    name: '佛系躺平人',
    description: '如何呢又能怎，卡皮巴拉本拉',
    characteristics: [
      '每天上线五分钟清体力',
      '抽卡随缘，歪了也不生气',
      '认为游戏只是消遣',
      '在卷和躺之间选择躺平'
    ],
    memeExamples: [
      '如何呢又能怎',
      '卡皮巴拉',
      '佛系玩家'
    ],
    color: '#95A5A6', // 佛系的灰色
  },
  {
    id: 'btnp', // B:被动 T:思考 N:感性 P:感知
    name: '云玩家观察员',
    description: '不玩游戏，只看直播和视频，是专业的云玩家',
    characteristics: [
      '能说出所有主流主播的抽卡习惯',
      '通过视频了解游戏内容',
      '认为云玩比真玩更有趣',
      '在玩和看之间选择看'
    ],
    memeExamples: [
      '专业云玩',
      '直播观众',
      '视频通关'
    ],
    color: '#7F8C8D', // 云的深灰色
  },
  {
    id: 'bimp', // B:被动 I:直觉 M:理性 P:感知
    name: '数据收集癖',
    description: '喜欢收集数据但不分析，仓库里全是没练的角色',
    characteristics: [
      '全图鉴但没几个满级',
      '喜欢抽卡但不喜欢养成',
      '认为收集比使用更有趣',
      '在质和量之间选择量'
    ],
    memeExamples: [
      '仓鼠玩家',
      '收集癖',
      '抽卡狂魔'
    ],
    color: '#34495E', // 数据的深蓝色
  },
  {
    id: 'binp', // B:被动 I:直觉 N:感性 P:感知
    name: '氛围享受者',
    description: '不在意玩法，只享受游戏氛围和音乐',
    characteristics: [
      '在游戏里挂机听音乐',
      '喜欢截图但不会P图',
      '认为氛围比内容重要',
      '在玩和感受之间选择感受'
    ],
    memeExamples: [
      '挂机听歌',
      '截图党',
      '氛围组'
    ],
    color: '#16A085', // 氛围的青色
  },
  {
    id: 'btmq', // B:被动 T:思考 M:理性 Q:判断
    name: '性价比大师',
    description: '每个氪金决策都要算性价比，月卡党之王',
    characteristics: [
      '能说出所有充值档位的性价比',
      '只买月卡和首充',
      '认为白嫖才是真谛',
      '在氪和白嫖之间选择性价比'
    ],
    memeExamples: [
      '月卡党',
      '性价比战士',
      '精打细算'
    ],
    color: '#27AE60', // 性价比的绿色
  },
  {
    id: 'btnq', // B:被动 T:思考 N:感性 Q:判断
    name: '怀旧老玩家',
    description: '总是怀念以前的版本，认为现在的游戏不如以前',
    characteristics: [
      '能说出每个版本的优缺点',
      '怀念过去的游戏环境',
      '认为新角色不如老角色',
      '在新和旧之间选择怀旧'
    ],
    memeExamples: [
      '以前更好玩',
      '老玩家叹息',
      '版本警察'
    ],
    color: '#8E44AD', // 怀旧的紫色
  },
  {
    id: 'bimq', // B:被动 I:直觉 M:理性 Q:判断
    name: '理论分析家',
    description: '喜欢分析但不实践，能说出所有配队但自己不用',
    characteristics: [
      '能分析所有主流配队',
      '自己用的却是非主流',
      '认为理论比实践有趣',
      '在说和做之间选择说'
    ],
    memeExamples: [
      '理论大师',
      '云配队',
      '分析家'
    ],
    color: '#2980B9', // 理论的蓝色
  },
  {
    id: 'binq', // B:被动 I:直觉 N:感性 Q:判断
    name: '终极摆烂人',
    description: '已经圆寂（物理），游戏是什么？',
    characteristics: [
      '游戏已卸载但还在关注社区',
      '能说出所有节奏但不在意',
      '认为游戏都是虚拟的',
      '在玩和不玩之间选择摆烂'
    ],
    memeExamples: [
      '已圆寂',
      '摆烂之王',
      '虚拟与现实'
    ],
    color: '#2C3E50', // 摆烂的黑色
  }
];