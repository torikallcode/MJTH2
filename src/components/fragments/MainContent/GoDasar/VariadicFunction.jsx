// Integer.js
import React, { useState } from 'react';
import QuizComponent from '../../QuizComponent';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FillContent } from '../FillContent';
export const VariadicFunction = () => {
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
      questionText: "Apa itu variadic function dalam Go?",
      code: ``,
      answerOptions: [
        { answerText: "Variadic function adalah fungsi yang dapat menerima jumlah argumen yang tidak terbatas dari tipe data yang sama.", isCorrect: true },
        { answerText: "Variadic function adalah fungsi yang hanya dapat menerima satu argumen.", isCorrect: false },
        { answerText: "Variadic function adalah fungsi yang tidak dapat mengembalikan nilai.", isCorrect: false },
        { answerText: "Variadic function adalah fungsi yang dapat menerima argumen dari berbagai tipe data.", isCorrect: false },
      ],
    },
    {
      questionText: "Bagaimana cara mendeklarasikan variadic function dalam Go?",
      code: ``,
      answerOptions: [
        { answerText: "Dengan menambahkan tiga titik (...) sebelum tipe data parameter terakhir.", isCorrect: true },
        { answerText: "Dengan menambahkan tanda tanya (?) sebelum nama parameter.", isCorrect: false },
        { answerText: "Dengan menggunakan kata kunci 'variadic' sebelum nama fungsi.", isCorrect: false },
        { answerText: "Dengan menyebutkan parameter tanpa tipe data di dalam tanda kurung.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  import "fmt"
  
  func printNumbers(numbers ...int) {
      for _, number := range numbers {
          fmt.Println(number)
      }
  }
  
  func main() {
      printNumbers(1, 2, 3, 4, 5)
  }`,
      answerOptions: [
        { answerText: "1\n2\n3\n4\n5", isCorrect: true },
        { answerText: "12345", isCorrect: false },
        { answerText: "Error", isCorrect: false },
        { answerText: "Nothing", isCorrect: false },
      ],
    },
    {
      questionText: "Bisakah variadic function menerima argumen yang berbeda tipe data?",
      code: ``,
      answerOptions: [
        { answerText: "Tidak, variadic function hanya dapat menerima argumen dari tipe data yang sama.", isCorrect: true },
        { answerText: "Ya, variadic function dapat menerima argumen dari berbagai tipe data.", isCorrect: false },
        { answerText: "Ya, tapi hanya jika tipe data yang diterima adalah string.", isCorrect: false },
        { answerText: "Tidak, tapi bisa menggunakan parameter tambahan untuk tipe data berbeda.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
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
      fmt.Println(sum(1, 2, 3))
  }`,
      answerOptions: [
        { answerText: "6", isCorrect: true },
        { answerText: "123", isCorrect: false },
        { answerText: "3", isCorrect: false },
        { answerText: "Error", isCorrect: false },
      ],
    },
    {
      questionText: "Bagaimana cara memanggil variadic function dengan menggunakan slice sebagai argumen?",
      code: ``,
      answerOptions: [
        { answerText: "Dengan menggunakan operator '...' untuk mendeklarasikan elemen slice sebagai argumen.", isCorrect: true },
        { answerText: "Dengan mengirimkan slice sebagai argumen tunggal tanpa operator tambahan.", isCorrect: false },
        { answerText: "Dengan menggunakan fungsi khusus untuk mengkonversi slice menjadi argumen.", isCorrect: false },
        { answerText: "Dengan mendeklarasikan elemen slice secara terpisah sebelum pemanggilan fungsi.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa yang terjadi jika tidak ada argumen yang diberikan pada variadic function?",
      code: ``,
      answerOptions: [
        { answerText: "Parameter variadic akan menjadi slice kosong.", isCorrect: true },
        { answerText: "Fungsi akan menghasilkan error.", isCorrect: false },
        { answerText: "Fungsi akan mengembalikan nilai default.", isCorrect: false },
        { answerText: "Fungsi akan mengabaikan parameter variadic.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa yang akan dihasilkan oleh kode berikut?",
      code: `package main
  import "fmt"
  
  func concat(words ...string) string {
      result := ""
      for _, word := range words {
          result += word + " "
      }
      return result
  }
  
  func main() {
      fmt.Println(concat("Go", "is", "fun"))
  }`,
      answerOptions: [
        { answerText: "Go is fun ", isCorrect: true },
        { answerText: "Goisfun", isCorrect: false },
        { answerText: "Go is", isCorrect: false },
        { answerText: "Error", isCorrect: false },
      ],
    },
    {
      questionText: "Apakah variadic function dapat digunakan bersamaan dengan parameter lainnya dalam Go?",
      code: ``,
      answerOptions: [
        { answerText: "Ya, variadic function dapat digunakan bersamaan dengan parameter lainnya.", isCorrect: true },
        { answerText: "Tidak, variadic function tidak dapat digunakan bersama parameter lainnya.", isCorrect: false },
        { answerText: "Ya, tetapi hanya dengan satu parameter tambahan.", isCorrect: false },
        { answerText: "Tidak, harus ada satu parameter variadic untuk setiap parameter lainnya.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa yang akan dihasilkan oleh kode berikut?",
      code: `package main
  import "fmt"
  
  func multiply(factor int, numbers ...int) []int {
      result := make([]int, len(numbers))
      for i, number := range numbers {
          result[i] = factor * number
      }
      return result
  }
  
  func main() {
      fmt.Println(multiply(2, 3, 4, 5))
  }`,
      answerOptions: [
        { answerText: "[6 8 10]", isCorrect: true },
        { answerText: "[3 4 5]", isCorrect: false },
        { answerText: "[2 3 4 5]", isCorrect: false },
        { answerText: "Error", isCorrect: false },
      ],
    },
    {
      questionText: "Bisakah variadic function mengembalikan lebih dari satu nilai dalam Go?",
      code: ``,
      answerOptions: [
        { answerText: "Ya, variadic function dapat mengembalikan lebih dari satu nilai.", isCorrect: true },
        { answerText: "Tidak, variadic function hanya dapat mengembalikan satu nilai.", isCorrect: false },
        { answerText: "Ya, tetapi hanya jika nilai kembalian adalah slice.", isCorrect: false },
        { answerText: "Tidak, tetapi bisa menggunakan beberapa variadic function.", isCorrect: false },
      ],
    },
  ];


  const code1 = [
    {
      contoh:
        `
  package main

  import "fmt"

  // Function untuk menjumlahkan beberapa angka
  func jumlahkanAngka(angka ...int) int {
      total := 0
      for _, nilai := range angka {
          total += nilai
      }
      return total // Mengembalikan hasil jumlah
  }

  func main() {
      // Memanggil function jumlahkanAngka dengan berbagai jumlah angka
      hasil1 := jumlahkanAngka(1, 2, 3)
      hasil2 := jumlahkanAngka(4, 5, 6, 7, 8)
      hasil3 := jumlahkanAngka(10)

      fmt.Println("Hasil penjumlahan 1, 2, 3 adalah:", hasil1)
      fmt.Println("Hasil penjumlahan 4, 5, 6, 7, 8 adalah:", hasil2)
      fmt.Println("Hasil penjumlahan 10 adalah:", hasil3)
  }
  `
    },
  ]


  return (
    <div className='flex flex-col pb-3 lg:pt-5 lg:items-start lg:flex-row lg:gap-x-3 gap-y-7'>
      <div className='lg:w-[60%] xl:w-4/5'>
        <FillContent
          judul={'Variadic Function'}
          pengertian={'variadic function adalah seperti sebuah kotak ajaib yang bisa menerima jumlah benda yang berbeda setiap kali kita menggunakannya. Bayangkan kamu punya kotak yang bisa menampung sebanyak mungkin mainan yang kamu bawa, tidak peduli berapa banyak mainan itu.'}
          fungsi={'Kadang-kadang kita tidak tahu berapa banyak data yang akan kita berikan kepada function. Dengan variadic function, kita bisa memberikan sebanyak mungkin data yang kita mau, dan function akan menangani semuanya dengan baik.'}
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
