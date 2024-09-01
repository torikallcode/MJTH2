// Integer.js
import React, { useState } from 'react';
import QuizComponent from '../../QuizComponent';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FillContent } from '../fillContent';
export const OperatorNew = () => {
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
      questionText: "Apa fungsi dari operator `new` dalam Go?",
      code: ``,
      answerOptions: [
        { answerText: "Operator `new` digunakan untuk mengalokasikan memori untuk tipe data dan mengembalikan pointer ke memori tersebut.", isCorrect: true },
        { answerText: "Operator `new` digunakan untuk mendeklarasikan variabel dengan nilai default.", isCorrect: false },
        { answerText: "Operator `new` digunakan untuk membuat instance baru dari struct.", isCorrect: false },
        { answerText: "Operator `new` digunakan untuk mendeklarasikan array baru.", isCorrect: false },
      ],
    },
    {
      questionText: "Bagaimana cara menggunakan operator `new` untuk mengalokasikan memori untuk sebuah integer?",
      code: ``,
      answerOptions: [
        { answerText: "Dengan sintaks `var p *int = new(int)`.", isCorrect: true },
        { answerText: "Dengan sintaks `var p = new(int)`.", isCorrect: false },
        { answerText: "Dengan sintaks `var p int = new(int)`.", isCorrect: false },
        { answerText: "Dengan sintaks `p := new(int)`.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  import "fmt"
  
  func main() {
      p := new(int)
      fmt.Println(*p)
  }`,
      answerOptions: [
        { answerText: "0", isCorrect: true },
        { answerText: "nilai default dari tipe int", isCorrect: true },
        { answerText: "alamat memori dari p", isCorrect: false },
        { answerText: "nil", isCorrect: false },
      ],
    },
    {
      questionText: "Apa yang dikembalikan oleh operator `new`?",
      code: ``,
      answerOptions: [
        { answerText: "Pointer ke memori yang telah dialokasikan.", isCorrect: true },
        { answerText: "Nilai dari tipe data yang telah dialokasikan.", isCorrect: false },
        { answerText: "Alamat memori dari tipe data.", isCorrect: false },
        { answerText: "Nilai default dari tipe data.", isCorrect: false },
      ],
    },
    {
      questionText: "Bagaimana cara menginisialisasi memori yang dialokasikan dengan `new`?",
      code: ``,
      answerOptions: [
        { answerText: "Dengan menetapkan nilai menggunakan dereference, misalnya `*p = 10`.", isCorrect: true },
        { answerText: "Dengan langsung menetapkan nilai pada pointer, misalnya `p = 10`.", isCorrect: false },
        { answerText: "Dengan menggunakan metode `initialize()`.", isCorrect: false },
        { answerText: "Dengan menggunakan operator `&`.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  import "fmt"
  
  func main() {
      p := new(int)
      *p = 5
      fmt.Println(*p)
  }`,
      answerOptions: [
        { answerText: "5", isCorrect: true },
        { answerText: "0", isCorrect: false },
        { answerText: "nilai default dari int", isCorrect: false },
        { answerText: "alamat memori dari p", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  import "fmt"
  
  func main() {
      p := new(string)
      *p = "Hello"
      fmt.Println(*p)
  }`,
      answerOptions: [
        { answerText: "Hello", isCorrect: true },
        { answerText: "string kosong", isCorrect: false },
        { answerText: "nilai default dari string", isCorrect: false },
        { answerText: "alamat memori dari p", isCorrect: false },
      ],
    },
    {
      questionText: "Apa perbedaan antara operator `new` dan operator `&` dalam Go?",
      code: ``,
      answerOptions: [
        { answerText: "Operator `new` mengalokasikan memori dan mengembalikan pointer, sedangkan `&` mendapatkan alamat memori dari variabel yang ada.", isCorrect: true },
        { answerText: "Operator `new` mengembalikan nilai dari tipe data, sedangkan `&` mendeklarasikan variabel baru.", isCorrect: false },
        { answerText: "Operator `new` menginisialisasi variabel dengan nilai default, sedangkan `&` mengalokasikan memori.", isCorrect: false },
        { answerText: "Tidak ada perbedaan antara `new` dan `&`.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  import "fmt"
  
  func main() {
      p := new(int)
      fmt.Println(p)
  }`,
      answerOptions: [
        { answerText: "Alamat memori dari variabel `p`", isCorrect: true },
        { answerText: "0", isCorrect: false },
        { answerText: "nilai default dari int", isCorrect: false },
        { answerText: "nilai memori yang belum diinisialisasi", isCorrect: false },
      ],
    },
    {
      questionText: "Apa yang terjadi jika kita mencoba untuk menggunakan `new` dengan tipe data yang tidak valid?",
      code: ``,
      answerOptions: [
        { answerText: "Akan menghasilkan error kompilasi.", isCorrect: true },
        { answerText: "Akan mengembalikan pointer dengan nilai default.", isCorrect: false },
        { answerText: "Akan menghasilkan nilai nol.", isCorrect: false },
        { answerText: "Akan mengalokasikan memori dan mengembalikan nilai default.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa yang dikembalikan oleh `new` jika digunakan dengan tipe data yang memiliki nilai default, seperti `bool`?",
      code: ``,
      answerOptions: [
        { answerText: "Pointer ke memori yang dialokasikan dengan nilai default dari tipe data tersebut, seperti `false` untuk `bool`.", isCorrect: true },
        { answerText: "Pointer ke memori yang belum diinisialisasi.", isCorrect: false },
        { answerText: "Nilai default dari tipe data, bukan pointer.", isCorrect: false },
        { answerText: "Alamat memori dari tipe data yang tidak valid.", isCorrect: false },
      ],
    },
  ];


  const code1 = [
    {
      contoh:
        `
  p := new(int)
  *p = 100
  fmt.Println(*p) // Output: 100
  `
    },
  ]


  return (
    <div className='flex flex-col pb-3 lg:pt-5 lg:items-start lg:flex-row lg:gap-x-3 gap-y-7'>
      <div className='lg:w-[60%] xl:w-4/5'>
        <FillContent
          judul={'Operator New'}
          pengertian={'Mengalokasikan memori untuk tipe tertentu dan mengembalikan pointer ke memori tersebut.'}
          fungsi={'Mengalokasikan memori untuk nilai baru.'}
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
