import { useState, useEffect } from 'react';
import WelcomeCard from './components/WelcomeCard';
import QuestionCard from './components/QuestionCard';
import ResultCard from './components/ResultCard';
import type { Option } from './data/types';
import {
  initializeTestSession,
  handleAnswerSelection,
  calculateTestResult,
  getCurrentQuestion,
  getTestProgress,
  getTestStats,
  validateTestConfig,
  type TestSession,
  type TestConfig
} from './utils/testManager';
import { getAlgorithmInfo } from './utils/testLogic';
import { getSelectionStrategyInfo } from './utils/questionSelector';
import './App.css';

type TestState = 'welcome' | 'testing' | 'result';
type AlgorithmVersion = 'v2' | 'v3';

function App() {
  const [testState, setTestState] = useState<TestState>('welcome');
  const [testSession, setTestSession] = useState<TestSession | null>(null);
  const [algorithmVersion, setAlgorithmVersion] = useState<AlgorithmVersion>('v3');
  const [useQuestionSelection, setUseQuestionSelection] = useState<boolean>(true);
  const [algorithmInfo, setAlgorithmInfo] = useState<any>(null);
  const [selectionInfo, setSelectionInfo] = useState<any>(null);

  // 获取算法信息和抽题策略信息
  useEffect(() => {
    setAlgorithmInfo(getAlgorithmInfo());
    setSelectionInfo(getSelectionStrategyInfo());
  }, []);

  // 处理开始测试
  const handleStartTest = () => {
    const config: TestConfig = {
      algorithmVersion,
      useQuestionSelection
    };

    // 验证配置
    const errors = validateTestConfig(config);
    if (errors.length > 0) {
      alert(`配置错误：\n${errors.join('\n')}`);
      return;
    }

    const session = initializeTestSession(config);
    setTestSession(session);
    setTestState('testing');
  };

  // 处理选项选择
  const handleSelectOption = (_option: Option, optionIndex: number) => {
    if (!testSession) return;

    const { updatedSession, isTestComplete } = handleAnswerSelection(testSession, optionIndex);
    setTestSession(updatedSession);

    if (isTestComplete) {
      // 计算测试结果（虽然这里没有直接使用，但确保测试完成）
      calculateTestResult(updatedSession);
      setTestState('result');

      // 更新结果到session（如果需要）
      // 这里可以根据需要存储结果
    }
  };

  // 处理重新测试
  const handleRestart = () => {
    setTestState('welcome');
    setTestSession(null);
  };

  // 切换算法版本
  const toggleAlgorithmVersion = () => {
    const newVersion = algorithmVersion === 'v3' ? 'v2' : 'v3';
    setAlgorithmVersion(newVersion);

    // 如果切换到v2.0，建议关闭抽题模式
    if (newVersion === 'v2') {
      setUseQuestionSelection(false);
    }
  };

  // 切换抽题模式
  const toggleQuestionSelection = () => {
    setUseQuestionSelection(!useQuestionSelection);
  };

  // 获取当前题目
  const currentQuestion = testSession ? getCurrentQuestion(testSession) : null;

  // 获取测试进度
  const progress = testSession ? getTestProgress(testSession) : { current: 0, total: 36, percentage: 0 };

  // 获取测试统计
  const stats = testSession ? getTestStats(testSession) : null;

  // 添加一些有趣的背景效果
  useEffect(() => {
    if (testState === 'testing') {
      document.body.classList.add('testing-mode');
    } else {
      document.body.classList.remove('testing-mode');
    }
  }, [testState]);

  // 获取结果用于显示
  const getResultForDisplay = () => {
    if (!testSession) return null;

    try {
      return calculateTestResult(testSession);
    } catch (error) {
      console.error('计算结果时出错:', error);
      return null;
    }
  };

  const result = getResultForDisplay();
  // 告诉TypeScript这个变量是有意使用的
  void result;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      {/* 顶部装饰 */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500" />

      <div className="container mx-auto px-4 py-8 md:py-16">
        {/* 标题区域 */}
        <header className="text-center mb-8 md:mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              JBTI
            </span>
            <span className="text-gray-800">抽象人格测试</span>
            {/*}
            {useQuestionSelection && selectionInfo && (
              <span className="text-sm ml-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-2 py-1 rounded-full">
                抽题模式 v{selectionInfo.version}
              </span>
            )}
            */}
          </h1>
          <p className="text-gray-600 text-lg">
            全网最能融梗 · 最抽象的人格测试（试图嫁祸AI）
          </p>
          {useQuestionSelection && selectionInfo && (
            <p className="text-gray-500 text-sm mt-2">
              {/*从{selectionInfo.totalQuestions}题中抽取{selectionInfo.selectedQuestions}题 · 每次测试都有新发现！*/}
              从题库中抽取{selectionInfo.selectedQuestions}题 · 每次测试都有新发现！
            </p>
          )}
        </header>

        {/* 主要内容 */}
        <main className="relative">
          {testState === 'welcome' && (
            <WelcomeCard
              onStart={handleStartTest}
              algorithmVersion={algorithmVersion}
              onToggleAlgorithm={toggleAlgorithmVersion}
              algorithmInfo={algorithmInfo}
              useQuestionSelection={useQuestionSelection}
              onToggleQuestionSelection={toggleQuestionSelection}
              selectionInfo={selectionInfo}
            />
          )}

          {testState === 'testing' && currentQuestion && (
            <div className="animate-fadeIn">
              <QuestionCard
                question={currentQuestion}
                onSelect={(option) => {
                  const optionIndex = currentQuestion.options.indexOf(option);
                  handleSelectOption(option, optionIndex);
                }}
                currentQuestion={progress.current + 1}
                totalQuestions={progress.total}
              />
              <div className="text-center mt-6">
                <div className="text-gray-500 text-sm mb-2">
                  进度: {progress.current + 1}/{progress.total} ({progress.percentage}%)
                  {stats && (
                    <span className="ml-4">
                      用时: {Math.floor(stats.duration / 60)}分{stats.duration % 60}秒
                    </span>
                  )}
                </div>
                <button
                  onClick={handleRestart}
                  className="text-gray-500 hover:text-gray-700 text-sm underline"
                >
                  重新开始测试
                </button>
              </div>
            </div>
          )}

          {testState === 'result' && result && (
            <div className="animate-fadeIn">
              <ResultCard
                result={result}
                onRestart={handleRestart}
                algorithmVersion={algorithmVersion}
                algorithmInfo={algorithmInfo}
                testStats={stats}
                useQuestionSelection={useQuestionSelection}
              />
            </div>
          )}
        </main>

        {/* 页脚 */}
        <footer className="mt-12 pt-8 border-t border-gray-200">
          <div className="text-center text-gray-500 text-sm">
            <p className="mb-2">
              JBTI™ - Just Be Totally Interesting (才怪) · 仅供娱乐
            </p>
            <p>
                对题目不满意/好奇隐藏结局？欢迎提交PR！
            </p>
            <p>
              建议使用 Chrome/Edge 最新版本访问 ·
              <a
                href="https://github.com/HechaoYannet/jbti-test"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-800 ml-2"
              >
                GitHub项目地址
              </a>
            </p>
            {useQuestionSelection && (
              <p className="mt-2 text-xs">
                💡 抽题模式：每次测试从题库中随机抽取36题，确保维度平衡覆盖
              </p>
            )}
          </div>
        </footer>
      </div>

      {/* 浮动装饰元素 */}
      <div className="fixed bottom-4 right-4 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 blur-xl" />
      <div className="fixed top-1/4 left-4 w-24 h-24 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-10 blur-xl" />
    </div>
  );
}

export default App;