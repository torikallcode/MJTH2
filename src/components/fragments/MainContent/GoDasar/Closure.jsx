// Integer.js
import React, { useState } from 'react';
import QuizComponent from '../../QuizComponent';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FillContent } from '../FillContent';
export const Closure = () => {
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
      questionText: "Apa itu closure dalam Go?",
      code: ``,
      answerOptions: [
        { answerText: "Closure adalah fungsi yang menangkap variabel dari lingkup luar fungsi.", isCorrect: true },
        { answerText: "Closure adalah fungsi yang tidak memerlukan parameter.", isCorrect: false },
        { answerText: "Closure adalah fungsi yang hanya dapat dipanggil dari luar fungsi.", isCorrect: false },
        { answerText: "Closure adalah fungsi yang selalu mengembalikan nilai.", isCorrect: false },
      ],
    },
    {
      questionText: "Bagaimana cara membuat closure di Go?",
      code: ``,
      answerOptions: [
        { answerText: "Dengan mendeklarasikan fungsi di dalam fungsi lain dan menggunakan variabel dari fungsi luar.", isCorrect: true },
        { answerText: "Dengan menggunakan kata kunci 'closure' sebelum nama fungsi.", isCorrect: false },
        { answerText: "Dengan mendeklarasikan fungsi dengan parameter tambahan.", isCorrect: false },
        { answerText: "Dengan mendeklarasikan fungsi sebagai anonymous function.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  import "fmt"
  
  func makeCounter() func() int {
      count := 0
      return func() int {
          count++
          return count
      }
  }
  
  func main() {
      counter := makeCounter()
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
    {
      questionText: "Apa yang dimaksud dengan 'lexical scoping' dalam konteks closure?",
      code: ``,
      answerOptions: [
        { answerText: "Lexical scoping berarti variabel yang digunakan oleh closure diambil dari lingkup tempat closure dideklarasikan.", isCorrect: true },
        { answerText: "Lexical scoping berarti variabel yang digunakan oleh closure didefinisikan di dalam fungsi tersebut.", isCorrect: false },
        { answerText: "Lexical scoping berarti variabel yang digunakan oleh closure dideklarasikan di luar blok kode.", isCorrect: false },
        { answerText: "Lexical scoping berarti variabel diakses dari luar fungsi dan diubah.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  import "fmt"
  
  func multiplier(factor int) func(int) int {
      return func(x int) int {
          return x * factor
      }
  }
  
  func main() {
      double := multiplier(2)
      triple := multiplier(3)
      fmt.Println(double(4))
      fmt.Println(triple(4))
  }`,
      answerOptions: [
        { answerText: "8 12", isCorrect: true },
        { answerText: "4 8", isCorrect: false },
        { answerText: "2 3", isCorrect: false },
        { answerText: "Error", isCorrect: false },
      ],
    },
    {
      questionText: "Bagaimana closure dapat digunakan untuk menjaga keadaan (state) dalam fungsi?",
      code: ``,
      answerOptions: [
        { answerText: "Dengan menangkap dan menyimpan variabel dari lingkup luar fungsi yang dapat diakses setiap kali fungsi closure dipanggil.", isCorrect: true },
        { answerText: "Dengan menggunakan variabel global untuk menyimpan keadaan.", isCorrect: false },
        { answerText: "Dengan mendeklarasikan variabel sebagai parameter fungsi.", isCorrect: false },
        { answerText: "Dengan menyimpan keadaan dalam file eksternal.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  import "fmt"
  
  func adder(x int) func(int) int {
      return func(y int) int {
          return x + y
      }
  }
  
  func main() {
      add5 := adder(5)
      add10 := adder(10)
      fmt.Println(add5(3))
      fmt.Println(add10(3))
  }`,
      answerOptions: [
        { answerText: "8 13", isCorrect: true },
        { answerText: "5 10", isCorrect: false },
        { answerText: "3 3", isCorrect: false },
        { answerText: "Error", isCorrect: false },
      ],
    },
    {
      questionText: "Bisakah closure di Go digunakan untuk membuat fungsi yang menghasilkan fungsi lain?",
      code: ``,
      answerOptions: [
        { answerText: "Ya, closure dapat digunakan untuk membuat fungsi yang menghasilkan fungsi lain dengan variabel yang dibawa dari lingkup luar.", isCorrect: true },
        { answerText: "Tidak, closure hanya dapat digunakan untuk menyimpan nilai.", isCorrect: false },
        { answerText: "Ya, tetapi hanya dengan menggunakan anonymous function.", isCorrect: false },
        { answerText: "Tidak, fungsi tidak dapat dikembalikan oleh closure.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  import "fmt"
  
  func createCounter() func() int {
      count := 0
      return func() int {
          count++
          return count
      }
  }
  
  func main() {
      counter1 := createCounter()
      counter2 := createCounter()
      fmt.Println(counter1())
      fmt.Println(counter1())
      fmt.Println(counter2())
  }`,
      answerOptions: [
        { answerText: "1 2 1", isCorrect: true },
        { answerText: "1 1 2", isCorrect: false },
        { answerText: "2 2 1", isCorrect: false },
        { answerText: "1 1 0", isCorrect: false },
      ],
    },
    {
      questionText: "Apa manfaat utama menggunakan closure dalam Go?",
      code: ``,
      answerOptions: [
        { answerText: "Menjaga data privat dan memungkinkan fungsi memiliki akses ke variabel dari lingkup luar.", isCorrect: true },
        { answerText: "Meningkatkan performa fungsi dengan mengurangi penggunaan memori.", isCorrect: false },
        { answerText: "Memudahkan pemanggilan fungsi dari luar blok kode.", isCorrect: false },
        { answerText: "Menjamin bahwa fungsi tidak dapat dipanggil lebih dari sekali.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  import "fmt"
  
  func makeMultiplier(factor int) func() int {
      return func() int {
          factor++
          return factor
      }
  }
  
  func main() {
      multiply := makeMultiplier(5)
      fmt.Println(multiply())
      fmt.Println(multiply())
  }`,
      answerOptions: [
        { answerText: "6 7", isCorrect: true },
        { answerText: "5 6", isCorrect: false },
        { answerText: "5 5", isCorrect: false },
        { answerText: "6 6", isCorrect: false },
      ],
    },
    {
      questionText: "Bisakah closure di Go digunakan untuk menyembunyikan implementasi fungsi?",
      code: ``,
      answerOptions: [
        { answerText: "Ya, dengan menyembunyikan variabel dan implementasi di dalam closure yang tidak dapat diakses dari luar.", isCorrect: true },
        { answerText: "Tidak, closure hanya digunakan untuk menyimpan nilai.", isCorrect: false },
        { answerText: "Ya, tetapi hanya jika menggunakan variabel global.", isCorrect: false },
        { answerText: "Tidak, implementasi fungsi selalu dapat diakses dari luar.", isCorrect: false },
      ],
    },
  ];


  const code1 = [
    {
      contoh:
        `
  // Contoh sederhana
  func adder() func(int) int {
      sum := 0
      return func(x int) int {
          sum += x
          return sum
      }
  }
  `
    },
    {
      contoh:
        `
  // Contoh lanjutan
  package main

  import "fmt"

  // Function pembuat closure
  func buatPenghitung() func() int {
      hitung := 0 // Variabel luar yang disimpan oleh closure

      // Closure yang mengembalikan function
      return func() int {
          hitung++ // Mengakses dan mengubah variabel luar
          return hitung
      }
  }

  func main() {
      penghitung := buatPenghitung() // Membuat closure

      fmt.Println(penghitung()) // Output: 1
      fmt.Println(penghitung()) // Output: 2
      fmt.Println(penghitung()) // Output: 3
  }
  `
    },
  ]


  return (
    <div className='flex flex-col pb-3 lg:pt-5 lg:items-start lg:flex-row lg:gap-x-3 gap-y-7'>
      <div className='lg:w-[60%] xl:w-4/5'>
        <FillContent
          judul={'Closure'}
          pengertian={'closure adalah sebuah function yang bisa "mengikat" atau "menyimpan" variabel dari luar dirinya dan tetap bisa menggunakannya bahkan setelah lingkup di luar function itu selesai. Bayangkan kamu memiliki kotak ajaib yang bisa menyimpan barang-barang di dalamnya, dan kamu bisa membuka kotak itu kapan saja untuk melihat atau menggunakan barang-barang tersebut. Dengan closure, function bisa menyimpan nilai dari variabel luar dan menggunakannya kapan saja diperlukan..(Fungsi yang dideklarasikan di dalam fungsi lain dan mengakses variabel dari fungsi luarnya.)'}
          fungsi={'Closure sangat berguna ketika kita ingin membuat function yang "ingat" nilai dari variabel tertentu, meskipun lingkup variabel tersebut telah berakhir. Ini memungkinkan kita membuat function yang lebih fleksibel dan kuat.'}
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
