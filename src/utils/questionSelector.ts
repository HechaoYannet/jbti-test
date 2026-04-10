import type { Question, PersonalityDimension } from '../data/types';
import { questions } from '../data/questions';

// 维度平衡配置
interface DimensionBalanceConfig {
  min: number;  // 该维度最少出现次数
  max: number;  // 该维度最多出现次数
  weight: number; // 平衡权重（重要性）
}

const DIMENSION_BALANCE_CONFIG: Record<PersonalityDimension, DimensionBalanceConfig> = {
  mihoyo: { min: 12, max: 15, weight: 1.0 },
  porridge: { min: 12, max: 15, weight: 1.0 },
  fake: { min: 12, max: 15, weight: 1.0 },
  dragon: { min: 10, max: 12, weight: 1.2 }, // 需要增加，权重较高
  pill: { min: 15, max: 18, weight: 0.8 },   // 需要减少，权重较低
  abstract: { min: 18, max: 22, weight: 0.9 }, // 需要减少
  meme: { min: 10, max: 12, weight: 1.5 },   // 严重不足，权重最高
  cringe: { min: 12, max: 15, weight: 1.0 },
  chaos: { min: 15, max: 18, weight: 0.8 },  // 需要减少
  balance: { min: 15, max: 20, weight: 0.7 } // 严重过高，权重最低
};

// 题目分组配置
interface QuestionGroup {
  startId: number;
  endId: number;
  count: number; // 需要抽取的题目数量
  name: string;
}

const QUESTION_GROUPS: QuestionGroup[] = [
  { startId: 1, endId: 12, count: 9, name: '游戏信仰与审美' },
  { startId: 13, endId: 24, count: 9, name: '抽象网络行为' },
  { startId: 25, endId: 37, count: 9, name: '幻想与现实' },
  { startId: 38, endId: 50, count: 9, name: '终极抽象' }
];

// 初始化维度计数器
function initializeDimensionCounts(): Record<PersonalityDimension, number> {
  const dimensions: PersonalityDimension[] = [
    'mihoyo', 'porridge', 'fake', 'dragon', 'pill',
    'abstract', 'meme', 'cringe', 'chaos', 'balance'
  ];

  return dimensions.reduce((acc, dim) => {
    acc[dim] = 0;
    return acc;
  }, {} as Record<PersonalityDimension, number>);
}

// 计算题目对维度的贡献
function getQuestionDimensionContribution(question: Question): Record<PersonalityDimension, number> {
  const contribution: Record<PersonalityDimension, number> = initializeDimensionCounts();

  // 每个选项最多影响3个维度
  question.options.forEach(option => {
    option.scores.forEach(({ dimension }) => {
      contribution[dimension] += 1;
    });
  });

  return contribution;
}

// 计算题目的选择分数（越高越应该被选择）
function calculateQuestionScore(
  question: Question,
  currentDimensionCounts: Record<PersonalityDimension, number>,
  usedQuestionIds: Set<number>
): number {
  if (usedQuestionIds.has(question.id)) {
    return -Infinity; // 已经使用过的题目
  }

  const contribution = getQuestionDimensionContribution(question);
  let score = 0;

  // 计算每个维度的贡献分数
  Object.entries(contribution).forEach(([dim, value]) => {
    const dimension = dim as PersonalityDimension;
    if (value > 0) {
      const config = DIMENSION_BALANCE_CONFIG[dimension];
      const currentCount = currentDimensionCounts[dimension];

      // 如果当前数量低于最小值，这个维度需要增加
      if (currentCount < config.min) {
        score += value * config.weight * 2; // 急需增加，加倍权重
      }
      // 如果当前数量在合理范围内，正常加分
      else if (currentCount < config.max) {
        score += value * config.weight;
      }
      // 如果当前数量超过最大值，这个维度需要减少
      else {
        score -= value * config.weight * 3; // 严重超限，负分
      }
    }
  });

  // 添加随机性因子（避免每次都选同样的题目）
  score += Math.random() * 0.1;

  return score;
}

