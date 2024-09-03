// Integer.js
import React, { useState } from 'react';
import QuizComponent from '../../QuizComponent';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FillContent } from '../FillContent';
export const For = () => {
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
      questionText: "Apa itu pernyataan 'for' dalam Go?",
      code: ``,
      answerOptions: [
        { answerText: "Pernyataan pengulangan yang digunakan untuk menjalankan blok kode beberapa kali berdasarkan kondisi tertentu", isCorrect: true },
        { answerText: "Pernyataan kondisi untuk memilih antara dua atau lebih jalur eksekusi", isCorrect: false },
        { answerText: "Pernyataan untuk mengubah tipe data variabel", isCorrect: false },
        { answerText: "Pernyataan untuk mendeklarasikan variabel", isCorrect: false },
      ],
    },
    {
      questionText: "Bagaimana cara menulis loop 'for' dasar di Go?",
      code: ``,
      answerOptions: [
        { answerText: "Menggunakan kata kunci 'for' diikuti dengan kondisi, lalu blok kode yang akan dieksekusi", isCorrect: true },
        { answerText: "Menggunakan kata kunci 'if' diikuti dengan kondisi, lalu blok kode", isCorrect: false },
        { answerText: "Menggunakan kata kunci 'loop' diikuti dengan kondisi", isCorrect: false },
        { answerText: "Menggunakan kata kunci 'while' diikuti dengan kondisi", isCorrect: false },
      ],
    },
    {
      questionText: "Apa yang akan terjadi jika kondisi dalam pernyataan 'for' selalu bernilai 'true'?",
      code: ``,
      answerOptions: [
        { answerText: "Loop akan berjalan tanpa henti, menyebabkan infinite loop", isCorrect: true },
        { answerText: "Loop akan berhenti setelah satu iterasi", isCorrect: false },
        { answerText: "Program akan menghasilkan kesalahan kompilasi", isCorrect: false },
        { answerText: "Loop akan secara otomatis berhenti setelah 10 iterasi", isCorrect: false },
      ],
    },
    {
      questionText: "Apa perbedaan antara loop 'for' dengan kondisi dan loop 'for' dengan 'range' di Go?",
      code: ``,
      answerOptions: [
        { answerText: "Loop 'for' dengan kondisi menggunakan ekspresi logika, sedangkan 'for' dengan 'range' digunakan untuk mengiterasi elemen dalam koleksi seperti array atau slice", isCorrect: true },
        { answerText: "Tidak ada perbedaan; keduanya digunakan untuk iterasi sederhana", isCorrect: false },
        { answerText: "Loop 'for' dengan 'range' hanya digunakan untuk angka", isCorrect: false },
        { answerText: "Loop 'for' dengan kondisi digunakan untuk tipe data string", isCorrect: false },
      ],
    },
    {
      questionText: "Apa yang akan dihasilkan oleh kode berikut?",
      code: `package main
  import "fmt"
  
  func main() {
      for i := 0; i < 3; i++ {
          fmt.Println(i)
      }
  }`,
      answerOptions: [
        { answerText: "0\n1\n2", isCorrect: true },
        { answerText: "1\n2\n3", isCorrect: false },
        { answerText: "0\n1\n2\n3", isCorrect: false },
        { answerText: "Kesalahan kompilasi", isCorrect: false },
      ],
    },
    {
      questionText: "Bagaimana cara menghentikan loop 'for' sebelum mencapai kondisi akhirnya?",
      code: ``,
      answerOptions: [
        { answerText: "Menggunakan pernyataan 'break'", isCorrect: true },
        { answerText: "Menggunakan pernyataan 'stop'", isCorrect: false },
        { answerText: "Menggunakan pernyataan 'halt'", isCorrect: false },
        { answerText: "Menggunakan pernyataan 'exit'", isCorrect: false },
      ],
    },
    {
      questionText: "Apa fungsi dari pernyataan 'continue' dalam loop 'for' di Go?",
      code: ``,
      answerOptions: [
        { answerText: "Untuk melewati iterasi saat ini dan melanjutkan ke iterasi berikutnya", isCorrect: true },
        { answerText: "Untuk menghentikan loop sepenuhnya", isCorrect: false },
        { answerText: "Untuk kembali ke awal program", isCorrect: false },
        { answerText: "Untuk mengulang iterasi saat ini", isCorrect: false },
      ],
    },
    {
      questionText: "Apa yang akan dihasilkan oleh kode berikut dengan 'continue'?",
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
        { answerText: "0\n1\n3\n4", isCorrect: true },
        { answerText: "0\n1\n2\n3\n4", isCorrect: false },
        { answerText: "0\n1\n2\n4", isCorrect: false },
        { answerText: "Kesalahan kompilasi", isCorrect: false },
      ],
    },
    {
      questionText: "Bagaimana cara menulis loop 'for' tanpa kondisi, yang berjalan selamanya?",
      code: ``,
      answerOptions: [
        { answerText: "Menggunakan 'for {}'", isCorrect: true },
        { answerText: "Menggunakan 'while (true)'", isCorrect: false },
        { answerText: "Menggunakan 'do...while' dengan kondisi selalu 'true'", isCorrect: false },
        { answerText: "Menggunakan 'repeat...until' dengan kondisi 'false'", isCorrect: false },
      ],
    },
    {
      questionText: "Apakah mungkin menggunakan lebih dari satu variabel kontrol dalam satu pernyataan 'for' di Go?",
      code: ``,
      answerOptions: [
        { answerText: "Ya, kita bisa menggunakan lebih dari satu variabel kontrol selama dipisahkan oleh koma", isCorrect: true },
        { answerText: "Tidak, hanya satu variabel kontrol yang diperbolehkan", isCorrect: false },
        { answerText: "Ya, tetapi hanya dengan tipe data yang sama", isCorrect: false },
        { answerText: "Tidak, variabel kontrol kedua harus dideklarasikan di luar loop", isCorrect: false },
      ],
    },
  ];


  const code1 = [
    {
      contoh:
        `
  package main

  import "fmt"

  func main() {
      // Menggunakan for untuk menghitung dari 1 sampai 5
      for i := 1; i <= 5; i++ {
          fmt.Println("Angka ke-", i)
      }

      // Menggunakan for untuk mencetak kata 'Halo' sebanyak 3 kali
      for j := 0; j < 3; j++ {
          fmt.Println("Halo!")
      }

      // Menggunakan for tanpa kondisi untuk perulangan tak terbatas (infinite loop)
      // Uncomment kode di bawah ini untuk menjalankannya
      /*
      for {
          fmt.Println("Ini akan berjalan terus!")
      }
      */

      // Menggunakan for dengan kondisi saja
      angka := 1
      for angka <= 3 {
          fmt.Println("Angka:", angka)
          angka++
      }
  }
  `
    },
    {
      contoh:
        `
    names := []string {"Muhammad" , "Torikal" , "Akbar"}

    for index , name := range names {
		  fmt.Println("index" , index , "=" , name)
	  }

    for _, name := range names {
		  fmt.Println(name)
	  }

  }
  `
    },
  ]


  return (
    <div className='flex flex-col pb-3 lg:pt-5 lg:items-start lg:flex-row lg:gap-x-3 gap-y-7'>
      <div className='lg:w-[60%] xl:w-4/5'>
        <FillContent
          judul={'For'}
          pengertian={'for adalah seperti ketika kita mengulangi sesuatu berulang kali. Misalnya, ketika kita ingin menghitung dari 1 sampai 10, atau ketika kita ingin menggambar bintang (*) di layar sebanyak 5 kali. For membantu kita untuk mengulangi perintah yang sama berulang kali sampai kondisi tertentu terpenuhi.'}
          fungsi={'For sangat berguna ketika kita ingin melakukan sesuatu berulang kali dalam program kita. Misalnya, jika kita ingin menampilkan angka dari 1 sampai 5, atau jika kita ingin meminta pengguna untuk memasukkan kata sandi beberapa kali sampai benar, kita bisa menggunakan for.'}
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
