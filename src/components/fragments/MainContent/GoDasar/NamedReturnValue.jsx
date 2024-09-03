// Integer.js
import React, { useState } from 'react';
import QuizComponent from '../../QuizComponent';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FillContent } from '../FillContent';
export const NamedReturnValue = () => {
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
      questionText: "Apa itu 'Named Return Value' dalam Go?",
      code: ``,
      answerOptions: [
        { answerText: "Named return value adalah nilai kembalian yang sudah diberi nama dalam deklarasi fungsi.", isCorrect: true },
        { answerText: "Named return value adalah parameter input yang diberi nama dalam fungsi.", isCorrect: false },
        { answerText: "Named return value adalah tipe data khusus yang digunakan dalam Go.", isCorrect: false },
        { answerText: "Named return value adalah nama untuk semua nilai yang dikembalikan oleh fungsi.", isCorrect: false },
      ],
    },
    {
      questionText: "Bagaimana cara mendeklarasikan 'Named Return Value' dalam Go?",
      code: ``,
      answerOptions: [
        { answerText: "Dengan menyebutkan nama dan tipe data nilai kembalian di bagian tanda kurung setelah tanda kurung parameter fungsi.", isCorrect: true },
        { answerText: "Dengan menggunakan kata kunci 'return' sebelum nama fungsi.", isCorrect: false },
        { answerText: "Dengan menyebutkan tipe data nilai kembalian tanpa nama di bagian tanda kurung.", isCorrect: false },
        { answerText: "Dengan menuliskan tipe data nilai kembalian di luar fungsi.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa keunggulan menggunakan 'Named Return Value' dalam fungsi?",
      code: ``,
      answerOptions: [
        { answerText: "Mempermudah pembacaan kode dan memungkinkan nilai kembalian untuk diinisialisasi dan diubah dalam fungsi.", isCorrect: true },
        { answerText: "Mengurangi penggunaan memori secara drastis.", isCorrect: false },
        { answerText: "Meningkatkan performa eksekusi kode secara signifikan.", isCorrect: false },
        { answerText: "Membuat fungsi tidak perlu memiliki parameter input.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa yang akan dihasilkan oleh kode berikut?",
      code: `package main
  import "fmt"
  
  func divide(a, b int) (result int) {
      result = a / b
      return
  }
  
  func main() {
      fmt.Println(divide(10, 2))
  }`,
      answerOptions: [
        { answerText: "5", isCorrect: true },
        { answerText: "Error", isCorrect: false },
        { answerText: "0", isCorrect: false },
        { answerText: "2", isCorrect: false },
      ],
    },
    {
      questionText: "Apakah 'Named Return Value' bersifat opsional dalam Go?",
      code: ``,
      answerOptions: [
        { answerText: "Ya, penggunaannya bersifat opsional.", isCorrect: true },
        { answerText: "Tidak, harus digunakan dalam semua fungsi yang mengembalikan nilai.", isCorrect: false },
        { answerText: "Tidak, harus digunakan bersama variadic functions.", isCorrect: false },
        { answerText: "Ya, tetapi hanya jika tipe data nilai kembalian adalah string.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa output dari kode berikut jika variabel nilai kembalian diberi nilai awal?",
      code: `package main
  import "fmt"
  
  func compute() (x, y int) {
      x, y = 5, 10
      return
  }
  
  func main() {
      fmt.Println(compute())
  }`,
      answerOptions: [
        { answerText: "5 10", isCorrect: true },
        { answerText: "0 0", isCorrect: false },
        { answerText: "Error", isCorrect: false },
        { answerText: "Nilai tidak terdefinisi", isCorrect: false },
      ],
    },
    {
      questionText: "Bagaimana cara menginisialisasi nilai kembalian dalam fungsi dengan 'Named Return Value'?",
      code: ``,
      answerOptions: [
        { answerText: "Dengan memberikan nilai langsung pada variabel kembalian di dalam tubuh fungsi.", isCorrect: true },
        { answerText: "Dengan mendeklarasikan kembali tipe data variabel kembalian di dalam tubuh fungsi.", isCorrect: false },
        { answerText: "Dengan menambahkan tanda & di depan variabel.", isCorrect: false },
        { answerText: "Dengan menggunakan tanda titik dua (:) setelah nama variabel.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa keuntungan menggunakan 'Named Return Value' ketika fungsi memiliki beberapa nilai kembalian?",
      code: ``,
      answerOptions: [
        { answerText: "Membuat kode lebih jelas dan mudah dibaca karena nilai kembalian diberi nama yang menjelaskan kegunaannya.", isCorrect: true },
        { answerText: "Membuat fungsi menjadi lebih cepat dalam eksekusi.", isCorrect: false },
        { answerText: "Membuat kode lebih aman dari bug.", isCorrect: false },
        { answerText: "Membuat fungsi memiliki lebih sedikit parameter input.", isCorrect: false },
      ],
    },
    {
      questionText: "Apakah kita bisa mengubah nilai dari 'Named Return Value' di dalam fungsi sebelum 'return'?",
      code: ``,
      answerOptions: [
        { answerText: "Ya, kita bisa mengubah nilai dari named return value sebelum 'return' dieksekusi.", isCorrect: true },
        { answerText: "Tidak, nilainya tetap setelah deklarasi.", isCorrect: false },
        { answerText: "Hanya bisa diubah jika nilainya adalah integer.", isCorrect: false },
        { answerText: "Hanya bisa diubah jika kita menggunakan pointer.", isCorrect: false },
      ],
    },
    {
      questionText: "Apa yang akan terjadi jika kita tidak secara eksplisit menggunakan 'return' di dalam fungsi dengan 'Named Return Value'?",
      code: ``,
      answerOptions: [
        { answerText: "Nilai kembalian akan tetap dikembalikan dengan nilai default (0 untuk integer, dll.)", isCorrect: true },
        { answerText: "Fungsi akan mengembalikan nilai kosong (nil).", isCorrect: false },
        { answerText: "Akan menyebabkan error saat kompilasi.", isCorrect: false },
        { answerText: "Fungsi tidak akan mengembalikan nilai apapun.", isCorrect: false },
      ],
    },
  ];


  const code1 = [
    {
      contoh:
        `
  // Contoh sederhana
  func divide(a, b int) (result int) {
      result = a / b
      return
  }
  `
    },
    {
      contoh:
        `
  // Contoh lanjutan
  package main

  import "fmt"

  // Function untuk menghitung luas dan keliling dari sebuah persegi panjang
  func hitungLuasDanKeliling(panjang int, lebar int) (luas int, keliling int) {
      luas = panjang * lebar
      keliling = 2 * (panjang + lebar)
      return // Mengembalikan nilai luas dan keliling
  }

  func main() {
      // Memanggil function hitungLuasDanKeliling dengan panjang 5 dan lebar 3
      luas, keliling := hitungLuasDanKeliling(5, 3)
      fmt.Println("Luas persegi panjang adalah:", luas)
      fmt.Println("Keliling persegi panjang adalah:", keliling)
  }
  `
    },
  ]


  return (
    <div className='flex flex-col pb-3 lg:pt-5 lg:items-start lg:flex-row lg:gap-x-3 gap-y-7'>
      <div className='lg:w-[60%] xl:w-4/5'>
        <FillContent
          judul={'Named Return Value'}
          pengertian={'named return values (nilai kembali bernama) adalah seperti memberi nama pada hadiah yang kamu terima. Misalnya, jika temanmu memberikan dua hadiah, satu adalah mainan dan satu lagi adalah buku, kamu bisa memberi nama pada hadiah-hadiah tersebut sehingga kamu tahu apa yang kamu terima. Dengan named return values, kita memberi nama pada hasil yang dikembalikan oleh sebuah function sehingga lebih jelas dan mudah dipahami.'}
          fungsi={'Named return values membantu kita untuk membuat kode lebih jelas dan terstruktur. Dengan memberi nama pada nilai yang dikembalikan, kita dapat dengan mudah memahami apa yang dikembalikan oleh function dan membuat kode lebih mudah dibaca.'}
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
