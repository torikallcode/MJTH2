// Integer.js
import React, { useState } from 'react';
import QuizComponent from '../../QuizComponent';
export const TypeDeklarasi = () => {
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
      questionText: "What is the correct way to declare a new type in Go?",
      code: ``,
      answerOptions: [
        { answerText: "type MyInt int", isCorrect: true },
        { answerText: "let MyInt = int", isCorrect: false },
        { answerText: "var MyInt = int", isCorrect: false },
        { answerText: "const MyInt int", isCorrect: false },
      ],
    },
    {
      questionText: "What will be the output of the following Go code?",
      code: `package main
  import "fmt"
  
  type Celsius float64
  
  func main() {
      var temp Celsius = 36.6
      fmt.Println(temp)
  }`,
      answerOptions: [
        { answerText: "36.6", isCorrect: true },
        { answerText: "36", isCorrect: false },
        { answerText: "Error", isCorrect: false },
        { answerText: "undefined", isCorrect: false },
      ],
    },
    {
      questionText: "How do you define a custom type based on a struct in Go?",
      code: ``,
      answerOptions: [
        { answerText: "type Person struct { Name string; Age int }", isCorrect: true },
        { answerText: "struct Person { Name string; Age int }", isCorrect: false },
        { answerText: "type Person { Name string; Age int }", isCorrect: false },
        { answerText: "const Person struct { Name string; Age int }", isCorrect: false },
      ],
    },
    {
      questionText: "Which of the following code snippets correctly defines a new type for a slice of strings?",
      code: ``,
      answerOptions: [
        { answerText: "type StringList []string", isCorrect: true },
        { answerText: "type []string StringList", isCorrect: false },
        { answerText: "type StringList [string]", isCorrect: false },
        { answerText: "const StringList []string", isCorrect: false },
      ],
    },
    {
      questionText: "What is the purpose of type declarations in Go?",
      code: ``,
      answerOptions: [
        { answerText: "To create new, distinct types from existing ones", isCorrect: true },
        { answerText: "To declare variables with specific values", isCorrect: false },
        { answerText: "To import packages", isCorrect: false },
        { answerText: "To define constants", isCorrect: false },
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
