// Integer.js
import React, { useState } from 'react';
import QuizComponent from '../../QuizComponent';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
export const Boolean = () => {
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
      var isAvailable bool = true
      fmt.Println(isAvailable)
  }`,
      answerOptions: [
        { answerText: "true", isCorrect: true },
        { answerText: "false", isCorrect: false },
        { answerText: "1", isCorrect: false },
        { answerText: "0", isCorrect: false },
      ],
    },
    {
      questionText: "What is the default value of a boolean variable in Go?",
      code: `var isComplete bool`,
      answerOptions: [
        { answerText: "false", isCorrect: true },
        { answerText: "true", isCorrect: false },
        { answerText: "0", isCorrect: false },
        { answerText: "nil", isCorrect: false },
      ],
    },
    {
      questionText: "Which of the following is the correct way to declare a boolean variable in Go?",
      code: ``,
      answerOptions: [
        { answerText: "var isReady bool = true", isCorrect: true },
        { answerText: "bool isReady = true", isCorrect: false },
        { answerText: "let isReady = true", isCorrect: false },
        { answerText: "isReady := 'true'", isCorrect: false },
      ],
    },
    {
      questionText: "What will be the output of the following code involving boolean logic?",
      code: `package main
  import "fmt"
  
  func main() {
      var a bool = true
      var b bool = false
      fmt.Println(a && b)
  }`,
      answerOptions: [
        { answerText: "false", isCorrect: true },
        { answerText: "true", isCorrect: false },
        { answerText: "undefined", isCorrect: false },
        { answerText: "Error", isCorrect: false },
      ],
    },
    {
      questionText: "What will be the output of the following Go code?",
      code: `package main
  import "fmt"
  
  func main() {
      var x bool = true
      var y bool = !x
      fmt.Println(y)
  }`,
      answerOptions: [
        { answerText: "false", isCorrect: true },
        { answerText: "true", isCorrect: false },
        { answerText: "undefined", isCorrect: false },
        { answerText: "Error", isCorrect: false },
      ],
    },
    {
      questionText: "Which of the following expressions will evaluate to true?",
      code: `var x bool = (10 > 5)`,
      answerOptions: [
        { answerText: "10 > 5", isCorrect: true },
        { answerText: "10 < 5", isCorrect: false },
        { answerText: "10 == 5", isCorrect: false },
        { answerText: "!(10 > 5)", isCorrect: false },
      ],
    },
    {
      questionText: "What will be the output of the following Go code involving boolean OR operator?",
      code: `package main
  import "fmt"
  
  func main() {
      var a bool = false
      var b bool = true
      fmt.Println(a || b)
  }`,
      answerOptions: [
        { answerText: "true", isCorrect: true },
        { answerText: "false", isCorrect: false },
        { answerText: "undefined", isCorrect: false },
        { answerText: "Error", isCorrect: false },
      ],
    },
    {
      questionText: "What will be the output of the following code with combined boolean expressions?",
      code: `package main
  import "fmt"
  
  func main() {
      var a bool = true
      var b bool = false
      var c bool = (a || b) && !b
      fmt.Println(c)
  }`,
      answerOptions: [
        { answerText: "true", isCorrect: true },
        { answerText: "false", isCorrect: false },
        { answerText: "undefined", isCorrect: false },
        { answerText: "Error", isCorrect: false },
      ],
    },
    {
      questionText: "What will be the output of the following Go code?",
      code: `package main
  import "fmt"
  
  func main() {
      var isRaining bool = false
      if !isRaining {
          fmt.Println("Go outside")
      } else {
          fmt.Println("Stay inside")
      }
  }`,
      answerOptions: [
        { answerText: "Go outside", isCorrect: true },
        { answerText: "Stay inside", isCorrect: false },
        { answerText: "undefined", isCorrect: false },
        { answerText: "Error", isCorrect: false },
      ],
    },
    {
      questionText: "Which of the following is a valid boolean expression in Go?",
      code: ``,
      answerOptions: [
        { answerText: "5 != 10", isCorrect: true },
        { answerText: "5 = 10", isCorrect: false },
        { answerText: "true = false", isCorrect: false },
        { answerText: "10 => 5", isCorrect: false },
      ],
    },
  ];

  const code1 = `
  // Deklarasi sederhana
  var isActive bool = true
  var isActive2 bool = false
    `;
  return (
    <div className='flex flex-col items-start pb-3 lg:flex-row lg:gap-x-3 gap-y-7 max-w-[22rem] lg:max-w-full'>
      <div className='lg:w-[60%] xl:w-4/5'>
        <h1 className='mb-3 text-2xl font-bold font-poppins'>Boolean</h1>
        <div className='flex flex-col gap-y-2'>
          <h2 className='text-base italic font-medium font-poppins'>Pengertian: <br /> <span className='not-italic font-normal'>Tipe data untuk menyimpan nilai benar (true) atau salah (false).</span></h2>
          <h2 className='text-base italic font-medium font-poppins'>Fungsi: <br /><span className='not-italic font-normal'>Untuk kondisi logika dan kontrol alur program.</span></h2>
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
