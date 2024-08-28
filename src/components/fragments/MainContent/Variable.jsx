import React, { useState } from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { gradientDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import solarizedDark from 'react-syntax-highlighter/dist/cjs/styles/hljs/solarized-dark';
import { vsDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const Variable = () => {
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

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  const questions = [
    {
      questionText: "What is the correct way to declare a variable in Go?",
      code: `var x int = 5`,
      answerOptions: [
        { answerText: "var x int = 5", isCorrect: true },
        { answerText: "let x = 5", isCorrect: false },
        { answerText: "x := 5", isCorrect: false },
        { answerText: "int x = 5", isCorrect: false },
      ],
    },
    {
      questionText: "How do you declare and initialize a variable with a shorthand in Go?",
      code: `x := 10`,
      answerOptions: [
        { answerText: "var x int = 10", isCorrect: false },
        { answerText: "let x = 10", isCorrect: false },
        { answerText: "x := 10", isCorrect: true },
        { answerText: "int x = 10", isCorrect: false },
      ],
    },
    {
      questionText: "What is the default value of a string variable in Go?",
      code: ``,
      answerOptions: [
        { answerText: "\"\"", isCorrect: true },
        { answerText: "null", isCorrect: false },
        { answerText: "undefined", isCorrect: false },
        { answerText: "0", isCorrect: false },
      ],
    },
    {
      questionText: "What will be the value of `x` after the following code executes?",
      code: `var x int\nx = 42`,
      answerOptions: [
        { answerText: "42", isCorrect: true },
        { answerText: "0", isCorrect: false },
        { answerText: "undefined", isCorrect: false },
        { answerText: "Error", isCorrect: false },
      ],
    },
    {
      questionText: "What is the difference between `var` and `:=` in Go?",
      code: ``,
      answerOptions: [
        { answerText: "`var` can be used to declare variables with an explicit type, while `:=` is for implicit type declaration.", isCorrect: true },
        { answerText: "`var` is used for constants, while `:=` is for variables.", isCorrect: false },
        { answerText: "`var` and `:=` are interchangeable in Go.", isCorrect: false },
        { answerText: "`var` is used in functions only, while `:=` is used globally.", isCorrect: false },
      ],
    },
  ];


  return (
    <div>
      <div className="w-full max-w-[22rem] p-8 bg-darken rounded-lg shadow-lg">
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
                Question {currentQuestion + 1}/{questions.length}
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
    </div>
  );
};