// 从一组题目中选择指定数量的题目
function selectQuestionsFromGroup(
  groupQuestions: Question[],
  count: number,
  currentDimensionCounts: Record<PersonalityDimension, number>,
  usedQuestionIds: Set<number>
): { selected: Question[]; updatedCounts: Record<PersonalityDimension, number> } {
  const selected: Question[] = [];
  const localDimensionCounts = { ...currentDimensionCounts };
  const localUsedIds = new Set(usedQuestionIds);

  for (let i = 0; i < count; i++) {
    // 计算每个题目的分数
    const scoredQuestions = groupQuestions.map(q => ({
      question: q,
      score: calculateQuestionScore(q, localDimensionCounts, localUsedIds)
    }));

    // 选择分数最高的题目
    const bestQuestion = scoredQuestions.reduce((best, current) =>
      current.score > best.score ? current : best
    );

    if (bestQuestion.score > -Infinity) {
      selected.push(bestQuestion.question);
      localUsedIds.add(bestQuestion.question.id);

      // 更新维度计数
      const contribution = getQuestionDimensionContribution(bestQuestion.question);
      Object.entries(contribution).forEach(([dim, value]) => {
        localDimensionCounts[dim as PersonalityDimension] += value;
      });
    } else {
      // 如果没有合适的题目，随机选择一个未使用的
      const availableQuestions = groupQuestions.filter(q => !localUsedIds.has(q.id));
      if (availableQuestions.length > 0) {
        const randomQuestion = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
        selected.push(randomQuestion);
        localUsedIds.add(randomQuestion.id);

        const contribution = getQuestionDimensionContribution(randomQuestion);
        Object.entries(contribution).forEach(([dim, value]) => {
          localDimensionCounts[dim as PersonalityDimension] += value;
        });
      }
    }
  }

  return { selected, updatedCounts: localDimensionCounts };
}

// Fisher-Yates洗牌算法
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// 主函数：从题库中抽取36题
export function selectTestQuestions(allQuestions: Question[] = questions): Question[] {
  // 1. 按ID分组
  const groupedQuestions: Record<number, Question[]> = {};
  QUESTION_GROUPS.forEach(group => {
    groupedQuestions[group.startId] = allQuestions.filter(q =>
      q.id >= group.startId && q.id <= group.endId
    );
  });

  // 2. 初始化计数器和已使用题目ID
  let dimensionCounts = initializeDimensionCounts();
  const usedQuestionIds = new Set<number>();
  const allSelected: Question[] = [];

  // 3. 从每个组中抽取题目
  QUESTION_GROUPS.forEach(group => {
    const groupQuestions = groupedQuestions[group.startId];
    if (!groupQuestions || groupQuestions.length === 0) {
      console.warn(`组 ${group.name} (ID: ${group.startId}-${group.endId}) 没有题目`);
      return;
    }

    const { selected, updatedCounts } = selectQuestionsFromGroup(
      groupQuestions,
      group.count,
      dimensionCounts,
      usedQuestionIds
    );

    allSelected.push(...selected);
    dimensionCounts = updatedCounts;
    selected.forEach(q => usedQuestionIds.add(q.id));
  });

  // 4. 如果选择的题目不足36题，补充随机题目
  if (allSelected.length < 36) {
    const remainingNeeded = 36 - allSelected.length;
    const availableQuestions = allQuestions.filter(q => !usedQuestionIds.has(q.id));
    const randomQuestions = shuffleArray(availableQuestions).slice(0, remainingNeeded);
    allSelected.push(...randomQuestions);
  }

  // 5. 打乱题目顺序（但保持一定的逻辑流）
  // 先按原始分组稍微保持结构，然后轻度打乱
  const shuffled = shuffleArray(allSelected);

  // 6. 记录本次选择的维度分布（用于调试）
  // 使用全局变量检测开发环境
  const isDevelopment = typeof window !== 'undefined' && window.location.hostname === 'localhost';
  if (isDevelopment) {
    const finalDimensionCounts = initializeDimensionCounts();
    shuffled.forEach(q => {
      const contribution = getQuestionDimensionContribution(q);
      Object.entries(contribution).forEach(([dim, value]) => {
        finalDimensionCounts[dim as PersonalityDimension] += value;
      });
    });

    console.log('抽题结果维度分布：');
    Object.entries(finalDimensionCounts).forEach(([dim, count]) => {
      const config = DIMENSION_BALANCE_CONFIG[dim as PersonalityDimension];
      console.log(`${dim.padEnd(10)}: ${count}次 (目标: ${config.min}-${config.max})`);
    });
  }

  return shuffled;
}

// 获取完整的50题题库（用于v2.0算法或用户选择）
export function getAllQuestions(): Question[] {
  return questions;
}

// 检查当前题库是否支持抽题模式
export function isQuestionSelectionSupported(): boolean {
  // 检查是否有足够的题目支持抽题
  // 目前假设题库已扩充到50题
  return questions.length >= 50;
}

// 获取抽题策略信息
export function getSelectionStrategyInfo() {
  return {
    version: '1.0',
    name: '维度平衡抽题算法',
    description: '从题库中抽取36题，确保10个维度平衡覆盖',
    totalQuestions: 50,
    selectedQuestions: 36,
    selectionRate: '72%',
    features: [
      '按部分比例抽取（每个部分9题）',
      '维度平衡约束',
      '随机性保证',
      '向后兼容v2.0算法'
    ],
    dimensionTargets: DIMENSION_BALANCE_CONFIG
  };
}