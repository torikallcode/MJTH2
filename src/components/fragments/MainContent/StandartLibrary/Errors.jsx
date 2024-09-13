// Integer.js
import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FillContent } from '../FillContent';
export const Errors = () => {
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

  const code1 = [
    {
      contoh:
        `
  package main

  import (
      "errors"
      "fmt"
  )

  func divide(a, b float64) (float64, error) {
      if b == 0 {
          // Membuat error baru jika pembagian dengan nol
          return 0, errors.New("tidak bisa membagi dengan nol")
      }
      return a / b, nil
  }

  func main() {
      result, err := divide(10, 0)
      if err != nil {
          fmt.Println("Error:", err)
      } else {
          fmt.Println("Hasil:", result)
      }
  }
  `
    },
  ]
  const code2 = [
    {
      contoh:
        `
  package main

  import (
      "fmt"
  )

  func findItem(items []string, item string) (int, error) {
      for i, v := range items {
          if v == item {
              return i, nil
          }
      }
      // Membuat error dengan format khusus
      return -1, fmt.Errorf("item %s tidak ditemukan dalam daftar", item)
  }

  func main() {
      fruits := []string{"apel", "jeruk", "pisang"}
      index, err := findItem(fruits, "anggur")
      if err != nil {
          fmt.Println("Error:", err)
      } else {
          fmt.Println("Item ditemukan di indeks:", index)
      }
  }
  `
    },
  ]

  return (
    <div className='flex flex-col pb-3 lg:pt-5 lg:items-start lg:flex-row lg:gap-x-3 gap-y-7'>
      <div className='w-full'>
        <FillContent
          classname={'xl:max-w-4xl'}
          judul={'Errors'}
          pengertian={'Dalam bahasa pemrograman Go, errors adalah sebuah standard library (pustaka standar) yang digunakan untuk membuat pesan kesalahan (error). Ketika terjadi sesuatu yang tidak diinginkan dalam program, seperti pembagian dengan angka nol atau membaca file yang tidak ada, kita bisa menggunakan errors untuk memberi tahu pengguna atau programmer bahwa ada masalah.'}
          fungsi={'Kita menggunakan errors untuk memberikan informasi tentang kesalahan yang terjadi dalam program. Ini membantu kita menemukan di mana letak masalah dalam program dan memperbaikinya dengan lebih mudah.'}
          tambahan={
            <div className='mb-5'>
              <h1 className='text-lg italic font-medium font-poppins'>Fungsi-fungsi yang sering digunakan:</h1>
              <ul className='flex flex-col ml-5 text-base list-outside font-poppins'>
                <li className='list-decimal'>errors.New(): Untuk membuat error baru dengan pesan tertentu.</li>
                <li className='list-decimal'>fmt.Errorf(): Untuk membuat error dengan format tertentu (ini sebenarnya menggunakan fmt tapi sering digunakan bersama errors).</li>
              </ul>
            </div>
          }
        >
          {/* 1. errors.New() */}
          <ul className='flex flex-col mb-3 font-poppins'>
            <h1 className='mb-1 '>1. errors.New()</h1>
            <li>errors.New() digunakan untuk membuat pesan error baru. Fungsi ini menerima pesan string yang menggambarkan kesalahan dan mengembalikannya sebagai objek error.</li>
          </ul>
          {code1.map((item) => (
            <SyntaxHighlighter language="go" style={nightOwl} className="mb-4 rounded-lg font-poppins">
              {item.contoh}
            </SyntaxHighlighter>
          ))}
          <h1 className='mb-1 font-poppins'>Penjelasan:</h1>
          <ul className='flex flex-col mb-3 ml-5 list-outside font-poppins'>
            <li className='list-disc'>Fungsi divide() melakukan pembagian dua angka. Jika penyebut (b) adalah nol, maka errors.New("tidak bisa membagi dengan nol") membuat pesan kesalahan baru.</li>
            <li className='list-disc'>Jika terjadi kesalahan, fungsi divide() mengembalikan nilai error tersebut. Jika tidak, mengembalikan hasil pembagian.</li>
          </ul>
          {/* 2. fmt.Errorf() */}
          <ul className='flex flex-col mb-3 font-poppins'>
            <h1 className='mb-1 '>2. fmt.Errorf()</h1>
            <li>fmt.Errorf() mirip dengan errors.New(), tapi memungkinkan kita untuk menambahkan informasi tambahan atau format khusus pada pesan error menggunakan format string.</li>
          </ul>
          {code2.map((item) => (
            <SyntaxHighlighter language="go" style={nightOwl} className="mb-4 rounded-lg font-poppins">
              {item.contoh}
            </SyntaxHighlighter>
          ))}
          <h1 className='mb-1 font-poppins'>Penjelasan:</h1>
          <ul className='flex flex-col mb-3 ml-5 list-outside font-poppins'>
            <li className='list-disc'>Fungsi findItem() mencari sebuah item dalam daftar. Jika item tidak ditemukan, maka fmt.Errorf() digunakan untuk membuat error dengan format khusus, memberikan informasi tambahan tentang item yang tidak ditemukan.</li>
          </ul>
        </FillContent>
      </div>
    </div >
  );
};
