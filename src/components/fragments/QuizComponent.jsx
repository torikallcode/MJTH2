// QuizComponent.js
import React from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import solarizedDark from 'react-syntax-highlighter/dist/cjs/styles/hljs/solarized-dark';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const QuizComponent = ({
  questions,
  currentQuestion,
  score,
  showScore,
  handleAnswerOptionClick,
  handleRestartQuiz,
  classname
}) => {
  return (
    <div className={`w-full max-w-[22rem] lg:max-w-full p-8 rounded-lg shadow-lg sm:max-w-md sm:mx-auto bg-[#011627] lg:h-full xl:min-w-[400px] ${classname}`}>
      {showScore ? (
        <div className="text-center">
          <div className="mb-4 text-2xl font-bold text-gray-100">Your Score: {score}</div>
          <button
            className="px-4 py-2 mt-4 text-white rounded bg-light-blue font-poppins"
            onClick={handleRestartQuiz}
          >
            Restart Quiz
          </button>
        </div>
      ) : (
        <>
          <div className="mb-4">
            <div className="mb-3 text-sm font-medium tracking-wider text-gray-400 font-poppins">
              {currentQuestion + 1}/{questions.length}
            </div>
            <div className="mb-4 text-lg text-gray-100 font-poppins">{questions[currentQuestion].questionText}</div>
            {questions[currentQuestion].code && (
              <SyntaxHighlighter language="go" style={nightOwl} className="mb-4 rounded-lg font-poppins">
                {questions[currentQuestion].code}
              </SyntaxHighlighter>
            )}
          </div>
          <div className="space-y-2">
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
              <button
                key={index}
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
                className="w-full px-4 py-2 text-left rounded bg-dark-blue font-poppins text-light-blue"
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default QuizComponent;
