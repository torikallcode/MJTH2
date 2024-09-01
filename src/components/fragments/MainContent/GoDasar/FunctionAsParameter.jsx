// Integer.js
import React, { useState } from 'react';
import QuizComponent from '../../QuizComponent';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FillContent } from '../fillContent';
export const FunctionAsParameter = () => {
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
      questionText: "What is an array in Go?",
      code: ``,
      answerOptions: [
        { answerText: "A fixed-size collection of elements of the same type", isCorrect: true },
        { answerText: "A dynamically sized collection of elements of different types", isCorrect: false },
        { answerText: "A collection of key-value pairs", isCorrect: false },
        { answerText: "A built-in function for sorting elements", isCorrect: false },
      ],
    },
    {
      questionText: "How do you declare an array in Go?",
      code: ``,
      answerOptions: [
        { answerText: "Using `var arr [size]Type` syntax", isCorrect: true },
        { answerText: "Using `var arr []Type` syntax", isCorrect: false },
        { answerText: "Using `make([]Type, size)` syntax", isCorrect: false },
        { answerText: "Using `map[Type]Type` syntax", isCorrect: false },
      ],
    },
    {
      questionText: "What will be the output of the following code?",
      code: `package main
  import "fmt"
  
  func main() {
      var arr = [3]int{1, 2, 3}
      fmt.Println(arr[1])
  }`,
      answerOptions: [
        { answerText: "2", isCorrect: true },
        { answerText: "1", isCorrect: false },
        { answerText: "3", isCorrect: false },
        { answerText: "Error", isCorrect: false },
      ],
    },
    {
      questionText: "How do you initialize an array of 5 integers with all elements set to zero in Go?",
      code: ``,
      answerOptions: [
        { answerText: "var arr [5]int", isCorrect: true },
        { answerText: "var arr [5]int = {0, 0, 0, 0, 0}", isCorrect: false },
        { answerText: "arr := make([]int, 5)", isCorrect: false },
        { answerText: "var arr [5] = [0, 0, 0, 0, 0]", isCorrect: false },
      ],
    },
    {
      questionText: "What will be the length of the following array in Go?",
      code: `package main
  import "fmt"
  
  func main() {
      arr := [...]string{"Go", "is", "fun"}
      fmt.Println(len(arr))
  }`,
      answerOptions: [
        { answerText: "3", isCorrect: true },
        { answerText: "2", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "Error", isCorrect: false },
      ],
    },
    {
      questionText: "How do you update the value of an array element in Go?",
      code: ``,
      answerOptions: [
        { answerText: "Using the index, e.g., `arr[index] = newValue`", isCorrect: true },
        { answerText: "Using the `append` function", isCorrect: false },
        { answerText: "Using the `push` function", isCorrect: false },
        { answerText: "Using the `insert` function", isCorrect: false },
      ],
    },
    {
      questionText: "What will be the output of the following code that modifies an array?",
      code: `package main
  import "fmt"
  
  func main() {
      arr := [4]int{1, 2, 3, 4}
      arr[2] = 10
      fmt.Println(arr)
  }`,
      answerOptions: [
        { answerText: "[1 2 10 4]", isCorrect: true },
        { answerText: "[1 2 3 4]", isCorrect: false },
        { answerText: "[10 2 3 4]", isCorrect: false },
        { answerText: "[1 10 3 4]", isCorrect: false },
      ],
    },
    {
      questionText: "Which function is used to determine the size of an array in Go?",
      code: ``,
      answerOptions: [
        { answerText: "len()", isCorrect: true },
        { answerText: "cap()", isCorrect: false },
        { answerText: "size()", isCorrect: false },
        { answerText: "length()", isCorrect: false },
      ],
    },
    {
      questionText: "Can you change the size of an array after it is declared in Go?",
      code: ``,
      answerOptions: [
        { answerText: "No, arrays have a fixed size", isCorrect: true },
        { answerText: "Yes, by using the append function", isCorrect: false },
        { answerText: "Yes, by using the resize function", isCorrect: false },
        { answerText: "No, but slices can be resized", isCorrect: false },
      ],
    },
    {
      questionText: "What will be the result of the following code that iterates over an array?",
      code: `package main
  import "fmt"
  
  func main() {
      arr := [3]int{5, 10, 15}
      for i := 0; i < len(arr); i++ {
          fmt.Print(arr[i], " ")
      }
  }`,
      answerOptions: [
        { answerText: "5 10 15 ", isCorrect: true },
        { answerText: "10 15 5 ", isCorrect: false },
        { answerText: "5 15 10 ", isCorrect: false },
        { answerText: "Error", isCorrect: false },
      ],
    },
  ];

  const code1 = [
    {
      contoh:
        `
  func apply(f func(int, int) int, a int, b int) int {
      return f(a, b)
  }
  `
    },
  ]


  return (
    <div className='flex flex-col pb-3 lg:pt-5 lg:items-start lg:flex-row lg:gap-x-3 gap-y-7'>
      <div className='lg:w-[60%] xl:w-4/5'>
        <FillContent
          judul={'Function as Parameter'}
          pengertian={'Fungsi dapat diteruskan sebagai parameter ke fungsi lain.'}
          fungsi={'Memungkinkan pembuatan fungsi yang lebih dinamis.'}
        >
          {code1.map((item) => (
            <SyntaxHighlighter language="go" style={nightOwl} className="mb-4 rounded-lg font-poppins">
              {item.contoh}
            </SyntaxHighlighter>
          ))}
        </FillContent>
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
