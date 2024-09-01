// Integer.js
import React, { useState } from 'react';
import QuizComponent from '../../QuizComponent';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FillContent } from '../FillContent';
export const PointerFunction = () => {
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
      questionText: "Apa keuntungan utama menggunakan pointer sebagai parameter dalam sebuah fungsi?",
      code: ``,
      answerOptions: [
        { answerText: "Pointer memungkinkan fungsi untuk mengubah nilai variabel di luar lingkup fungsi tersebut.", isCorrect: true },
        { answerText: "Pointer meningkatkan kecepatan eksekusi fungsi.", isCorrect: false },
        { answerText: "Pointer mengurangi jumlah memori yang digunakan oleh fungsi.", isCorrect: false },
        { answerText: "Pointer mempercepat proses alokasi memori.", isCorrect: false },
      ],
    },
    {
      questionText: "Bagaimana cara mendeklarasikan sebuah fungsi yang menerima pointer sebagai parameter?",
      code: ``,
      answerOptions: [
        { answerText: "Dengan mendeklarasikan parameter sebagai tipe pointer, misalnya `func f(p *int)`.", isCorrect: true },
        { answerText: "Dengan mendeklarasikan parameter sebagai tipe data, misalnya `func f(int p)`.", isCorrect: false },
        { answerText: "Dengan menggunakan tipe data default, misalnya `func f(int p)`.", isCorrect: false },
        { answerText: "Dengan mendeklarasikan parameter sebagai tipe pointer dalam komentar, misalnya `func f(p // *int)`.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  import "fmt"
  
  func increment(p *int) {
      *p++
  }
  
  func main() {
      x := 10
      increment(&x)
      fmt.Println(x)
  }`,
      answerOptions: [
        { answerText: "11", isCorrect: true },
        { answerText: "10", isCorrect: false },
        { answerText: "Error", isCorrect: false },
        { answerText: "Nil", isCorrect: false },
      ],
    },
    {
      questionText: "Apa yang terjadi jika kita tidak menggunakan operator `&` saat memanggil fungsi yang menerima pointer sebagai parameter?",
      code: ``,
      answerOptions: [
        { answerText: "Akan menghasilkan error karena argumen yang diberikan bukan tipe pointer yang diharapkan.", isCorrect: true },
        { answerText: "Fungsi akan berjalan tetapi tidak dapat mengubah nilai variabel yang diberikan.", isCorrect: false },
        { answerText: "Fungsi akan mengalokasikan memori baru untuk argumen tersebut.", isCorrect: false },
        { answerText: "Fungsi akan mengembalikan nilai default dari tipe data.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  import "fmt"
  
  func setToZero(p *int) {
      *p = 0
  }
  
  func main() {
      x := 5
      setToZero(&x)
      fmt.Println(x)
  }`,
      answerOptions: [
        { answerText: "0", isCorrect: true },
        { answerText: "5", isCorrect: false },
        { answerText: "Nil", isCorrect: false },
        { answerText: "Error", isCorrect: false },
      ],
    },
    {
      questionText: "Bagaimana cara mengakses nilai yang ditunjuk oleh pointer di dalam sebuah fungsi?",
      code: ``,
      answerOptions: [
        { answerText: "Dengan menggunakan operator dereference `*`, misalnya `*p`.", isCorrect: true },
        { answerText: "Dengan menggunakan operator `&`, misalnya `&p`.", isCorrect: false },
        { answerText: "Dengan langsung menggunakan nama pointer, misalnya `p`.", isCorrect: false },
        { answerText: "Dengan menggunakan sintaks `get(p)`, misalnya `get(p)`.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa yang akan terjadi jika kita menggunakan pointer pada variabel yang tidak diinisialisasi dalam sebuah fungsi?",
      code: ``,
      answerOptions: [
        { answerText: "Akan menghasilkan nilai default dari tipe data yang ditunjuk.", isCorrect: true },
        { answerText: "Akan menghasilkan error karena pointer tidak memiliki nilai.", isCorrect: false },
        { answerText: "Akan menghasilkan nilai random.", isCorrect: false },
        { answerText: "Akan mengalokasikan memori baru.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  import "fmt"
  
  func swap(a, b *int) {
      *a, *b = *b, *a
  }
  
  func main() {
      x := 1
      y := 2
      swap(&x, &y)
      fmt.Println(x, y)
  }`,
      answerOptions: [
        { answerText: "2 1", isCorrect: true },
        { answerText: "1 2", isCorrect: false },
        { answerText: "2 2", isCorrect: false },
        { answerText: "1 1", isCorrect: false },
      ],
    },
    {
      questionText: "Apa yang akan terjadi jika pointer yang tidak valid digunakan sebagai parameter dalam fungsi?",
      code: ``,
      answerOptions: [
        { answerText: "Program akan menghasilkan panic jika mencoba mendereference pointer tersebut.", isCorrect: true },
        { answerText: "Program akan berjalan dengan normal tetapi dengan hasil yang tidak terduga.", isCorrect: false },
        { answerText: "Program akan mengembalikan nilai default dari tipe data.", isCorrect: false },
        { answerText: "Program akan mengabaikan pointer dan menggunakan nilai default.", isCorrect: false },
      ],
    },
    {
      questionText: "Bagaimana cara mendeklarasikan sebuah fungsi yang mengembalikan pointer ke sebuah tipe data?",
      code: ``,
      answerOptions: [
        { answerText: "Dengan mendeklarasikan fungsi dengan tipe return `*T`, misalnya `func f() *int`.", isCorrect: true },
        { answerText: "Dengan mendeklarasikan fungsi dengan tipe return `T`, misalnya `func f() int`.", isCorrect: false },
        { answerText: "Dengan mendeklarasikan fungsi dengan tipe return `&T`, misalnya `func f() &int`.", isCorrect: false },
        { answerText: "Dengan mendeklarasikan fungsi dengan tipe return `T*`, misalnya `func f() int*`.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  import "fmt"
  
  func createPointer() *int {
      v := 42
      return &v
  }
  
  func main() {
      p := createPointer()
      fmt.Println(*p)
  }`,
      answerOptions: [
        { answerText: "42", isCorrect: true },
        { answerText: "0", isCorrect: false },
        { answerText: "Alamat memori dari `v`", isCorrect: false },
        { answerText: "Nil", isCorrect: false },
      ],
    },
    {
      questionText: "Apa keuntungan dari menggunakan pointer untuk parameter dalam fungsi dibandingkan dengan menggunakan nilai langsung?",
      code: ``,
      answerOptions: [
        { answerText: "Pointer memungkinkan fungsi untuk mengubah nilai variabel yang diberikan, sedangkan nilai langsung hanya membuat salinan dari nilai tersebut.", isCorrect: true },
        { answerText: "Pointer lebih cepat daripada nilai langsung.", isCorrect: false },
        { answerText: "Pointer mengurangi penggunaan memori daripada nilai langsung.", isCorrect: false },
        { answerText: "Pointer memungkinkan akses yang lebih mudah ke nilai variabel.", isCorrect: false },
      ],
    },
  ];


  const code1 = [
    {
      contoh:
        `
  func changeValue(val *int) {
      *val = 20
  }
  `
    },
  ]


  return (
    <div className='flex flex-col pb-3 lg:pt-5 lg:items-start lg:flex-row lg:gap-x-3 gap-y-7'>
      <div className='lg:w-[60%] xl:w-4/5'>
        <FillContent
          judul={'Pointer Function'}
          pengertian={'Memungkinkan fungsi untuk mengubah nilai asli variabel yang dilewatkan.'}
          fungsi={'Menghemat memori dan meningkatkan efisiensi.'}
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
