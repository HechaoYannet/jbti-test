import type { Question, TestResult } from '../data/types';
import type { AdvancedTestResult } from './advancedAlgorithm';
import { calculateResult } from './testLogic';
import { calculateEnhancedResult } from './advancedAlgorithmEnhanced';
import { selectTestQuestions, getAllQuestions, isQuestionSelectionSupported, getSelectionStrategyInfo } from './questionSelector';

// 测试配置
export interface TestConfig {
  algorithmVersion: 'v2' | 'v3';
  useQuestionSelection: boolean; // 是否使用抽题模式
  selectedQuestions?: Question[]; // 如果使用抽题模式，这是抽取的题目
}

// 测试会话状态
export interface TestSession {
  config: TestConfig;
  currentQuestionIndex: number;
  answers: number[];
  selectedQuestions: Question[];
  startTime: Date;
}

// 初始化测试会话
export function initializeTestSession(config: TestConfig): TestSession {
  let selectedQuestions: Question[];

  if (config.useQuestionSelection && isQuestionSelectionSupported()) {
    // 使用抽题模式
    selectedQuestions = selectTestQuestions();
    console.log(`抽题模式：从50题中抽取了${selectedQuestions.length}题`);
  } else {
    // 使用完整题库（v2.0兼容模式）
    selectedQuestions = getAllQuestions();
    console.log(`完整题库模式：使用所有${selectedQuestions.length}题`);
  }

  return {
    config,
    currentQuestionIndex: 0,
    answers: [],
    selectedQuestions,
    startTime: new Date()
  };
}

// 处理选项选择
export function handleAnswerSelection(
  session: TestSession,
  optionIndex: number
): { updatedSession: TestSession; isTestComplete: boolean } {
  const updatedAnswers = [...session.answers, optionIndex];
  const isComplete = updatedAnswers.length >= session.selectedQuestions.length;

  const updatedSession: TestSession = {
    ...session,
    answers: updatedAnswers,
    currentQuestionIndex: isComplete ? session.currentQuestionIndex : session.currentQuestionIndex + 1
  };

  return { updatedSession, isTestComplete: isComplete };
}

// 计算测试结果
export function calculateTestResult(session: TestSession): TestResult | AdvancedTestResult {
  if (session.config.algorithmVersion === 'v3') {
    // v3.0算法需要处理题目映射
    return calculateAdvancedResultWithSelection(session.answers, session.selectedQuestions);
  } else {
    // v2.0算法使用完整36题逻辑
    // 注意：v2.0算法假设总是36题，所以如果使用抽题模式，需要特殊处理
    if (session.config.useQuestionSelection) {
      console.warn('v2.0算法与抽题模式不完全兼容，使用简化计算');
      return calculateResult(session.answers);
    } else {
      return calculateResult(session.answers);
    }
  }
}

// v3.0算法支持抽题模式的计算
function calculateAdvancedResultWithSelection(
  answers: number[],
  selectedQuestions: Question[]
): AdvancedTestResult {
  // 使用增强版算法，支持传入题目集
  const result = calculateEnhancedResult(answers, selectedQuestions);

  // 添加抽题模式标记
  const selectionMarker = selectedQuestions.length < getAllQuestions().length ? '-S' : '-F';
  return {
    ...result,
    jbtiCode: result.jbtiCode + selectionMarker // S表示抽题，F表示完整
  };
}

// 获取当前题目
export function getCurrentQuestion(session: TestSession): Question | null {
  if (session.currentQuestionIndex >= session.selectedQuestions.length) {
    return null;
  }
  return session.selectedQuestions[session.currentQuestionIndex];
}

// 获取测试进度
export function getTestProgress(session: TestSession): {
  current: number;
  total: number;
  percentage: number;
} {
  const total = session.selectedQuestions.length;
  const current = session.answers.length;
  const percentage = Math.round((current / total) * 100);

  return { current, total, percentage };
}

// 获取测试统计信息
export function getTestStats(session: TestSession): {
  duration: number; // 测试持续时间（秒）
  averageTimePerQuestion: number; // 平均每题耗时（秒）
  selectionInfo?: any; // 抽题模式信息
} {
  const now = new Date();
  const duration = Math.floor((now.getTime() - session.startTime.getTime()) / 1000);
  const averageTime = session.answers.length > 0 ? duration / session.answers.length : 0;

  const stats: any = {
    duration,
    averageTimePerQuestion: averageTime
  };

  if (session.config.useQuestionSelection) {
    stats.selectionInfo = getSelectionStrategyInfo();
    stats.selectedCount = session.selectedQuestions.length;
    stats.totalAvailable = getAllQuestions().length;
  }

  return stats;
}

// 重新开始测试（可更改配置）
export function restartTest(
  currentSession: TestSession,
  newConfig?: Partial<TestConfig>
): TestSession {
  const config: TestConfig = {
    ...currentSession.config,
    ...newConfig
  };

  return initializeTestSession(config);
}

// 获取推荐配置（基于用户设备或偏好）
export function getRecommendedConfig(): TestConfig {
  // 默认推荐v3.0算法 + 抽题模式
  return {
    algorithmVersion: 'v3',
    useQuestionSelection: isQuestionSelectionSupported()
  };
}

// 验证测试配置是否有效
export function validateTestConfig(config: TestConfig): string[] {
  const errors: string[] = [];

  if (config.useQuestionSelection && !isQuestionSelectionSupported()) {
    errors.push('抽题模式需要题库扩充到50题，当前不支持');
  }

  if (config.algorithmVersion === 'v2' && config.useQuestionSelection) {
    errors.push('v2.0算法与抽题模式不完全兼容，建议使用v3.0算法');
  }

  return errors;
}