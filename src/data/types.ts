// JBTI测试数据类型定义

export interface Question {
  id: number;
  text: string;
  options: Option[];
  category: 'social' | 'work' | 'life' | 'abstract'; // 题目分类
}

export interface Option {
  id: number;
  text: string;
  scores: PersonalityScore[]; // 该选项对各个维度的得分影响
  meme?: string; // 关联的梗
}

export interface PersonalityScore {
  dimension: PersonalityDimension;
  value: number; // -2到2之间的分数
}

// JBTI 3.0人格维度（科学私货版）
export type PersonalityDimension =
  | 'mihoyo'      // 米哈游指数：游戏信仰忠诚度（原神启动！）
  | 'porridge'    // 粥指数：审美开放性（合乎粥礼）
  | 'fake'        // 伪装度：社会适应性/人设管理
  | 'dragon'      // 龙化度：幻想倾向/中二程度
  | 'pill'        // 丸化度：压力应对/佛系程度
  | 'abstract'    // 抽象度：认知灵活性/第五维度
  | 'meme'        // 梗力：文化融入度/玩梗能力
  | 'cringe'      // 尬力：社交风险承受/尴尬制造
  | 'chaos'       // 混沌度：秩序偏好/混乱创造
  | 'balance';    // 平衡指数：人格整合/极端程度

// JBTI人格类型结果
export interface PersonalityType {
  id: string;
  name: string;
  description: string;
  characteristics: string[];
  memeExamples: string[];
  famousExamples?: string[]; // 知名代表人物（虚拟/现实）
  image?: string; // 人格形象
  color: string; // 主题色
}

// 测试结果
export interface TestResult {
  type: PersonalityType;
  scores: Record<PersonalityDimension, number>;
  breakdown: {
    dimension: PersonalityDimension;
    score: number;
    description: string;
  }[];
}