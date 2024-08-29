// Integer.js
import React, { useState } from 'react';
import QuizComponent from '../QuizComponent';
export const Integer = () => {
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
      questionText: "What will be the output of the following Go code involving integer arithmetic?",
      code: `package main
  import "fmt"
  
  func main() {
      var a int = 7
      var b int = 3
      fmt.Println(a / b)
  }`,
      answerOptions: [
        { answerText: "2", isCorrect: true },
        { answerText: "2.3333", isCorrect: false },
        { answerText: "Error", isCorrect: false },
        { answerText: "undefined", isCorrect: false },
      ],
    },
    {
      questionText: "How do you declare a floating-point variable in Go?",
      code: `var x float64 = 3.14`,
      answerOptions: [
        { answerText: "var x float64 = 3.14", isCorrect: true },
        { answerText: "var x = 3.14", isCorrect: false },
        { answerText: "float x = 3.14", isCorrect: false },
        { answerText: "let x = 3.14", isCorrect: false },
      ],
    },
    {
      questionText: "What will be the output of the following Go code?",
      code: `package main
  import "fmt"
  
  func main() {
      var x float64 = 3.14
      var y float64 = 2.71
      fmt.Println(x * y)
  }`,
      answerOptions: [
        { answerText: "8.5094", isCorrect: true },
        { answerText: "5.85", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "undefined", isCorrect: false },
      ],
    },
    {
      questionText: "What will happen if you try to add an integer and a float in Go?",
      code: `package main
  import "fmt"
  
  func main() {
      var a int = 5
      var b float64 = 2.5
      fmt.Println(a + b)
  }`,
      answerOptions: [
        { answerText: "Error", isCorrect: true },
        { answerText: "7.5", isCorrect: false },
        { answerText: "7", isCorrect: false },
        { answerText: "5", isCorrect: false },
      ],
    },
    {
      questionText: "Which of the following is the correct way to cast an integer to a float in Go?",
      code: `var x int = 10`,
      answerOptions: [
        { answerText: "float64(x)", isCorrect: true },
        { answerText: "int(x)", isCorrect: false },
        { answerText: "x.toFloat()", isCorrect: false },
        { answerText: "float(x)", isCorrect: false },
      ],
    },
    {
      questionText: "What will be the output of the following Go code involving float division?",
      code: `package main
  import "fmt"
  
  func main() {
      var x float64 = 10.0
      var y float64 = 3.0
      fmt.Println(x / y)
  }`,
      answerOptions: [
        { answerText: "3.3333333333333335", isCorrect: true },
        { answerText: "3.3", isCorrect: false },
        { answerText: "3", isCorrect: false },
        { answerText: "undefined", isCorrect: false },
      ],
    },
    {
      questionText: "What will be the default value of an uninitialized float variable in Go?",
      code: `var f float64`,
      answerOptions: [
        { answerText: "0.0", isCorrect: true },
        { answerText: "nil", isCorrect: false },
        { answerText: "0", isCorrect: false },
        { answerText: "undefined", isCorrect: false },
      ],
    },
    {
      questionText: "How do you round down a float to the nearest integer in Go?",
      code: `package main
  import (
      "fmt"
      "math"
  )
  
  func main() {
      var f float64 = 9.8
      fmt.Println(math.Floor(f))
  }`,
      answerOptions: [
        { answerText: "9", isCorrect: true },
        { answerText: "10", isCorrect: false },
        { answerText: "9.8", isCorrect: false },
        { answerText: "Error", isCorrect: false },
      ],
    },
    {
      questionText: "Which of the following is NOT a valid integer type in Go?",
      code: ``,
      answerOptions: [
        { answerText: "int32", isCorrect: false },
        { answerText: "int64", isCorrect: false },
        { answerText: "float32", isCorrect: true },
        { answerText: "int", isCorrect: false },
      ],
    },
    {
      questionText: "What is the result of converting a float to an integer in Go?",
      code: `package main
  import "fmt"
  
  func main() {
      var f float64 = 5.99
      var i int = int(f)
      fmt.Println(i)
  }`,
      answerOptions: [
        { answerText: "5", isCorrect: true },
        { answerText: "6", isCorrect: false },
        { answerText: "Error", isCorrect: false },
        { answerText: "5.99", isCorrect: false },
      ],
    },
  ];
  return (
    <div className='w-full h-full'>
      <QuizComponent
        questions={questions}
        currentQuestion={currentQuestion}
        score={score}
        showScore={showScore}
        handleAnswerOptionClick={handleAnswerOptionClick}
        handleRestartQuiz={handleRestartQuiz}
      />
    </div>
  );
};
