// QuizComponent.js
import React from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import solarizedDark from 'react-syntax-highlighter/dist/cjs/styles/hljs/solarized-dark';

const QuizComponent = ({
  questions,
  currentQuestion,
  score,
  showScore,
  handleAnswerOptionClick,
  handleRestartQuiz
}) => {
  return (
    <div className="w-full sm:max-w-md lg:min-w-full sm:mx-auto p-8 bg-darken lg:h-full rounded-lg shadow-lg">
      {showScore ? (
        <div className="text-center">
          <div className="text-2xl font-bold mb-4 text-gray-100">Your Score: {score}</div>
          <button
            className="mt-4 px-4 py-2 bg-light-blue text-white rounded font-poppins"
            onClick={handleRestartQuiz}
          >
            Restart Quiz
          </button>
        </div>
      ) : (
        <>
          <div className="mb-4">
            <div className="text-sm font-medium font-poppins text-gray-400 tracking-wider mb-3">
              {currentQuestion + 1}/{questions.length}
            </div>
            <div className="text-lg mb-4 text-gray-100 font-poppins">{questions[currentQuestion].questionText}</div>
            {questions[currentQuestion].code && (
              <SyntaxHighlighter language="go" style={solarizedDark} className="mb-4 rounded-lg font-poppins">
                {questions[currentQuestion].code}
              </SyntaxHighlighter>
            )}
          </div>
          <div className="space-y-2">
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
              <button
                key={index}
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
                className="w-full px-4 py-2 text-left bg-dark-blue rounded font-poppins text-light-blue hover:bg-light-blue hover:text-dark-blue"
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
