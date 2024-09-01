// Integer.js
import React, { useState } from 'react';
import QuizComponent from '../../QuizComponent';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FillContent } from '../fillContent';
export const Function = () => {
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
      questionText: "Apa itu fungsi dalam Go?",
      code: ``,
      answerOptions: [
        { answerText: "Fungsi adalah blok kode yang dapat dipanggil untuk melakukan tugas tertentu.", isCorrect: true },
        { answerText: "Fungsi adalah variabel yang digunakan untuk menyimpan nilai.", isCorrect: false },
        { answerText: "Fungsi adalah metode untuk mengelola loop.", isCorrect: false },
        { answerText: "Fungsi adalah pernyataan kondisional.", isCorrect: false },
      ],
    },
    {
      questionText: "Bagaimana cara mendeklarasikan sebuah fungsi di Go?",
      code: ``,
      answerOptions: [
        { answerText: "Menggunakan kata kunci 'func' diikuti dengan nama fungsi, parameter, dan blok kode.", isCorrect: true },
        { answerText: "Menggunakan kata kunci 'function' diikuti dengan nama fungsi dan parameter.", isCorrect: false },
        { answerText: "Menggunakan kata kunci 'def' diikuti dengan nama fungsi dan parameter.", isCorrect: false },
        { answerText: "Menggunakan kata kunci 'method' diikuti dengan nama fungsi dan parameter.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa yang akan dihasilkan oleh kode berikut?",
      code: `package main
  import "fmt"
  
  func sayHello() {
      fmt.Println("Hello, Go!")
  }
  
  func main() {
      sayHello()
  }`,
      answerOptions: [
        { answerText: "Hello, Go!", isCorrect: true },
        { answerText: "Tidak ada output", isCorrect: false },
        { answerText: "Kesalahan kompilasi", isCorrect: false },
        { answerText: "Hello, World!", isCorrect: false },
      ],
    },
    {
      questionText: "Apakah fungsi di Go bisa mengembalikan lebih dari satu nilai?",
      code: ``,
      answerOptions: [
        { answerText: "Ya, fungsi di Go bisa mengembalikan lebih dari satu nilai.", isCorrect: true },
        { answerText: "Tidak, fungsi di Go hanya bisa mengembalikan satu nilai.", isCorrect: false },
        { answerText: "Ya, tapi hanya jika menggunakan pointer.", isCorrect: false },
        { answerText: "Tidak, fungsi tidak bisa mengembalikan nilai.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa yang akan dihasilkan oleh kode berikut?",
      code: `package main
  import "fmt"
  
  func add(a int, b int) int {
      return a + b
  }
  
  func main() {
      fmt.Println(add(3, 4))
  }`,
      answerOptions: [
        { answerText: "7", isCorrect: true },
        { answerText: "34", isCorrect: false },
        { answerText: "0", isCorrect: false },
        { answerText: "Error", isCorrect: false },
      ],
    },
    {
      questionText: "Bagaimana cara mendefinisikan fungsi dengan parameter bernama dalam Go?",
      code: ``,
      answerOptions: [
        { answerText: "Dengan menyebutkan nama parameter dan tipe datanya di dalam tanda kurung.", isCorrect: true },
        { answerText: "Dengan menyebutkan hanya tipe data di dalam tanda kurung.", isCorrect: false },
        { answerText: "Dengan menyebutkan hanya nama parameter di dalam tanda kurung.", isCorrect: false },
        { answerText: "Tidak bisa mendefinisikan parameter bernama di Go.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa kegunaan dari fungsi variadic di Go?",
      code: ``,
      answerOptions: [
        { answerText: "Untuk menerima sejumlah argumen yang tidak ditentukan saat fungsi dipanggil.", isCorrect: true },
        { answerText: "Untuk mengembalikan nilai default.", isCorrect: false },
        { answerText: "Untuk memanggil fungsi lain secara otomatis.", isCorrect: false },
        { answerText: "Untuk mengulang loop dalam fungsi.", isCorrect: false },
      ],
    },
    {
      questionText: "Bagaimana cara mendeklarasikan fungsi variadic di Go?",
      code: ``,
      answerOptions: [
        { answerText: "Dengan menggunakan tanda ... sebelum tipe data parameter terakhir.", isCorrect: true },
        { answerText: "Dengan menggunakan tanda ... sebelum nama fungsi.", isCorrect: false },
        { answerText: "Dengan menggunakan kata kunci 'variadic'.", isCorrect: false },
        { answerText: "Dengan tidak menyertakan tipe data parameter terakhir.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa yang akan dihasilkan oleh kode berikut?",
      code: `package main
  import "fmt"
  
  func printNumbers(numbers ...int) {
      for _, number := range numbers {
          fmt.Println(number)
      }
  }
  
  func main() {
      printNumbers(1, 2, 3)
  }`,
      answerOptions: [
        { answerText: "1 2 3", isCorrect: true },
        { answerText: "3 2 1", isCorrect: false },
        { answerText: "0", isCorrect: false },
        { answerText: "Tidak ada output", isCorrect: false },
      ],
    },
    {
      questionText: "Apa itu fungsi anonim dalam Go?",
      code: ``,
      answerOptions: [
        { answerText: "Fungsi yang tidak memiliki nama dan dapat digunakan sebagai nilai.", isCorrect: true },
        { answerText: "Fungsi yang hanya bisa digunakan di dalam loop.", isCorrect: false },
        { answerText: "Fungsi yang selalu mengembalikan nilai yang sama.", isCorrect: false },
        { answerText: "Fungsi yang dipanggil secara otomatis saat program dijalankan.", isCorrect: false },
      ],
    },
  ];


  const code1 = [
    {
      contoh:
        `
  func greet() {
      fmt.Println("Hello!")
  }
  `
    },
  ]


  return (
    <div className='flex flex-col pb-3 lg:pt-5 lg:items-start lg:flex-row lg:gap-x-3 gap-y-7'>
      <div className='lg:w-[60%] xl:w-4/5'>
        <FillContent
          judul={'Function'}
          pengertian={'Sekumpulan kode yang dapat dipanggil berulang kali.'}
          fungsi={'Membagi program menjadi bagian yang lebih kecil dan lebih terstruktur.'}
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
    </div>
  );
};
