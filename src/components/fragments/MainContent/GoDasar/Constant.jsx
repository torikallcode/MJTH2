// Integer.js
import React, { useState } from 'react';
import QuizComponent from '../../QuizComponent';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
export const Constant = () => {
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
      questionText: "What is the correct way to declare a constant in Go?",
      code: ``,
      answerOptions: [
        { answerText: "const Pi = 3.14", isCorrect: true },
        { answerText: "let Pi = 3.14", isCorrect: false },
        { answerText: "Pi := 3.14", isCorrect: false },
        { answerText: "var Pi = 3.14", isCorrect: false },
      ],
    },
    {
      questionText: "What will be the output of the following Go code?",
      code: `package main
  import "fmt"
  
  func main() {
      const greeting = "Hello, Go!"
      fmt.Println(greeting)
  }`,
      answerOptions: [
        { answerText: "Hello, Go!", isCorrect: true },
        { answerText: "hello, go!", isCorrect: false },
        { answerText: "Error", isCorrect: false },
        { answerText: "Nothing", isCorrect: false },
      ],
    },
    {
      questionText: "Can the value of a constant be changed after it is declared in Go?",
      code: ``,
      answerOptions: [
        { answerText: "No", isCorrect: true },
        { answerText: "Yes", isCorrect: false },
        { answerText: "Only if it is of type int", isCorrect: false },
        { answerText: "Only if it is of type string", isCorrect: false },
      ],
    },
    {
      questionText: "What will be the output of the following Go code involving constant arithmetic?",
      code: `package main
  import "fmt"
  
  func main() {
      const a = 10
      const b = 20
      const sum = a + b
      fmt.Println(sum)
  }`,
      answerOptions: [
        { answerText: "30", isCorrect: true },
        { answerText: "1020", isCorrect: false },
        { answerText: "Error", isCorrect: false },
        { answerText: "undefined", isCorrect: false },
      ],
    },
    {
      questionText: "Which of the following statements about constants in Go is true?",
      code: ``,
      answerOptions: [
        { answerText: "Constants cannot be declared using the := syntax", isCorrect: true },
        { answerText: "Constants can be assigned a value at runtime", isCorrect: false },
        { answerText: "Constants can be modified after declaration", isCorrect: false },
        { answerText: "Constants must be of numeric type", isCorrect: false },
      ],
    },
  ];

  const code1 = `
  // Deklarasi sederhana
  const Pi = 3.14
    `;
  return (
    <div className='flex flex-col w-full pb-3 lg:items-start lg:flex-row lg:gap-x-3 gap-y-7'>
      <div className='lg:w-[60%] xl:w-4/5'>
        <h1 className='mb-3 text-2xl font-bold font-poppins'>Constant</h1>
        <div className='flex flex-col gap-y-2'>
          <h2 className='text-base italic font-medium font-poppins'>Pengertian: <br /> <span className='not-italic font-normal'>Nilai yang tidak bisa diubah setelah dideklarasikan. Cara Pembuatan Constant mirip dengan variable, yang membedakan hanya kata kunci yang digunakan adalah const bukan var. Saat membuat constant,kita wajib langsung menginisialisasikan datanya</span></h2>
          <h2 className='text-base italic font-medium font-poppins'>Fungsi: <br /><span className='not-italic font-normal'>Menyimpan nilai tetap yang digunakan di seluruh program.</span></h2>
          <div className='max-w-[22rem] sm:max-w-full xl:max-w-3xl'>
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
