// Integer.js
import React, { useState } from 'react';
import QuizComponent from '../../QuizComponent';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
export const Conversi = () => {
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
      questionText: "What will be the output of the following Go code?",
      code: `package main
  import "fmt"
  
  func main() {
      var x int = 10
      fmt.Println(x)
  }`,
      answerOptions: [
        { answerText: "10", isCorrect: true },
        { answerText: "0", isCorrect: false },
        { answerText: "undefined", isCorrect: false },
        { answerText: "Error", isCorrect: false },
      ],
    },
    {
      questionText: "What is the correct way to declare a variable in Go?",
      code: `var x = 5`,
      answerOptions: [
        { answerText: "let x = 5", isCorrect: false },
        { answerText: "var x = 5", isCorrect: true },
        { answerText: "x := 5", isCorrect: false },
        { answerText: "int x = 5", isCorrect: false },
      ],
    },
    {
      questionText: "What keyword is used to declare a variable with a specified type in Go?",
      code: `var name string = "GoLang"`,
      answerOptions: [
        { answerText: "let", isCorrect: false },
        { answerText: "var", isCorrect: true },
        { answerText: "const", isCorrect: false },
        { answerText: "define", isCorrect: false },
      ],
    },
    {
      questionText: "What is the output of the following code?",
      code: `package main
  import "fmt"
  
  func main() {
      var x int
      fmt.Println(x)
  }`,
      answerOptions: [
        { answerText: "0", isCorrect: true },
        { answerText: "nil", isCorrect: false },
        { answerText: "undefined", isCorrect: false },
        { answerText: "Error", isCorrect: false },
      ],
    },
    {
      questionText: "Which of the following correctly declares a variable using shorthand notation?",
      code: `x := 20`,
      answerOptions: [
        { answerText: "var x int = 20", isCorrect: false },
        { answerText: "x := 20", isCorrect: true },
        { answerText: "let x = 20", isCorrect: false },
        { answerText: "x = 20", isCorrect: false },
      ],
    },
    {
      questionText: "What will be the output of the following code?",
      code: `package main
  import "fmt"
  
  func main() {
      x := 5
      y := 10
      fmt.Println(x + y)
  }`,
      answerOptions: [
        { answerText: "15", isCorrect: true },
        { answerText: "510", isCorrect: false },
        { answerText: "undefined", isCorrect: false },
        { answerText: "Error", isCorrect: false },
      ],
    },
    {
      questionText: "Which of the following is the zero value for a string variable in Go?",
      code: `var s string`,
      answerOptions: [
        { answerText: '"" (empty string)', isCorrect: true },
        { answerText: "0", isCorrect: false },
        { answerText: "nil", isCorrect: false },
        { answerText: "undefined", isCorrect: false },
      ],
    },
    {
      questionText: "What will be the output of the following code?",
      code: `package main
  import "fmt"
  
  func main() {
      var x, y int = 10, 20
      var z = x + y
      fmt.Println(z)
  }`,
      answerOptions: [
        { answerText: "30", isCorrect: true },
        { answerText: "1020", isCorrect: false },
        { answerText: "undefined", isCorrect: false },
        { answerText: "Error", isCorrect: false },
      ],
    },
    {
      questionText: "What is the correct way to declare a constant in Go?",
      code: `const Pi = 3.14`,
      answerOptions: [
        { answerText: "var Pi = 3.14", isCorrect: false },
        { answerText: "const Pi = 3.14", isCorrect: true },
        { answerText: "let Pi = 3.14", isCorrect: false },
        { answerText: "define Pi = 3.14", isCorrect: false },
      ],
    },
    {
      questionText: "Which of the following Go keywords can be used to declare multiple variables at once?",
      code: `var a, b, c int = 1, 2, 3`,
      answerOptions: [
        { answerText: "var", isCorrect: true },
        { answerText: "let", isCorrect: false },
        { answerText: "const", isCorrect: false },
        { answerText: "define", isCorrect: false },
      ],
    },
  ];
  const code1 = `
  var a int = 10
  var b float64 = float64(a)
    `;
  return (
    <div className='flex flex-col w-full pb-3 lg:items-start lg:flex-row lg:gap-x-3 gap-y-7'>
      <div className='lg:w-[60%] xl:w-4/5'>
        <h1 className='mb-3 text-2xl font-bold font-poppins'>Conversi</h1>
        <div className='flex flex-col gap-y-2'>
          <h2 className='text-base italic font-medium font-poppins'>Pengertian: <br /> <span className='not-italic font-normal'>Mengubah tipe data dari satu tipe ke tipe lain.</span></h2>
          <h2 className='text-base italic font-medium font-poppins'>Fungsi: <br /><span className='not-italic font-normal'>Agar data dapat diproses sesuai kebutuhan tipe data.
          </span></h2>
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
