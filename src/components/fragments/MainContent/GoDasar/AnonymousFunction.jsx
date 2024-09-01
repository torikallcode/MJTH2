// Integer.js
import React, { useState } from 'react';
import QuizComponent from '../../QuizComponent';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FillContent } from '../fillContent';
export const AnonymousFunction = () => {
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
      questionText: "Apa itu anonymous function dalam Go?",
      code: ``,
      answerOptions: [
        { answerText: "Anonymous function adalah fungsi tanpa nama yang dapat langsung dipanggil atau disimpan dalam variabel.", isCorrect: true },
        { answerText: "Anonymous function adalah fungsi yang hanya dapat dideklarasikan di dalam fungsi lain.", isCorrect: false },
        { answerText: "Anonymous function adalah fungsi dengan nama yang tidak perlu disebutkan saat pemanggilan.", isCorrect: false },
        { answerText: "Anonymous function adalah fungsi yang tidak dapat mengembalikan nilai.", isCorrect: false },
      ],
    },
    {
      questionText: "Bagaimana cara mendeklarasikan dan memanggil anonymous function dalam Go?",
      code: ``,
      answerOptions: [
        { answerText: "Dengan menulis fungsi di dalam tanda kurung dan langsung memanggilnya dengan tanda kurung tambahan.", isCorrect: true },
        { answerText: "Dengan mendeklarasikan fungsi di luar blok kode dan memanggilnya dengan nama fungsi.", isCorrect: false },
        { answerText: "Dengan menggunakan kata kunci 'anon' sebelum nama fungsi.", isCorrect: false },
        { answerText: "Dengan mendeklarasikan fungsi dalam variabel dan memanggil variabel tersebut.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  import "fmt"
  
  func main() {
      func() {
          fmt.Println("Hello from anonymous function")
      }()
  }`,
      answerOptions: [
        { answerText: "Hello from anonymous function", isCorrect: true },
        { answerText: "Error", isCorrect: false },
        { answerText: "Hello", isCorrect: false },
        { answerText: "Nothing", isCorrect: false },
      ],
    },
    {
      questionText: "Bisakah anonymous function menyimpan hasil dalam variabel?",
      code: ``,
      answerOptions: [
        { answerText: "Ya, hasil dari anonymous function dapat disimpan dalam variabel.", isCorrect: true },
        { answerText: "Tidak, anonymous function tidak dapat menyimpan hasil.", isCorrect: false },
        { answerText: "Ya, tetapi hanya jika anonymous function mengembalikan satu nilai.", isCorrect: false },
        { answerText: "Tidak, hasil harus langsung diproses.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa yang akan dihasilkan oleh kode berikut?",
      code: `package main
  import "fmt"
  
  func main() {
      result := func(x, y int) int {
          return x + y
      }(10, 20)
      fmt.Println(result)
  }`,
      answerOptions: [
        { answerText: "30", isCorrect: true },
        { answerText: "10", isCorrect: false },
        { answerText: "20", isCorrect: false },
        { answerText: "Error", isCorrect: false },
      ],
    },
    {
      questionText: "Apa kelebihan menggunakan anonymous function dalam Go?",
      code: ``,
      answerOptions: [
        { answerText: "Memudahkan pembuatan fungsi kecil yang hanya digunakan satu kali tanpa perlu mendeklarasikan fungsi dengan nama.", isCorrect: true },
        { answerText: "Membantu mendeklarasikan fungsi dengan nama yang lebih deskriptif.", isCorrect: false },
        { answerText: "Membatasi akses ke fungsi di luar blok kode.", isCorrect: false },
        { answerText: "Meningkatkan performa program secara signifikan.", isCorrect: false },
      ],
    },
    {
      questionText: "Bisakah anonymous function di Go memiliki parameter dan nilai kembalian?",
      code: ``,
      answerOptions: [
        { answerText: "Ya, anonymous function dapat memiliki parameter dan nilai kembalian.", isCorrect: true },
        { answerText: "Tidak, anonymous function tidak dapat memiliki parameter atau nilai kembalian.", isCorrect: false },
        { answerText: "Ya, tetapi hanya untuk parameter dan nilai kembalian dengan tipe data tertentu.", isCorrect: false },
        { answerText: "Tidak, hanya fungsi biasa yang dapat memiliki parameter dan nilai kembalian.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa yang akan dihasilkan oleh kode berikut?",
      code: `package main
  import "fmt"
  
  func main() {
      add := func(a, b int) int {
          return a + b
      }
      fmt.Println(add(3, 5))
  }`,
      answerOptions: [
        { answerText: "8", isCorrect: true },
        { answerText: "3", isCorrect: false },
        { answerText: "5", isCorrect: false },
        { answerText: "Error", isCorrect: false },
      ],
    },
    {
      questionText: "Bagaimana anonymous function digunakan dalam Go untuk membuat closure?",
      code: ``,
      answerOptions: [
        { answerText: "Dengan mendeklarasikan anonymous function di dalam fungsi lain dan mengakses variabel dari fungsi luar.", isCorrect: true },
        { answerText: "Dengan mendeklarasikan anonymous function di luar fungsi dan menggunakan variabel global.", isCorrect: false },
        { answerText: "Dengan mendeklarasikan anonymous function dalam loop.", isCorrect: false },
        { answerText: "Dengan mendeklarasikan anonymous function di dalam struct.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa yang akan dihasilkan oleh kode berikut?",
      code: `package main
  import "fmt"
  
  func main() {
      counter := func() func() int {
          count := 0
          return func() int {
              count++
              return count
          }
      }()
      fmt.Println(counter())
      fmt.Println(counter())
  }`,
      answerOptions: [
        { answerText: "1 2", isCorrect: true },
        { answerText: "0 1", isCorrect: false },
        { answerText: "1 1", isCorrect: false },
        { answerText: "Error", isCorrect: false },
      ],
    },
  ];


  const code1 = [
    {
      contoh:
        `
  func() {
      fmt.Println("This is an anonymous function")
  }()
  `
    },
  ]


  return (
    <div className='flex flex-col pb-3 lg:pt-5 lg:items-start lg:flex-row lg:gap-x-3 gap-y-7'>
      <div className='lg:w-[60%] xl:w-4/5'>
        <FillContent
          judul={'Anonymous Function'}
          pengertian={'Fungsi yang tidak memiliki nama.'}
          fungsi={'Fungsi sekali pakai atau sebagai argumen.'}
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
