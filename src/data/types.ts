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

// JBTI人格维度（抽象搞笑版）
export type PersonalityDimension =
  | 'rice'        // 米性：对米饭的执着程度
  | 'fake'        // 伪度：表演型人格强度
  | 'dragon'      // 龙化：中二/幻想程度
  | 'pill'        // 丸化：圆润/佛系程度
  | 'abstract'    // 抽象：理解抽象事物的能力
  | 'meme'        // 梗力：玩梗和接梗能力
  | 'cringe'      // 尬力：制造尴尬的能力
  | 'chaos';      // 混沌：制造混乱的能力

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