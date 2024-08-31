// Integer.js
import React, { useState } from 'react';
import QuizComponent from '../../QuizComponent';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
export const TypeDeklarasi = () => {
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
      questionText: "What is the correct way to declare a new type in Go?",
      code: ``,
      answerOptions: [
        { answerText: "type MyInt int", isCorrect: true },
        { answerText: "let MyInt = int", isCorrect: false },
        { answerText: "var MyInt = int", isCorrect: false },
        { answerText: "const MyInt int", isCorrect: false },
      ],
    },
    {
      questionText: "What will be the output of the following Go code?",
      code: `package main
  import "fmt"
  
  type Celsius float64
  
  func main() {
      var temp Celsius = 36.6
      fmt.Println(temp)
  }`,
      answerOptions: [
        { answerText: "36.6", isCorrect: true },
        { answerText: "36", isCorrect: false },
        { answerText: "Error", isCorrect: false },
        { answerText: "undefined", isCorrect: false },
      ],
    },
    {
      questionText: "How do you define a custom type based on a struct in Go?",
      code: ``,
      answerOptions: [
        { answerText: "type Person struct { Name string; Age int }", isCorrect: true },
        { answerText: "struct Person { Name string; Age int }", isCorrect: false },
        { answerText: "type Person { Name string; Age int }", isCorrect: false },
        { answerText: "const Person struct { Name string; Age int }", isCorrect: false },
      ],
    },
    {
      questionText: "Which of the following code snippets correctly defines a new type for a slice of strings?",
      code: ``,
      answerOptions: [
        { answerText: "type StringList []string", isCorrect: true },
        { answerText: "type []string StringList", isCorrect: false },
        { answerText: "type StringList [string]", isCorrect: false },
        { answerText: "const StringList []string", isCorrect: false },
      ],
    },
    {
      questionText: "What is the purpose of type declarations in Go?",
      code: ``,
      answerOptions: [
        { answerText: "To create new, distinct types from existing ones", isCorrect: true },
        { answerText: "To declare variables with specific values", isCorrect: false },
        { answerText: "To import packages", isCorrect: false },
        { answerText: "To define constants", isCorrect: false },
      ],
    },
  ];

  const code1 = `
  // Deklarasi sederhana
  type Age int
  var myAge Age = 30
    `;

  return (
    <div className='max-w-[22rem] lg:max-w-full flex flex-col items-start pb-3 lg:flex-row lg:gap-x-3 gap-y-7'>
      <div className='lg:w-[60%] xl:w-4/5'>
        <h1 className='mb-3 text-2xl font-bold font-poppins'>Type Deklarasi</h1>
        <div className='flex flex-col gap-y-2'>
          <h2 className='text-base italic font-medium font-poppins'>Pengertian: <br /> <span className='not-italic font-normal'>Mendefinisikan tipe data baru atau alias tipe data.</span></h2>
          <h2 className='text-base italic font-medium font-poppins'>Fungsi: <br /><span className='not-italic font-normal'>Membuat tipe data khusus yang sesuai kebutuhan.
          </span></h2>
          <div>
            <h2 className='mb-1 text-base italic font-medium font-poppins'>Cara penggunaan:</h2>
            <SyntaxHighlighter language="go" style={nightOwl} className="mb-4 rounded-lg font-poppins">
              {code1}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
      <div className='lg:w-[40%] lg:sticky lg:top-24'>
        <h2 className='mb-1 text-base italic font-medium font-poppins lg:hidden'>Quiz:</h2>
        <QuizComponent
          classname={''}
          questions={questions}
          currentQuestion={currentQuestion}
          score={score}
          showScore={showScore}
          handleAnswerOptionClick={handleAnswerOptionClick}
          handleRestartQuiz={handleRestartQuiz}
        />
      </div>
    </div>
  );
};
