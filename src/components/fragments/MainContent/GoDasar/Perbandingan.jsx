// Integer.js
import React, { useState } from 'react';
import QuizComponent from '../../QuizComponent';
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
