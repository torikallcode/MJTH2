// Integer.js
import React, { useState } from 'react';
import QuizComponent from '../../QuizComponent';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FillContent } from '../FillContent';
export const Switch = () => {
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
      questionText: "Apa itu pernyataan 'switch' dalam Go?",
      code: ``,
      answerOptions: [
        { answerText: "Pernyataan untuk mengalihkan eksekusi program ke berbagai kasus berdasarkan nilai ekspresi", isCorrect: true },
        { answerText: "Pernyataan untuk membuat loop berulang", isCorrect: false },
        { answerText: "Pernyataan untuk mendeklarasikan variabel", isCorrect: false },
        { answerText: "Pernyataan untuk mendefinisikan fungsi", isCorrect: false },
      ],
    },
    {
      questionText: "Bagaimana cara menggunakan pernyataan 'switch' di Go?",
      code: ``,
      answerOptions: [
        { answerText: "Menggunakan kata kunci 'switch' diikuti dengan ekspresi, dan blok 'case' untuk berbagai kondisi", isCorrect: true },
        { answerText: "Menggunakan kata kunci 'case' diikuti dengan ekspresi, dan blok 'switch' untuk berbagai kondisi", isCorrect: false },
        { answerText: "Menggunakan kata kunci 'if' diikuti dengan kondisi", isCorrect: false },
        { answerText: "Menggunakan kata kunci 'select' diikuti dengan ekspresi", isCorrect: false },
      ],
    },
    {
      questionText: "Apa yang akan dihasilkan oleh kode berikut?",
      code: `package main
  import "fmt"
  
  func main() {
      day := 3
      switch day {
      case 1:
          fmt.Println("Senin")
      case 2:
          fmt.Println("Selasa")
      case 3:
          fmt.Println("Rabu")
      default:
          fmt.Println("Hari tidak dikenal")
      }
  }`,
      answerOptions: [
        { answerText: "Rabu", isCorrect: true },
        { answerText: "Senin", isCorrect: false },
        { answerText: "Hari tidak dikenal", isCorrect: false },
        { answerText: "Selasa", isCorrect: false },
      ],
    },
    {
      questionText: "Apa fungsi dari blok 'default' dalam pernyataan 'switch'?",
      code: ``,
      answerOptions: [
        { answerText: "Blok 'default' dijalankan jika tidak ada kondisi 'case' yang terpenuhi", isCorrect: true },
        { answerText: "Blok 'default' dijalankan sebelum semua kondisi 'case' diperiksa", isCorrect: false },
        { answerText: "Blok 'default' hanya digunakan untuk nilai numerik", isCorrect: false },
        { answerText: "Blok 'default' adalah wajib dalam setiap pernyataan 'switch'", isCorrect: false },
      ],
    },
    {
      questionText: "Bisakah kita menggunakan perbandingan logika dalam pernyataan 'switch' di Go?",
      code: ``,
      answerOptions: [
        { answerText: "Ya, kita bisa menggunakan perbandingan logika dalam pernyataan 'switch' dengan menggunakan 'switch true'", isCorrect: true },
        { answerText: "Tidak, pernyataan 'switch' hanya untuk perbandingan nilai langsung", isCorrect: false },
        { answerText: "Ya, tapi hanya dengan tipe data integer", isCorrect: false },
        { answerText: "Tidak, kita harus menggunakan pernyataan 'if' untuk perbandingan logika", isCorrect: false },
      ],
    },
    {
      questionText: "Apa yang terjadi jika tidak ada kasus ('case') yang cocok dalam pernyataan 'switch' tanpa blok 'default'?",
      code: ``,
      answerOptions: [
        { answerText: "Tidak ada yang dieksekusi, dan program melanjutkan setelah blok 'switch'", isCorrect: true },
        { answerText: "Program akan menghasilkan kesalahan kompilasi", isCorrect: false },
        { answerText: "Pernyataan 'switch' akan tetap menunggu kondisi yang cocok", isCorrect: false },
        { answerText: "Program akan terhenti", isCorrect: false },
      ],
    },
    {
      questionText: "Bagaimana cara menggunakan banyak nilai dalam satu kasus 'case' dalam pernyataan 'switch'?",
      code: ``,
      answerOptions: [
        { answerText: "Menggunakan koma untuk memisahkan beberapa nilai dalam satu kasus 'case'", isCorrect: true },
        { answerText: "Menggunakan titik koma untuk memisahkan beberapa nilai dalam satu kasus 'case'", isCorrect: false },
        { answerText: "Menggunakan 'or' untuk memisahkan beberapa nilai", isCorrect: false },
        { answerText: "Tidak mungkin menggunakan banyak nilai dalam satu kasus 'case'", isCorrect: false },
      ],
    },
    {
      questionText: "Apa yang akan dihasilkan oleh kode berikut dengan menggunakan banyak nilai dalam 'case'?",
      code: `package main
  import "fmt"
  
  func main() {
      number := 5
      switch number {
      case 1, 3, 5, 7, 9:
          fmt.Println("Bilangan ganjil")
      case 2, 4, 6, 8, 10:
          fmt.Println("Bilangan genap")
      default:
          fmt.Println("Tidak diketahui")
      }
  }`,
      answerOptions: [
        { answerText: "Bilangan ganjil", isCorrect: true },
        { answerText: "Bilangan genap", isCorrect: false },
        { answerText: "Tidak diketahui", isCorrect: false },
        { answerText: "Kesalahan kompilasi", isCorrect: false },
      ],
    },
    {
      questionText: "Apakah kita bisa menggunakan tipe data yang berbeda dalam ekspresi 'switch' dan nilai 'case'?",
      code: ``,
      answerOptions: [
        { answerText: "Tidak, tipe data dari ekspresi 'switch' dan nilai 'case' harus sama", isCorrect: true },
        { answerText: "Ya, Go akan secara otomatis mengonversi tipe data", isCorrect: false },
        { answerText: "Ya, jika nilai 'case' adalah string", isCorrect: false },
        { answerText: "Tidak, kecuali jika kita menggunakan blok 'default'", isCorrect: false },
      ],
    },
    {
      questionText: "Bagaimana cara membuat pernyataan 'switch' untuk memeriksa beberapa kondisi dalam satu kasus?",
      code: ``,
      answerOptions: [
        { answerText: "Menggunakan 'switch true' dan menuliskan ekspresi logika di setiap 'case'", isCorrect: true },
        { answerText: "Menggunakan 'if' di dalam setiap 'case'", isCorrect: false },
        { answerText: "Menggunakan '&&' di dalam 'switch'", isCorrect: false },
        { answerText: "Tidak mungkin menggunakan beberapa kondisi dalam satu kasus", isCorrect: false },
      ],
    },
  ];


  const code1 = [
    {
      contoh:
        `
  switch day {
  case "Monday":
      fmt.Println("Start of the week")
  case "Friday":
      fmt.Println("Almost weekend!")
  default:
      fmt.Println("Mid-week")
  }
    `
    },
  ]


  return (
    <div className='flex flex-col pb-3 lg:pt-5 lg:items-start lg:flex-row lg:gap-x-3 gap-y-7'>
      <div className='lg:w-[60%] xl:w-4/5'>
        <FillContent
          judul={'Switch'}
          pengertian={'Struktur kontrol untuk memilih salah satu dari beberapa blok kode untuk dieksekusi.'}
          fungsi={'Mengganti penggunaan banyak if-else untuk membuat kode lebih bersih.'}
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
    </div>
  );
};
