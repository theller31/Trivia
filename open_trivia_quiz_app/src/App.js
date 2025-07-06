import React, { useState } from 'react';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Result from './components/Result';

export default function App() {
  const [stage, setStage] = useState('home');
  const [userOptions, setUserOptions] = useState(null); // {name, category, difficulty}
  const [resultData, setResultData] = useState(null);   // {isCorrect, correctAnswer}

  function handleStart(formData) {
    setUserOptions(formData);
    setStage('quiz');
  }

  function handleAnswer(isCorrect, correctAnswer) {
    setResultData({ isCorrect, correctAnswer });
    setStage('result');
  }

  function handleRestart() {
    setStage('home');
    setUserOptions(null);
    setResultData(null);
  }

  if (stage === 'home') {
    return <Home onStart={handleStart} />;
  }

  if (stage === 'quiz') {
    return <Quiz options={userOptions} onSubmit={handleAnswer} />;
  }

  return (
    <Result
      name={userOptions.name}
      isCorrect={resultData.isCorrect}
      correctAnswer={resultData.correctAnswer}
      onRestart={handleRestart}
    />
  );
}
