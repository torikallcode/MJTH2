// Integer.js
import React, { useState } from 'react';
import QuizComponent from '../../QuizComponent';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FillContent } from '../FillContent';
export const FunctionParameter = () => {
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
      questionText: "Apa itu parameter fungsi dalam Go?",
      code: ``,
      answerOptions: [
        { answerText: "Parameter fungsi adalah variabel yang digunakan untuk menerima input ke dalam fungsi.", isCorrect: true },
        { answerText: "Parameter fungsi adalah nilai yang selalu dikembalikan oleh fungsi.", isCorrect: false },
        { answerText: "Parameter fungsi adalah nama lain untuk variabel global dalam fungsi.", isCorrect: false },
        { answerText: "Parameter fungsi adalah tipe data yang hanya digunakan di dalam fungsi.", isCorrect: false },
      ],
    },
    {
      questionText: "Bagaimana cara mendeklarasikan parameter fungsi dalam Go?",
      code: ``,
      answerOptions: [
        { answerText: "Dengan menyebutkan nama parameter dan tipe datanya di dalam tanda kurung setelah nama fungsi.", isCorrect: true },
        { answerText: "Dengan menggunakan kata kunci 'parameter' sebelum nama fungsi.", isCorrect: false },
        { answerText: "Dengan menyebutkan tipe data parameter tanpa nama di dalam tanda kurung.", isCorrect: false },
        { answerText: "Dengan menyebutkan tipe data parameter di luar tanda kurung setelah nama fungsi.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  import "fmt"
  
  func greet(name string) {
      fmt.Println("Hello,", name)
  }
  
  func main() {
      greet("Go Programmer")
  }`,
      answerOptions: [
        { answerText: "Hello, Go Programmer", isCorrect: true },
        { answerText: "Hello, World", isCorrect: false },
        { answerText: "Hello, ", isCorrect: false },
        { answerText: "Error", isCorrect: false },
      ],
    },
    {
      questionText: "Bisakah fungsi di Go memiliki beberapa parameter? Jika ya, bagaimana cara mendeklarasikannya?",
      code: ``,
      answerOptions: [
        { answerText: "Ya, dengan menuliskan nama dan tipe data masing-masing parameter yang dipisahkan oleh koma di dalam tanda kurung.", isCorrect: true },
        { answerText: "Tidak, fungsi hanya bisa memiliki satu parameter.", isCorrect: false },
        { answerText: "Ya, tetapi hanya jika parameter memiliki tipe data yang sama.", isCorrect: false },
        { answerText: "Ya, tetapi harus menggunakan kata kunci 'params' di depan nama parameter.", isCorrect: false },
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
      fmt.Println(add(3, 5))
  }`,
      answerOptions: [
        { answerText: "8", isCorrect: true },
        { answerText: "35", isCorrect: false },
        { answerText: "Error", isCorrect: false },
        { answerText: "0", isCorrect: false },
      ],
    },
    {
      questionText: "Bagaimana cara mendeklarasikan fungsi dengan parameter bernama yang sama tapi berbeda tipe data di Go?",
      code: ``,
      answerOptions: [
        { answerText: "Tidak bisa, setiap parameter harus memiliki nama yang unik dalam satu fungsi.", isCorrect: true },
        { answerText: "Bisa, asalkan tipe data berbeda.", isCorrect: false },
        { answerText: "Bisa, dengan menggunakan tanda petik dua di sekitar nama parameter.", isCorrect: false },
        { answerText: "Tidak bisa, tetapi bisa menggunakan pointer.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa itu parameter default di Go?",
      code: ``,
      answerOptions: [
        { answerText: "Go tidak mendukung parameter default; semua parameter harus diberi nilai saat fungsi dipanggil.", isCorrect: true },
        { answerText: "Parameter yang memiliki nilai default saat tidak diberi argumen.", isCorrect: false },
        { answerText: "Parameter yang digunakan hanya pada saat kompilasi.", isCorrect: false },
        { answerText: "Parameter yang berubah secara otomatis tergantung pada input.", isCorrect: false },
      ],
    },
    {
      questionText: "Bagaimana cara mendeklarasikan parameter variadic di Go?",
      code: ``,
      answerOptions: [
        { answerText: "Dengan menambahkan tiga titik (...) sebelum tipe data parameter terakhir.", isCorrect: true },
        { answerText: "Dengan menggunakan kata kunci 'variadic' sebelum parameter terakhir.", isCorrect: false },
        { answerText: "Dengan menambahkan tanda tanya (?) sebelum tipe data parameter terakhir.", isCorrect: false },
        { answerText: "Dengan menambahkan tanda seru (!) setelah tipe data parameter terakhir.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa yang akan dihasilkan oleh kode berikut?",
      code: `package main
  import "fmt"
  
  func sum(numbers ...int) int {
      total := 0
      for _, number := range numbers {
          total += number
      }
      return total
  }
  
  func main() {
      fmt.Println(sum(1, 2, 3, 4))
  }`,
      answerOptions: [
        { answerText: "10", isCorrect: true },
        { answerText: "1234", isCorrect: false },
        { answerText: "0", isCorrect: false },
        { answerText: "Error", isCorrect: false },
      ],
    },
    {
      questionText: "Apakah Go mendukung overloading fungsi dengan parameter yang berbeda?",
      code: ``,
      answerOptions: [
        { answerText: "Tidak, Go tidak mendukung overloading fungsi.", isCorrect: true },
        { answerText: "Ya, Go mendukung overloading fungsi.", isCorrect: false },
        { answerText: "Ya, tapi hanya jika parameter memiliki tipe data yang sama.", isCorrect: false },
        { answerText: "Tidak, tapi Go mendukung overload metode.", isCorrect: false },
      ],
    },
  ];


  const code1 = [
    {
      contoh:
        `
  func greet(name string) {
      fmt.Println("Hello, " + name)
  }
  `
    },
  ]


  return (
    <div className='flex flex-col pb-3 lg:pt-5 lg:items-start lg:flex-row lg:gap-x-3 gap-y-7'>
      <div className='lg:w-[60%] xl:w-4/5'>
        <FillContent
          judul={'Function Parameter'}
          pengertian={'Input yang diterima fungsi untuk diproses.'}
          fungsi={'Membuat fungsi lebih dinamis dan dapat digunakan kembali.'}
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
