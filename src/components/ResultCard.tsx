import React from 'react';
import type { TestResult } from '../data/types';
import type { AdvancedTestResult } from '../utils/advancedAlgorithm';
import AdvancedResultCard from './AdvancedResultCard';
import { Share2, RefreshCw, Download, Sparkles } from 'lucide-react';

interface ResultCardProps {
  result: TestResult | AdvancedTestResult;
  onRestart: () => void;
  algorithmVersion?: 'v2' | 'v3';
  algorithmInfo?: any;
  testStats?: any;
  useQuestionSelection?: boolean;
}

const ResultCard: React.FC<ResultCardProps> = (props) => {
  const { result, onRestart, algorithmVersion = 'v2' } = props;

  // 如果是v3算法且是高级结果，使用AdvancedResultCard
  if (algorithmVersion === 'v3' && 'gameCamps' in result) {
    return <AdvancedResultCard {...props} result={result as AdvancedTestResult} algorithmVersion={algorithmVersion} />;
  }

  // 否则使用原来的逻辑（v2算法或普通结果）
  const { type, breakdown } = result as TestResult;

  // 分享结果
  const handleShare = async () => {
    const shareText = `我的JBTI ${algorithmVersion === 'v3' ? '3.0' : '2.0'}测试结果是：${type.name} - ${type.description}\n\n快来测测你是什么抽象人格吧！`;

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

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl">
      {/* 结果标题 */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-4">
          <Sparkles size={16} className="text-purple-600" />
          <span className="text-sm font-medium text-purple-700">
            测试完成！{algorithmVersion === 'v3' ? '🔬 科学私货版' : '🎭 经典荒诞版'}
          </span>
        </div>
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
            {type.id.toUpperCase()}型人格
          </div>
        </div>
        <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
          {type.description}
        </p>
      </div>

      {/* 人格特征 */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <div className="w-2 h-6 rounded-full" style={{ backgroundColor: type.color }} />
          人格特征
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

      {/* 维度分析 */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">维度分析</h2>
        <div className="space-y-4">
          {breakdown.map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-xl border border-gray-200">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-gray-800">
                  {item.dimension === 'mihoyo' && '🎮 米哈游指数'}
                  {item.dimension === 'porridge' && '🍲 粥指数'}
                  {item.dimension === 'fake' && '🎭 伪装度'}
                  {item.dimension === 'dragon' && '🐉 龙化度'}
                  {item.dimension === 'pill' && '🔮 丸化度'}
                  {item.dimension === 'abstract' && '🌀 抽象度'}
                  {item.dimension === 'meme' && '🤣 梗力'}
                  {item.dimension === 'cringe' && '😅 尬力'}
                  {item.dimension === 'chaos' && '🌪️ 混沌度'}
                  {item.dimension === 'balance' && '⚖️ 平衡指数'}
                </span>
                <span className="text-sm font-medium text-gray-600">
                  {item.description}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000"
                  style={{
                    width: `${Math.min(Math.max(item.score + (algorithmVersion === 'v3' ? 20 : 10), 0), (algorithmVersion === 'v3' ? 40 : 20)) * (algorithmVersion === 'v3' ? 2.5 : 5)}%`
                  }}
                />
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>{algorithmVersion === 'v3' ? '-20' : '-10'}</span>
                <span>0</span>
                <span>{algorithmVersion === 'v3' ? '+20' : '+10'}</span>
              </div>
            </div>
          ))}
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
          ⚠️ 免责声明：本测试仅供娱乐，结果不代表真实人格特征。
          <br />
          如有雷同，纯属你也是个抽象带师。
        </p>
      </div>
    </div>
  );
};

export default ResultCard;