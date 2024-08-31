// Integer.js
import React, { useState } from 'react';
import QuizComponent from '../../QuizComponent';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
export const Slice = () => {
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
      questionText: "What is a slice in Go?",
      code: ``,
      answerOptions: [
        { answerText: "A dynamically-sized, flexible view into the elements of an array", isCorrect: true },
        { answerText: "A fixed-size collection of elements of the same type", isCorrect: false },
        { answerText: "A collection of key-value pairs", isCorrect: false },
        { answerText: "A type of map in Go", isCorrect: false },
      ],
    },
    {
      questionText: "How do you create a slice in Go?",
      code: ``,
      answerOptions: [
        { answerText: "Using the `make` function or slicing an existing array", isCorrect: true },
        { answerText: "Using the `new` keyword", isCorrect: false },
        { answerText: "Using `var slice []Type` and then initializing", isCorrect: false },
        { answerText: "By declaring an array", isCorrect: false },
      ],
    },
    {
      questionText: "What will be the output of the following code that initializes a slice from an array?",
      code: `package main
  import "fmt"
  
  func main() {
      arr := [5]int{1, 2, 3, 4, 5}
      slice := arr[1:4]
      fmt.Println(slice)
  }`,
      answerOptions: [
        { answerText: "[2 3 4]", isCorrect: true },
        { answerText: "[1 2 3 4]", isCorrect: false },
        { answerText: "[1 2 3]", isCorrect: false },
        { answerText: "[3 4 5]", isCorrect: false },
      ],
    },
    {
      questionText: "How do you append an element to a slice in Go?",
      code: ``,
      answerOptions: [
        { answerText: "Using the `append()` function", isCorrect: true },
        { answerText: "Using the `push()` function", isCorrect: false },
        { answerText: "Using the `insert()` function", isCorrect: false },
        { answerText: "Using the `add()` function", isCorrect: false },
      ],
    },
    {
      questionText: "What will be the capacity of the slice after appending an element to it?",
      code: `package main
  import "fmt"
  
  func main() {
      s := make([]int, 2, 3)
      s = append(s, 5)
      fmt.Println(cap(s))
  }`,
      answerOptions: [
        { answerText: "3", isCorrect: true },
        { answerText: "2", isCorrect: false },
        { answerText: "5", isCorrect: false },
        { answerText: "6", isCorrect: false },
      ],
    },
    {
      questionText: "What will be the length of the slice after using the append function?",
      code: `package main
  import "fmt"
  
  func main() {
      s := []int{1, 2, 3}
      s = append(s, 4, 5)
      fmt.Println(len(s))
  }`,
      answerOptions: [
        { answerText: "5", isCorrect: true },
        { answerText: "3", isCorrect: false },
        { answerText: "2", isCorrect: false },
        { answerText: "4", isCorrect: false },
      ],
    },
    {
      questionText: "Which built-in function is used to get the length of a slice in Go?",
      code: ``,
      answerOptions: [
        { answerText: "len()", isCorrect: true },
        { answerText: "cap()", isCorrect: false },
        { answerText: "size()", isCorrect: false },
        { answerText: "length()", isCorrect: false },
      ],
    },
    {
      questionText: "How can you copy the elements of one slice to another in Go?",
      code: ``,
      answerOptions: [
        { answerText: "Using the `copy()` function", isCorrect: true },
        { answerText: "Using the `append()` function", isCorrect: false },
        { answerText: "Using the `assign()` function", isCorrect: false },
        { answerText: "Using the `move()` function", isCorrect: false },
      ],
    },
    {
      questionText: "What will be the result of slicing a slice in Go?",
      code: `package main
  import "fmt"
  
  func main() {
      slice := []int{1, 2, 3, 4, 5}
      newSlice := slice[1:4]
      fmt.Println(newSlice)
  }`,
      answerOptions: [
        { answerText: "[2 3 4]", isCorrect: true },
        { answerText: "[1 2 3 4]", isCorrect: false },
        { answerText: "[3 4 5]", isCorrect: false },
        { answerText: "[1 2 3]", isCorrect: false },
      ],
    },
    {
      questionText: "Can a slice contain elements of different types in Go?",
      code: ``,
      answerOptions: [
        { answerText: "No, all elements in a slice must be of the same type", isCorrect: true },
        { answerText: "Yes, slices can contain elements of different types", isCorrect: false },
        { answerText: "It depends on how the slice is declared", isCorrect: false },
        { answerText: "Yes, if it is a slice of empty interface type", isCorrect: false },
      ],
    },
  ];

  const code1 = `
  // Deklarasi sederhana
  var fruits []string = []string{"apple", "banana"}

    `;

  return (
    <div className='max-w-[22rem] lg:max-w-full flex flex-col items-start pb-3 lg:flex-row lg:gap-x-3 gap-y-7'>
      <div className='lg:w-[60%] xl:w-4/5'>
        <h1 className='mb-3 text-2xl font-bold font-poppins'>Slice</h1>
        <div className='flex flex-col gap-y-2'>
          <h2 className='text-base italic font-medium font-poppins'>Pengertian: <br /> <span className='not-italic font-normal'>Struktur data dinamis yang mirip dengan array tetapi lebih fleksibel.</span></h2>
          <h2 className='text-base italic font-medium font-poppins'>Fungsi: <br /><span className='not-italic font-normal'>Menyimpan dan memanipulasi koleksi data dengan ukuran yang berubah-ubah.
          </span></h2>
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
