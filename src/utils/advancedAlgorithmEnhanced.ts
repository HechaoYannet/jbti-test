import type { PersonalityDimension, Question } from '../data/types';
import type { AdvancedTestResult } from './advancedAlgorithm';
import { personalityTypes } from '../data/personalities';
import { questions as defaultQuestions } from '../data/questions';

// 从高级算法复制需要的常量（因为它们没有导出）
const DIMENSION_CORRELATION = {
  mihoyo: {
    abstract: 0.7,
    dragon: 0.6,
    chaos: 0.4
  },
  porridge: {
    abstract: 0.8,
    meme: 0.7,
    balance: 0.5
  },
  fake: {
    balance: 0.6,
    chaos: -0.3
  },
  dragon: {
    abstract: 0.9,
    mihoyo: 0.6,
    chaos: 0.5
  },
  pill: {
    chaos: -0.7,
    balance: 0.8,
    cringe: -0.4
  },
  abstract: {
    meme: 0.8,
    dragon: 0.9,
    chaos: 0.6
  },
  meme: {
    abstract: 0.8,
    cringe: 0.5,
    chaos: 0.4
  },
  cringe: {
    fake: 0.3,
    chaos: 0.6,
    balance: -0.5
  },
  chaos: {
    balance: -0.9,
    pill: -0.7,
    abstract: 0.6
  },
  balance: {
    chaos: -0.9,
    pill: 0.8,
    fake: 0.6
  }
};

const GAME_CAMPS = [
  {
    name: '米卫兵阵营',
    description: '忠诚的米哈游信徒，认为原神是第九艺术',
    dimensions: ['mihoyo', 'dragon', 'abstract'],
    weight: 1.2
  },
  {
    name: '粥礼宗师阵营',
    description: '深谙粥游美学，玉足鉴赏家，讲究合乎粥礼',
    dimensions: ['porridge', 'abstract', 'balance'],
    weight: 1.1
  },
  {
    name: '抽象带师阵营',
    description: '互联网抽象文化传承者，万物皆可抽象',
    dimensions: ['abstract', 'meme', 'chaos'],
    weight: 1.0
  },
  {
    name: '佛系躺平阵营',
    description: '拒绝内卷，已圆寂（物理），如何呢又能怎',
    dimensions: ['pill', 'balance', 'chaos'],
    weight: 0.9
  },
  {
    name: '社死先锋阵营',
    description: '尴尬制造机，用脚扣出三室一厅',
    dimensions: ['cringe', 'chaos', 'fake'],
    weight: 1.0
  }
];

// JBTI 3.0 增强版算法 - 支持题目选择和自定义题目集

// 初始化分数（带基线调整）
export const initializeAdvancedScores = (): Record<PersonalityDimension, number> => {
  const dimensions: PersonalityDimension[] = [
    'mihoyo', 'porridge', 'fake', 'dragon', 'pill',
    'abstract', 'meme', 'cringe', 'chaos', 'balance'
  ];

  // 设置基线分数（每个人起始点不同，模拟先天倾向）
  return dimensions.reduce((acc, dimension) => {
    // 基线在-5到5之间随机，但总和接近0（平衡）
    acc[dimension] = Math.random() * 10 - 5;
    return acc;
  }, {} as Record<PersonalityDimension, number>);
};

// 计算维度相关性影响
const applyCorrelationEffects = (
  baseScores: Record<PersonalityDimension, number>
): Record<PersonalityDimension, number> => {
  const enhancedScores = { ...baseScores };

  Object.entries(DIMENSION_CORRELATION).forEach(([dim, correlations]) => {
    const dimension = dim as PersonalityDimension;
    Object.entries(correlations).forEach(([corrDim, strength]) => {
      const correlatedDimension = corrDim as PersonalityDimension;
      // 如果某个维度分数高，相关维度也会受到影响
      const influence = baseScores[dimension] * (strength as number) * 0.1;
      enhancedScores[correlatedDimension] += influence;
    });
  });

  return enhancedScores;
};

