import React, { useState } from "react";
import { questions } from "../../components/fragments/Question";
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import App from "../fragments/Navbar";

export const AuthLayout = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 10);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="font-baskerville">
      <App />
      <div className="flex flex-col justify-center items-center bg-white mb-96">
        <div className="relative flex flex-col justify-center items-center mx-auto w-full h-screen">
          <h1 className="text-7xl text-center mx-auto max-w-[350px] xl:text-8xl text-hitam">My Journey To Heaven</h1>
          <h2 className="text-3xl absolute bottom-12 text-center">II</h2>
        </div>
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
          {showScore ? (
            <div className="text-center">
              <div className="text-2xl font-bold mb-4">Your Score: {score}</div>
              <button
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => window.location.reload()}
              >
                Restart Quiz
              </button>
            </div>
          ) : (
            <>
              <div className="mb-4">
                <div className="text-xl font-bold">
                  Question {currentQuestion + 1}/{questions.length}
                </div>
                <div className="text-lg mb-4">{questions[currentQuestion].questionText}</div>
                {questions[currentQuestion].code && (
                  <SyntaxHighlighter language="javascript" style={docco} className="mb-4">
                    {questions[currentQuestion].code}
                  </SyntaxHighlighter>
                )}
              </div>
              <div className="space-y-2">
                {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
                    className="w-full px-4 py-2 text-left bg-blue-100 hover:bg-blue-200 rounded"
                  >
                    {answerOption.answerText}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>

  );
}
