// Integer.js
import React, { useState } from 'react';
import QuizComponent from '../../QuizComponent';
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
