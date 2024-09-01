// Integer.js
import React, { useState } from 'react';
import QuizComponent from '../../QuizComponent';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FillContent } from '../fillContent';
export const TypeAssertions = () => {
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
      questionText: "Apa itu type assertion dalam Go?",
      code: ``,
      answerOptions: [
        { answerText: "Type assertion adalah cara untuk mengambil nilai konkret dari sebuah interface dengan menyatakan tipe yang diharapkan.", isCorrect: true },
        { answerText: "Type assertion adalah metode untuk mendeklarasikan tipe data dalam sebuah struct.", isCorrect: false },
        { answerText: "Type assertion adalah fungsi built-in yang mengubah tipe data menjadi string.", isCorrect: false },
        { answerText: "Type assertion adalah cara untuk mengimplementasikan interface dalam tipe data.", isCorrect: false },
      ],
    },
    {
      questionText: "Bagaimana cara menggunakan type assertion untuk memeriksa tipe data dari sebuah interface?",
      code: ``,
      answerOptions: [
        { answerText: "Dengan menggunakan sintaks `value, ok := interface.(T)` di mana `T` adalah tipe data yang diharapkan.", isCorrect: true },
        { answerText: "Dengan menggunakan sintaks `interface.Type()`, di mana `Type()` adalah metode untuk memeriksa tipe.", isCorrect: false },
        { answerText: "Dengan menggunakan fungsi `assertType()` dari package `reflect`.", isCorrect: false },
        { answerText: "Dengan langsung membandingkan interface dengan tipe data menggunakan `==`.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  import "fmt"
  
  func main() {
      var i interface{} = "hello"
      s, ok := i.(string)
      fmt.Println(s, ok)
  }`,
      answerOptions: [
        { answerText: `"hello true"`, isCorrect: true },
        { answerText: `"hello false"`, isCorrect: false },
        { answerText: `"false"`, isCorrect: false },
        { answerText: `"true"`, isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  import "fmt"
  
  func main() {
      var i interface{} = 42
      s, ok := i.(string)
      fmt.Println(s, ok)
  }`,
      answerOptions: [
        { answerText: `" false"`, isCorrect: true },
        { answerText: `"0 false"`, isCorrect: false },
        { answerText: `"42 false"`, isCorrect: false },
        { answerText: `"42 true"`, isCorrect: false },
      ],
    },
    {
      questionText: "Bagaimana cara menangani kesalahan saat melakukan type assertion?",
      code: ``,
      answerOptions: [
        { answerText: "Dengan memeriksa nilai boolean kedua dari type assertion, yang menunjukkan apakah assertion berhasil.", isCorrect: true },
        { answerText: "Dengan menggunakan fungsi `assert()` dari package `errors`.", isCorrect: false },
        { answerText: "Dengan menangkap panic yang dihasilkan dari type assertion.", isCorrect: false },
        { answerText: "Dengan menggunakan statement `if` untuk memeriksa kesalahan setelah assertion.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  import "fmt"
  
  func main() {
      var i interface{} = 3.14
      if f, ok := i.(float64); ok {
          fmt.Println(f)
      }
  }`,
      answerOptions: [
        { answerText: "3.14", isCorrect: true },
        { answerText: `"3.14"`, isCorrect: false },
        { answerText: `"float64"`, isCorrect: false },
        { answerText: `"false"`, isCorrect: false },
      ],
    },
    {
      questionText: "Bisakah type assertion digunakan untuk memeriksa tipe data yang tidak ada dalam interface?",
      code: ``,
      answerOptions: [
        { answerText: "Tidak, type assertion hanya berhasil jika tipe yang diharapkan ada dalam interface.", isCorrect: true },
        { answerText: "Ya, tetapi akan menghasilkan error jika tipe tidak ada.", isCorrect: false },
        { answerText: "Ya, akan menghasilkan nilai default tipe data jika tipe tidak ada.", isCorrect: false },
        { answerText: "Tidak, tetapi akan menyebabkan program crash.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  import "fmt"
  
  func main() {
      var i interface{} = []int{1, 2, 3}
      s, ok := i.([]int)
      fmt.Println(s, ok)
  }`,
      answerOptions: [
        { answerText: `[1 2 3] true`, isCorrect: true },
        { answerText: `[]int true`, isCorrect: false },
        { answerText: `[]int false`, isCorrect: false },
        { answerText: `nil true`, isCorrect: false },
      ],
    },
    {
      questionText: "Apa yang terjadi jika type assertion tidak berhasil dan kita tidak memeriksa nilai boolean hasil assertion?",
      code: ``,
      answerOptions: [
        { answerText: "Program akan tetap berjalan, tetapi hasilnya mungkin tidak sesuai dengan yang diharapkan.", isCorrect: true },
        { answerText: "Program akan menghasilkan panic dan berhenti.", isCorrect: false },
        { answerText: "Program akan menghasilkan error kompilasi.", isCorrect: false },
        { answerText: "Program akan mengembalikan nilai default dari tipe data.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  import "fmt"
  
  func main() {
      var i interface{} = true
      b, ok := i.(bool)
      fmt.Println(b, ok)
  }`,
      answerOptions: [
        { answerText: `true true`, isCorrect: true },
        { answerText: `false true`, isCorrect: false },
        { answerText: `true false`, isCorrect: false },
        { answerText: `false false`, isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  import "fmt"
  
  func main() {
      var i interface{} = "Go"
      if s, ok := i.(int); !ok {
          fmt.Println("Not an int")
      } else {
          fmt.Println(s)
      }
  }`,
      answerOptions: [
        { answerText: `"Not an int"`, isCorrect: true },
        { answerText: `"Go"`, isCorrect: false },
        { answerText: `"int"`, isCorrect: false },
        { answerText: `"false"`, isCorrect: false },
      ],
    },
  ];


  const code1 = [
    {
      contoh:
        `
  var i interface{} = "hello"
  s := i.(string)
  fmt.Println(s)
  `
    },
  ]


  return (
    <div className='flex flex-col pb-3 lg:pt-5 lg:items-start lg:flex-row lg:gap-x-3 gap-y-7'>
      <div className='lg:w-[60%] xl:w-4/5'>
        <FillContent
          judul={'Type Assertions'}
          pengertian={'Mengubah nilai interface kosong (interface{}) menjadi tipe tertentu.'}
          fungsi={'Memeriksa atau mengambil tipe konkret dari interface.'}
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
