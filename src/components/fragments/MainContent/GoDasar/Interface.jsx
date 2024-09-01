// Integer.js
import React, { useState } from 'react';
import QuizComponent from '../../QuizComponent';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FillContent } from '../fillContent';
export const Interface = () => {
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
      questionText: "Apa itu interface dalam Go?",
      code: ``,
      answerOptions: [
        { answerText: "Interface adalah tipe data yang mendefinisikan sekumpulan metode tanpa implementasi.", isCorrect: true },
        { answerText: "Interface adalah tipe data yang menyimpan data dalam bentuk list.", isCorrect: false },
        { answerText: "Interface adalah tipe data yang menyimpan fungsi.", isCorrect: false },
        { answerText: "Interface adalah tipe data yang hanya bisa menyimpan string.", isCorrect: false },
      ],
    },
    {
      questionText: "Bagaimana cara mendeklarasikan interface di Go?",
      code: ``,
      answerOptions: [
        { answerText: "Gunakan keyword `interface` diikuti dengan nama interface dan daftar metode.", isCorrect: true },
        { answerText: "Gunakan keyword `type` diikuti dengan nama tipe dan daftar metode.", isCorrect: false },
        { answerText: "Gunakan keyword `class` diikuti dengan nama class dan daftar metode.", isCorrect: false },
        { answerText: "Gunakan keyword `interface` diikuti dengan nama struct dan daftar field.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  import "fmt"
  
  type Speaker interface {
      Speak() string
  }
  
  type Person struct {
      Name string
  }
  
  func (p Person) Speak() string {
      return "Hello, I'm " + p.Name
  }
  
  func main() {
      var s Speaker = Person{Name: "Alice"}
      fmt.Println(s.Speak())
  }`,
      answerOptions: [
        { answerText: "Hello, I'm Alice", isCorrect: true },
        { answerText: "Hello, Alice", isCorrect: false },
        { answerText: "I'm Alice", isCorrect: false },
        { answerText: "Hello, I'm", isCorrect: false },
      ],
    },
    {
      questionText: "Bisakah sebuah struct memenuhi lebih dari satu interface?",
      code: ``,
      answerOptions: [
        { answerText: "Ya, sebuah struct dapat memenuhi lebih dari satu interface.", isCorrect: true },
        { answerText: "Tidak, sebuah struct hanya dapat memenuhi satu interface.", isCorrect: false },
        { answerText: "Ya, tetapi hanya jika interface memiliki metode yang sama.", isCorrect: false },
        { answerText: "Tidak, interface tidak dapat memiliki lebih dari satu metode.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  import "fmt"
  
  type Readable interface {
      Read() string
  }
  
  type Book struct {
      Title string
  }
  
  func (b Book) Read() string {
      return "Reading " + b.Title
  }
  
  func main() {
      var r Readable = Book{Title: "Go Programming"}
      fmt.Println(r.Read())
  }`,
      answerOptions: [
        { answerText: "Reading Go Programming", isCorrect: true },
        { answerText: "Go Programming", isCorrect: false },
        { answerText: "Reading", isCorrect: false },
        { answerText: "Book", isCorrect: false },
      ],
    },
    {
      questionText: "Bagaimana cara mengimplementasikan interface di Go?",
      code: ``,
      answerOptions: [
        { answerText: "Dengan mendefinisikan metode yang dideklarasikan dalam interface pada tipe data.", isCorrect: true },
        { answerText: "Dengan membuat metode dengan nama yang sama pada interface.", isCorrect: false },
        { answerText: "Dengan menyimpan implementasi metode dalam interface itu sendiri.", isCorrect: false },
        { answerText: "Dengan menggunakan keyword `implements` di depan nama metode.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  import "fmt"
  
  type Shape interface {
      Area() float64
  }
  
  type Circle struct {
      Radius float64
  }
  
  func (c Circle) Area() float64 {
      return 3.14 * c.Radius * c.Radius
  }
  
  func main() {
      var s Shape = Circle{Radius: 5}
      fmt.Println(s.Area())
  }`,
      answerOptions: [
        { answerText: "78.5", isCorrect: true },
        { answerText: "31.4", isCorrect: false },
        { answerText: "25", isCorrect: false },
        { answerText: "10", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  import "fmt"
  
  type Stringer interface {
      String() string
  }
  
  type Person struct {
      Name string
  }
  
  func (p Person) String() string {
      return "Person: " + p.Name
  }
  
  func main() {
      var s Stringer = Person{Name: "Alice"}
      fmt.Println(s.String())
  }`,
      answerOptions: [
        { answerText: "Person: Alice", isCorrect: true },
        { answerText: "Alice", isCorrect: false },
        { answerText: "Person", isCorrect: false },
        { answerText: "Alice Person", isCorrect: false },
      ],
    },
    {
      questionText: "Apa yang terjadi jika tipe data tidak mengimplementasikan metode dari sebuah interface?",
      code: ``,
      answerOptions: [
        { answerText: "Tipe data tersebut tidak dapat digunakan sebagai nilai dari interface tersebut.", isCorrect: true },
        { answerText: "Tipe data tersebut akan menghasilkan error saat kompilasi.", isCorrect: false },
        { answerText: "Tipe data tersebut akan memiliki metode default dari interface.", isCorrect: false },
        { answerText: "Tipe data tersebut akan otomatis mengimplementasikan metode interface.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  import "fmt"
  
  type Describable interface {
      Describe() string
  }
  
  type Animal struct {
      Species string
  }
  
  func (a Animal) Describe() string {
      return "This is a " + a.Species
  }
  
  func main() {
      var d Describable = Animal{Species: "Lion"}
      fmt.Println(d.Describe())
  }`,
      answerOptions: [
        { answerText: "This is a Lion", isCorrect: true },
        { answerText: "Lion", isCorrect: false },
        { answerText: "This is a", isCorrect: false },
        { answerText: "Animal", isCorrect: false },
      ],
    },
    {
      questionText: "Bisakah interface memiliki field di Go?",
      code: ``,
      answerOptions: [
        { answerText: "Tidak, interface hanya dapat memiliki metode, tidak memiliki field.", isCorrect: true },
        { answerText: "Ya, interface dapat memiliki field yang dapat diakses oleh tipe data yang mengimplementasikan interface.", isCorrect: false },
        { answerText: "Ya, tetapi field harus berupa konstanta.", isCorrect: false },
        { answerText: "Tidak, tetapi interface dapat memiliki variabel global.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  import "fmt"
  
  type Updatable interface {
      Update(string) string
  }
  
  type Document struct {
      Title string
  }
  
  func (d *Document) Update(title string) string {
      d.Title = title
      return "Title updated to " + d.Title
  }
  
  func main() {
      var u Updatable = &Document{Title: "Old Title"}
      fmt.Println(u.Update("New Title"))
  }`,
      answerOptions: [
        { answerText: "Title updated to New Title", isCorrect: true },
        { answerText: "New Title", isCorrect: false },
        { answerText: "Title updated", isCorrect: false },
        { answerText: "Old Title", isCorrect: false },
      ],
    },
  ];


  const code1 = [
    {
      contoh:
        `
  type Speaker interface {
      Speak() string
  }

  var anyType interface{} = "Hello"
  fmt.Println(anyType)
  `
    },
  ]


  return (
    <div className='flex flex-col pb-3 lg:pt-5 lg:items-start lg:flex-row lg:gap-x-3 gap-y-7'>
      <div className='lg:w-[60%] xl:w-4/5'>
        <FillContent
          judul={'Interface'}
          pengertian={'nterface mendefinisikan kumpulan metode. Interface kosong (interface{}) dapat memegang nilai dari tipe apapun.'}
          fungsi={'Mendukung polimorfisme; interface{} digunakan untuk fleksibilitas tinggi.'}
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