// 计算游戏阵营倾向
const calculateGameCamps = (
  scores: Record<PersonalityDimension, number>
): Array<{ camp: any; affinity: number }> => {
  return GAME_CAMPS.map(camp => {
    // 计算阵营亲和度（基于相关维度的加权平均）
    const campScore = camp.dimensions.reduce((sum, dim) => {
      return sum + scores[dim as PersonalityDimension];
    }, 0);

    const affinity = (campScore / camp.dimensions.length) * camp.weight;
    return { camp, affinity };
  }).sort((a, b) => b.affinity - a.affinity); // 按亲和度降序排列
};

// 计算维度分数（带权重，支持自定义题目集）
const calculateDimensionScoresWithQuestions = (
  answers: number[],
  selectedQuestions: Question[]
): Record<PersonalityDimension, number> => {
  const scores = initializeAdvancedScores();

  answers.forEach((answerIndex, questionIndex) => {
    const question = selectedQuestions[questionIndex];
    if (question && question.options[answerIndex]) {
      const option = question.options[answerIndex];
      option.scores.forEach(({ dimension, value }) => {
        // JBTI 3.0: 选项权重为-2到+2
        scores[dimension] += value * 2; // 放大影响
      });
    }
  });

  // 标准化到-20到20范围
  Object.keys(scores).forEach(dim => {
    const dimension = dim as PersonalityDimension;
    scores[dimension] = Math.max(-20, Math.min(20, scores[dimension]));
  });

  return scores;
};

// 计算增强版JBTI代码
const calculateEnhancedJBTICode = (
  scores: Record<PersonalityDimension, number>
): string => {
  // JBTI 3.0字母含义：
  // J/B: 主动/被动倾向（基于mihoyo+porridge+abstract）
  // T/I: 思考/直觉倾向（基于dragon+abstract+balance）
  // M/N: 理性/感性倾向（基于pill+chaos+balance）
  // P/Q: 感知/判断倾向（基于fake+meme+cringe）

  const activeScore = (scores.mihoyo + scores.porridge + scores.abstract) / 3;
  const firstLetter = activeScore > 0 ? 'j' : 'b';

  const thinkingScore = (scores.dragon + scores.abstract + scores.balance) / 3;
  const secondLetter = thinkingScore > 0 ? 't' : 'i';

  const rationalScore = (scores.pill + scores.chaos + scores.balance) / 3;
  // 使用更复杂的逻辑：如果平衡且理性，则为M；如果混乱且感性，则为N
  const thirdLetter = (rationalScore > 0 && scores.balance > 10) ? 'm' : 'n';

  const perceivingScore = (scores.fake + scores.meme + scores.cringe) / 3;
  const fourthLetter = perceivingScore > 0 ? 'p' : 'q';

  return `${firstLetter}${secondLetter}${thirdLetter}${fourthLetter}`;
};

