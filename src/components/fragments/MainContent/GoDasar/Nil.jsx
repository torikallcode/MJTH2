// Integer.js
import React, { useState } from 'react';
import QuizComponent from '../../QuizComponent';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FillContent } from '../FillContent';
export const Nil = () => {
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
      questionText: "Apa itu nil dalam Go?",
      code: ``,
      answerOptions: [
        { answerText: "Nil adalah nilai default untuk tipe data pointer, interface, map, slice, dan channel yang menunjukkan bahwa nilai tersebut belum diinisialisasi.", isCorrect: true },
        { answerText: "Nil adalah tipe data khusus yang menyimpan nilai null atau kosong.", isCorrect: false },
        { answerText: "Nil adalah konstanta yang dapat digunakan untuk menyimpan nilai default dari tipe data apapun.", isCorrect: false },
        { answerText: "Nil adalah tipe data yang menyimpan nilai numerik 0.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  import "fmt"
  
  func main() {
      var p *int
      fmt.Println(p)
  }`,
      answerOptions: [
        { answerText: "nil", isCorrect: true },
        { answerText: "0", isCorrect: false },
        { answerText: "undefined", isCorrect: false },
        { answerText: "error", isCorrect: false },
      ],
    },
    {
      questionText: "Bagaimana cara memeriksa apakah sebuah interface adalah nil?",
      code: ``,
      answerOptions: [
        { answerText: "Dengan membandingkan interface dengan nil menggunakan operator perbandingan `==`.", isCorrect: true },
        { answerText: "Dengan menggunakan fungsi built-in `isNil()`.", isCorrect: false },
        { answerText: "Dengan memeriksa tipe data interface menggunakan `reflect` package.", isCorrect: false },
        { answerText: "Dengan mencoba dereferensi interface.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  import "fmt"
  
  func main() {
      var m map[string]int
      fmt.Println(m == nil)
  }`,
      answerOptions: [
        { answerText: "true", isCorrect: true },
        { answerText: "false", isCorrect: false },
        { answerText: "nil", isCorrect: false },
        { answerText: "error", isCorrect: false },
      ],
    },
    {
      questionText: "Apa yang terjadi jika kita mencoba mengakses elemen dari map yang nil?",
      code: ``,
      answerOptions: [
        { answerText: "Akan menghasilkan nilai default untuk tipe data elemen map tanpa error.", isCorrect: true },
        { answerText: "Akan menghasilkan error runtime.", isCorrect: false },
        { answerText: "Akan menghasilkan nilai kosong atau null tanpa error.", isCorrect: false },
        { answerText: "Akan menyebabkan program crash.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  import "fmt"
  
  func main() {
      var s []int
      fmt.Println(len(s))
  }`,
      answerOptions: [
        { answerText: "0", isCorrect: true },
        { answerText: "nil", isCorrect: false },
        { answerText: "error", isCorrect: false },
        { answerText: "undefined", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  import "fmt"
  
  func main() {
      var c chan int
      fmt.Println(c)
  }`,
      answerOptions: [
        { answerText: "nil", isCorrect: true },
        { answerText: "0", isCorrect: false },
        { answerText: "undefined", isCorrect: false },
        { answerText: "error", isCorrect: false },
      ],
    },
    {
      questionText: "Bisakah kita menambahkan elemen ke dalam slice yang nil?",
      code: ``,
      answerOptions: [
        { answerText: "Ya, kita bisa menambahkan elemen ke dalam slice yang nil, dan slice akan otomatis diinisialisasi.", isCorrect: true },
        { answerText: "Tidak, slice yang nil tidak dapat menampung elemen.", isCorrect: false },
        { answerText: "Ya, tetapi hanya jika slice telah diinisialisasi sebelumnya.", isCorrect: false },
        { answerText: "Tidak, kita harus memeriksa apakah slice tidak nil sebelum menambah elemen.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa yang terjadi jika kita mencoba untuk mengirim data ke channel yang nil?",
      code: ``,
      answerOptions: [
        { answerText: "Program akan deadlock karena channel yang nil tidak dapat menerima data.", isCorrect: true },
        { answerText: "Data akan dikirim dan diterima dengan normal.", isCorrect: false },
        { answerText: "Channel akan otomatis diinisialisasi dan data akan dikirim.", isCorrect: false },
        { answerText: "Program akan menghasilkan error runtime.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa yang harus dilakukan sebelum menggunakan pointer untuk menghindari nilai nil?",
      code: ``,
      answerOptions: [
        { answerText: "Pastikan pointer telah diinisialisasi dengan alokasi memori yang valid.", isCorrect: true },
        { answerText: "Pastikan pointer tidak dibandingkan dengan nilai nil.", isCorrect: false },
        { answerText: "Gunakan fungsi untuk memeriksa apakah pointer valid.", isCorrect: false },
        { answerText: "Selalu deklarasikan pointer dengan nilai default.", isCorrect: false },
      ],
    },
  ];


  const code1 = [
    {
      contoh:
        `
  package main

  import "fmt"

  func main() {
      // Membuat variabel pointer yang awalnya nil
      var ptr *int
      if ptr == nil {
          fmt.Println("Pointer ini kosong (nil).")
      } else {
          fmt.Println("Pointer ini memiliki nilai:", *ptr)
      }

      // Membuat variabel slice yang awalnya nil
      var slice []int
      if slice == nil {
          fmt.Println("Slice ini kosong (nil).")
      } else {
          fmt.Println("Slice ini memiliki elemen:", slice)
      }

      // Membuat variabel map yang awalnya nil
      var m map[string]int
      if m == nil {
          fmt.Println("Map ini kosong (nil).")
      } else {
          fmt.Println("Map ini memiliki elemen:", m)
      }
  }
  `
    },
  ]


  return (
    <div className='flex flex-col pb-3 lg:pt-5 lg:items-start lg:flex-row lg:gap-x-3 gap-y-7'>
      <div className='lg:w-[60%] xl:w-4/5'>
        <FillContent
          judul={'Nil'}
          pengertian={'nil adalah seperti tanda "tidak ada" atau "kosong". Bayangkan kamu memiliki kotak yang kosong dan tidak ada benda di dalamnya. Nil digunakan untuk menunjukkan bahwa tidak ada data atau informasi yang tersedia dalam sebuah variabel.(Nilai nol untuk pointer, interface, maps, slices, channels, dan fungsi).'}
          fungsi={'Nil digunakan untuk menunjukkan bahwa sebuah variabel tidak memiliki nilai atau data yang valid. Ini membantu kita untuk mengecek apakah variabel sudah diisi atau masih kosong. Dalam berbagai tipe data seperti pointer, slice, map, dan channel, nil berarti tidak ada objek atau data yang terkait dengan variabel tersebut.'}
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
