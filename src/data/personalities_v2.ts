import type { PersonalityType } from './types';

// JBTI 2.0人格类型（经典荒诞版）- 包含GitHub上的文字改动
export const personalityTypesV2: PersonalityType[] = [
  // 第一组：J 开头 · 主动出击型
  {
    id: 'jtmq',
    name: '酱板鸭',
    description: '"你可曾在雪山上救过我？"——随时准备寻仇，但本质是只鸭子',
    characteristics: [
      '记仇能力MAX，但只会嘎嘎叫',
      '表面凶狠，实际是酱香型',
      '喜欢在雪山上制造偶遇',
      '口头禅：此人绝非扇贝'
    ],
    memeExamples: [
      '酱板鸭寻仇',
      '雪山救狐狸',
      '此人绝非扇贝'
    ],
    color: '#8B4513', // 酱板鸭的棕色
  },
  {
    id: 'jtnq',
    name: '偷感人',
    description: '做事偷偷摸摸，连呼吸都怕打扰到别人',
    characteristics: [
      '走路像在偷地雷',
      '发消息前要撤回三次',
      '觉得自己身材很曼妙（但不敢说）',
      '擅长在人群中隐身'
    ],
    memeExamples: [
      '不知道，我的身材很曼妙',
      '偷感很重',
      '草台班子理论'
    ],
    color: '#708090', // 低调的灰色
  },
  {
    id: 'jtmp',
    name: '魔丸',
    description: '易燃易爆炸，随时准备对线',
    characteristics: [
      '一点就着，但炸完就后悔',
      '擅长在评论区战斗',
      '口头禅：助我破鼎！',
      '表面冷静，内心岩浆'
    ],
    memeExamples: [
      '助我破鼎！',
      '对线战士',
      '易燃易爆炸'
    ],
    color: '#DC143C', // 愤怒的红色
  },
  {
    id: 'jtnp',
    name: '草台班子',
    description: '世界是巨大的草台班子，你是其中最草台的那个',
    characteristics: [
      '擅长用"场面控制"安慰自己',
      '做事全靠临场发挥',
      '认为大家都是草台',
      '表面镇定，内心慌得一批'
    ],
    memeExamples: [
      '这种场面我还是在控制',
      '世界是巨大的草台班子',
      '临场发挥大师'
    ],
    color: '#228B22', // 草台的绿色
  },
  {
    id: 'jimq',
    name: '红温人',
    description: '动不动就脸红，但嘴硬"我没有急"',
    characteristics: [
      '容易脸红，但绝不承认',
      '擅长说"那咋了？"',
      '内心温度计随时爆表',
      '表面淡定，实际CPU已烧'
    ],
    memeExamples: [
      '那咋了？',
      '红温了',
      '我没有急'
    ],
    color: '#FF4500', // 红温的橙色
  },
  {
    id: 'jinq',
    name: '丝瓜汤受害者',
    description: '东亚家庭创伤代言人，一碗丝瓜汤就能让你破防',
    characteristics: [
      '对丝瓜汤有PTSD',
      '擅长用抽象话掩饰创伤',
      '表面坚强，内心脆弱',
      '一碗汤就能唤醒童年记忆'
    ],
    memeExamples: [
      '水煮黑背鲈吃中毒了？',
      '核心出装：原生家庭',
      '抽象掩饰法'
    ],
    color: '#90EE90', // 丝瓜汤的浅绿色
  },
  {
    id: 'jimp',
    name: '赛博哭坟人',
    description: '喜欢给过气梗办葬礼',
    characteristics: [
      '怀旧情怀MAX',
      '擅长R.I.P.各种梗',
      '在互联网公墓有VIP席位',
      '表面伤感，实际在玩梗'
    ],
    memeExamples: [
      'R.I.P. 2024年的互联网',
      '过气梗葬礼',
      '赛博怀旧'
    ],
    color: '#696969', // 墓碑的灰色
  },
  {
    id: 'jinp',
    name: '懂王 2.0',
    description: '什么都懂，一问就顾左右而言他',
    characteristics: [
      '表面知识渊博',
      '实际只会说"不知道，但我的身材很曼妙"',
      '擅长转移话题',
      '没有人比我更懂懂王'
    ],
    memeExamples: [
      '我不知道，但我的身材很曼妙',
      '顾左右而言他',
      '建国同志早年战友'
    ],
    color: '#4169E1', // 懂王的蓝色
  },
  // 第二组：B 开头 · 随缘躺平型
  {
    id: 'btmq',
    name: '你是奶龙',
    description: '奶龙捧腹大笑.GIF',
    characteristics: [
      '看我装糖阴他一手',
      '"家人们谁懂啊"',
      '已经没有人类了',
      '“我才是奶龙！”'
    ],
    memeExamples: [
      '龙哥不让你🍬',
      '你🍬不🍬？',
      '龙哥装🍬逗逗你的呀~'
    ],
    color: '#FFB6C1', // 奶龙的粉色
  },
  {
    id: 'btnq',
    name: '悠悠的户晨风~',
    description: '随风飘荡毫无立场，但能装很多东西（包括烂梗）',
    characteristics: [
      '坚定的资本主义战士',
      '擅长装各种东西',
      '老了还是沃尔玛购物袋',
      '你别说，麦旋风真好吃'
    ],
    memeExamples: [
      '我老了还是沃尔玛购物袋',
      '随风飘荡',
      '编不下去了😵'
    ],
    color: '#1E90FF', // 沃尔玛的蓝色
  },
  {
    id: 'btmp',
    name: '抽象派',
    description: '你比Picasso都abstract',
    characteristics: [
      '构史学家（虚）',
      '擅长创造新梗',
      '"此人绝非扇贝"是语言的艺术！',
      '哟~西~'
    ],
    memeExamples: [
      '此人绝非扇贝',
      '抽象传承',
      '野生的东条英机？？'
    ],
    color: '#8A2BE2', // 抽象的紫色
  },
  {
    id: 'btnp',
    name: '卡皮巴拉',
    description: '佛到出汁，你骂他他都不急',
    characteristics: [
      '佛系MAX',
      '擅长说"如何呢又能怎"',
      '有心有肺说是',
      '在卷和躺之间选择卷着躺'
    ],
    memeExamples: [
      '如何呢又能怎',
      '卡皮巴拉躺',
      '佛到出汁'
    ],
    color: '#D2691E', // 卡皮巴拉的棕色
  },
  {
    id: 'bimq',
    name: '敬自己一杯',
    description: '人生信条：不管发生什么，先敬自己一杯',
    characteristics: [
      '乐观主义MAX',
      '擅长在各种场合敬自己',
      '世界毁灭？先干杯再说',
      '在绝望和希望之间选择干杯'
    ],
    memeExamples: [
      '敬自己一杯',
      '先干为敬',
      '乐观抽象派'
    ],
    color: '#FFD700', // 酒杯的金色
  },
  {
    id: 'binq',
    name: '连滚带爬',
    description: '每天的状态都是从从容容→连滚带爬',
    characteristics: [
      '计划？不存在的',
      '擅长连滚带爬完成任务',
      '表面从容，实际在滚',
      '在计划和变化之间选择滚爬'
    ],
    memeExamples: [
      '从从容容游刃有余？不存在的',
      '连滚带爬',
      '计划赶不上变化'
    ],
    color: '#808000', // 泥土的橄榄色
  },
  {
    id: 'bimp',
    name: '疯四文学大师',
    description: '每周四准时"V我50"，不为了肯德基，为了抽象',
    characteristics: [
      '周四限定人格',
      '擅长疯四文学创作',
      'V我50是信仰',
      '在饥饿和抽象之间选择抽象'
    ],
    memeExamples: [
      'V我50',
      '疯四文学',
      '周四限定'
    ],
    color: '#FF6347', // 肯德基的红色
  },
  {
    id: 'binp',
    name: '（隐藏款）抽象造物',
    description: '你已经超越烂梗，你本身就是烂梗',
    characteristics: [
      '抽象到极致',
      '擅长说"低山臭水遇知音"',
      '自己就是行走的梗',
      '在人和梗之间选择成为梗'
    ],
    memeExamples: [
      '低山臭水遇知音',
      '行走的梗',
      '你无敌了孩子'
    ],
    color: '#000000', // 终极的黑色
  }
];