// Integer.js
import React, { useState } from 'react';
import QuizComponent from '../../QuizComponent';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
export const Perbandingan = () => {
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
      questionText: "What are comparison operators in Go?",
      code: ``,
      answerOptions: [
        { answerText: "Operators used to compare two values", isCorrect: true },
        { answerText: "Operators used to perform mathematical calculations", isCorrect: false },
        { answerText: "Operators used to declare variables", isCorrect: false },
        { answerText: "Operators used to define types", isCorrect: false },
      ],
    },
    {
      questionText: "How do you check if two values are equal in Go?",
      code: ``,
      answerOptions: [
        { answerText: "Using the '==' operator", isCorrect: true },
        { answerText: "Using the '=' operator", isCorrect: false },
        { answerText: "Using the '!=' operator", isCorrect: false },
        { answerText: "Using the '||' operator", isCorrect: false },
      ],
    },
    {
      questionText: "What will be the output of the following Go code?",
      code: `package main
  import "fmt"
  
  func main() {
      a := 10
      b := 20
      fmt.Println(a > b)
  }`,
      answerOptions: [
        { answerText: "false", isCorrect: true },
        { answerText: "true", isCorrect: false },
        { answerText: "10", isCorrect: false },
        { answerText: "20", isCorrect: false },
      ],
    },
    {
      questionText: "Which operator is used to check if one value is not equal to another in Go?",
      code: ``,
      answerOptions: [
        { answerText: "!=", isCorrect: true },
        { answerText: "==", isCorrect: false },
        { answerText: "<>", isCorrect: false },
        { answerText: "!==", isCorrect: false },
      ],
    },
    {
      questionText: "What will be the output of the following code that compares strings?",
      code: `package main
  import "fmt"
  
  func main() {
      str1 := "Go"
      str2 := "Lang"
      fmt.Println(str1 == str2)
  }`,
      answerOptions: [
        { answerText: "false", isCorrect: true },
        { answerText: "true", isCorrect: false },
        { answerText: "Error", isCorrect: false },
        { answerText: "undefined", isCorrect: false },
      ],
    },
    {
      questionText: "How can you compare if a variable `x` is less than or equal to another variable `y` in Go?",
      code: ``,
      answerOptions: [
        { answerText: "Using the '<=' operator", isCorrect: true },
        { answerText: "Using the '>=' operator", isCorrect: false },
        { answerText: "Using the '<' operator", isCorrect: false },
        { answerText: "Using the '==' operator", isCorrect: false },
      ],
    },
    {
      questionText: "What is the result of the following Go code?",
      code: `package main
  import "fmt"
  
  func main() {
      x := 5
      y := 5
      fmt.Println(x >= y)
  }`,
      answerOptions: [
        { answerText: "true", isCorrect: true },
        { answerText: "false", isCorrect: false },
        { answerText: "Error", isCorrect: false },
        { answerText: "undefined", isCorrect: false },
      ],
    },
    {
      questionText: "Which comparison operator would you use to check if a value is strictly greater than another in Go?",
      code: ``,
      answerOptions: [
        { answerText: ">", isCorrect: true },
        { answerText: "<", isCorrect: false },
        { answerText: ">=", isCorrect: false },
        { answerText: "<=", isCorrect: false },
      ],
    },
    {
      questionText: "What will be the result of comparing the following two float values in Go?",
      code: `package main
  import "fmt"
  
  func main() {
      var a float64 = 3.14
      var b float64 = 3.14
      fmt.Println(a == b)
  }`,
      answerOptions: [
        { answerText: "true", isCorrect: true },
        { answerText: "false", isCorrect: false },
        { answerText: "Error", isCorrect: false },
        { answerText: "undefined", isCorrect: false },
      ],
    },
    {
      questionText: "Which comparison operator would you use to determine if one value is less than another in Go?",
      code: ``,
      answerOptions: [
        { answerText: "<", isCorrect: true },
        { answerText: ">", isCorrect: false },
        { answerText: "<=", isCorrect: false },
        { answerText: "==", isCorrect: false },
      ],
    },
  ];

  const code1 = `
  // Deklarasi sederhana
  var result bool = (5 > 3)  // true
    `;
  return (
    <div className='flex flex-col pb-3 lg:max-w-full lg:items-start lg:flex-row lg:gap-x-3 gap-y-7'>
      <div className='lg:w-[60%] xl:w-4/5'>
        <h1 className='mb-3 text-2xl font-bold font-poppins'>Perbandingan</h1>
        <div className='flex flex-col gap-y-2'>
          <h2 className='text-base italic font-medium font-poppins'>Pengertian: <br /> <span className='not-italic font-normal'>Membandingkan dua nilai untuk menentukan hubungan (sama, lebih besar, lebih kecil, dll).</span></h2>
          <h2 className='text-base italic font-medium font-poppins'>Fungsi: <br /><span className='not-italic font-normal'>Mengontrol alur program berdasarkan kondisi.</span></h2>
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