// 获取高级维度描述
const getAdvancedDimensionDescription = (
  dimension: PersonalityDimension,
  score: number
): string => {
  // 使用更细致的5级描述
  const level = Math.floor((score + 20) / 8); // -20到20分为5级

  const descriptions: Record<PersonalityDimension, string[]> = {
    mihoyo: [
      '铁血米黑，认为原神抄袭',
      '偶尔玩玩，不算粉丝',
      '正常玩家，会氪月卡',
      '深度玩家，研究配队',
      '终极米卫兵，认为米哈游是神'
    ],
    porridge: [
      '不懂粥游，认为抽卡骗钱',
      '云玩家，只看二创',
      '普通博士，会刷活动',
      '资深博士，研究剧情',
      '粥礼宗师，能写万字考据'
    ],
    fake: [
      '过于真实，不会说谎',
      '必要伪装，但不熟练',
      '社交达人，切换自如',
      '表演大师，真假难辨',
      '人设狂魔，多重身份'
    ],
    dragon: [
      '绝对现实，拒绝幻想',
      '偶尔中二，自己知道',
      '幻想常客，脑洞大开',
      '异世界居民，准备转生',
      '龙傲天本体，掌控幻想'
    ],
    pill: [
      '奋斗逼，卷死别人',
      '努力中，偶尔抱怨',
      '普通打工人，按时下班',
      '佛系青年，随遇而安',
      '已圆寂，物理躺平'
    ],
    abstract: [
      '逻辑怪，讨厌抽象',
      '能理解，但不创造',
      '抽象爱好者，会玩梗',
      '抽象艺术家，创造梗',
      '抽象本体，万物皆抽象'
    ],
    meme: [
      '2G网络，不懂新梗',
      '正常冲浪，接得住梗',
      '梗图达人，收藏丰富',
      '玩梗高手，万物皆可梗',
      '梗的化身，互联网本身'
    ],
    cringe: [
      '社交恐怖分子，从不尴尬',
      '偶尔尴尬，很快忘记',
      '尴尬常客，习惯社死',
      '社死专家，经验丰富',
      '尴尬之神，创造尴尬'
    ],
    chaos: [
      '秩序狂魔，讨厌变化',
      '接受变化，但有计划',
      '灵活应变，不惧混乱',
      '混乱爱好者，制造意外',
      '混沌化身，熵增本身'
    ],
    balance: [
      '极端分子，非黑即白',
      '有所偏好，但有底线',
      '相对平衡，能听意见',
      '善于调和，求同存异',
      '完美平衡，中庸大师'
    ]
  };

  const index = Math.max(0, Math.min(4, level));
  return descriptions[dimension][index];
};

// 计算百分位（你在人群中的位置）
const calculatePercentile = (
  score: number
): number => {
  // 模拟正态分布，假设大多数人在中间
  // 分数范围-20到20，转换为0-100百分位
  const normalized = (score + 20) / 40; // 0到1
  // 使用正态分布的CDF近似
  const percentile = 50 * (1 + Math.erf((normalized - 0.5) * 2));
  return Math.round(Math.max(1, Math.min(99, percentile)));
};

// 检测隐藏彩蛋
const detectEasterEggs = (
  answers: number[],
  scores: Record<PersonalityDimension, number>,
  selectedQuestions: Question[]
): string[] => {
  const eggs: string[] = [];

  // 彩蛋1: 全选第一个选项 -> 极端主义者
  if (answers.every(a => a === 0)) {
    eggs.push('🎯 极端选择者：你做出了最一致的选择，要么极端理性，要么极端抽象');
  }

  // 彩蛋2: 全选第二个选项 -> 叛逆者
  if (answers.every(a => a === 1)) {
    eggs.push('🔥 叛逆之魂：你拒绝常规，每个选择都在反抗预期');
  }

  // 彩蛋3: 高米哈游+高粥指数 -> 双修大佬
  if (scores.mihoyo > 15 && scores.porridge > 15) {
    eggs.push('🎮 双修宗师：你同时深谙米哈游和鹰角的精髓，是真正的游戏懂王');
  }

  // 彩蛋4: 所有维度接近0 -> 绝对平衡
  const variance = Object.values(scores).reduce((sum, score) => sum + Math.abs(score), 0);
  if (variance < 30) {
    eggs.push('⚖️ 绝对平衡体：你在所有维度上都接近完美平衡，是罕见的均衡の神');
  }

  // 彩蛋5: 高抽象+高尴尬 -> 抽象社死王
  if (scores.abstract > 15 && scores.cringe > 15) {
    eggs.push('😅 抽象社死王：你能用最抽象的方式制造最尴尬的场景，天赋异禀');
  }

  // 彩蛋6: 抽题模式特定彩蛋
  if (selectedQuestions.length < defaultQuestions.length) {
    eggs.push('🎲 随机探索者：你体验了抽题模式，每次测试都有新发现！');
  }

  return eggs;
};

