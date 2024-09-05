// Integer.js
import React, { useState } from 'react';
import QuizComponent from '../../QuizComponent';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FillContent } from '../FillContent';
import Accordion from '../../../elements/Acordion';
export const Lanjutan = () => {
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
      questionText: "Apa itu pointer dalam Go?",
      code: ``,
      answerOptions: [
        { answerText: "Pointer adalah tipe data yang menyimpan alamat memori dari variabel lain.", isCorrect: true },
        { answerText: "Pointer adalah tipe data yang menyimpan nilai numerik.", isCorrect: false },
        { answerText: "Pointer adalah tipe data khusus untuk menyimpan string.", isCorrect: false },
        { answerText: "Pointer adalah metode untuk mengakses elemen array.", isCorrect: false },
      ],
    },
    {
      questionText: "Bagaimana cara mendeklarasikan pointer dalam Go?",
      code: ``,
      answerOptions: [
        { answerText: "Dengan menambahkan `*` sebelum tipe data, misalnya `var p *int`.", isCorrect: true },
        { answerText: "Dengan menggunakan sintaks `pointer int`.", isCorrect: false },
        { answerText: "Dengan menambahkan `&` sebelum tipe data, misalnya `var p &int`.", isCorrect: false },
        { answerText: "Dengan menggunakan `var p: int*`.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  import "fmt"
  
  func main() {
      var x int = 10
      var p *int = &x
      fmt.Println(p)
  }`,
      answerOptions: [
        { answerText: "Alamat memori dari variabel x", isCorrect: true },
        { answerText: "10", isCorrect: false },
        { answerText: "x", isCorrect: false },
        { answerText: "nil", isCorrect: false },
      ],
    },
    {
      questionText: "Bagaimana cara mengakses nilai yang ditunjuk oleh pointer?",
      code: ``,
      answerOptions: [
        { answerText: "Dengan menggunakan operator dereference `*`, misalnya `*p`.", isCorrect: true },
        { answerText: "Dengan menggunakan operator `&`.", isCorrect: false },
        { answerText: "Dengan memanggil metode `value()`.", isCorrect: false },
        { answerText: "Dengan langsung mencetak pointer.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  import "fmt"
  
  func main() {
      var x int = 10
      var p *int = &x
      *p = 20
      fmt.Println(x)
  }`,
      answerOptions: [
        { answerText: "20", isCorrect: true },
        { answerText: "10", isCorrect: false },
        { answerText: "nil", isCorrect: false },
        { answerText: "alamat memori", isCorrect: false },
      ],
    },
    {
      questionText: "Apa yang terjadi jika kita mencoba untuk mendeklarasikan pointer tanpa menginisialisasinya?",
      code: ``,
      answerOptions: [
        { answerText: "Pointer akan diinisialisasi dengan nilai `nil`.", isCorrect: true },
        { answerText: "Pointer akan diinisialisasi dengan nilai default dari tipe data.", isCorrect: false },
        { answerText: "Pointer akan menghasilkan error kompilasi.", isCorrect: false },
        { answerText: "Pointer akan mengacu ke alamat memori sembarangan.", isCorrect: false },
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
        { answerText: "error", isCorrect: false },
        { answerText: "undefined", isCorrect: false },
      ],
    },
    {
      questionText: "Apa yang terjadi jika kita mencoba untuk dereference pointer yang bernilai `nil`?",
      code: ``,
      answerOptions: [
        { answerText: "Program akan menghasilkan panic dan berhenti.", isCorrect: true },
        { answerText: "Program akan menghasilkan nilai default dari tipe data.", isCorrect: false },
        { answerText: "Program akan tetap berjalan tanpa efek.", isCorrect: false },
        { answerText: "Program akan mengabaikan dereference dan melanjutkan.", isCorrect: false },
      ],
    },
    {
      questionText: "Bagaimana cara menginisialisasi pointer dengan nilai awal?",
      code: ``,
      answerOptions: [
        { answerText: "Dengan menggunakan operator `&` untuk mendapatkan alamat memori dari variabel.", isCorrect: true },
        { answerText: "Dengan langsung menetapkan nilai pada pointer, misalnya `p = 10`.", isCorrect: false },
        { answerText: "Dengan menggunakan fungsi `new()` untuk alokasi memori.", isCorrect: false },
        { answerText: "Dengan mendeklarasikan pointer dan nilai secara bersamaan, misalnya `var p *int = 10`.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  import "fmt"
  
  func main() {
      var x int = 5
      var p *int = &x
      var q *int = p
      fmt.Println(*q)
  }`,
      answerOptions: [
        { answerText: "5", isCorrect: true },
        { answerText: "x", isCorrect: false },
        { answerText: "alamat memori dari x", isCorrect: false },
        { answerText: "nil", isCorrect: false },
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
      // Membuat variabel biasa
      angka := 10
      fmt.Println("Nilai awal angka:", angka) // Output: Nilai awal angka: 10

      // Membuat pointer yang menunjuk ke variabel angka
      var ptr *int = &angka
      fmt.Println("Alamat pointer:", ptr)          // Output: Alamat pointer: (alamat memori)
      fmt.Println("Nilai yang ditunjuk pointer:", *ptr) // Output: Nilai yang ditunjuk pointer: 10

      // Mengubah nilai melalui pointer
      *ptr = 20
      fmt.Println("Nilai setelah diubah melalui pointer:", angka) // Output: Nilai setelah diubah melalui pointer: 20
  }
  `
    },
  ]

  const pertanyaan2 = [
    {
      id: 1,
      level: "Mudah",
      pertanyaan: "Apa yang akan terjadi jika kita memanggil fungsi `cekAngkaPositif` dengan angka negatif?",
      jawaban: `  // cara menggunakan error
  package main

  import (
      "fmt"
      "strconv"
  )

  func main() {
      var input string
      fmt.Print("Masukkan angka: ")
      fmt.Scanln(&input)

      // Mengonversi input string menjadi angka
      if number, err := strconv.Atoi(input); err != nil {
          fmt.Println("Error:", err.Error()) // Output error jika input bukan angka
      } else {
          fmt.Println("Angka yang Anda masukkan adalah:", number) // Output angka jika berhasil
      }
  }`
    },
    {
      id: 2,
      level: "Sedang",
      pertanyaan: "Apa yang akan terjadi jika kita memanggil fungsi `cekAngkaPositif` dengan angka negatif?",
      jawaban: `hehe`
    },
    {
      id: 3,
      level: "Lanjutan",
      pertanyaan: "Apa yang akan terjadi jika kita memanggil fungsi `cekAngkaPositif` dengan angka negatif?",
      jawaban: `hehe`
    },
  ]

  return (
    <div className='flex flex-col pb-3 lg:pt-5 lg:items-start lg:flex-row lg:gap-x-3 gap-y-7'>
      <div className='lg:w-[60%] xl:w-4/5'>
        <FillContent
          judul={'Pointer'}
          pengertian={'Pointer di Go adalah seperti petunjuk atau alamat yang menunjukkan lokasi suatu benda di dalam kotak penyimpanan. Bayangkan kamu memiliki sebuah peta yang menunjukkan di mana mainan kesayanganmu berada di dalam sebuah ruangan. Pointer memberikan informasi tentang di mana sesuatu berada, bukan benda itu sendiri.(Menyimpan alamat memori suatu variabel).'}
          fungsi={'Pointer digunakan ketika kita ingin mengetahui lokasi dari data atau ingin mengubah data langsung di tempat tanpa membuat salinan baru. Ini membantu kita mengelola memori dengan lebih efisien dan bekerja dengan data yang besar atau kompleks.'}
        >
          {code1.map((item) => (
            <SyntaxHighlighter language="go" style={nightOwl} className="max-w-full mb-4 rounded-lg font-poppins">
              {item.contoh}
            </SyntaxHighlighter>
          ))}
        </FillContent>
        <div className='max-w-[22rem] sm:max-w-full xl:max-w-3xl'>
          <h1 className='mb-2 italic font-medium font-poppins'>Latihan: </h1>
          {pertanyaan2.map((item) => (
            <Accordion
              level={item.level}
              pertanyaan={item.pertanyaan}
              jawaban={item.jawaban}
            />
          ))}
        </div>
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
