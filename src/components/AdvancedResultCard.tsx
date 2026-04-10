import React from 'react';
import type { AdvancedTestResult } from '../utils/advancedAlgorithm';
import { Share2, RefreshCw, Download, Sparkles, GamepadIcon, Brain, TrendingUp, Target } from 'lucide-react';

interface AdvancedResultCardProps {
  result: AdvancedTestResult;
  onRestart: () => void;
  algorithmVersion: 'v2' | 'v3';
  algorithmInfo?: any;
}

const AdvancedResultCard: React.FC<AdvancedResultCardProps> = ({
  result,
  onRestart,
  algorithmVersion,
  algorithmInfo
}) => {
  const { type, breakdown, gameCamps, jbtiCode, hiddenEasterEggs, analysis } = result;

  // 分享结果
  const handleShare = async () => {
    const shareText = `我的JBTI ${algorithmVersion === 'v3' ? '3.0' : '2.0'}测试结果是：${type.name} - ${type.description}\n\n游戏阵营：${gameCamps.map(c => c.camp.name).join('、')}\n\n快来测测你的游戏人格吧！`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: `JBTI ${algorithmVersion === 'v3' ? '3.0' : '2.0'}测试结果`,
          text: shareText,
          url: window.location.href,
        });
      } catch (err) {
        console.log('分享取消:', err);
      }
    } else {
      // 备用方案：复制到剪贴板
      await navigator.clipboard.writeText(shareText);
      alert('结果已复制到剪贴板！快去分享给你的朋友吧~');
    }
  };

  // 下载结果图片（模拟）
  const handleDownload = () => {
    alert('高级功能：生成结果图片并下载（需要后端支持）');
  };

  // 获取维度显示名称
  const getDimensionName = (dimension: string) => {
    const names: Record<string, string> = {
      mihoyo: '🎮 米哈游指数',
      porridge: '🍲 粥指数',
      fake: '🎭 伪装度',
      dragon: '🐉 龙化度',
      pill: '🔮 丸化度',
      abstract: '🌀 抽象度',
      meme: '🤣 梗力',
      cringe: '😅 尬力',
      chaos: '🌪️ 混沌度',
      balance: '⚖️ 平衡指数'
    };
    return names[dimension] || dimension;
  };

  return (
    <div className="max-w-5xl mx-auto p-8 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl">
      {/* 算法版本标识 */}
      <div className="mb-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full">
          <Sparkles size={16} className="text-purple-600" />
          <span className="text-sm font-medium text-purple-700">
            JBTI {algorithmVersion === 'v3' ? '3.0 科学私货版' : '2.0 经典荒诞版'}
          </span>
        </div>
        {algorithmInfo && (
          <p className="text-sm text-gray-500 mt-2">
            {algorithmInfo.description} · {algorithmInfo.dimensions.length}个维度分析
          </p>
        )}
      </div>

      {/* 结果标题 */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          你的JBTI {algorithmVersion === 'v3' ? '3.0' : '2.0'}人格是：
        </h1>
        <div className="mb-4">
          <div
            className="inline-block px-6 py-3 rounded-2xl text-3xl font-black text-white mb-2"
            style={{ backgroundColor: type.color }}
          >
            {type.name}
          </div>
          <div className="mt-2 text-lg font-mono bg-gray-100 px-4 py-2 rounded-lg inline-block">
            {jbtiCode.toUpperCase()}型人格
          </div>
        </div>
        <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
          {type.description}
        </p>
      </div>

      {/* 游戏阵营分析 */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <GamepadIcon size={24} className="text-blue-600" />
          游戏人格阵营
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {gameCamps.map(({ camp, affinity }, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl border transition-all ${
                index === 0
                  ? 'bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200 shadow-lg'
                  : 'bg-white border-gray-200 hover:shadow-md'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-800">{camp.name}</h3>
                {index === 0 && (
                  <span className="px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-bold rounded-full">
                    最匹配
                  </span>
                )}
              </div>
              <p className="text-gray-600 text-sm mb-4">{camp.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">匹配度</span>
                <div className="flex items-center gap-2">
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                      style={{ width: `${Math.min(Math.max(affinity, 0), 100)}%` }}
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    {Math.round(affinity)}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 人格特征 */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <Brain size={24} className="text-purple-600" />
          人格特征分析
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {type.characteristics.map((char, index) => (
            <div
              key={index}
              className="p-4 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-3">
                <div
                  className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full text-white font-bold"
                  style={{ backgroundColor: type.color }}
                >
                  {index + 1}
                </div>
                <p className="text-gray-700">{char}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 维度分析（增强版） */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <TrendingUp size={24} className="text-green-600" />
          科学私货维度分析
        </h2>
        <div className="space-y-4">
          {breakdown.map((item: any, index) => (
            <div key={index} className="bg-white p-4 rounded-xl border border-gray-200 hover:shadow-sm transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-3 gap-2">
                <div className="flex items-center gap-3">
                  <span className="font-medium text-gray-800">
                    {getDimensionName(item.dimension)}
                  </span>
                  {item.percentile && (
                    <span className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">
                      前{item.percentile}%
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium text-gray-600">
                    {item.description}
                  </span>
                  <span className="text-lg font-bold text-gray-800">
                    {item.score > 0 ? '+' : ''}{item.score.toFixed(1)}
                  </span>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000"
                  style={{
                    width: `${Math.min(Math.max(item.score + 20, 0), 40) * 2.5}%`
                  }}
                />
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>-20</span>
                <span>0</span>
                <span>+20</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 隐藏彩蛋 */}
      {hiddenEasterEggs.length > 0 && (
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <Target size={24} className="text-red-600" />
            隐藏彩蛋解锁！
          </h2>
          <div className="space-y-3">
            {hiddenEasterEggs.map((egg, index) => (
              <div
                key={index}
                className="p-4 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-yellow-100 rounded-full">
                    <span className="text-yellow-600 text-sm">🎯</span>
                  </div>
                  <p className="text-gray-700">{egg}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 人格分析报告 */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">人格分析报告</h2>
        <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-blue-200">
          <pre className="whitespace-pre-wrap font-sans text-gray-700 leading-relaxed">
            {analysis}
          </pre>
        </div>
      </div>

      {/* 相关梗 */}
      {type.memeExamples.length > 0 && (
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">相关网络梗</h2>
          <div className="flex flex-wrap gap-2">
            {type.memeExamples.map((meme, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full text-gray-700 hover:shadow-md transition-shadow"
              >
                #{meme}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* 行动按钮 */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
        <button
          onClick={handleShare}
          className="flex-1 max-w-xs mx-auto flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:shadow-lg transition-all"
        >
          <Share2 size={20} />
          分享结果
        </button>

        <button
          onClick={onRestart}
          className="flex-1 max-w-xs mx-auto flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:shadow-lg transition-all"
        >
          <RefreshCw size={20} />
          重新测试
        </button>

        <button
          onClick={handleDownload}
          className="flex-1 max-w-xs mx-auto flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl hover:shadow-lg transition-all"
        >
          <Download size={20} />
          保存结果
        </button>
      </div>

      {/* 免责声明 */}
      <div className="mt-10 p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
        <p className="text-sm text-yellow-800 text-center">
          ⚠️ 免责声明：本测试基于科学私货算法，结果仅供娱乐。
          <br />
          米哈游指数、粥指数等为抽象维度，不代表真实游戏倾向。
          <br />
          如有雷同，纯属你也是个游戏抽象带师。
        </p>
      </div>
    </div>
  );
};

export default AdvancedResultCard;