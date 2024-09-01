// Integer.js
import React, { useState } from 'react';
import QuizComponent from '../../QuizComponent';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FillContent } from '../fillContent';
export const PointerStruct = () => {
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
      questionText: "Apa yang terjadi jika kita menggunakan pointer untuk mengakses field di dalam struct?",
      code: ``,
      answerOptions: [
        { answerText: "Kita dapat mengakses dan memodifikasi nilai field struct tersebut.", isCorrect: true },
        { answerText: "Kita hanya dapat membaca nilai field struct, tidak dapat memodifikasinya.", isCorrect: false },
        { answerText: "Pointer tidak dapat digunakan untuk mengakses field struct.", isCorrect: false },
        { answerText: "Pointer akan menyebabkan error saat mengakses field struct.", isCorrect: false },
      ],
    },
    {
      questionText: "Bagaimana cara mendeklarasikan sebuah struct yang menggunakan pointer sebagai field?",
      code: ``,
      answerOptions: [
        { answerText: "Dengan mendeklarasikan field sebagai tipe pointer, misalnya `Field *int`.", isCorrect: true },
        { answerText: "Dengan mendeklarasikan field sebagai tipe data biasa, misalnya `Field int`.", isCorrect: false },
        { answerText: "Dengan mendeklarasikan field sebagai interface, misalnya `Field interface{}`.", isCorrect: false },
        { answerText: "Dengan mendeklarasikan field sebagai slice, misalnya `Field []int`.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  import "fmt"
  
  type Person struct {
      Name *string
  }
  
  func main() {
      name := "John"
      p := Person{Name: &name}
      fmt.Println(*p.Name)
  }`,
      answerOptions: [
        { answerText: "John", isCorrect: true },
        { answerText: "nil", isCorrect: false },
        { answerText: "Error", isCorrect: false },
        { answerText: "Alamat memori dari name", isCorrect: false },
      ],
    },
    {
      questionText: "Bagaimana cara mengubah nilai field struct yang merupakan pointer di dalam sebuah fungsi?",
      code: ``,
      answerOptions: [
        { answerText: "Dengan menggunakan dereference pointer dan mengubah nilai, misalnya `*p.Name = \"Jane\"`.", isCorrect: true },
        { answerText: "Dengan mengubah nilai pointer itu sendiri, misalnya `p.Name = \"Jane\"`.", isCorrect: false },
        { answerText: "Dengan mengubah nilai field struct tanpa dereference, misalnya `p.Name = \"Jane\"`.", isCorrect: false },
        { answerText: "Dengan menggunakan method receiver untuk struct tersebut.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  import "fmt"
  
  type Rectangle struct {
      Width  *int
      Height *int
  }
  
  func main() {
      w := 10
      h := 20
      r := Rectangle{Width: &w, Height: &h}
      fmt.Println(*r.Width, *r.Height)
  }`,
      answerOptions: [
        { answerText: "10 20", isCorrect: true },
        { answerText: "0 0", isCorrect: false },
        { answerText: "10 0", isCorrect: false },
        { answerText: "0 20", isCorrect: false },
      ],
    },
    {
      questionText: "Apa yang harus dilakukan untuk menginisialisasi field struct yang merupakan pointer?",
      code: ``,
      answerOptions: [
        { answerText: "Menggunakan operator `&` untuk mendapatkan alamat memori dari nilai yang diinginkan.", isCorrect: true },
        { answerText: "Menggunakan operator `*` untuk mendapatkan nilai dari pointer.", isCorrect: false },
        { answerText: "Mendeklarasikan field struct tanpa inisialisasi.", isCorrect: false },
        { answerText: "Menggunakan metode `new` untuk alokasi memori.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa yang terjadi jika field pointer dalam struct tidak diinisialisasi?",
      code: ``,
      answerOptions: [
        { answerText: "Field pointer akan memiliki nilai `nil`.", isCorrect: true },
        { answerText: "Field pointer akan memiliki nilai default dari tipe data.", isCorrect: false },
        { answerText: "Field pointer akan menghasilkan error saat diakses.", isCorrect: false },
        { answerText: "Field pointer akan mengalokasikan memori secara otomatis.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  import "fmt"
  
  type Book struct {
      Title *string
  }
  
  func updateTitle(b *Book, newTitle string) {
      b.Title = &newTitle
  }
  
  func main() {
      title := "Go Programming"
      b := Book{Title: &title}
      updateTitle(&b, "Advanced Go Programming")
      fmt.Println(*b.Title)
  }`,
      answerOptions: [
        { answerText: "Advanced Go Programming", isCorrect: true },
        { answerText: "Go Programming", isCorrect: false },
        { answerText: "nil", isCorrect: false },
        { answerText: "Error", isCorrect: false },
      ],
    },
    {
      questionText: "Bagaimana cara mengakses nilai dari pointer yang merupakan field di dalam struct dari luar fungsi?",
      code: ``,
      answerOptions: [
        { answerText: "Dengan menggunakan dereference pointer, misalnya `*p.Title`.", isCorrect: true },
        { answerText: "Dengan menggunakan nama pointer secara langsung, misalnya `p.Title`.", isCorrect: false },
        { answerText: "Dengan menggunakan metode `get()`, misalnya `p.get(Title)`.", isCorrect: false },
        { answerText: "Dengan menggunakan operator `&`, misalnya `&p.Title`.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  import "fmt"
  
  type Employee struct {
      Name *string
      Age  *int
  }
  
  func main() {
      name := "Alice"
      age := 30
      e := Employee{Name: &name, Age: &age}
      fmt.Println(*e.Name, *e.Age)
  }`,
      answerOptions: [
        { answerText: "Alice 30", isCorrect: true },
        { answerText: "Alice 0", isCorrect: false },
        { answerText: "nil 30", isCorrect: false },
        { answerText: "0 0", isCorrect: false },
      ],
    },
    {
      questionText: "Apa yang akan terjadi jika kita mencoba untuk mendereference pointer ke field dalam struct yang merupakan `nil`?",
      code: ``,
      answerOptions: [
        { answerText: "Akan menghasilkan panic.", isCorrect: true },
        { answerText: "Akan menghasilkan nilai default dari tipe data.", isCorrect: false },
        { answerText: "Akan menghasilkan error kompilasi.", isCorrect: false },
        { answerText: "Akan mengalokasikan memori baru.", isCorrect: false },
      ],
    },
    {
      questionText: "Bagaimana cara mengatasi error saat mendereference pointer yang `nil` di dalam struct?",
      code: ``,
      answerOptions: [
        { answerText: "Dengan memeriksa apakah pointer adalah `nil` sebelum mendereference.", isCorrect: true },
        { answerText: "Dengan langsung mendereference pointer tanpa memeriksa.", isCorrect: false },
        { answerText: "Dengan menetapkan nilai default untuk pointer.", isCorrect: false },
        { answerText: "Dengan menggunakan metode `initialize()` untuk pointer.", isCorrect: false },
      ],
    },
  ];


  const code1 = [
    {
      contoh:
        `
  p := new(int)
  `
    },
  ]


  return (
    <div className='flex flex-col pb-3 lg:pt-5 lg:items-start lg:flex-row lg:gap-x-3 gap-y-7'>
      <div className='lg:w-[60%] xl:w-4/5'>
        <FillContent
          judul={'Pointer New'}
          pengertian={' Alokasi memori dinamis untuk nilai baru menggunakan new dan mengembalikan pointer.'}
          fungsi={'Mengalokasikan dan menggunakan memori secara dinamis.'}
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
