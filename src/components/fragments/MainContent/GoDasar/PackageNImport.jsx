// Integer.js
import React, { useState } from 'react';
import QuizComponent from '../../QuizComponent';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FillContent } from '../fillContent';
export const PackageNImport = () => {
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
      questionText: "Apa yang dimaksud dengan 'package' dalam bahasa Go?",
      code: ``,
      answerOptions: [
        { answerText: "Sekumpulan file Go yang dapat diorganisir dan digunakan bersama.", isCorrect: true },
        { answerText: "Sebuah tipe data khusus dalam Go.", isCorrect: false },
        { answerText: "Sebuah fungsi built-in dalam Go.", isCorrect: false },
        { answerText: "Sebuah variabel global dalam Go.", isCorrect: false },
      ],
    },
    {
      questionText: "Bagaimana cara mengimpor package eksternal dalam Go?",
      code: ``,
      answerOptions: [
        { answerText: "Dengan menggunakan kata kunci `import` diikuti oleh nama package.", isCorrect: true },
        { answerText: "Dengan menggunakan kata kunci `include` diikuti oleh nama package.", isCorrect: false },
        { answerText: "Dengan menambahkan package ke dalam file `go.mod`.", isCorrect: false },
        { answerText: "Dengan mendeklarasikan package dalam kode program.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  
  import (
      "fmt"
      "math"
  )
  
  func main() {
      fmt.Println(math.Sqrt(16))
  }`,
      answerOptions: [
        { answerText: "4", isCorrect: true },
        { answerText: "16", isCorrect: false },
        { answerText: "8", isCorrect: false },
        { answerText: "Error", isCorrect: false },
      ],
    },
    {
      questionText: "Apa yang akan terjadi jika kita mengimpor package yang tidak ada dalam kode Go?",
      code: ``,
      answerOptions: [
        { answerText: "Kompilasi akan gagal dan menghasilkan error.", isCorrect: true },
        { answerText: "Go akan secara otomatis mencari package yang benar.", isCorrect: false },
        { answerText: "Program akan tetap dijalankan dengan nilai default.", isCorrect: false },
        { answerText: "Kompilasi akan berhasil meskipun package tidak digunakan.", isCorrect: false },
      ],
    },
    {
      questionText: "Bagaimana cara mengimpor hanya beberapa fungsi dari sebuah package dalam Go?",
      code: ``,
      answerOptions: [
        { answerText: "Dengan menggunakan sintaks `import ( 'package_name' )` dan hanya menggunakan fungsi yang diinginkan.", isCorrect: false },
        { answerText: "Dengan menggunakan sintaks `import 'package_name'` diikuti dengan nama fungsi di dalam kode.", isCorrect: false },
        { answerText: "Dengan menggunakan alias pada package dan memanggil fungsi dengan alias tersebut.", isCorrect: true },
        { answerText: "Dengan mendeklarasikan fungsi di dalam file yang sama tanpa mengimpor package.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  
  import "fmt"
  
  func greet() {
      fmt.Println("Hello, World!")
  }
  
  func main() {
      greet()
  }`,
      answerOptions: [
        { answerText: "Hello, World!", isCorrect: true },
        { answerText: "Error", isCorrect: false },
        { answerText: "Nothing", isCorrect: false },
        { answerText: "undefined", isCorrect: false },
      ],
    },
    {
      questionText: "Bagaimana cara membuat alias untuk sebuah package dalam Go?",
      code: ``,
      answerOptions: [
        { answerText: "Dengan menggunakan sintaks `import alias 'package_name'`.", isCorrect: true },
        { answerText: "Dengan menggunakan `import 'package_name' as alias`.", isCorrect: false },
        { answerText: "Dengan mendeklarasikan alias di dalam fungsi main.", isCorrect: false },
        { answerText: "Dengan menggunakan keyword `alias` di dalam package.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa yang dimaksud dengan package lokal dalam Go?",
      code: ``,
      answerOptions: [
        { answerText: "Package yang berada dalam direktori yang sama dengan file yang menggunakannya.", isCorrect: true },
        { answerText: "Package yang berasal dari repository eksternal.", isCorrect: false },
        { answerText: "Package yang disertakan dalam library standar Go.", isCorrect: false },
        { answerText: "Package yang memiliki nama yang sama dengan file sumber.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  
  import (
      "fmt"
      "strings"
  )
  
  func main() {
      fmt.Println(strings.ToUpper("hello"))
  }`,
      answerOptions: [
        { answerText: "HELLO", isCorrect: true },
        { answerText: "hello", isCorrect: false },
        { answerText: "Hello", isCorrect: false },
        { answerText: "Error", isCorrect: false },
      ],
    },
    {
      questionText: "Apa yang akan terjadi jika Anda mencoba mengimpor package yang sama lebih dari satu kali dalam satu file?",
      code: ``,
      answerOptions: [
        { answerText: "Package hanya akan diimpor sekali dan tidak akan menyebabkan error.", isCorrect: true },
        { answerText: "Kompilasi akan gagal dan menghasilkan error.", isCorrect: false },
        { answerText: "Program akan berjalan dengan hasil yang tidak dapat diprediksi.", isCorrect: false },
        { answerText: "Go akan mengabaikan import yang kedua.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa tujuan dari file `go.mod` dalam sebuah proyek Go?",
      code: ``,
      answerOptions: [
        { answerText: "Untuk mendeklarasikan dependency dan mengelola versi package.", isCorrect: true },
        { answerText: "Untuk menyimpan konfigurasi build dan kompilasi.", isCorrect: false },
        { answerText: "Untuk mendeklarasikan variabel global.", isCorrect: false },
        { answerText: "Untuk menyimpan file binary hasil kompilasi.", isCorrect: false },
      ],
    },
  ];


  const code1 = [
    {
      contoh:
        `
  import "fmt"

  func main() {
      fmt.Println("Hello, World!")
  }
  `
    },
  ]


  return (
    <div className='flex flex-col pb-3 lg:pt-5 lg:items-start lg:flex-row lg:gap-x-3 gap-y-7'>
      <div className='lg:w-[60%] xl:w-4/5'>
        <FillContent
          judul={'Package dan Import'}
          pengertian={'Package adalah kumpulan kode Go yang dapat digunakan bersama. import digunakan untuk mengimpor package.'}
          fungsi={'Membagi kode menjadi modul-modul yang dapat digunakan kembali.'}
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
