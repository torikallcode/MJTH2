// Integer.js
import React, { useState } from 'react';
import QuizComponent from '../../QuizComponent';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FillContent } from '../fillContent';

export const PackageInitialization = () => {
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
      questionText: "Apa itu package initialization dalam bahasa Go?",
      code: ``,
      answerOptions: [
        { answerText: "Proses di mana package diinisialisasi saat program dijalankan dan sebelum fungsi `main` dipanggil.", isCorrect: true },
        { answerText: "Proses untuk mendeklarasikan variabel global dalam package.", isCorrect: false },
        { answerText: "Proses untuk mengkompilasi package secara otomatis.", isCorrect: false },
        { answerText: "Proses untuk mendeklarasikan fungsi di dalam package.", isCorrect: false },
      ],
    },
    {
      questionText: "Bagaimana cara mendeklarasikan fungsi init dalam sebuah package?",
      code: ``,
      answerOptions: [
        { answerText: "Dengan mendeklarasikan fungsi dengan nama `init` dalam file Go.", isCorrect: true },
        { answerText: "Dengan menggunakan kata kunci `initialize` di depan nama fungsi.", isCorrect: false },
        { answerText: "Dengan mendeklarasikan fungsi dalam file `main.go`.", isCorrect: false },
        { answerText: "Dengan mendeklarasikan fungsi dengan nama `setup`.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  
  import "fmt"
  
  func init() {
      fmt.Println("Package initialized")
  }
  
  func main() {
      fmt.Println("Main function")
  }`,
      answerOptions: [
        { answerText: "Package initialized\nMain function", isCorrect: true },
        { answerText: "Main function\nPackage initialized", isCorrect: false },
        { answerText: "Error", isCorrect: false },
        { answerText: "Nothing", isCorrect: false },
      ],
    },
    {
      questionText: "Apa yang terjadi jika terdapat beberapa fungsi init dalam satu package?",
      code: ``,
      answerOptions: [
        { answerText: "Semua fungsi `init` akan dipanggil secara berurutan sebelum fungsi `main`.", isCorrect: true },
        { answerText: "Hanya satu fungsi `init` yang akan dipanggil secara acak.", isCorrect: false },
        { answerText: "Kompilasi akan gagal dan menghasilkan error.", isCorrect: false },
        { answerText: "Fungsi `init` akan diabaikan dan tidak dipanggil.", isCorrect: false },
      ],
    },
    {
      questionText: "Bagaimana cara menggunakan variabel global di dalam fungsi init?",
      code: ``,
      answerOptions: [
        { answerText: "Dengan mendeklarasikan variabel global di luar fungsi dan mengaksesnya dalam fungsi `init`.", isCorrect: true },
        { answerText: "Dengan mendeklarasikan variabel lokal di dalam fungsi `init`.", isCorrect: false },
        { answerText: "Dengan menggunakan keyword `global` di depan variabel.", isCorrect: false },
        { answerText: "Dengan mendeklarasikan variabel di dalam file `main.go`.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  
  import "fmt"
  
  var x = func() int {
      return 42
  }()
  
  func init() {
      fmt.Println(x)
  }
  
  func main() {
      fmt.Println("End of main")
  }`,
      answerOptions: [
        { answerText: "42\nEnd of main", isCorrect: true },
        { answerText: "End of main\n42", isCorrect: false },
        { answerText: "Error", isCorrect: false },
        { answerText: "Nothing", isCorrect: false },
      ],
    },
    {
      questionText: "Apa yang terjadi jika sebuah package memiliki lebih dari satu file dengan fungsi init?",
      code: ``,
      answerOptions: [
        { answerText: "Semua fungsi `init` dari semua file akan dipanggil dalam urutan file saat package diinisialisasi.", isCorrect: true },
        { answerText: "Hanya satu fungsi `init` yang akan dipanggil dari salah satu file secara acak.", isCorrect: false },
        { answerText: "Kompilasi akan gagal dan menghasilkan error.", isCorrect: false },
        { answerText: "Fungsi `init` akan diabaikan dan tidak dipanggil.", isCorrect: false },
      ],
    },
    {
      questionText: "Bagaimana cara mengakses variabel yang dideklarasikan dalam fungsi init dari fungsi lain dalam package yang sama?",
      code: ``,
      answerOptions: [
        { answerText: "Dengan mendeklarasikan variabel sebagai variabel global dalam package.", isCorrect: true },
        { answerText: "Dengan mendeklarasikan variabel lokal dalam fungsi yang sama.", isCorrect: false },
        { answerText: "Dengan menggunakan keyword `export` di depan variabel.", isCorrect: false },
        { answerText: "Dengan mendeklarasikan variabel di dalam fungsi `main`.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  
  import "fmt"
  
  func init() {
      fmt.Println("First init")
  }
  
  func init() {
      fmt.Println("Second init")
  }
  
  func main() {
      fmt.Println("Main function")
  }`,
      answerOptions: [
        { answerText: "First init\nSecond init\nMain function", isCorrect: true },
        { answerText: "Second init\nFirst init\nMain function", isCorrect: false },
        { answerText: "Main function\nFirst init\nSecond init", isCorrect: false },
        { answerText: "Error", isCorrect: false },
      ],
    },
    {
      questionText: "Apa tujuan dari menggunakan fungsi init dalam package Go?",
      code: ``,
      answerOptions: [
        { answerText: "Untuk melakukan inisialisasi awal sebelum program dijalankan, seperti setup konfigurasi atau variabel global.", isCorrect: true },
        { answerText: "Untuk mendeklarasikan fungsi utama dalam program.", isCorrect: false },
        { answerText: "Untuk mendeklarasikan variabel lokal dalam fungsi main.", isCorrect: false },
        { answerText: "Untuk mengoptimalkan performa aplikasi.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  
  import "fmt"
  
  var globalVar = "global"
  
  func init() {
      globalVar = "initialized"
      fmt.Println(globalVar)
  }
  
  func main() {
      fmt.Println(globalVar)
  }`,
      answerOptions: [
        { answerText: "initialized\nglobal", isCorrect: true },
        { answerText: "global\ninitialized", isCorrect: false },
        { answerText: "Error", isCorrect: false },
        { answerText: "Nothing", isCorrect: false },
      ],
    },
    {
      questionText: "Apakah Anda dapat mendeklarasikan fungsi init di dalam file yang berbeda dalam package yang sama?",
      code: ``,
      answerOptions: [
        { answerText: "Ya, fungsi `init` dapat dideklarasikan di beberapa file dalam package yang sama dan akan dipanggil secara berurutan.", isCorrect: true },
        { answerText: "Tidak, fungsi `init` hanya dapat dideklarasikan di satu file dalam package.", isCorrect: false },
        { answerText: "Ya, tetapi hanya fungsi `init` dalam file `main.go` yang akan dipanggil.", isCorrect: false },
        { answerText: "Tidak, fungsi `init` akan menyebabkan konflik jika dideklarasikan di beberapa file.", isCorrect: false },
      ],
    },
  ];


  const code1 = [
    {
      contoh:
        `
  func init() {
      fmt.Println("Package initialized")
  }
  `
    },
  ]


  return (
    <div className='flex flex-col pb-3 lg:pt-5 lg:items-start lg:flex-row lg:gap-x-3 gap-y-7'>
      <div className='lg:w-[60%] xl:w-4/5'>
        <FillContent
          judul={'Package dan Initialization'}
          pengertian={'Fungsi init() digunakan untuk menginisialisasi package sebelum main() dijalankan.'}
          fungsi={'Menyiapkan kondisi awal untuk package.'}
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
    </div >
  );
};
