import { questions } from '../data/questions';
import { personalityTypes } from '../data/personalities';
import type { PersonalityDimension, TestResult } from '../data/types';

// 初始化分数记录
export const initializeScores = (): Record<PersonalityDimension, number> => {
  const dimensions: PersonalityDimension[] = [
    'rice', 'fake', 'dragon', 'pill', 'abstract', 'meme', 'cringe', 'chaos'
  ];

  return dimensions.reduce((acc, dimension) => {
    acc[dimension] = 0;
    return acc;
  }, {} as Record<PersonalityDimension, number>);
};

// 计算JBTI 2.0结果（基于字母组合）
export const calculateResult = (
  answers: number[] // 每个问题的答案索引（0或1）
): TestResult => {
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

// 获取维度描述
const getDimensionDescription = (
  dimension: PersonalityDimension,
  score: number
): string => {
  const descriptions: Record<PersonalityDimension, string[]> = {
    rice: [
      '对抽象无感，正常人',
      '偶尔玩玩梗',
      '网络冲浪爱好者',
      '烂梗收藏家',
      '互联网原住民'
    ],
    fake: [
      '真实到透明',
      '偶尔需要伪装',
      '社交变色龙',
      '表演系高材生',
      '人设管理大师'
    ],
    dragon: [
      '现实主义者',
      '偶尔中二',
      '幻想系居民',
      '异世界转生预备役',
      '古希腊掌管抽象的神'
    ],
    pill: [
      '卷王本王',
      '努力奋斗中',
      '佛系青年',
      '躺平专家',
      '已圆寂（物理）'
    ],
    abstract: [
      '逻辑清晰',
      '偶尔抽象',
      '抽象艺术家',
      '第五维度居民',
      '不可名状之物'
    ],
    meme: [
      '2G冲浪',
      '正常玩梗',
      '梗图收藏家',
      '行走的梗百科',
      '互联网本身'
    ],
    cringe: [
      '社交恐怖分子',
      '偶尔尴尬',
      '尴尬制造机',
      '社死专业户',
      '尴尬之神'
    ],
    chaos: [
      '秩序守护者',
      '偶尔混乱',
      '混乱中立',
      '混沌代理人',
      '熵增本身'
    ]
  };

  const index = Math.min(Math.max(Math.floor((score + 10) / 5), 0), 4);
  return descriptions[dimension][index];
};

// 获取进度百分比
export const getProgressPercentage = (currentQuestion: number): number => {
  return Math.round((currentQuestion / questions.length) * 100);
};