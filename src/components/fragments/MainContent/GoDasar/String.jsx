// Integer.js
import React, { useState } from 'react';
import QuizComponent from '../../QuizComponent';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
export const String = () => {
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
      var greeting string = "Hello, Go!"
      fmt.Println(greeting)
  }`,
      answerOptions: [
        { answerText: "Hello, Go!", isCorrect: true },
        { answerText: "hello, go!", isCorrect: false },
        { answerText: "HELLO, GO!", isCorrect: false },
        { answerText: "Error", isCorrect: false },
      ],
    },
    {
      questionText: "Which of the following is the correct way to concatenate two strings in Go?",
      code: ``,
      answerOptions: [
        { answerText: `"Hello, " + "world!"`, isCorrect: true },
        { answerText: `"Hello, ".concat("world!")`, isCorrect: false },
        { answerText: `"Hello, " & "world!"`, isCorrect: false },
        { answerText: `"Hello, ".append("world!")`, isCorrect: false },
      ],
    },
    {
      questionText: "What will be the output of the following Go code?",
      code: `package main
  import "fmt"
  
  func main() {
      var name string = "Gopher"
      fmt.Println(len(name))
  }`,
      answerOptions: [
        { answerText: "6", isCorrect: true },
        { answerText: "7", isCorrect: false },
        { answerText: "5", isCorrect: false },
        { answerText: "Error", isCorrect: false },
      ],
    },
    {
      questionText: "How do you convert a string to an integer in Go?",
      code: `package main
  import (
      "fmt"
      "strconv"
  )
  
  func main() {
      str := "123"
      num, _ := strconv.Atoi(str)
      fmt.Println(num)
  }`,
      answerOptions: [
        { answerText: "123", isCorrect: true },
        { answerText: `"123"`, isCorrect: false },
        { answerText: "Error", isCorrect: false },
        { answerText: "nil", isCorrect: false },
      ],
    },
    {
      questionText: "What will be the output of the following code?",
      code: `package main
  import "fmt"
  
  func main() {
      var str string = "Hello, Go!"
      fmt.Println(str[0])
  }`,
      answerOptions: [
        { answerText: "72", isCorrect: true }, // ASCII code for 'H'
        { answerText: "H", isCorrect: false },
        { answerText: "Hello", isCorrect: false },
        { answerText: "Error", isCorrect: false },
      ],
    },
    {
      questionText: "How can you check if a string contains a specific substring in Go?",
      code: `package main
  import (
      "fmt"
      "strings"
  )
  
  func main() {
      var str string = "Hello, world!"
      fmt.Println(strings.Contains(str, "world"))
  }`,
      answerOptions: [
        { answerText: "true", isCorrect: true },
        { answerText: "false", isCorrect: false },
        { answerText: "Error", isCorrect: false },
        { answerText: "undefined", isCorrect: false },
      ],
    },
    {
      questionText: "Which function is used to convert an integer to a string in Go?",
      code: ``,
      answerOptions: [
        { answerText: "strconv.Itoa()", isCorrect: true },
        { answerText: "string()", isCorrect: false },
        { answerText: "strconv.Atoi()", isCorrect: false },
        { answerText: "fmt.Sprint()", isCorrect: false },
      ],
    },
    {
      questionText: "What will be the output of the following Go code?",
      code: `package main
  import "fmt"
  
  func main() {
      var str string = "GoLang"
      fmt.Println(str[2:5])
  }`,
      answerOptions: [
        { answerText: "Lan", isCorrect: false },
        { answerText: "oLa", isCorrect: false },
        { answerText: "La", isCorrect: false },
        { answerText: "Lan", isCorrect: true },
      ],
    },
    {
      questionText: "How do you compare two strings in Go?",
      code: `package main
  import "fmt"
  
  func main() {
      var str1 string = "Go"
      var str2 string = "go"
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
      questionText: "What will be the output of the following Go code?",
      code: `package main
  import "fmt"
  
  func main() {
      var str string = "Hello, Go!"
      str = str + " How are you?"
      fmt.Println(str)
  }`,
      answerOptions: [
        { answerText: "Hello, Go! How are you?", isCorrect: true },
        { answerText: "Hello, Go!How are you?", isCorrect: false },
        { answerText: "Error", isCorrect: false },
        { answerText: "Hello, Go!", isCorrect: false },
      ],
    },
  ];

  const code1 = `
  // Deklarasi sederhana
  var pesan string = "Hello, World!"
    `;
  return (
    <div className='flex flex-col pb-3 lg:items-start lg:flex-row lg:gap-x-3 gap-y-7'>
      <div className='lg:w-[60%] xl:w-4/5'>
        <h1 className='mb-3 text-2xl font-bold font-poppins'>String</h1>
        <div className='flex flex-col gap-y-2'>
          <h2 className='text-base italic font-medium font-poppins'>Pengertian: <br /> <span className='not-italic font-normal'>Tipe data untuk menyimpan teks atau urutan karakter.</span></h2>
          <h2 className='text-base italic font-medium font-poppins'>Fungsi: <br /><span className='not-italic font-normal'>Menyimpan dan memanipulasi data teks.</span></h2>
          <div className='max-w-[22rem] sm:max-w-full xl:max-w-3xl'>
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
