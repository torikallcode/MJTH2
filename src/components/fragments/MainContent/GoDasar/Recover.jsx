// Integer.js
import React, { useState } from 'react';
import QuizComponent from '../../QuizComponent';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FillContent } from '../FillContent';
export const Recover = () => {
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
      questionText: "Apa itu recover dalam Go?",
      code: ``,
      answerOptions: [
        { answerText: "Recover adalah fungsi yang digunakan untuk menangani panic dan melanjutkan eksekusi program.", isCorrect: true },
        { answerText: "Recover adalah fungsi untuk mencetak pesan kesalahan ke konsol.", isCorrect: false },
        { answerText: "Recover adalah fungsi yang digunakan untuk menghentikan eksekusi program.", isCorrect: false },
        { answerText: "Recover adalah mekanisme untuk menangani error runtime.", isCorrect: false },
      ],
    },
    {
      questionText: "Bagaimana cara menggunakan recover dalam Go?",
      code: ``,
      answerOptions: [
        { answerText: "Gunakan recover di dalam fungsi yang didefer untuk menangani panic.", isCorrect: true },
        { answerText: "Gunakan recover di dalam blok try-catch.", isCorrect: false },
        { answerText: "Gunakan recover di luar blok defer.", isCorrect: false },
        { answerText: "Gunakan recover untuk menangani exception yang dipicu secara manual.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  import "fmt"
  
  func foo() {
      defer func() {
          if r := recover(); r != nil {
              fmt.Println("Recovered:", r)
          }
      }()
      panic("Something went wrong!")
  }
  
  func main() {
      foo()
      fmt.Println("After foo")
  }`,
      answerOptions: [
        { answerText: "Recovered: Something went wrong!\nAfter foo", isCorrect: true },
        { answerText: "Something went wrong!\nAfter foo", isCorrect: false },
        { answerText: "Recovered: Something went wrong!", isCorrect: false },
        { answerText: "After foo", isCorrect: false },
      ],
    },
    {
      questionText: "Apa yang harus dilakukan agar recover dapat menangani panic?",
      code: ``,
      answerOptions: [
        { answerText: "Recover harus dipanggil di dalam fungsi defer.", isCorrect: true },
        { answerText: "Recover harus dipanggil di awal fungsi utama.", isCorrect: false },
        { answerText: "Recover harus dipanggil di luar fungsi yang mengalami panic.", isCorrect: false },
        { answerText: "Recover harus dipanggil di dalam blok if.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  import "fmt"
  
  func bar() {
      defer func() {
          if r := recover(); r != nil {
              fmt.Println("Recovered in bar:", r)
          }
      }()
      panic("Error in bar")
  }
  
  func foo() {
      defer func() {
          if r := recover(); r != nil {
              fmt.Println("Recovered in foo:", r)
          }
      }()
      bar()
  }
  
  func main() {
      foo()
      fmt.Println("After foo")
  }`,
      answerOptions: [
        { answerText: "Recovered in bar: Error in bar\nRecovered in foo: Error in bar\nAfter foo", isCorrect: true },
        { answerText: "Recovered in foo: Error in bar\nAfter foo", isCorrect: false },
        { answerText: "Recovered in bar: Error in bar\nAfter foo", isCorrect: false },
        { answerText: "Error in bar\nAfter foo", isCorrect: false },
      ],
    },
    {
      questionText: "Bisakah recover digunakan untuk menangani panic yang terjadi di luar fungsi yang memanggil recover?",
      code: ``,
      answerOptions: [
        { answerText: "Tidak, recover hanya dapat menangani panic yang terjadi di dalam fungsi yang didefer.", isCorrect: true },
        { answerText: "Ya, recover dapat menangani panic di seluruh program.", isCorrect: false },
        { answerText: "Ya, recover dapat menangani panic jika dipanggil di fungsi utama.", isCorrect: false },
        { answerText: "Tidak, recover hanya dapat digunakan untuk menangani panic di fungsi utama.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  import "fmt"
  
  func main() {
      defer func() {
          if r := recover(); r != nil {
              fmt.Println("Recovered:", r)
          }
      }()
      panic("Panic occurred")
      fmt.Println("This will not be printed")
  }`,
      answerOptions: [
        { answerText: "Recovered: Panic occurred", isCorrect: true },
        { answerText: "Panic occurred\nThis will not be printed", isCorrect: false },
        { answerText: "This will not be printed", isCorrect: false },
        { answerText: "Panic occurred", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  import "fmt"
  
  func main() {
      defer func() {
          if r := recover(); r != nil {
              fmt.Println("Recovered:", r)
          }
      }()
      defer fmt.Println("Defer 1")
      defer fmt.Println("Defer 2")
      panic("Panic here")
  }`,
      answerOptions: [
        { answerText: "Defer 2\nDefer 1\nRecovered: Panic here", isCorrect: true },
        { answerText: "Recovered: Panic here\nDefer 1\nDefer 2", isCorrect: false },
        { answerText: "Defer 1\nDefer 2\nPanic here", isCorrect: false },
        { answerText: "Defer 2\nPanic here\nDefer 1", isCorrect: false },
      ],
    },
    {
      questionText: "Bisakah recover digunakan untuk menangani panic dalam goroutine?",
      code: ``,
      answerOptions: [
        { answerText: "Ya, recover dapat digunakan dalam goroutine jika dipanggil di dalam fungsi defer.", isCorrect: true },
        { answerText: "Tidak, recover tidak dapat digunakan dalam goroutine.", isCorrect: false },
        { answerText: "Ya, tetapi hanya jika dipanggil di luar goroutine.", isCorrect: false },
        { answerText: "Tidak, panic dalam goroutine harus ditangani di tingkat global.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  import "fmt"
  
  func main() {
      defer func() {
          if r := recover(); r != nil {
              fmt.Println("Recovered:", r)
          }
      }()
      func() {
          defer func() {
              if r := recover(); r != nil {
                  fmt.Println("Recovered in anonymous func:", r)
              }
          }()
          panic("Panic in anonymous func")
      }()
      fmt.Println("This will not be printed")
  }`,
      answerOptions: [
        { answerText: "Recovered in anonymous func: Panic in anonymous func\nRecovered: Panic in anonymous func", isCorrect: true },
        { answerText: "Recovered: Panic in anonymous func\nThis will not be printed", isCorrect: false },
        { answerText: "Panic in anonymous func\nRecovered: Panic in anonymous func", isCorrect: false },
        { answerText: "This will not be printed\nRecovered: Panic in anonymous func", isCorrect: false },
      ],
    },
    {
      questionText: "Apa manfaat utama dari menggunakan recover dalam Go?",
      code: ``,
      answerOptions: [
        { answerText: "Recover memungkinkan program untuk melanjutkan eksekusi setelah terjadi panic dengan menangani kesalahan secara terkontrol.", isCorrect: true },
        { answerText: "Recover meningkatkan performa eksekusi dengan menghindari error.", isCorrect: false },
        { answerText: "Recover memudahkan penanganan kesalahan dengan mengubahnya menjadi exception.", isCorrect: false },
        { answerText: "Recover secara otomatis memperbaiki kesalahan runtime.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut?",
      code: `package main
  import "fmt"
  
  func recoverDemo() {
      defer func() {
          if r := recover(); r != nil {
              fmt.Println("Recovered:", r)
          }
      }()
      fmt.Println("Before panic")
      panic("Panic message")
      fmt.Println("After panic")
  }
  
  func main() {
      recoverDemo()
      fmt.Println("After recoverDemo")
  }`,
      answerOptions: [
        { answerText: "Before panic\nRecovered: Panic message\nAfter recoverDemo", isCorrect: true },
        { answerText: "Before panic\nPanic message\nAfter recoverDemo", isCorrect: false },
        { answerText: "Recovered: Panic message\nAfter recoverDemo", isCorrect: false },
        { answerText: "Panic message\nAfter recoverDemo", isCorrect: false },
      ],
    },
    {
      questionText: "Apa yang terjadi jika recover dipanggil di luar fungsi yang memicu panic?",
      code: ``,
      answerOptions: [
        { answerText: "Recover tidak akan dapat menangani panic jika dipanggil di luar fungsi yang memicu panic.", isCorrect: true },
        { answerText: "Recover dapat menangani panic jika dipanggil di luar fungsi.", isCorrect: false },
        { answerText: "Recover akan mengabaikan panic dan melanjutkan eksekusi program.", isCorrect: false },
        { answerText: "Recover akan menyebabkan panic baru jika dipanggil di luar fungsi.", isCorrect: false },
      ],
    },
  ];


  const code1 = [
    {
      contoh:
        `
  func main() {
      defer func() {
          if r := recover(); r != nil {
              fmt.Println("Recovered from:", r)
          }
      }()
      panic("Something bad happened")
  }
  `
    },
  ]


  return (
    <div className='flex flex-col pb-3 lg:pt-5 lg:items-start lg:flex-row lg:gap-x-3 gap-y-7'>
      <div className='lg:w-[60%] xl:w-4/5'>
        <FillContent
          judul={'Recover'}
          pengertian={'Mengembalikan kontrol eksekusi setelah panic.'}
          fungsi={'Menangani error dan mencegah program crash.'}
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
