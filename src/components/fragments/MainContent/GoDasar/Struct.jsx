// Integer.js
import React, { useState } from 'react';
import QuizComponent from '../../QuizComponent';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FillContent } from '../FillContent';
export const Struct = () => {
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
      questionText: "Apa itu struct dalam Go?",
      code: ``,
      answerOptions: [
        { answerText: "Struct adalah tipe data kompleks yang dapat menyimpan beberapa nilai dengan tipe data yang berbeda.", isCorrect: true },
        { answerText: "Struct adalah tipe data primitif yang hanya menyimpan nilai tunggal.", isCorrect: false },
        { answerText: "Struct adalah variabel yang hanya dapat menyimpan string.", isCorrect: false },
        { answerText: "Struct adalah fungsi yang mengembalikan lebih dari satu nilai.", isCorrect: false },
      ],
    },
    {
      questionText: "Bagaimana cara mendeklarasikan struct di Go?",
      code: ``,
      answerOptions: [
        { answerText: "Gunakan keyword `struct` diikuti dengan nama struct dan daftar field.", isCorrect: true },
        { answerText: "Gunakan keyword `class` diikuti dengan nama class dan daftar atribut.", isCorrect: false },
        { answerText: "Gunakan keyword `type` diikuti dengan nama tipe dan daftar elemen.", isCorrect: false },
        { answerText: "Gunakan keyword `struct` diikuti dengan daftar nilai.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  import "fmt"
  
  type Person struct {
      Name string
      Age  int
  }
  
  func main() {
      p := Person{Name: "Alice", Age: 30}
      fmt.Println(p.Name, p.Age)
  }`,
      answerOptions: [
        { answerText: "Alice 30", isCorrect: true },
        { answerText: "30 Alice", isCorrect: false },
        { answerText: "Alice", isCorrect: false },
        { answerText: "30", isCorrect: false },
      ],
    },
    {
      questionText: "Bagaimana cara mengakses field dalam struct di Go?",
      code: ``,
      answerOptions: [
        { answerText: "Gunakan operator titik (.) diikuti dengan nama field.", isCorrect: true },
        { answerText: "Gunakan tanda kurung siku ([]) diikuti dengan nama field.", isCorrect: false },
        { answerText: "Gunakan operator panah (->) diikuti dengan nama field.", isCorrect: false },
        { answerText: "Gunakan keyword `get` diikuti dengan nama field.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  import "fmt"
  
  type Rectangle struct {
      Width  int
      Height int
  }
  
  func main() {
      r := Rectangle{Width: 10, Height: 5}
      area := r.Width * r.Height
      fmt.Println(area)
  }`,
      answerOptions: [
        { answerText: "50", isCorrect: true },
        { answerText: "15", isCorrect: false },
        { answerText: "10", isCorrect: false },
        { answerText: "5", isCorrect: false },
      ],
    },
    {
      questionText: "Bisakah struct di Go memiliki metode?",
      code: ``,
      answerOptions: [
        { answerText: "Ya, struct dapat memiliki metode dengan cara mendefinisikan fungsi dengan receiver struct.", isCorrect: true },
        { answerText: "Tidak, struct hanya dapat memiliki field dan tidak dapat memiliki metode.", isCorrect: false },
        { answerText: "Ya, tetapi metode harus berupa fungsi global.", isCorrect: false },
        { answerText: "Tidak, metode hanya dapat ditambahkan ke tipe data primitif.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  import "fmt"
  
  type Circle struct {
      Radius float64
  }
  
  func (c Circle) Area() float64 {
      return 3.14 * c.Radius * c.Radius
  }
  
  func main() {
      c := Circle{Radius: 7}
      fmt.Println(c.Area())
  }`,
      answerOptions: [
        { answerText: "153.86", isCorrect: true },
        { answerText: "49", isCorrect: false },
        { answerText: "21.98", isCorrect: false },
        { answerText: "14", isCorrect: false },
      ],
    },
    {
      questionText: "Apa yang dimaksud dengan embedded struct?",
      code: ``,
      answerOptions: [
        { answerText: "Embedded struct adalah struct yang menjadi field dari struct lain dan dapat mengakses field-nya secara langsung.", isCorrect: true },
        { answerText: "Embedded struct adalah struct yang menyimpan pointer ke struct lain.", isCorrect: false },
        { answerText: "Embedded struct adalah struct yang hanya berisi method dan tidak memiliki field.", isCorrect: false },
        { answerText: "Embedded struct adalah struct yang tidak dapat diakses dari luar paket.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  import "fmt"
  
  type Animal struct {
      Name string
  }
  
  type Dog struct {
      Animal
      Breed string
  }
  
  func main() {
      d := Dog{Animal: Animal{Name: "Buddy"}, Breed: "Labrador"}
      fmt.Println(d.Name, d.Breed)
  }`,
      answerOptions: [
        { answerText: "Buddy Labrador", isCorrect: true },
        { answerText: "Labrador Buddy", isCorrect: false },
        { answerText: "Buddy", isCorrect: false },
        { answerText: "Labrador", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  import "fmt"
  
  type Book struct {
      Title  string
      Author string
  }
  
  func main() {
      b := Book{"Go Programming", "John Doe"}
      fmt.Println(b.Title)
      fmt.Println(b.Author)
  }`,
      answerOptions: [
        { answerText: "Go Programming\nJohn Doe", isCorrect: true },
        { answerText: "Go Programming\nGo Programming", isCorrect: false },
        { answerText: "John Doe\nGo Programming", isCorrect: false },
        { answerText: "John Doe\nJohn Doe", isCorrect: false },
      ],
    },
    {
      questionText: "Bagaimana cara membuat instance dari struct dengan nilai default?",
      code: ``,
      answerOptions: [
        { answerText: "Gunakan literal struct untuk mendeklarasikan struct dengan nilai default.", isCorrect: true },
        { answerText: "Gunakan fungsi konstruktor untuk membuat instance struct dengan nilai default.", isCorrect: false },
        { answerText: "Gunakan method untuk menginisialisasi struct dengan nilai default.", isCorrect: false },
        { answerText: "Gunakan package-level variable untuk menyimpan nilai default struct.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  import "fmt"
  
  type Employee struct {
      ID   int
      Name string
  }
  
  func main() {
      e := Employee{ID: 123, Name: "Alice"}
      e.ID = 456
      fmt.Println(e.ID, e.Name)
  }`,
      answerOptions: [
        { answerText: "456 Alice", isCorrect: true },
        { answerText: "123 Alice", isCorrect: false },
        { answerText: "456 123", isCorrect: false },
        { answerText: "Alice 456", isCorrect: false },
      ],
    },
  ];


  const code1 = [
    {
      contoh:
        `
  package main

  import "fmt"

  // Membuat struct untuk menyimpan informasi hewan peliharaan
  type HewanPeliharaan struct {
      nama  string
      jenis string
      umur  int
  }

  func main() {
      // Membuat instance struct HewanPeliharaan
      kucing := HewanPeliharaan{
          nama:  "Milo",
          jenis: "Kucing",
          umur:  2,
      }

      // Menampilkan informasi hewan peliharaan
      fmt.Println("Nama Hewan Peliharaan:", kucing.nama)
      fmt.Println("Jenis Hewan Peliharaan:", kucing.jenis)
      fmt.Println("Umur Hewan Peliharaan:", kucing.umur, "tahun")
  }
  `
    },
  ]


  return (
    <div className='flex flex-col pb-3 lg:pt-5 lg:items-start lg:flex-row lg:gap-x-3 gap-y-7'>
      <div className='lg:w-[60%] xl:w-4/5'>
        <FillContent
          judul={'Struct'}
          pengertian={'struct adalah seperti membuat kotak penyimpanan khusus untuk benda-benda berbeda yang saling berkaitan. Bayangkan kamu memiliki kotak khusus untuk menyimpan informasi tentang hewan peliharaanmu, seperti nama, jenis, dan umur. Dengan struct, kita bisa membuat tipe data baru yang bisa menampung informasi berbeda dalam satu tempat.'}
          fungsi={'Struct digunakan ketika kita ingin mengelompokkan beberapa data yang saling berkaitan ke dalam satu unit. Ini membantu kita mengatur dan mengelola data dengan lebih mudah, terutama ketika datanya rumit atau terdiri dari banyak bagian.'}
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
