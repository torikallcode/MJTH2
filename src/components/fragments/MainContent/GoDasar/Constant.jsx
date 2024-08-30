// Integer.js
import React, { useState } from 'react';
import QuizComponent from '../../QuizComponent';
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