// 生成人格分析报告
const generatePersonalityAnalysis = (
  scores: Record<PersonalityDimension, number>
): string => {
  const analysis: string[] = [];

  // 基于最高分维度给出分析
  const sortedDimensions = Object.entries(scores)
    .sort(([, a], [, b]) => Math.abs(b) - Math.abs(a))
    .slice(0, 3);

  analysis.push(`你的核心人格特质：`);
  sortedDimensions.forEach(([dim, score]) => {
    const trend = score > 0 ? '偏高' : '偏低';
    analysis.push(`  • ${dim}: ${trend} (${score.toFixed(1)}分)`);
  });

  // 给出发展建议
  analysis.push('\n发展建议：');
  if (scores.balance < 10) {
    analysis.push('  ⚖️ 你的性格较为极端，建议尝试更多元的体验来寻找平衡');
  }
  if (scores.cringe > 10) {
    analysis.push('  😅 你不太在意他人眼光，这是优点，但也要注意社交边界哦');
  }
  if (scores.mihoyo > 15) {
    analysis.push('  🎮 米哈游浓度过高！建议尝试其他游戏，避免陷入单一游戏世界观');
  }
  if (scores.porridge > 15) {
    analysis.push('  🎨 粥礼宗师！你的审美独特，可以尝试创作二创内容分享给他人');
  }

  return analysis.join('\n');
};

// 计算JBTI 3.0增强版结果（支持自定义题目集）
export const calculateEnhancedResult = (
  answers: number[], // 每个问题的答案索引
  selectedQuestions: Question[] = defaultQuestions // 使用的题目集，默认为完整题库
): AdvancedTestResult => {
  // 1. 计算基础维度分数
  let scores = calculateDimensionScoresWithQuestions(answers, selectedQuestions);

  // 2. 应用维度相关性影响
  scores = applyCorrelationEffects(scores);

  // 3. 计算平衡指数（基于所有维度的标准差，越低越平衡）
  const dimensionValues = Object.values(scores);
  const mean = dimensionValues.reduce((a, b) => a + b, 0) / dimensionValues.length;
  const variance = dimensionValues.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / dimensionValues.length;
  scores.balance = 20 - Math.sqrt(variance) * 2; // 标准化到0-20范围

  // 4. 计算游戏阵营
  const gameCamps = calculateGameCamps(scores);

  // 5. 计算JBTI字母（增强逻辑）
  const jbtiCode = calculateEnhancedJBTICode(scores);

  // 6. 查找人格类型
  const type = personalityTypes.find(t => t.id === jbtiCode) || personalityTypes[0];

  // 7. 计算维度描述
  const breakdown = Object.entries(scores).map(([dimension, score]) => ({
    dimension: dimension as PersonalityDimension,
    score: Math.round(score * 10) / 10, // 保留一位小数
    description: getAdvancedDimensionDescription(dimension as PersonalityDimension, score),
    percentile: calculatePercentile(score)
  }));

  // 8. 检测隐藏彩蛋
  const hiddenEasterEggs = detectEasterEggs(answers, scores, selectedQuestions);

  return {
    type,
    scores,
    breakdown,
    gameCamps: gameCamps.slice(0, 3), // 取前3个阵营
    jbtiCode,
    hiddenEasterEggs,
    analysis: generatePersonalityAnalysis(scores)
  };
};

// 辅助函数：误差函数近似
declare global {
  interface Math {
    erf(x: number): number;
  }
}

if (!Math.erf) {
  Math.erf = function(x: number): number {
    // 误差函数近似计算
    const a1 =  0.254829592;
    const a2 = -0.284496736;
    const a3 =  1.421413741;
    const a4 = -1.453152027;
    const a5 =  1.061405429;
    const p  =  0.3275911;

    const sign = x < 0 ? -1 : 1;
    x = Math.abs(x);

    const t = 1.0 / (1.0 + p * x);
    const y = 1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);

    return sign * y;
  };
}