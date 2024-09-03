// Integer.js
import React, { useState } from 'react';
import QuizComponent from '../../QuizComponent';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FillContent } from '../FillContent';
export const FunctionReturn = () => {
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
      questionText: "Apa itu return value dalam fungsi di Go?",
      code: ``,
      answerOptions: [
        { answerText: "Return value adalah nilai yang dikembalikan oleh fungsi setelah eksekusi.", isCorrect: true },
        { answerText: "Return value adalah parameter yang diberikan kepada fungsi.", isCorrect: false },
        { answerText: "Return value adalah nama fungsi itu sendiri.", isCorrect: false },
        { answerText: "Return value adalah tipe data dari fungsi.", isCorrect: false },
      ],
    },
    {
      questionText: "Bagaimana cara mendeklarasikan nilai kembalian pada fungsi di Go?",
      code: ``,
      answerOptions: [
        { answerText: "Dengan menyebutkan tipe data nilai kembalian di bagian deklarasi fungsi setelah tanda kurung parameter.", isCorrect: true },
        { answerText: "Dengan menggunakan kata kunci 'return' di dalam tubuh fungsi.", isCorrect: false },
        { answerText: "Dengan menambahkan tipe data di bagian akhir kode fungsi.", isCorrect: false },
        { answerText: "Dengan menggunakan variabel global untuk menyimpan nilai kembalian.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  import "fmt"
  
  func add(a int, b int) int {
      return a + b
  }
  
  func main() {
      fmt.Println(add(5, 3))
  }`,
      answerOptions: [
        { answerText: "8", isCorrect: true },
        { answerText: "5", isCorrect: false },
        { answerText: "3", isCorrect: false },
        { answerText: "Error", isCorrect: false },
      ],
    },
    {
      questionText: "Bisakah sebuah fungsi di Go mengembalikan lebih dari satu nilai?",
      code: ``,
      answerOptions: [
        { answerText: "Ya, fungsi dapat mengembalikan lebih dari satu nilai.", isCorrect: true },
        { answerText: "Tidak, fungsi hanya dapat mengembalikan satu nilai.", isCorrect: false },
        { answerText: "Ya, tetapi hanya dengan tipe data yang sama.", isCorrect: false },
        { answerText: "Tidak, tetapi fungsi dapat mengembalikan nilai dalam bentuk slice.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa yang akan dihasilkan oleh kode berikut?",
      code: `package main
  import "fmt"
  
  func divide(a, b int) (int, string) {
      if b == 0 {
          return 0, "Error: Division by zero"
      }
      return a / b, ""
  }
  
  func main() {
      result, message := divide(10, 0)
      fmt.Println(result, message)
  }`,
      answerOptions: [
        { answerText: "0 Error: Division by zero", isCorrect: true },
        { answerText: "10", isCorrect: false },
        { answerText: "Error: Division by zero", isCorrect: false },
        { answerText: "0", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut jika fungsi tidak mengembalikan nilai apapun?",
      code: `package main
  import "fmt"
  
  func noReturn() {
      // Tidak ada return statement
  }
  
  func main() {
      fmt.Println(noReturn())
  }`,
      answerOptions: [
        { answerText: "Nilai default, biasanya 'nil' atau 'zero value'.", isCorrect: true },
        { answerText: "Error", isCorrect: false },
        { answerText: "Void", isCorrect: false },
        { answerText: "Tidak ada output", isCorrect: false },
      ],
    },
    {
      questionText: "Bagaimana cara mengembalikan nilai default dari fungsi yang tidak memiliki return statement?",
      code: ``,
      answerOptions: [
        { answerText: "Dengan menggunakan return tanpa nilai.", isCorrect: true },
        { answerText: "Dengan memberikan nilai default di deklarasi fungsi.", isCorrect: false },
        { answerText: "Dengan menggunakan variabel global untuk menyimpan nilai default.", isCorrect: false },
        { answerText: "Dengan mengubah tipe data fungsi menjadi void.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa yang akan dihasilkan oleh kode berikut?",
      code: `package main
  import "fmt"
  
  func multipleReturns() (int, int) {
      return 1, 2
  }
  
  func main() {
      a, b := multipleReturns()
      fmt.Println(a, b)
  }`,
      answerOptions: [
        { answerText: "1 2", isCorrect: true },
        { answerText: "2 1", isCorrect: false },
        { answerText: "1", isCorrect: false },
        { answerText: "Error", isCorrect: false },
      ],
    },
    {
      questionText: "Bisakah nilai kembalian dari fungsi digunakan sebagai parameter untuk fungsi lain?",
      code: ``,
      answerOptions: [
        { answerText: "Ya, nilai kembalian dari fungsi dapat digunakan sebagai parameter untuk fungsi lain.", isCorrect: true },
        { answerText: "Tidak, nilai kembalian tidak dapat digunakan sebagai parameter.", isCorrect: false },
        { answerText: "Ya, tetapi hanya jika nilai kembalian bertipe integer.", isCorrect: false },
        { answerText: "Tidak, harus ada konversi tipe data terlebih dahulu.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa yang akan dihasilkan oleh kode berikut?",
      code: `package main
  import "fmt"
  
  func calculate(a int, b int) (sum int, product int) {
      sum = a + b
      product = a * b
      return
  }
  
  func main() {
      s, p := calculate(3, 4)
      fmt.Println(s, p)
  }`,
      answerOptions: [
        { answerText: "7 12", isCorrect: true },
        { answerText: "3 4", isCorrect: false },
        { answerText: "12 7", isCorrect: false },
        { answerText: "Error", isCorrect: false },
      ],
    },
    {
      questionText: "Apa yang akan terjadi jika kita mencoba untuk mengembalikan nilai dari tipe data yang berbeda dalam satu fungsi?",
      code: ``,
      answerOptions: [
        { answerText: "Akan terjadi error kompilasi jika tipe data nilai kembalian tidak konsisten.", isCorrect: true },
        { answerText: "Fungsi akan mengembalikan nilai default.", isCorrect: false },
        { answerText: "Program akan berhenti dengan pesan error pada runtime.", isCorrect: false },
        { answerText: "Nilai kembalian akan dianggap sebagai tipe data yang pertama kali dideklarasikan.", isCorrect: false },
      ],
    },
  ];


  const code1 = [
    {
      contoh:
        `
  package main

  import "fmt"

  // Function untuk menjumlahkan dua angka dan mengembalikan hasilnya
  func tambah(a int, b int) int {
      hasil := a + b
      return hasil // Mengembalikan hasil penjumlahan
  }

  // Function untuk menghitung kuadrat dari sebuah angka dan mengembalikan hasilnya
  func kuadrat(x int) int {
      hasil := x * x
      return hasil // Mengembalikan hasil kuadrat
  }

  func main() {
      // Memanggil function tambah dan menyimpan hasilnya
      hasilPenjumlahan := tambah(3, 7)
      fmt.Println("Hasil penjumlahan 3 + 7 adalah:", hasilPenjumlahan)

      // Memanggil function kuadrat dan menyimpan hasilnya
      hasilKuadrat := kuadrat(5)
      fmt.Println("Kuadrat dari 5 adalah:", hasilKuadrat)
  }
  `
    },
  ]


  return (
    <div className='flex flex-col pb-3 lg:pt-5 lg:items-start lg:flex-row lg:gap-x-3 gap-y-7'>
      <div className='lg:w-[60%] xl:w-4/5'>
        <FillContent
          judul={'Function Return Value'}
          pengertian={' return value pada sebuah function adalah seperti hadiah yang diberikan kembali setelah kamu meminta bantuan kepada seseorang. Misalnya, jika kamu meminta temanmu menghitung jumlah apel yang kamu punya dan dia memberikan jawabannya, itu adalah return value dari permintaanmu.'}
          fungsi={'Return value digunakan ketika sebuah function selesai melakukan tugasnya dan ingin memberikan hasilnya kembali kepada kita. Ini membuat function berguna untuk melakukan perhitungan, memproses data, dan kemudian memberikan jawaban atau hasil yang kita butuhkan.'}
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
