// Integer.js
import React, { useState } from 'react';
import QuizComponent from '../../QuizComponent';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FillContent } from '../FillContent';
export const Defer = () => {
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
      questionText: "Apa itu defer dalam Go?",
      code: ``,
      answerOptions: [
        { answerText: "Defer adalah keyword yang digunakan untuk menunda eksekusi fungsi hingga fungsi yang memanggilnya selesai.", isCorrect: true },
        { answerText: "Defer adalah keyword yang digunakan untuk menghentikan eksekusi program.", isCorrect: false },
        { answerText: "Defer adalah keyword yang digunakan untuk mendeklarasikan variabel lokal.", isCorrect: false },
        { answerText: "Defer adalah keyword yang digunakan untuk memanggil fungsi secara bersamaan.", isCorrect: false },
      ],
    },
    {
      questionText: "Bagaimana cara menggunakan defer dalam Go?",
      code: ``,
      answerOptions: [
        { answerText: "Dengan menambahkan keyword `defer` sebelum pemanggilan fungsi di dalam fungsi.", isCorrect: true },
        { answerText: "Dengan menggunakan keyword `defer` di akhir deklarasi fungsi.", isCorrect: false },
        { answerText: "Dengan menyertakan keyword `defer` dalam parameter fungsi.", isCorrect: false },
        { answerText: "Dengan mendeklarasikan fungsi sebagai variabel dan menambahkannya ke dalam daftar defer.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  import "fmt"
  
  func main() {
      defer fmt.Println("world")
      fmt.Println("hello")
  }`,
      answerOptions: [
        { answerText: "hello\nworld", isCorrect: true },
        { answerText: "world\nhello", isCorrect: false },
        { answerText: "hello", isCorrect: false },
        { answerText: "world", isCorrect: false },
      ],
    },
    {
      questionText: "Apa yang terjadi jika ada beberapa pemanggilan fungsi defer dalam satu fungsi?",
      code: ``,
      answerOptions: [
        { answerText: "Fungsi defer akan dipanggil dalam urutan terbalik dari urutan pemanggilannya.", isCorrect: true },
        { answerText: "Fungsi defer akan dipanggil dalam urutan yang sama dengan urutan pemanggilannya.", isCorrect: false },
        { answerText: "Fungsi defer hanya akan dipanggil sekali.", isCorrect: false },
        { answerText: "Fungsi defer tidak akan dipanggil.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  import "fmt"
  
  func example() {
      defer fmt.Println("A")
      defer fmt.Println("B")
      defer fmt.Println("C")
  }
  
  func main() {
      example()
  }`,
      answerOptions: [
        { answerText: "C\nB\nA", isCorrect: true },
        { answerText: "A\nB\nC", isCorrect: false },
        { answerText: "C\nA\nB", isCorrect: false },
        { answerText: "B\nC\nA", isCorrect: false },
      ],
    },
    {
      questionText: "Bisakah defer digunakan untuk menutup file atau mengunci mutex?",
      code: ``,
      answerOptions: [
        { answerText: "Ya, defer sering digunakan untuk menutup file atau melepaskan mutex setelah operasi selesai.", isCorrect: true },
        { answerText: "Tidak, defer tidak dapat digunakan untuk menutup file atau mengunci mutex.", isCorrect: false },
        { answerText: "Ya, tetapi hanya untuk operasi yang sederhana.", isCorrect: false },
        { answerText: "Tidak, defer hanya digunakan untuk logging.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  import "fmt"
  
  func main() {
      for i := 0; i < 3; i++ {
          defer fmt.Println(i)
      }
  }`,
      answerOptions: [
        { answerText: "2\n1\n0", isCorrect: true },
        { answerText: "0\n1\n2", isCorrect: false },
        { answerText: "2\n1", isCorrect: false },
        { answerText: "0\n1", isCorrect: false },
      ],
    },
    {
      questionText: "Apa manfaat utama menggunakan defer dalam Go?",
      code: ``,
      answerOptions: [
        { answerText: "Defer membantu memastikan bahwa fungsi pembersihan selalu dipanggil, meskipun terjadi error dalam fungsi utama.", isCorrect: true },
        { answerText: "Defer meningkatkan performa eksekusi fungsi dengan mengurangi overhead.", isCorrect: false },
        { answerText: "Defer mengurangi kompleksitas kode dengan memungkinkan fungsi pembersihan di luar fungsi utama.", isCorrect: false },
        { answerText: "Defer mempermudah pemanggilan fungsi bersamaan.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  import "fmt"
  
  func foo() {
      defer fmt.Println("foo")
      return
  }
  
  func bar() {
      defer fmt.Println("bar")
      foo()
  }
  
  func main() {
      bar()
  }`,
      answerOptions: [
        { answerText: "foo\nbar", isCorrect: true },
        { answerText: "bar\nfoo", isCorrect: false },
        { answerText: "foo", isCorrect: false },
        { answerText: "bar", isCorrect: false },
      ],
    },
    {
      questionText: "Apa yang terjadi jika defer digunakan dalam fungsi yang memiliki beberapa pemanggilan defer?",
      code: ``,
      answerOptions: [
        { answerText: "Semua fungsi defer akan dipanggil dalam urutan terbalik setelah fungsi utama selesai.", isCorrect: true },
        { answerText: "Semua fungsi defer akan dipanggil dalam urutan yang sama dengan urutan pemanggilannya.", isCorrect: false },
        { answerText: "Hanya fungsi defer pertama yang akan dipanggil.", isCorrect: false },
        { answerText: "Hanya fungsi defer terakhir yang akan dipanggil.", isCorrect: false },
      ],
    },
    {
      questionText: "Bisakah defer digunakan untuk menangani error dalam Go?",
      code: ``,
      answerOptions: [
        { answerText: "Defer tidak dapat digunakan secara langsung untuk menangani error, tetapi dapat digunakan untuk menutup resources setelah error terjadi.", isCorrect: true },
        { answerText: "Ya, defer dapat digunakan untuk menangani error secara langsung.", isCorrect: false },
        { answerText: "Tidak, defer tidak berpengaruh pada penanganan error.", isCorrect: false },
        { answerText: "Ya, tetapi hanya untuk error yang bersifat runtime.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  import "fmt"
  
  func test() {
      defer fmt.Println("defer")
      fmt.Println("test")
  }
  
  func main() {
      test()
  }`,
      answerOptions: [
        { answerText: "test\ndefer", isCorrect: true },
        { answerText: "defer\ntest", isCorrect: false },
        { answerText: "test", isCorrect: false },
        { answerText: "defer", isCorrect: false },
      ],
    },
  ];


  const code1 = [
    {
      contoh:
        `
  func main() {
      defer fmt.Println("Program selesai")
      fmt.Println("Program sedang berjalan")
  }
  `
    },
    {
      contoh:
        `
  package main

  import "fmt"

  func main() {
      fmt.Println("Memulai permainan...")

      // Menunda eksekusi hingga function selesai
      defer fmt.Println("Membersihkan mainan setelah selesai bermain.")

      fmt.Println("Sedang bermain...")
      fmt.Println("Permainan selesai!")
  }
  `
    },
  ]


  return (
    <div className='flex flex-col pb-3 lg:pt-5 lg:items-start lg:flex-row lg:gap-x-3 gap-y-7'>
      <div className='lg:w-[60%] xl:w-4/5'>
        <FillContent
          judul={'Defer'}
          pengertian={'defer adalah sebuah kata kunci yang digunakan untuk menunda eksekusi sebuah function atau statement sampai function di mana defer itu berada selesai dijalankan. Bayangkan kamu sedang bermain dan kamu menaruh catatan yang bilang, "Setelah selesai bermain, jangan lupa membersihkan mainanmu." Itulah cara defer bekerja—dia "menyimpan tugas" untuk dikerjakan di akhir.'}
          fungsi={'Defer sangat berguna ketika kita ingin memastikan bahwa sesuatu akan dilakukan setelah sebuah function selesai, seperti menutup file, membersihkan memori, atau melepaskan koneksi. Hal ini membuat kode kita lebih rapi dan teratur.'}
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
