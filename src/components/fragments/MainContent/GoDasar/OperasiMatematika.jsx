// Integer.js
import React, { useState } from 'react';
import QuizComponent from '../../QuizComponent';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
export const OperasiMatematika = () => {
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
      questionText: "What is an arithmetic operation in Go?",
      code: ``,
      answerOptions: [
        { answerText: "An operation that performs mathematical calculations like addition, subtraction, multiplication, and division", isCorrect: true },
        { answerText: "An operation that declares variables", isCorrect: false },
        { answerText: "An operation that defines types", isCorrect: false },
        { answerText: "An operation that manages memory", isCorrect: false },
      ],
    },
    {
      questionText: "How do you perform addition in Go?",
      code: ``,
      answerOptions: [
        { answerText: "Using the '+' operator", isCorrect: true },
        { answerText: "Using the '-' operator", isCorrect: false },
        { answerText: "Using the '/' operator", isCorrect: false },
        { answerText: "Using the '*' operator", isCorrect: false },
      ],
    },
    {
      questionText: "What will be the output of the following code?",
      code: `package main
  import "fmt"
  
  func main() {
      result := 10 - 5
      fmt.Println(result)
  }`,
      answerOptions: [
        { answerText: "5", isCorrect: true },
        { answerText: "15", isCorrect: false },
        { answerText: "10", isCorrect: false },
        { answerText: "Error", isCorrect: false },
      ],
    },
    {
      questionText: "Which operator is used for multiplication in Go?",
      code: ``,
      answerOptions: [
        { answerText: "*", isCorrect: true },
        { answerText: "+", isCorrect: false },
        { answerText: "/", isCorrect: false },
        { answerText: "-", isCorrect: false },
      ],
    },
    {
      questionText: "What will be the output of the following code that performs division?",
      code: `package main
  import "fmt"
  
  func main() {
      var a int = 10
      var b int = 3
      result := a / b
      fmt.Println(result)
  }`,
      answerOptions: [
        { answerText: "3", isCorrect: true }, // Integer division result
        { answerText: "3.33", isCorrect: false },
        { answerText: "3.0", isCorrect: false },
        { answerText: "Error", isCorrect: false },
      ],
    },
    {
      questionText: "How do you calculate the remainder of a division in Go?",
      code: ``,
      answerOptions: [
        { answerText: "Using the '%' operator", isCorrect: true },
        { answerText: "Using the '/' operator", isCorrect: false },
        { answerText: "Using the '*' operator", isCorrect: false },
        { answerText: "Using the '+' operator", isCorrect: false },
      ],
    },
    {
      questionText: "What will be the result of the following Go code?",
      code: `package main
  import "fmt"
  
  func main() {
      result := 5 * 4 / 2 + 3 - 1
      fmt.Println(result)
  }`,
      answerOptions: [
        { answerText: "12", isCorrect: true },
        { answerText: "11", isCorrect: false },
        { answerText: "10", isCorrect: false },
        { answerText: "13", isCorrect: false },
      ],
    },
    {
      questionText: "Which of the following is a correct way to perform exponentiation in Go?",
      code: ``,
      answerOptions: [
        { answerText: "Using the math.Pow function", isCorrect: true },
        { answerText: "Using the '^' operator", isCorrect: false },
        { answerText: "Using the '**' operator", isCorrect: false },
        { answerText: "Using the '%' operator", isCorrect: false },
      ],
    },
    {
      questionText: "What will be the output of the following Go code using the math package?",
      code: `package main
  import (
      "fmt"
      "math"
  )
  
  func main() {
      result := math.Pow(2, 3)
      fmt.Println(result)
  }`,
      answerOptions: [
        { answerText: "8", isCorrect: true },
        { answerText: "6", isCorrect: false },
        { answerText: "9", isCorrect: false },
        { answerText: "Error", isCorrect: false },
      ],
    },
    {
      questionText: "What will be the result of the modulo operation in the following Go code?",
      code: `package main
  import "fmt"
  
  func main() {
      result := 17 % 5
      fmt.Println(result)
  }`,
      answerOptions: [
        { answerText: "2", isCorrect: true },
        { answerText: "3", isCorrect: false },
        { answerText: "5", isCorrect: false },
        { answerText: "0", isCorrect: false },
      ],
    },
  ];

  const code1 = `
  // Deklarasi sederhana
  var sum int = 5 + 3
  var product int = 4 * 2
    `;
  return (
    <div className='flex flex-col pb-3 lg:items-start lg:flex-row lg:gap-x-3 gap-y-7'>
      <div className='lg:w-[60%] xl:w-4/5'>
        <h1 className='mb-3 text-2xl font-bold font-poppins'>Operasi Matematika</h1>
        <div className='flex flex-col gap-y-2'>
          <h2 className='text-base italic font-medium font-poppins'>Pengertian: <br /> <span className='not-italic font-normal'>Operasi dasar seperti penjumlahan, pengurangan, perkalian, dan pembagian.
          </span></h2>
          <h2 className='text-base italic font-medium font-poppins'>Fungsi: <br /><span className='not-italic font-normal'>Melakukan perhitungan pada data numerik.
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
