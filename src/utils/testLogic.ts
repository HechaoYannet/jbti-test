import { questions } from '../data/questions';
import { getPersonalityTypes } from '../data/personalities';
import type { PersonalityDimension, TestResult } from '../data/types';

// 初始化分数记录
export const initializeScores = (): Record<PersonalityDimension, number> => {
  const dimensions: PersonalityDimension[] = [
    'mihoyo', 'porridge', 'fake', 'dragon', 'pill',
    'abstract', 'meme', 'cringe', 'chaos', 'balance'
  ];

  return dimensions.reduce((acc, dimension) => {
    acc[dimension] = 0;
    return acc;
  }, {} as Record<PersonalityDimension, number>);
};

// 计算JBTI v2结果（基于字母组合）- 旧版算法
export const calculateResult = (
  answers: number[] // 每个问题的答案索引（0或1）
): TestResult => {
  const personalityTypes = getPersonalityTypes('v2');
  // 计算每个部分的J和B数量
  const sectionCounts = {
    part1: { J: 0, B: 0 }, // 1-9题
    part2: { J: 0, B: 0 }, // 10-18题
    part3: { J: 0, B: 0 }, // 19-27题
    part4: { J: 0, B: 0 }, // 28-36题
  };

  // 统计每个部分的J/B数量
  answers.forEach((answer, index) => {
    const questionNum = index + 1;
    const isJ = answer === 0; // A选项是J，B选项是B

    if (questionNum <= 9) {
      sectionCounts.part1[isJ ? 'J' : 'B']++;
    } else if (questionNum <= 18) {
      sectionCounts.part2[isJ ? 'J' : 'B']++;
    } else if (questionNum <= 27) {
      sectionCounts.part3[isJ ? 'J' : 'B']++;
    } else {
      sectionCounts.part4[isJ ? 'J' : 'B']++;
    }
  });

  // 根据规则确定四个字母
  const firstLetter = sectionCounts.part1.J >= 5 ? 'J' : 'B';
  const secondLetter = sectionCounts.part2.J >= 5 ? 'T' : 'I';

  // 第三个字母：计算差值，奇数为M，偶数为N
  const part3Diff = Math.abs(sectionCounts.part3.J - sectionCounts.part3.B);
  const thirdLetter = part3Diff % 2 === 1 ? 'M' : 'N';

  const fourthLetter = sectionCounts.part4.J >= 5 ? 'P' : 'Q';

  // 拼接JBTI代码
  const jbtiCode = `${firstLetter}${secondLetter}${thirdLetter}${fourthLetter}`.toLowerCase();

  // 查找对应的人格类型
  const type = personalityTypes.find(t => t.id === jbtiCode) || personalityTypes[0];

  // 计算维度分数（基于答案）
  const scores = calculateDimensionScores(answers);

  // 获取维度描述
  const breakdown = Object.entries(scores).map(([dimension, score]) => ({
    dimension: dimension as PersonalityDimension,
    score,
    description: getDimensionDescription(dimension as PersonalityDimension, score)
  }));

  return {
    type,
    scores,
    breakdown
  };
};

// 计算维度分数
const calculateDimensionScores = (answers: number[]): Record<PersonalityDimension, number> => {
  const scores = initializeScores();

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const option = question.options[answerIndex];
      option.scores.forEach(({ dimension, value }) => {
        scores[dimension] += value;
      });
    }
  });

  return scores;
};

// 获取维度描述（JBTI 3.0私货版）
const getDimensionDescription = (
  dimension: PersonalityDimension,
  score: number
): string => {
  const descriptions: Record<PersonalityDimension, string[]> = {
    mihoyo: [
      '鸣潮启动！米黑预备役',
      '偶尔玩玩原神',
      '正常米家玩家',
      '原神启动！轻度魔怔',
      '米哈游在逃员工/终极魔怔人'
    ],
    porridge: [
      '铁血直男，不懂艺术',
      '偶尔看看二创',
      '正常粥游玩家',
      '玉足鉴赏家/合乎粥礼',
      '鹰角网络精神股东/粥礼宗师'
    ],
    fake: [
      '真实到透明，不会伪装',
      '偶尔需要戴面具',
      '社交变色龙，适应力强',
      '表演系高材生，人设丰富',
      '人设管理大师，真假难辨'
    ],
    dragon: [
      '现实主义者，脚踏实地',
      '偶尔中二，幻想一下',
      '幻想系居民，脑洞较大',
      '异世界转生预备役',
      '古希腊掌管抽象的神/龙傲天本天'
    ],
    pill: [
      '卷王本王，奋斗逼',
      '努力奋斗中，偶尔躺平',
      '佛系青年，随缘就好',
      '躺平专家，拒绝内卷',
      '已圆寂（物理）/佛到出汁'
    ],
    abstract: [
      '逻辑清晰，拒绝抽象',
      '偶尔抽象，理解梗图',
      '抽象艺术家，第五维度',
      '不可名状之物，难以理解',
      '抽象带师/互联网抽象本体'
    ],
    meme: [
      '2G冲浪，跟不上时代',
      '正常玩梗，接得住',
      '梗图收藏家，库存丰富',
      '行走的梗百科，万物皆可梗',
      '互联网本身/梗的化身'
    ],
    cringe: [
      '社交恐怖分子，从不尴尬',
      '偶尔尴尬，很快恢复',
      '尴尬制造机，擅长社死',
      '社死专业户，经验丰富',
      '尴尬之神/用脚扣出三室一厅'
    ],
    chaos: [
      '秩序守护者，讨厌混乱',
      '偶尔混乱，可以接受',
      '混乱中立，看心情',
      '混沌代理人，制造混乱',
      '熵增本身/秩序的破坏者'
    ],
    balance: [
      '极端主义者，非黑即白',
      '有所偏向，但有底线',
      '相对平衡，中庸之道',
      '善于调和，灵活变通',
      '均衡の憨憨/在离谱和靠谱间完美平衡'
    ]
  };

  const index = Math.min(Math.max(Math.floor((score + 10) / 5), 0), 4);
  return descriptions[dimension][index];
};

// 获取进度百分比
export const getProgressPercentage = (currentQuestion: number): number => {
  return Math.round((currentQuestion / questions.length) * 100);
};

// ==================== JBTI 3.0 高级算法 ====================


// 获取算法版本信息
export const getAlgorithmInfo = () => {
  return {
    version: '3.0',
    name: 'JBTI 科学私货版',
    description: '基于心理学理论 + 游戏私货 + 维度相关性的高级算法',
    features: [
      '10个科学私货维度',
      '维度相关性计算',
      '游戏阵营分析',
      '隐藏彩蛋检测',
      '人格发展建议'
    ],
    dimensions: [
      { code: 'mihoyo', name: '米哈游指数', desc: '游戏信仰忠诚度' },
      { code: 'porridge', name: '粥指数', desc: '审美开放性' },
      { code: 'fake', name: '伪装度', desc: '社会适应性' },
      { code: 'dragon', name: '龙化度', desc: '幻想倾向' },
      { code: 'pill', name: '丸化度', desc: '压力应对' },
      { code: 'abstract', name: '抽象度', desc: '认知灵活性' },
      { code: 'meme', name: '梗力', desc: '文化融入度' },
      { code: 'cringe', name: '尬力', desc: '社交风险承受' },
      { code: 'chaos', name: '混沌度', desc: '秩序偏好' },
      { code: 'balance', name: '平衡指数', desc: '人格整合度' }
    ]
  };
};