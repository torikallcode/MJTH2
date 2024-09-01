// Integer.js
import React, { useState } from 'react';
import QuizComponent from '../../QuizComponent';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FillContent } from '../FillContent';
export const BreakNContinue = () => {
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
      questionText: "Apa itu pernyataan 'break' dalam Go?",
      code: ``,
      answerOptions: [
        { answerText: "Pernyataan untuk menghentikan loop atau switch sebelum waktunya", isCorrect: true },
        { answerText: "Pernyataan untuk melewati satu iterasi dalam loop", isCorrect: false },
        { answerText: "Pernyataan untuk mengulangi loop dari awal", isCorrect: false },
        { answerText: "Pernyataan untuk mengakhiri fungsi", isCorrect: false },
      ],
    },
    {
      questionText: "Bagaimana cara menggunakan pernyataan 'continue' di Go?",
      code: ``,
      answerOptions: [
        { answerText: "Menggunakan kata kunci 'continue' untuk melewati iterasi saat ini dan melanjutkan ke iterasi berikutnya", isCorrect: true },
        { answerText: "Menggunakan kata kunci 'break' untuk melewati iterasi saat ini", isCorrect: false },
        { answerText: "Menggunakan kata kunci 'next' untuk melanjutkan iterasi berikutnya", isCorrect: false },
        { answerText: "Menggunakan pernyataan 'return' di dalam loop", isCorrect: false },
      ],
    },
    {
      questionText: "Apa yang akan dihasilkan oleh kode berikut?",
      code: `package main
  import "fmt"
  
  func main() {
      for i := 0; i < 5; i++ {
          if i == 3 {
              break
          }
          fmt.Println(i)
      }
  }`,
      answerOptions: [
        { answerText: "0 1 2", isCorrect: true },
        { answerText: "0 1 2 3 4", isCorrect: false },
        { answerText: "3 4", isCorrect: false },
        { answerText: "Tidak ada output", isCorrect: false },
      ],
    },
    {
      questionText: "Apa perbedaan antara 'break' dan 'continue' dalam loop di Go?",
      code: ``,
      answerOptions: [
        { answerText: "'break' menghentikan loop sepenuhnya, sedangkan 'continue' hanya melewati iterasi saat ini", isCorrect: true },
        { answerText: "'break' hanya digunakan di switch, sementara 'continue' digunakan di loop", isCorrect: false },
        { answerText: "'break' digunakan untuk kondisi benar, sementara 'continue' digunakan untuk kondisi salah", isCorrect: false },
        { answerText: "Tidak ada perbedaan antara 'break' dan 'continue'", isCorrect: false },
      ],
    },
    {
      questionText: "Apa yang terjadi jika 'continue' digunakan dalam sebuah loop?",
      code: ``,
      answerOptions: [
        { answerText: "Loop akan melewati iterasi saat ini dan melanjutkan ke iterasi berikutnya", isCorrect: true },
        { answerText: "Loop akan berhenti sepenuhnya", isCorrect: false },
        { answerText: "Loop akan memulai kembali dari awal", isCorrect: false },
        { answerText: "Loop akan mengakhiri program", isCorrect: false },
      ],
    },
    {
      questionText: "Bagaimana 'break' bekerja dalam loop bersarang (nested loop)?",
      code: ``,
      answerOptions: [
        { answerText: "'break' hanya akan menghentikan loop tempat dia berada", isCorrect: true },
        { answerText: "'break' akan menghentikan semua loop bersarang", isCorrect: false },
        { answerText: "'break' tidak dapat digunakan dalam loop bersarang", isCorrect: false },
        { answerText: "'break' hanya menghentikan loop luar", isCorrect: false },
      ],
    },
    {
      questionText: "Apa yang akan dihasilkan oleh kode berikut dengan penggunaan 'continue'?",
      code: `package main
  import "fmt"
  
  func main() {
      for i := 0; i < 5; i++ {
          if i == 2 {
              continue
          }
          fmt.Println(i)
      }
  }`,
      answerOptions: [
        { answerText: "0 1 3 4", isCorrect: true },
        { answerText: "0 1 2 3 4", isCorrect: false },
        { answerText: "2 3 4", isCorrect: false },
        { answerText: "Hanya angka 2", isCorrect: false },
      ],
    },
    {
      questionText: "Apakah kita bisa menggunakan 'break' dalam loop 'for' tanpa kondisi apapun?",
      code: ``,
      answerOptions: [
        { answerText: "Ya, 'break' bisa digunakan kapan saja untuk menghentikan loop", isCorrect: true },
        { answerText: "Tidak, 'break' hanya bisa digunakan dalam loop dengan kondisi", isCorrect: false },
        { answerText: "Tidak, 'break' hanya bisa digunakan dalam switch", isCorrect: false },
        { answerText: "Ya, tapi hanya dalam loop 'while'", isCorrect: false },
      ],
    },
    {
      questionText: "Bagaimana cara menggunakan 'break' dan 'continue' untuk mengelola aliran kontrol dalam loop?",
      code: ``,
      answerOptions: [
        { answerText: "Menggunakan 'break' untuk menghentikan loop sepenuhnya dan 'continue' untuk melewati iterasi saat ini", isCorrect: true },
        { answerText: "Menggunakan 'break' dan 'continue' bersamaan dalam satu kondisi", isCorrect: false },
        { answerText: "Menggunakan 'break' untuk melewati iterasi dan 'continue' untuk menghentikan loop", isCorrect: false },
        { answerText: "Tidak mungkin menggunakan 'break' dan 'continue' dalam satu loop", isCorrect: false },
      ],
    },
    {
      questionText: "Apa yang terjadi jika kita menggunakan 'break' di dalam loop 'for' yang tidak memiliki kondisi berhenti?",
      code: ``,
      answerOptions: [
        { answerText: "Loop akan dihentikan ketika 'break' dieksekusi", isCorrect: true },
        { answerText: "Loop akan berjalan tanpa henti", isCorrect: false },
        { answerText: "Loop akan mengabaikan 'break' dan terus berjalan", isCorrect: false },
        { answerText: "Program akan mengalami kesalahan kompilasi", isCorrect: false },
      ],
    },
  ];


  const code1 = [
    {
      contoh:
        `
  for i := 0; i < 5; i++ {
      if i == 3 {
          break // berhenti jika i == 3
      }
      if i == 1 {
          continue // lewati jika i == 1
      }
      fmt.Println(i)
  }
  `
    },
  ]


  return (
    <div className='flex flex-col pb-3 lg:pt-5 lg:items-start lg:flex-row lg:gap-x-3 gap-y-7'>
      <div className='lg:w-[60%] xl:w-4/5'>
        <FillContent
          judul={'Break & Continue'}
          pengertian={'break menghentikan loop, sedangkan continue melewati iterasi saat ini dan melanjutkan ke iterasi berikutnya.'}
          fungsi={'Mengontrol alur perulangan.'}
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
    </div>
  );
};
