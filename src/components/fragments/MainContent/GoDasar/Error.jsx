// Integer.js
import React, { useState } from 'react';
import QuizComponent from '../../QuizComponent';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { idea, nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FillContent } from '../FillContent';
import Accordion from '../../../elements/Acordion';
export const Error = () => {
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
      questionText: "Apa itu error dalam bahasa Go?",
      code: ``,
      answerOptions: [
        { answerText: "Sebuah tipe data yang digunakan untuk menangani kondisi kesalahan atau masalah yang terjadi selama eksekusi program.", isCorrect: true },
        { answerText: "Sebuah fungsi untuk melakukan debugging.", isCorrect: false },
        { answerText: "Sebuah variabel untuk menyimpan pesan kesalahan.", isCorrect: false },
        { answerText: "Sebuah tipe data untuk menyimpan informasi log.", isCorrect: false },
      ],
    },
    {
      questionText: "Bagaimana cara menangani error dalam Go?",
      code: ``,
      answerOptions: [
        { answerText: "Dengan memeriksa nilai return dari fungsi yang dapat menghasilkan error dan menggunakan pernyataan `if` untuk menangani error.", isCorrect: true },
        { answerText: "Dengan menggunakan pernyataan `try-catch`.", isCorrect: false },
        { answerText: "Dengan mendeklarasikan fungsi dengan kata kunci `error`.", isCorrect: false },
        { answerText: "Dengan mendefinisikan fungsi `handleError`.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  
  import (
      "fmt"
      "errors"
  )
  
  func divide(a, b int) (int, error) {
      if b == 0 {
          return 0, errors.New("division by zero")
      }
      return a / b, nil
  }
  
  func main() {
      result, err := divide(10, 0)
      if err != nil {
          fmt.Println(err)
      } else {
          fmt.Println(result)
      }
  }`,
      answerOptions: [
        { answerText: "division by zero", isCorrect: true },
        { answerText: "0", isCorrect: false },
        { answerText: "Error", isCorrect: false },
        { answerText: "10", isCorrect: false },
      ],
    },
    {
      questionText: "Bagaimana cara membuat custom error dalam Go?",
      code: ``,
      answerOptions: [
        { answerText: "Dengan mendefinisikan tipe baru yang mengimplementasikan antarmuka `error`.", isCorrect: true },
        { answerText: "Dengan menggunakan fungsi `errors.New`.", isCorrect: false },
        { answerText: "Dengan mendeklarasikan variabel dengan tipe `error`.", isCorrect: false },
        { answerText: "Dengan menggunakan pernyataan `throw`.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  
  import (
      "fmt"
  )
  
  type MyError struct {
      Msg string
  }
  
  func (e *MyError) Error() string {
      return e.Msg
  }
  
  func doSomething() error {
      return &MyError{Msg: "This is a custom error"}
  }
  
  func main() {
      err := doSomething()
      if err != nil {
          fmt.Println(err)
      }
  }`,
      answerOptions: [
        { answerText: "This is a custom error", isCorrect: true },
        { answerText: "Error", isCorrect: false },
        { answerText: "Custom error", isCorrect: false },
        { answerText: "Nothing", isCorrect: false },
      ],
    },
    {
      questionText: "Bagaimana cara memeriksa apakah suatu error adalah tipe tertentu?",
      code: ``,
      answerOptions: [
        { answerText: "Dengan menggunakan type assertion atau type switch.", isCorrect: true },
        { answerText: "Dengan menggunakan fungsi `error.Is`.", isCorrect: false },
        { answerText: "Dengan mendeklarasikan variabel error dengan tipe yang sama.", isCorrect: false },
        { answerText: "Dengan menggunakan operator `==`.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  
  import (
      "fmt"
      "errors"
  )
  
  func main() {
      err := errors.New("some error")
      if err != nil {
          fmt.Println(err.Error())
      }
  }`,
      answerOptions: [
        { answerText: "some error", isCorrect: true },
        { answerText: "Error", isCorrect: false },
        { answerText: "nil", isCorrect: false },
        { answerText: "Nothing", isCorrect: false },
      ],
    },
    {
      questionText: "Apa tujuan dari metode `Error()` dalam custom error?",
      code: ``,
      answerOptions: [
        { answerText: "Untuk mengembalikan pesan kesalahan sebagai string.", isCorrect: true },
        { answerText: "Untuk mengubah pesan kesalahan dalam error.", isCorrect: false },
        { answerText: "Untuk mendeklarasikan tipe error.", isCorrect: false },
        { answerText: "Untuk menginisialisasi error baru.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  
  import (
      "fmt"
      "errors"
  )
  
  func main() {
      var err error = errors.New("error occurred")
      if err != nil {
          fmt.Println(err == nil)
      }
  }`,
      answerOptions: [
        { answerText: "false", isCorrect: true },
        { answerText: "true", isCorrect: false },
        { answerText: "error occurred", isCorrect: false },
        { answerText: "Nothing", isCorrect: false },
      ],
    },
    {
      questionText: "Bagaimana cara mengembalikan error dari fungsi dengan pesan kustom?",
      code: ``,
      answerOptions: [
        { answerText: "Dengan menggunakan `errors.New` atau membuat custom error type dengan pesan kustom.", isCorrect: true },
        { answerText: "Dengan menggunakan `fmt.Errorf` untuk format pesan kesalahan.", isCorrect: false },
        { answerText: "Dengan menggunakan `error` interface langsung.", isCorrect: false },
        { answerText: "Dengan mendeklarasikan variabel `error` di dalam fungsi.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  
  import (
      "fmt"
  )
  
  type CustomError struct {
      Code int
      Msg  string
  }
  
  func (e *CustomError) Error() string {
      return fmt.Sprintf("Error %d: %s", e.Code, e.Msg)
  }
  
  func main() {
      err := &CustomError{Code: 404, Msg: "Not Found"}
      fmt.Println(err)
  }`,
      answerOptions: [
        { answerText: "Error 404: Not Found", isCorrect: true },
        { answerText: "404: Not Found", isCorrect: false },
        { answerText: "Not Found", isCorrect: false },
        { answerText: "Error", isCorrect: false },
      ],
    },
    {
      questionText: "Apa yang dimaksud dengan error wrapping dalam Go?",
      code: ``,
      answerOptions: [
        { answerText: "Proses menambahkan konteks tambahan pada error dengan menggunakan `fmt.Errorf` atau `errors.Wrap`.", isCorrect: true },
        { answerText: "Proses membuat error baru dengan pesan yang sama.", isCorrect: false },
        { answerText: "Proses mendeklarasikan variabel error baru.", isCorrect: false },
        { answerText: "Proses menghapus error dari program.", isCorrect: false },
      ],
    },
  ];

  const code1 = [
    {
      contoh:
        `
  // cara menggunakan error
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
  }
  `
    },
    {
      contoh:
        `
  // Custom error
  package main

  import (
      "errors"
      "fmt"
  )

  // Fungsi yang menerima angka positif
  func cekAngkaPositif(angka int) error {
      if angka < 0 {
          return errors.New("angka tidak boleh negatif") // Membuat Custom Error
      }
      return nil // Jika tidak ada error, kembalikan nilai nil
  }

  func main() {
      var angka int
      fmt.Print("Masukkan angka positif: ")
      fmt.Scanln(&angka)

      // Memanggil fungsi cekAngkaPositif untuk validasi angka
      if err := cekAngkaPositif(angka); err != nil {
          fmt.Println("Error:", err.Error()) // Output error jika angka negatif
      } else {
          fmt.Println("Angka yang Anda masukkan adalah:", angka) // Output angka jika berhasil
      }
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
          judul={'Error'}
          pengertian={'Error adalah cara untuk memberi tahu bahwa ada sesuatu yang salah saat program dijalankan. Bayangkan saja seperti alarm yang berbunyi ketika ada masalah di rumah, seperti pintu yang tidak terkunci atau jendela yang terbuka. Go memungkinkan kita untuk membuat Custom Error, yaitu error buatan sendiri yang dirancang khusus untuk kebutuhan kita. Ini seperti membuat alarm khusus untuk masalah tertentu yang kita inginkan, misalnya alarm untuk memberitahu bahwa susu di kulkas sudah habis.'}
          fungsi={'Error digunakan agar program kita bisa mengetahui dan menangani masalah yang mungkin terjadi, seperti input yang salah atau koneksi internet yang terputus. Dengan membuat Custom Error, kita bisa memberikan pesan yang lebih jelas dan spesifik tentang masalah yang terjadi sehingga lebih mudah untuk diperbaiki.'}
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
      <div>
        <h1 className='mb-2 italic font-medium font-poppins'>Latihan: </h1>
        {pertanyaan2.map((item) => (
          <Accordion
            level={item.level}
            pertanyaan={item.pertanyaan}
            jawaban={item.jawaban}
          />
        ))}
      </div>
      <div>
      </div>
    </div >
  );
};
