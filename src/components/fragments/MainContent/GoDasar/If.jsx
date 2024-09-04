// Integer.js
import React, { useState } from 'react';
import QuizComponent from '../../QuizComponent';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
export const If = () => {
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
      questionText: "What is an 'if' statement in Go?",
      code: ``,
      answerOptions: [
        { answerText: "A control flow statement that executes a block of code if a specified condition is true", isCorrect: true },
        { answerText: "A loop statement that repeats code until a condition is met", isCorrect: false },
        { answerText: "A function that returns true or false", isCorrect: false },
        { answerText: "A keyword used for defining a variable", isCorrect: false },
      ],
    },
    {
      questionText: "How do you write a basic 'if' statement in Go?",
      code: ``,
      answerOptions: [
        { answerText: "Using `if condition { code }` syntax", isCorrect: true },
        { answerText: "Using `if (condition) then { code }` syntax", isCorrect: false },
        { answerText: "Using `if condition: { code }` syntax", isCorrect: false },
        { answerText: "Using `if (condition) { code; }` syntax", isCorrect: false },
      ],
    },
    {
      questionText: "What will be the output of the following 'if' statement?",
      code: `package main
  import "fmt"
  
  func main() {
      x := 10
      if x > 5 {
          fmt.Println("x is greater than 5")
      }
  }`,
      answerOptions: [
        { answerText: "x is greater than 5", isCorrect: true },
        { answerText: "Error", isCorrect: false },
        { answerText: "x is less than or equal to 5", isCorrect: false },
        { answerText: "No output", isCorrect: false },
      ],
    },
    {
      questionText: "Can you use an 'if' statement without curly braces `{}` in Go?",
      code: ``,
      answerOptions: [
        { answerText: "No, the curly braces `{}` are mandatory for 'if' blocks in Go", isCorrect: true },
        { answerText: "Yes, you can omit curly braces if the 'if' block contains only one statement", isCorrect: false },
        { answerText: "Yes, but only when using 'else if'", isCorrect: false },
        { answerText: "No, 'if' statements must always be written on a single line", isCorrect: false },
      ],
    },
    {
      questionText: "What will happen if the condition in an 'if' statement is false?",
      code: ``,
      answerOptions: [
        { answerText: "The code block inside the 'if' statement will be skipped", isCorrect: true },
        { answerText: "The code block will still execute", isCorrect: false },
        { answerText: "It will cause a runtime error", isCorrect: false },
        { answerText: "It will execute the 'else' block, if available", isCorrect: false },
      ],
    },
    {
      questionText: "How can you add an alternative block of code to execute when the 'if' condition is false?",
      code: ``,
      answerOptions: [
        { answerText: "By using an 'else' statement", isCorrect: true },
        { answerText: "By using an 'elif' statement", isCorrect: false },
        { answerText: "By using a 'switch' statement", isCorrect: false },
        { answerText: "By using a 'loop' statement", isCorrect: false },
      ],
    },
    {
      questionText: "What will be the output of the following 'if-else' statement?",
      code: `package main
  import "fmt"
  
  func main() {
      num := 7
      if num%2 == 0 {
          fmt.Println("Even")
      } else {
          fmt.Println("Odd")
      }
  }`,
      answerOptions: [
        { answerText: "Odd", isCorrect: true },
        { answerText: "Even", isCorrect: false },
        { answerText: "Error", isCorrect: false },
        { answerText: "No output", isCorrect: false },
      ],
    },
    {
      questionText: "How do you write an 'if-else if-else' chain in Go?",
      code: ``,
      answerOptions: [
        { answerText: "Using `if`, `else if`, and `else` keywords sequentially", isCorrect: true },
        { answerText: "Using `if`, `elseif`, and `else` keywords", isCorrect: false },
        { answerText: "Using `if`, `elsif`, and `else` keywords", isCorrect: false },
        { answerText: "Using `if` only, repeating it multiple times", isCorrect: false },
      ],
    },
    {
      questionText: "What is the output of the following 'if-else if' statement?",
      code: `package main
  import "fmt"
  
  func main() {
      age := 20
      if age < 13 {
          fmt.Println("Child")
      } else if age < 20 {
          fmt.Println("Teenager")
      } else {
          fmt.Println("Adult")
      }
  }`,
      answerOptions: [
        { answerText: "Adult", isCorrect: true },
        { answerText: "Teenager", isCorrect: false },
        { answerText: "Child", isCorrect: false },
        { answerText: "No output", isCorrect: false },
      ],
    },
    {
      questionText: "Can you declare and use a variable inside an 'if' condition in Go?",
      code: ``,
      answerOptions: [
        { answerText: "Yes, you can declare a variable inside an 'if' condition", isCorrect: true },
        { answerText: "No, variables must be declared outside of the 'if' condition", isCorrect: false },
        { answerText: "Yes, but only for integer variables", isCorrect: false },
        { answerText: "No, this is not supported in Go", isCorrect: false },
      ],
    },
  ];

  const code1 = `
  // Deklarasi sederhana
  package main

  import "fmt"

  func main() {
      var angka int
      fmt.Print("Masukkan sebuah angka: ")
      fmt.Scanln(&angka)

      // Menggunakan if untuk mengecek apakah angka lebih besar dari 10
      if angka > 10 {
          fmt.Println("Angka Anda lebih besar dari 10")
      } else if angka == 10 {
          fmt.Println("Angka Anda adalah 10")
      } else {
          fmt.Println("Angka Anda lebih kecil dari 10")
      }
  }

    `;

  return (
    <div className='flex flex-col pb-3 lg:items-start lg:max-w-full lg:flex-row lg:gap-x-3 gap-y-7'>
      <div className='lg:w-[60%] xl:w-4/5'>
        <h1 className='mb-3 text-2xl font-bold font-poppins'>If else</h1>
        <div className='flex flex-col gap-y-2'>
          <h2 className='text-base italic font-medium font-poppins'>Pengertian: <br /> <span className='not-italic font-normal'>if adalah seperti pertanyaan "kalau-kalau" yang sering kita tanyakan dalam kehidupan sehari-hari. Misalnya, "Kalau hujan, aku bawa payung." Dalam pemrograman, if digunakan untuk membuat keputusan berdasarkan kondisi tertentu. Jika kondisinya benar (true), maka blok kode di dalamnya akan dijalankan. Jika tidak, kode tersebut dilewati.</span></h2>
          <h2 className='text-base italic font-medium font-poppins'>Fungsi: <br /><span className='not-italic font-normal'>If sangat berguna saat kita ingin membuat keputusan di program kita. Misalnya, jika seseorang memasukkan angka yang lebih besar dari 10, kita bisa memberikan pesan "Angka Anda besar." Jika tidak, kita bisa memberikan pesan lain.</span></h2>
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