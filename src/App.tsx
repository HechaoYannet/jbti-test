import { useState, useEffect } from 'react';
import { questions } from './data/questions';
import { calculateResult } from './utils/testLogic';
import WelcomeCard from './components/WelcomeCard';
import QuestionCard from './components/QuestionCard';
import ResultCard from './components/ResultCard';
import type { Option, TestResult } from './data/types';
import './App.css';

type TestState = 'welcome' | 'testing' | 'result';

function App() {
  const [testState, setTestState] = useState<TestState>('welcome');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [result, setResult] = useState<TestResult | null>(null);

  // 处理开始测试
  const handleStartTest = () => {
    setTestState('testing');
    setCurrentQuestion(0);
    setAnswers([]);
    setResult(null);
  };

  // 处理选项选择
  const handleSelectOption = (_option: Option, optionIndex: number) => {
    // 记录答案（0代表A/J，1代表B）
    const newAnswers = [...answers, optionIndex];
    setAnswers(newAnswers);

    // 进入下一题或显示结果
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // 所有题目答完，计算结果
      const testResult = calculateResult(newAnswers);
      setResult(testResult);
      setTestState('result');
    }
  };

  // 处理重新测试
  const handleRestart = () => {
    setTestState('welcome');
    setCurrentQuestion(0);
    setAnswers([]);
    setResult(null);
  };

  // 添加一些有趣的背景效果
  useEffect(() => {
    if (testState === 'testing') {
      document.body.classList.add('testing-mode');
    } else {
      document.body.classList.remove('testing-mode');
    }
  }, [testState]);

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
          </h1>
          <p className="text-gray-600 text-lg">
            全网最梗 · 最抽象 · 最好笑的人格测试
          </p>
        </header>

        {/* 主要内容 */}
        <main className="relative">
          {testState === 'welcome' && (
            <WelcomeCard onStart={handleStartTest} />
          )}

          {testState === 'testing' && (
            <div className="animate-fadeIn">
              <QuestionCard
                question={questions[currentQuestion]}
                onSelect={(option) => handleSelectOption(option, questions[currentQuestion].options.indexOf(option))}
                currentQuestion={currentQuestion + 1}
                totalQuestions={questions.length}
              />
              <div className="text-center mt-6">
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
              <ResultCard result={result} onRestart={handleRestart} />
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
              建议使用 Chrome/Edge 最新版本访问 ·
              <a
                href="https://github.com/yourusername/jbti-test"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-800 ml-2"
              >
                GitHub项目地址
              </a>
            </p>
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
