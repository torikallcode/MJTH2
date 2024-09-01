// Integer.js
import React, { useState } from 'react';
import QuizComponent from '../../QuizComponent';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FillContent } from '../FillContent';
export const RecursiveFunction = () => {
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
      questionText: "Apa itu recursive function dalam Go?",
      code: ``,
      answerOptions: [
        { answerText: "Recursive function adalah fungsi yang memanggil dirinya sendiri.", isCorrect: true },
        { answerText: "Recursive function adalah fungsi yang tidak memerlukan parameter.", isCorrect: false },
        { answerText: "Recursive function adalah fungsi yang dapat dipanggil dari luar fungsi.", isCorrect: false },
        { answerText: "Recursive function adalah fungsi yang tidak dapat mengembalikan nilai.", isCorrect: false },
      ],
    },
    {
      questionText: "Bagaimana cara mendeklarasikan recursive function di Go?",
      code: ``,
      answerOptions: [
        { answerText: "Dengan mendeklarasikan fungsi yang memanggil dirinya sendiri di dalam tubuh fungsi.", isCorrect: true },
        { answerText: "Dengan menggunakan kata kunci 'rec' sebelum nama fungsi.", isCorrect: false },
        { answerText: "Dengan menyertakan parameter tambahan untuk mengontrol rekursi.", isCorrect: false },
        { answerText: "Dengan mendeklarasikan fungsi di luar blok kode utama.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  import "fmt"
  
  func factorial(n int) int {
      if n == 0 {
          return 1
      }
      return n * factorial(n-1)
  }
  
  func main() {
      fmt.Println(factorial(5))
  }`,
      answerOptions: [
        { answerText: "120", isCorrect: true },
        { answerText: "60", isCorrect: false },
        { answerText: "24", isCorrect: false },
        { answerText: "Error", isCorrect: false },
      ],
    },
    {
      questionText: "Apa yang harus diperhatikan saat menggunakan recursive function?",
      code: ``,
      answerOptions: [
        { answerText: "Perlu memastikan adanya kondisi basis untuk menghentikan rekursi.", isCorrect: true },
        { answerText: "Perlu menghindari penggunaan variabel lokal.", isCorrect: false },
        { answerText: "Perlu memastikan fungsi tidak mengembalikan nilai.", isCorrect: false },
        { answerText: "Perlu mendeklarasikan fungsi dalam bentuk anonymous.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  import "fmt"
  
  func fibonacci(n int) int {
      if n <= 1 {
          return n
      }
      return fibonacci(n-1) + fibonacci(n-2)
  }
  
  func main() {
      fmt.Println(fibonacci(6))
  }`,
      answerOptions: [
        { answerText: "8", isCorrect: true },
        { answerText: "5", isCorrect: false },
        { answerText: "13", isCorrect: false },
        { answerText: "21", isCorrect: false },
      ],
    },
    {
      questionText: "Apa yang dimaksud dengan kondisi basis dalam recursive function?",
      code: ``,
      answerOptions: [
        { answerText: "Kondisi yang menghentikan rekursi untuk mencegah infinite recursion.", isCorrect: true },
        { answerText: "Kondisi yang menentukan parameter awal fungsi.", isCorrect: false },
        { answerText: "Kondisi yang mengatur bagaimana fungsi dipanggil.", isCorrect: false },
        { answerText: "Kondisi yang mengubah nilai kembalian fungsi.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  import "fmt"
  
  func sum(n int) int {
      if n <= 1 {
          return n
      }
      return n + sum(n-1)
  }
  
  func main() {
      fmt.Println(sum(4))
  }`,
      answerOptions: [
        { answerText: "10", isCorrect: true },
        { answerText: "4", isCorrect: false },
        { answerText: "8", isCorrect: false },
        { answerText: "12", isCorrect: false },
      ],
    },
    {
      questionText: "Bisakah recursive function digunakan untuk menyelesaikan masalah yang tidak secara alami dapat dipecahkan dengan rekursi?",
      code: ``,
      answerOptions: [
        { answerText: "Ya, tetapi mungkin tidak efisien dan dapat menyebabkan masalah seperti stack overflow.", isCorrect: true },
        { answerText: "Tidak, rekursi hanya efektif untuk masalah yang secara alami rekursif.", isCorrect: false },
        { answerText: "Ya, tetapi hanya untuk masalah yang sederhana.", isCorrect: false },
        { answerText: "Tidak, rekursi tidak dapat digunakan untuk masalah non-rekursif.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa yang akan terjadi jika kondisi basis tidak didefinisikan dengan benar dalam recursive function?",
      code: ``,
      answerOptions: [
        { answerText: "Akan menyebabkan infinite recursion yang dapat berakhir dengan stack overflow.", isCorrect: true },
        { answerText: "Akan menyebabkan fungsi mengembalikan nilai default.", isCorrect: false },
        { answerText: "Akan menyebabkan fungsi tidak pernah dipanggil.", isCorrect: false },
        { answerText: "Akan menyebabkan fungsi mengembalikan nilai error.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  import "fmt"
  
  func reverse(s string) string {
      if len(s) == 0 {
          return s
      }
      return reverse(s[1:]) + string(s[0])
  }
  
  func main() {
      fmt.Println(reverse("hello"))
  }`,
      answerOptions: [
        { answerText: "olleh", isCorrect: true },
        { answerText: "hello", isCorrect: false },
        { answerText: "he", isCorrect: false },
        { answerText: "Error", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  import "fmt"
  
  func power(base, exp int) int {
      if exp == 0 {
          return 1
      }
      return base * power(base, exp-1)
  }
  
  func main() {
      fmt.Println(power(2, 3))
  }`,
      answerOptions: [
        { answerText: "8", isCorrect: true },
        { answerText: "6", isCorrect: false },
        { answerText: "9", isCorrect: false },
        { answerText: "2", isCorrect: false },
      ],
    },
  ];


  const code1 = [
    {
      contoh:
        `
  func factorial(n int) int {
      if n == 0 {
          return 1
      }
      return n * factorial(n-1)
  }
  `
    },
  ]


  return (
    <div className='flex flex-col pb-3 lg:pt-5 lg:items-start lg:flex-row lg:gap-x-3 gap-y-7'>
      <div className='lg:w-[60%] xl:w-4/5'>
        <FillContent
          judul={'Recursive Function'}
          pengertian={'Fungsi yang memanggil dirinya sendiri.'}
          fungsi={'Mengatasi masalah yang dapat dipecah menjadi sub-masalah yang lebih kecil.'}
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
