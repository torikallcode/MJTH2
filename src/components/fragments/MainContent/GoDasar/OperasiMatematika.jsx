// Integer.js
import React, { useState } from 'react';
import QuizComponent from '../../QuizComponent';
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

  return (
    <div>
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
