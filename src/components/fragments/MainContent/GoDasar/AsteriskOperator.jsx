// Integer.js
import React, { useState } from 'react';
import QuizComponent from '../../QuizComponent';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FillContent } from '../FillContent';
export const AsteriskOperator = () => {
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
      questionText: "Apa fungsi dari operator asterisk (*) dalam Go?",
      code: ``,
      answerOptions: [
        { answerText: "Operator asterisk (*) digunakan untuk dereference pointer, yaitu mengambil nilai yang ditunjuk oleh pointer.", isCorrect: true },
        { answerText: "Operator asterisk (*) digunakan untuk mendeklarasikan variabel tipe pointer.", isCorrect: false },
        { answerText: "Operator asterisk (*) digunakan untuk mengalikan dua nilai numerik.", isCorrect: false },
        { answerText: "Operator asterisk (*) digunakan untuk mengakses elemen array.", isCorrect: false },
      ],
    },
    {
      questionText: "Bagaimana cara mendeklarasikan pointer dengan menggunakan asterisk (*)?",
      code: ``,
      answerOptions: [
        { answerText: "Dengan menggunakan sintaks `var p *int` di mana `*int` adalah tipe pointer.", isCorrect: true },
        { answerText: "Dengan menggunakan sintaks `var p int*` di mana `int*` adalah tipe pointer.", isCorrect: false },
        { answerText: "Dengan menggunakan sintaks `var p = &int` di mana `&int` adalah pointer.", isCorrect: false },
        { answerText: "Dengan menggunakan sintaks `var p = *int` di mana `*int` adalah pointer.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  import "fmt"
  
  func main() {
      var x int = 10
      var p *int = &x
      fmt.Println(*p)
  }`,
      answerOptions: [
        { answerText: "10", isCorrect: true },
        { answerText: "x", isCorrect: false },
        { answerText: "alamat memori dari x", isCorrect: false },
        { answerText: "nil", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  import "fmt"
  
  func main() {
      var x int = 20
      var p *int = &x
      *p = 30
      fmt.Println(x)
  }`,
      answerOptions: [
        { answerText: "30", isCorrect: true },
        { answerText: "20", isCorrect: false },
        { answerText: "alamat memori dari x", isCorrect: false },
        { answerText: "nil", isCorrect: false },
      ],
    },
    {
      questionText: "Bagaimana cara menggunakan asterisk (*) untuk mengalikan dua nilai dalam Go?",
      code: ``,
      answerOptions: [
        { answerText: "Asterisk (*) digunakan untuk mengalikan dua nilai numerik secara langsung, seperti `a * b`.", isCorrect: true },
        { answerText: "Asterisk (*) tidak dapat digunakan untuk operasi perkalian; gunakan operator `multiply()`.", isCorrect: false },
        { answerText: "Asterisk (*) digunakan untuk mengalikan nilai dalam konteks pointer.", isCorrect: false },
        { answerText: "Asterisk (*) digunakan untuk mendeklarasikan tipe data dalam sebuah struct.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  import "fmt"
  
  func main() {
      var a int = 4
      var b int = 5
      fmt.Println(a * b)
  }`,
      answerOptions: [
        { answerText: "20", isCorrect: true },
        { answerText: "9", isCorrect: false },
        { answerText: "45", isCorrect: false },
        { answerText: "0", isCorrect: false },
      ],
    },
    {
      questionText: "Apa yang akan terjadi jika kita mencoba mendereference pointer yang tidak diinisialisasi?",
      code: ``,
      answerOptions: [
        { answerText: "Program akan menghasilkan panic dan berhenti.", isCorrect: true },
        { answerText: "Program akan mengembalikan nilai default dari tipe data.", isCorrect: false },
        { answerText: "Program akan menghasilkan nilai nol.", isCorrect: false },
        { answerText: "Program akan tetap berjalan tanpa efek.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  import "fmt"
  
  func main() {
      var a int = 7
      var p *int = &a
      *p = *p * 2
      fmt.Println(a)
  }`,
      answerOptions: [
        { answerText: "14", isCorrect: true },
        { answerText: "7", isCorrect: false },
        { answerText: "0", isCorrect: false },
        { answerText: "14 * 2", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  import "fmt"
  
  func main() {
      var a int = 6
      var b *int = &a
      var c int = *b
      fmt.Println(c)
  }`,
      answerOptions: [
        { answerText: "6", isCorrect: true },
        { answerText: "a", isCorrect: false },
        { answerText: "alamat memori dari a", isCorrect: false },
        { answerText: "nil", isCorrect: false },
      ],
    },
    {
      questionText: "Bagaimana cara mengubah nilai variabel yang ditunjuk oleh pointer?",
      code: ``,
      answerOptions: [
        { answerText: "Dengan menggunakan dereference pointer dan menetapkan nilai baru, misalnya `*p = nilaiBaru`.", isCorrect: true },
        { answerText: "Dengan langsung menetapkan nilai baru pada pointer, misalnya `p = nilaiBaru`.", isCorrect: false },
        { answerText: "Dengan menggunakan fungsi `setValue()` dari package `utils`.", isCorrect: false },
        { answerText: "Dengan mengubah nilai variabel yang memegang alamat pointer.", isCorrect: false },
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
  ];


  const code1 = [
    {
      contoh:
        `
  // contoh sederhana
  var p *int = &x
  fmt.Println(*p) // Mengakses nilai x melalui pointer
  `
    },
    {
      contoh:
        `
  // contoh lanjutan
  package main

  import "fmt"

  func main() {
      // Membuat variabel biasa
      angka := 30
      fmt.Println("Nilai awal angka:", angka) // Output: Nilai awal angka: 30

      // Membuat pointer yang menunjuk ke variabel angka
      var ptr *int = &angka
      fmt.Println("Alamat pointer:", ptr) // Output: Alamat pointer: (alamat memori)

      // Mengakses nilai melalui asterisk operator
      nilaiMelaluiPointer := *ptr
      fmt.Println("Nilai yang ditunjuk pointer:", nilaiMelaluiPointer) // Output: Nilai yang ditunjuk pointer: 30

      // Mengubah nilai melalui asterisk operator
      *ptr = 50
      fmt.Println("Nilai setelah diubah melalui pointer:", angka) // Output: Nilai setelah diubah melalui pointer: 50
  }
  `
    },
  ]


  return (
    <div className='flex flex-col pb-3 lg:pt-5 lg:items-start lg:flex-row lg:gap-x-3 gap-y-7'>
      <div className='lg:w-[60%] xl:w-4/5'>
        <FillContent
          judul={'Asterisk Operator'}
          pengertian={'Operator dereferensi untuk mendapatkan nilai dari alamat yang disimpan dalam pointer.'}
          fungsi={'Mengakses atau mengubah nilai yang direferensikan oleh pointer.'}
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
