// Integer.js
import React, { useState } from 'react';
import { QuizComponent } from '../QuizComponent';
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
    // Tambahkan pertanyaan lainnya...
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
