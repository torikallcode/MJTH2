// Integer.js
import React, { useState } from 'react';
import QuizComponent from '../../QuizComponent';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FillContent } from '../FillContent';
export const Fmt = () => {
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

  import "fmt"

  func main() {
  // 1.fmt.Print() & fmt.Println()
  fmt.Print("Hello")   // Output: Hello
  fmt.Print(" World")  // Output: Hello World (dalam satu baris yang sama)

  fmt.Println("Hello") // Output: Hello
  fmt.Println("World") // Output: World (di baris berikutnya)

  // 2.fmt.Printf()
  name := "Budi"
  age := 10

  // Menggunakan %s untuk string dan %d untuk angka desimal
  fmt.Printf("Halo, nama saya %s dan saya berumur %d tahun.", name, age)
  // Output: Halo, nama saya Budi dan saya berumur 10 tahun.

  pi := 3.14159
  fmt.Printf("Nilai Pi adalah %.2f", pi) // Output: Nilai Pi adalah 3.14
  
  // 3.fmt.Scan() & fmt.Scanln()
  var name string
  var age int

  fmt.Print("Masukkan nama Anda: ")
  fmt.Scan(&name) // Membaca input nama

  fmt.Print("Masukkan umur Anda: ")
  fmt.Scanln(&age) // Membaca input umur

  fmt.Printf("Halo, %s! Anda berumur %d tahun.", name, age)
  }     
  `
    },
  ]

  return (
    <div className='flex flex-col pb-3 lg:pt-5 lg:items-start lg:flex-row lg:gap-x-3 gap-y-7'>
      <div className='w-full'>
        <FillContent
          classname={'xl:max-w-4xl'}
          judul={'Fmt'}
          pengertian={'fmt adalah singkatan dari format. fmt adalah salah satu standard library (pustaka standar) yang sering digunakan untuk menampilkan teks atau menerima input dari pengguna. Bayangkan seperti alat komunikasi bagi program kita, yang memungkinkan program untuk "berbicara" kepada kita dan "mendengar" apa yang kita ketikkan.'}
          fungsi={'Kita menggunakan fmt agar program bisa menampilkan pesan di layar atau membaca data yang kita masukkan. fmt sangat berguna ketika kita ingin melihat hasil perhitungan, men-debug program, atau meminta input dari pengguna.'}
          tambahan={
            <div className='mb-5'>
              <h1 className='text-lg italic font-medium font-poppins'>Fungsi-fungsi yang sering digunakan:</h1>
              <ul className='flex flex-col ml-5 text-base list-outside font-poppins'>
                <li className='list-decimal'>fmt.Print() dan fmt.Println(): Untuk mencetak teks di layar.</li>
                <li className='list-decimal'>fmt.Printf(): Untuk mencetak teks dengan format tertentu.</li>
                <li className='list-decimal'>fmt.Scan() dan fmt.Scanln(): Untuk membaca input dari pengguna.</li>
              </ul>
            </div>
          }
        >
          {code1.map((item) => (
            <SyntaxHighlighter language="go" style={nightOwl} className="mb-4 rounded-lg font-poppins">
              {item.contoh}
            </SyntaxHighlighter>
          ))}
        </FillContent>
      </div>
    </div >
  );
};
