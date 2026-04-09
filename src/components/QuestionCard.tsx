import React from 'react';
import type { Question, Option } from '../data/types';
import { Brain, Coffee, Users, Zap } from 'lucide-react';

interface QuestionCardProps {
  question: Question;
  onSelect: (option: Option) => void;
  currentQuestion: number;
  totalQuestions: number;
}

const categoryIcons = {
  social: Users,
  work: Coffee,
  life: Brain,
  abstract: Zap,
};

const categoryColors = {
  social: 'bg-blue-100 text-blue-800',
  work: 'bg-green-100 text-green-800',
  life: 'bg-yellow-100 text-yellow-800',
  abstract: 'bg-purple-100 text-purple-800',
};

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  onSelect,
  currentQuestion,
  totalQuestions,
}) => {
  const CategoryIcon = categoryIcons[question.category];
  const categoryColor = categoryColors[question.category];

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-xl">
      {/* 进度条 */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-600">
            问题 {currentQuestion} / {totalQuestions}
          </span>
          <span className="text-sm font-medium text-gray-600">
            {Math.round((currentQuestion / totalQuestions) * 100)}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(currentQuestion / totalQuestions) * 100}%` }}
          />
        </div>
      </div>

      {/* 题目分类标签 */}
      <div className="flex items-center gap-2 mb-4">
        <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${categoryColor}`}>
          <CategoryIcon size={14} />
          <span>
            {question.category === 'social' && '社交迷惑行为'}
            {question.category === 'work' && '职场生存指南'}
            {question.category === 'life' && '人生哲学思考'}
            {question.category === 'abstract' && '抽象艺术鉴赏'}
          </span>
        </div>
      </div>

      {/* 题目文本 */}
      <h2 className="text-2xl font-bold text-gray-800 mb-8 leading-tight">
        {question.text}
      </h2>

      {/* 选项列表 - A/B格式 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {question.options.map((option, index) => (
          <button
            key={option.id}
            onClick={() => onSelect(option)}
            className="text-left p-6 rounded-xl border-2 border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-all duration-200 group"
          >
            <div className="flex items-start gap-4">
              <div className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full ${
                index === 0
                  ? 'bg-red-100 group-hover:bg-red-200'
                  : 'bg-blue-100 group-hover:bg-blue-200'
              } transition-colors`}>
                <span className={`text-xl font-bold ${
                  index === 0 ? 'text-red-600' : 'text-blue-600'
                }`}>
                  {index === 0 ? 'A' : 'B'}
                </span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-sm font-medium px-2 py-1 rounded ${
                    index === 0
                      ? 'bg-red-50 text-red-700'
                      : 'bg-blue-50 text-blue-700'
                  }`}>
                    {index === 0 ? 'J倾向' : 'B倾向'}
                  </span>
                  {option.meme && (
                    <span className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">
                      #{option.meme}
                    </span>
                  )}
                </div>
                <p className="text-lg text-gray-800 group-hover:text-purple-800 font-medium">
                  {option.text}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* 提示 */}
      <div className="mt-8 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border border-gray-200">
        <p className="text-sm text-gray-600 text-center">
          💡 温馨提示：选择最符合你内心真实想法的选项，不要假装正常！
        </p>
      </div>
    </div>
  );
};

export default QuestionCard;