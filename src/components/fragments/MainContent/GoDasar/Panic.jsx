// Integer.js
import React, { useState } from 'react';
import QuizComponent from '../../QuizComponent';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FillContent } from '../fillContent';
export const Panic = () => {
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
      questionText: "Apa itu panic dalam Go?",
      code: ``,
      answerOptions: [
        { answerText: "Panic adalah mekanisme untuk menghentikan eksekusi fungsi dan melaporkan kesalahan secara tidak terduga.", isCorrect: true },
        { answerText: "Panic adalah fungsi untuk mencetak pesan kesalahan ke konsol.", isCorrect: false },
        { answerText: "Panic adalah cara untuk mengulang eksekusi fungsi.", isCorrect: false },
        { answerText: "Panic adalah cara untuk menangani exception dalam Go.", isCorrect: false },
      ],
    },
    {
      questionText: "Bagaimana cara memicu panic dalam Go?",
      code: ``,
      answerOptions: [
        { answerText: "Dengan menggunakan fungsi `panic()` dan memberikan pesan sebagai parameter.", isCorrect: true },
        { answerText: "Dengan menggunakan keyword `throw`.", isCorrect: false },
        { answerText: "Dengan menggunakan fungsi `error()`.", isCorrect: false },
        { answerText: "Dengan menggunakan fungsi `terminate()`.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  import "fmt"
  
  func main() {
      panic("Something went wrong!")
      fmt.Println("This will not be printed.")
  }`,
      answerOptions: [
        { answerText: "Something went wrong!", isCorrect: true },
        { answerText: "This will not be printed.", isCorrect: false },
        { answerText: "Something went wrong!\nThis will not be printed.", isCorrect: false },
        { answerText: "Error", isCorrect: false },
      ],
    },
    {
      questionText: "Apa yang terjadi setelah panic dipicu dalam sebuah fungsi?",
      code: ``,
      answerOptions: [
        { answerText: "Fungsi saat ini berhenti eksekusi, dan proses memanggil fungsi `defer` dalam urutan terbalik.", isCorrect: true },
        { answerText: "Fungsi berhenti eksekusi dan melanjutkan eksekusi ke fungsi yang memanggilnya.", isCorrect: false },
        { answerText: "Fungsi berhenti eksekusi tanpa menjalankan fungsi defer.", isCorrect: false },
        { answerText: "Fungsi akan otomatis mencoba untuk memperbaiki kesalahan dan melanjutkan eksekusi.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  import "fmt"
  
  func foo() {
      defer fmt.Println("foo deferred")
      panic("panic in foo")
  }
  
  func main() {
      defer fmt.Println("main deferred")
      foo()
      fmt.Println("main")
  }`,
      answerOptions: [
        { answerText: "foo deferred\npanic in foo\nmain deferred", isCorrect: true },
        { answerText: "panic in foo\nfoo deferred\nmain deferred", isCorrect: false },
        { answerText: "main deferred\nfoo deferred", isCorrect: false },
        { answerText: "foo deferred\nmain", isCorrect: false },
      ],
    },
    {
      questionText: "Apa yang harus dilakukan jika ingin menangani panic di Go?",
      code: ``,
      answerOptions: [
        { answerText: "Gunakan `recover()` di dalam fungsi defer untuk menangani panic.", isCorrect: true },
        { answerText: "Gunakan `try-catch` untuk menangani panic.", isCorrect: false },
        { answerText: "Gunakan `error` untuk menangani panic.", isCorrect: false },
        { answerText: "Gunakan `panic()` di dalam blok `if` untuk menangani panic.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  import "fmt"
  
  func main() {
      defer func() {
          if r := recover(); r != nil {
              fmt.Println("Recovered from:", r)
          }
      }()
      panic("Panic occurred")
      fmt.Println("This will not be printed.")
  }`,
      answerOptions: [
        { answerText: "Recovered from: Panic occurred", isCorrect: true },
        { answerText: "Panic occurred\nThis will not be printed.", isCorrect: false },
        { answerText: "Recovered from: Panic occurred\nThis will not be printed.", isCorrect: false },
        { answerText: "Panic occurred", isCorrect: false },
      ],
    },
    {
      questionText: "Bisakah panic digunakan untuk penanganan kesalahan yang dapat diprediksi?",
      code: ``,
      answerOptions: [
        { answerText: "Tidak, panic biasanya digunakan untuk kesalahan yang tidak dapat diprediksi atau fatal.", isCorrect: true },
        { answerText: "Ya, panic cocok untuk semua jenis kesalahan.", isCorrect: false },
        { answerText: "Ya, panic digunakan untuk kesalahan yang dapat diprediksi tetapi harus ditangani.", isCorrect: false },
        { answerText: "Tidak, panic hanya digunakan untuk kesalahan runtime.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  import "fmt"
  
  func divide(a, b int) int {
      if b == 0 {
          panic("division by zero")
      }
      return a / b
  }
  
  func main() {
      fmt.Println(divide(10, 2))
      fmt.Println(divide(10, 0))
  }`,
      answerOptions: [
        { answerText: "5\ndivision by zero", isCorrect: true },
        { answerText: "5", isCorrect: false },
        { answerText: "division by zero", isCorrect: false },
        { answerText: "Error", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  import "fmt"
  
  func main() {
      defer fmt.Println("A")
      defer fmt.Println("B")
      panic("C")
      defer fmt.Println("D")
  }`,
      answerOptions: [
        { answerText: "B\nA\nC", isCorrect: true },
        { answerText: "C\nB\nA", isCorrect: false },
        { answerText: "A\nB\nC\nD", isCorrect: false },
        { answerText: "C\nA\nB", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  import "fmt"
  
  func foo() {
      defer func() {
          if r := recover(); r != nil {
              fmt.Println("Recovered in foo:", r)
          }
      }()
      panic("panic in foo")
  }
  
  func main() {
      foo()
      fmt.Println("After foo")
  }`,
      answerOptions: [
        { answerText: "Recovered in foo: panic in foo\nAfter foo", isCorrect: true },
        { answerText: "panic in foo\nAfter foo", isCorrect: false },
        { answerText: "Recovered in foo: panic in foo", isCorrect: false },
        { answerText: "After foo", isCorrect: false },
      ],
    },
    {
      questionText: "Bisakah panic digunakan untuk mengelola kesalahan yang dapat dipulihkan dalam aplikasi Go?",
      code: ``,
      answerOptions: [
        { answerText: "Tidak, panic lebih cocok untuk kesalahan fatal yang tidak dapat dipulihkan.", isCorrect: true },
        { answerText: "Ya, panic dapat digunakan untuk mengelola kesalahan yang dapat dipulihkan dengan menggunakan recover.", isCorrect: false },
        { answerText: "Ya, panic cocok untuk semua jenis kesalahan.", isCorrect: false },
        { answerText: "Tidak, panic hanya untuk kesalahan runtime.", isCorrect: false },
      ],
    },
  ];

  const code1 = [
    {
      contoh:
        `
  func main() {
      panic("Something went wrong!")
  }
  `
    },
  ]


  return (
    <div className='flex flex-col pb-3 lg:pt-5 lg:items-start lg:flex-row lg:gap-x-3 gap-y-7'>
      <div className='lg:w-[60%] xl:w-4/5'>
        <FillContent
          judul={'Panic'}
          pengertian={'Menghentikan eksekusi program dan mengeluarkan pesan kesalahan.'}
          fungsi={'Menangani situasi kritis di mana program tidak dapat melanjutkan.'}
        >
          {code1.map((item, index) => (
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
    </div >
  );
};
