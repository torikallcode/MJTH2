// Integer.js
import React, { useState } from 'react';
import QuizComponent from '../../QuizComponent';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FillContent } from '../fillContent';
export const AccesModifier = () => {
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
      questionText: "Apa itu 'Access Modifier' dalam bahasa Go?",
      code: ``,
      answerOptions: [
        { answerText: "Fitur yang mengontrol visibilitas dan aksesibilitas elemen dalam kode.", isCorrect: true },
        { answerText: "Metode untuk mengoptimalkan performa aplikasi.", isCorrect: false },
        { answerText: "Fitur untuk mengelola versi package.", isCorrect: false },
        { answerText: "Jenis data khusus dalam Go.", isCorrect: false },
      ],
    },
    {
      questionText: "Bagaimana cara membuat sebuah field dalam struct yang hanya dapat diakses dari dalam package yang sama?",
      code: ``,
      answerOptions: [
        { answerText: "Dengan mendeklarasikan field dengan huruf kecil di awal nama field.", isCorrect: true },
        { answerText: "Dengan mendeklarasikan field dengan huruf kapital di awal nama field.", isCorrect: false },
        { answerText: "Dengan menggunakan kata kunci `private` sebelum nama field.", isCorrect: false },
        { answerText: "Dengan mendeklarasikan field dalam metode private.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa yang dimaksud dengan visibilitas public dan private dalam bahasa Go?",
      code: ``,
      answerOptions: [
        { answerText: "Public berarti dapat diakses dari package lain, private berarti hanya dapat diakses dalam package yang sama.", isCorrect: true },
        { answerText: "Public berarti dapat diakses dari dalam fungsi, private berarti hanya dapat diakses dalam file yang sama.", isCorrect: false },
        { answerText: "Public berarti variabel global, private berarti variabel lokal.", isCorrect: false },
        { answerText: "Public dan private adalah istilah untuk tipe data dalam Go.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  
  import "fmt"
  
  type Person struct {
      Name string
  }
  
  func main() {
      p := Person{Name: "Alice"}
      fmt.Println(p.Name)
  }`,
      answerOptions: [
        { answerText: "Alice", isCorrect: true },
        { answerText: "Error", isCorrect: false },
        { answerText: "nil", isCorrect: false },
        { answerText: "undefined", isCorrect: false },
      ],
    },
    {
      questionText: "Bagaimana cara membuat metode pada struct yang hanya dapat diakses dari luar package?",
      code: ``,
      answerOptions: [
        { answerText: "Dengan mendeklarasikan metode dengan huruf kapital di awal nama metode.", isCorrect: true },
        { answerText: "Dengan mendeklarasikan metode dengan huruf kecil di awal nama metode.", isCorrect: false },
        { answerText: "Dengan menggunakan kata kunci `public` sebelum nama metode.", isCorrect: false },
        { answerText: "Dengan menggunakan metode `get()` dan `set()`.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa yang akan terjadi jika Anda mencoba mengakses field struct yang dideklarasikan dengan huruf kecil dari luar package?",
      code: ``,
      answerOptions: [
        { answerText: "Akan menghasilkan error karena field tersebut private.", isCorrect: true },
        { answerText: "Field tersebut tetap dapat diakses, tetapi hanya dengan nama variabel lokal.", isCorrect: false },
        { answerText: "Field tersebut akan memiliki nilai default.", isCorrect: false },
        { answerText: "Field tersebut akan diabaikan tanpa menyebabkan error.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  
  import "fmt"
  
  type Car struct {
      Model string
  }
  
  func (c Car) GetModel() string {
      return c.Model
  }
  
  func main() {
      c := Car{Model: "Tesla"}
      fmt.Println(c.GetModel())
  }`,
      answerOptions: [
        { answerText: "Tesla", isCorrect: true },
        { answerText: "Car", isCorrect: false },
        { answerText: "Model", isCorrect: false },
        { answerText: "Error", isCorrect: false },
      ],
    },
    {
      questionText: "Bagaimana cara mengakses metode public dari package lain dalam Go?",
      code: ``,
      answerOptions: [
        { answerText: "Dengan menggunakan nama metode yang diawali dengan huruf kapital.", isCorrect: true },
        { answerText: "Dengan menggunakan nama metode yang diawali dengan huruf kecil.", isCorrect: false },
        { answerText: "Dengan mendeklarasikan metode dalam file yang sama.", isCorrect: false },
        { answerText: "Dengan menggunakan keyword `public` sebelum nama metode.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  
  import "fmt"
  
  type Animal struct {
      Species string
  }
  
  func (a Animal) SpeciesName() string {
      return a.Species
  }
  
  func main() {
      a := Animal{Species: "Lion"}
      fmt.Println(a.SpeciesName())
  }`,
      answerOptions: [
        { answerText: "Lion", isCorrect: true },
        { answerText: "Species", isCorrect: false },
        { answerText: "Animal", isCorrect: false },
        { answerText: "Error", isCorrect: false },
      ],
    },
    {
      questionText: "Bagaimana cara mendeklarasikan field dalam struct yang hanya dapat diakses di dalam package yang sama?",
      code: ``,
      answerOptions: [
        { answerText: "Dengan menggunakan huruf kecil di awal nama field.", isCorrect: true },
        { answerText: "Dengan menggunakan huruf kapital di awal nama field.", isCorrect: false },
        { answerText: "Dengan menggunakan kata kunci `private` di depan nama field.", isCorrect: false },
        { answerText: "Dengan mendeklarasikan field dalam fungsi private.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa yang akan terjadi jika Anda mencoba mengakses metode private dari luar package?",
      code: ``,
      answerOptions: [
        { answerText: "Akan menghasilkan error karena metode tersebut tidak dapat diakses.", isCorrect: true },
        { answerText: "Metode tersebut tetap dapat diakses tanpa masalah.", isCorrect: false },
        { answerText: "Akan diakses dengan nilai default dari tipe data metode.", isCorrect: false },
        { answerText: "Program akan otomatis mengubah metode menjadi public.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  
  import "fmt"
  
  type Book struct {
      Title string
  }
  
  func (b Book) GetTitle() string {
      return b.Title
  }
  
  func main() {
      b := Book{Title: "Go Programming"}
      fmt.Println(b.GetTitle())
  }`,
      answerOptions: [
        { answerText: "Go Programming", isCorrect: true },
        { answerText: "Book", isCorrect: false },
        { answerText: "Title", isCorrect: false },
        { answerText: "Error", isCorrect: false },
      ],
    },
    {
      questionText: "Apa yang dimaksud dengan visibilitas public dan private dalam Go?",
      code: ``,
      answerOptions: [
        { answerText: "Public berarti dapat diakses dari package lain, private berarti hanya dapat diakses dalam package yang sama.", isCorrect: true },
        { answerText: "Public berarti dapat diakses dari dalam fungsi, private berarti hanya dapat diakses dalam file yang sama.", isCorrect: false },
        { answerText: "Public dan private adalah istilah untuk tipe data dalam Go.", isCorrect: false },
        { answerText: "Public berarti variabel global, private berarti variabel lokal.", isCorrect: false },
      ],
    },
  ];


  const code1 = [
    {
      contoh:
        `
file://%20public%20functionfunc%20publicfunction()%20{}//%20Private%20functionfunc%20privateFunction()%20%7B%7D
  `
    },
  ]


  return (
    <div className='flex flex-col pb-3 lg:pt-5 lg:items-start lg:flex-row lg:gap-x-3 gap-y-7'>
      <div className='lg:w-[60%] xl:w-4/5'>
        <FillContent
          judul={'Acces Modifier'}
          pengertian={'Penentuan visibilitas simbol (variabel, fungsi) di luar package; simbol yang diawali huruf kapital dapat diakses dari luar package.'}
          fungsi={'Mengontrol aksesibilitas dan enkapsulasi data.'}
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
