import React, { useState } from "react";
// import { questions } from "../fragments/QuizComponent";
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Navbar from "../fragments/Navbar";
import Sidebar from "../fragments/SideBar";
import { Link } from "react-router-dom";
import NavbarComponent from "../fragments/NavbarComponent";

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

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState('');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  const handleSelect = (item) => {
    setSelectedContent(item);
    setIsSidebarOpen(false); // Optionally close the sidebar after selection on mobile
  };

  const menuItems = [
    { id: 'introduction', label: 'Introduction' },
    { id: 'getting-started', label: 'Getting Started' },
    { id: 'customization', label: 'Customization' },
    { id: 'components', label: 'Components' },
  ];

  return (
    <div className="font-poppins">
      <NavbarComponent></NavbarComponent>
      <div className='fixed top-0 w-full h-[100vh] bg-cover bg-center overflow-hidden'>
        <svg viewBox="0 0 1108 632" aria-hidden="true" className="absolute top-10 left-[calc(50%-4rem)] opacity-100 -z-10 w-[69.25rem] max-w-none transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]">
          <path fill="url(#175c433f-44f6-4d59-93f0-c5c51ad5566d)" fillOpacity=".2" d="M235.233 402.609 57.541 321.573.83 631.05l234.404-228.441 320.018 145.945c-65.036-115.261-134.286-322.756 109.01-230.655C968.382 433.026 1031 651.247 1092.23 459.36c48.98-153.51-34.51-321.107-82.37-385.717L810.952 324.222 648.261.088 235.233 402.609Z"></path>
          <defs>
            <linearGradient id="175c433f-44f6-4d59-93f0-c5c51ad5566d" x1="1220.59" x2="-85.053" y1="432.766" y2="638.714" gradientUnits="userSpaceOnUse">
              <stop stopColor="#050C9C"></stop>
              <stop offset="1" stopColor="#4C3BCF"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="flex flex-col items-center justify-center bg-white">
        <div className="relative flex flex-col items-center justify-center w-full h-screen mx-auto">
          <h1 className="text-6xl text-center mx-auto max-w-[250px] xl:max-w-xl xl:text-8xl text-hitam font-semibold">My Journey To Heaven</h1>
          <h2 className="absolute text-3xl text-center bottom-12 font-baskerville">II</h2>
        </div>
        {/* <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
          {showScore ? (
            <div className="text-center">
              <div className="mb-4 text-2xl font-bold">Your Score: {score}</div>
              <button
                className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600"
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
                <div className="mb-4 text-lg">{questions[currentQuestion].questionText}</div>
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
                    className="w-full px-4 py-2 text-left bg-blue-100 rounded hover:bg-blue-200"
                  >
                    {answerOption.answerText}
                  </button>
                ))}
              </div>
            </>
          )}
        </div> */}
      </div>
    </div>

  );
}
