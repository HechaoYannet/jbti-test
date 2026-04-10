import React from 'react';
import { Play, Users, Brain, Sparkles } from 'lucide-react';

interface WelcomeCardProps {
  onStart: () => void;
  algorithmVersion: 'v2' | 'v3';
  onToggleAlgorithm: () => void;
  algorithmInfo?: any;
}

const WelcomeCard: React.FC<WelcomeCardProps> = ({
  onStart,
  algorithmVersion,
  onToggleAlgorithm,
  algorithmInfo
}) => {
  return (
    <div className="max-w-3xl mx-auto p-8 bg-gradient-to-br from-white to-purple-50 rounded-3xl shadow-2xl">
      {/* 标题区域 */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-6">
          <Sparkles size={16} className="text-purple-600" />
          <span className="text-sm font-medium text-purple-700">全网最抽象人格测试</span>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-4">
          <h1 className="text-5xl font-black text-gray-900">
            JBTI {algorithmVersion === 'v3' ? '3.0' : '2.0'}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              · {algorithmVersion === 'v3' ? '科学私货版' : '最终荒诞人格测试'}
            </span>
          </h1>

          {/* 算法版本切换 */}
          <button
            onClick={onToggleAlgorithm}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 hover:from-blue-200 hover:to-purple-200 rounded-full transition-all"
          >
            <span className="text-sm font-medium text-blue-700">
              {algorithmVersion === 'v3' ? '🔬 科学私货版' : '🎭 经典荒诞版'}
            </span>
            <span className="text-xs text-gray-500">切换</span>
          </button>
        </div>

        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          测出你是<span className="font-bold text-red-600">酱板鸭</span>、
          <span className="font-bold text-blue-600">米小子</span>、
          <span className="font-bold text-pink-600">奶龙🍬</span>还是
          <span className="font-bold text-purple-700">（隐藏款）抽象造物</span>！
        </p>

        {algorithmInfo && (
          <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200">
            <div className="flex items-center gap-2 mb-2">
              <Brain size={16} className="text-blue-600" />
              <span className="text-sm font-medium text-blue-700">算法信息</span>
            </div>
            <p className="text-sm text-gray-600">
              {algorithmInfo.description} · {algorithmInfo.dimensions?.length || 0}个维度分析
            </p>
          </div>
        )}
      </div>

      {/* 特性介绍 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {algorithmVersion === 'v3' ? (
          <>
            <div className="p-6 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-xl mb-4">
                <Brain size={24} className="text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">科学私货算法</h3>
              <p className="text-gray-600">
                基于心理学理论 + 游戏私货 + 维度相关性的高级算法
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-xl mb-4">
                <Users size={24} className="text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">游戏阵营分析</h3>
              <p className="text-gray-600">
                米卫兵、粥礼宗师、抽象原住民...测出你的游戏人格阵营
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 flex items-center justify-center bg-pink-100 rounded-xl mb-4">
                <Sparkles size={24} className="text-pink-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">10维度科学分析</h3>
              <p className="text-gray-600">
                米哈游指数、粥指数、抽象度...科学私货维度全面分析
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="p-6 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-xl mb-4">
                <Brain size={24} className="text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">36题A/B选择</h3>
              <p className="text-gray-600">
                每题只有A/B两个选项，选择困难症的福音，抽象浓度直接拉满
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-xl mb-4">
                <Users size={24} className="text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">16种抽象人格</h3>
              <p className="text-gray-600">
                至高、至🍬，奶龙的化身...全见过的可以把自己加进去了
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 flex items-center justify-center bg-pink-100 rounded-xl mb-4">
                <Sparkles size={24} className="text-pink-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">2025-2026全网最梗</h3>
              <p className="text-gray-600">
                融汇最新网络烂梗，测的不是人格，是B……格（AI写的，我不负责口牙）（🍬）
              </p>
            </div>
          </>
        )}
      </div>

      {/* 测试说明 */}
      <div className="mb-10 p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl">
        <h3 className="text-xl font-bold text-gray-800 mb-4">测试须知</h3>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-green-100 rounded-full">
              <span className="text-green-600 text-sm">1</span>
            </div>
            <span className="text-gray-700">本测试共36题A/B选择，大约需要5-8分钟</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-yellow-100 rounded-full">
              <span className="text-yellow-600 text-sm">2</span>
            </div>
            <span className="text-gray-700">字研"J&B"量表，反应潜意识人格！网络重拳出击😡！</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-red-100 rounded-full">
              <span className="text-red-600 text-sm">3</span>
            </div>
            <span className="text-gray-700">测试结果仅供娱乐，如有雷同，那孩子你无敌了😭</span>
          </li>
        </ul>
      </div>

      {/* 开始测试按钮 */}
      <div className="text-center">
        <button
          onClick={onStart}
          className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xl font-bold rounded-2xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
        >
          <Play size={24} />
          开始测试
        </button>
        <p className="text-gray-500 text-sm mt-4">
          已有超过10,000+抽象带师完成测试
        </p>
      </div>
    </div>
  );
};

export default WelcomeCard;