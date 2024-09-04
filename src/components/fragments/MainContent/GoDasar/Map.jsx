// Integer.js
import React, { useState } from 'react';
import QuizComponent from '../../QuizComponent';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
export const Map = () => {
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
      questionText: "What is a map in Go?",
      code: ``,
      answerOptions: [
        { answerText: "A collection of key-value pairs where each key is unique", isCorrect: true },
        { answerText: "A fixed-size collection of elements of the same type", isCorrect: false },
        { answerText: "A dynamically sized collection of values", isCorrect: false },
        { answerText: "A data type for holding a sequence of characters", isCorrect: false },
      ],
    },
    {
      questionText: "How do you declare a map in Go?",
      code: ``,
      answerOptions: [
        { answerText: "Using `make(map[keyType]valueType)` or `map[keyType]valueType{}`", isCorrect: true },
        { answerText: "Using `var mapName []Type`", isCorrect: false },
        { answerText: "Using `var mapName {keyType: valueType}`", isCorrect: false },
        { answerText: "Using `new(map[keyType]valueType)`", isCorrect: false },
      ],
    },
    {
      questionText: "What will be the output of the following code that accesses a map value?",
      code: `package main
  import "fmt"
  
  func main() {
      fruits := map[string]int{"apple": 5, "banana": 3}
      fmt.Println(fruits["apple"])
  }`,
      answerOptions: [
        { answerText: "5", isCorrect: true },
        { answerText: "apple", isCorrect: false },
        { answerText: "3", isCorrect: false },
        { answerText: "Error", isCorrect: false },
      ],
    },
    {
      questionText: "How do you add a new key-value pair to a map in Go?",
      code: ``,
      answerOptions: [
        { answerText: "By assigning a value to a key, e.g., `map[key] = value`", isCorrect: true },
        { answerText: "Using the `append()` function", isCorrect: false },
        { answerText: "Using the `add()` function", isCorrect: false },
        { answerText: "Using the `insert()` function", isCorrect: false },
      ],
    },
    {
      questionText: "What will be the output of the following code that checks for a key in a map?",
      code: `package main
  import "fmt"
  
  func main() {
      m := map[string]int{"one": 1, "two": 2}
      value, ok := m["three"]
      fmt.Println(value, ok)
  }`,
      answerOptions: [
        { answerText: "0 false", isCorrect: true },
        { answerText: "0 true", isCorrect: false },
        { answerText: "nil false", isCorrect: false },
        { answerText: "Error", isCorrect: false },
      ],
    },
    {
      questionText: "What happens if you try to access a key that doesn't exist in a map?",
      code: ``,
      answerOptions: [
        { answerText: "It returns the zero value for the value type and a boolean `false`", isCorrect: true },
        { answerText: "It returns `nil`", isCorrect: false },
        { answerText: "It causes a runtime error", isCorrect: false },
        { answerText: "It returns `undefined`", isCorrect: false },
      ],
    },
    {
      questionText: "How can you delete a key-value pair from a map in Go?",
      code: ``,
      answerOptions: [
        { answerText: "Using the `delete()` function, e.g., `delete(map, key)`", isCorrect: true },
        { answerText: "Using the `remove()` function", isCorrect: false },
        { answerText: "Using the `delete key` statement", isCorrect: false },
        { answerText: "Using the `clear()` function", isCorrect: false },
      ],
    },
    {
      questionText: "What will be the output of iterating over a map using a `for` loop?",
      code: `package main
  import "fmt"
  
  func main() {
      colors := map[string]string{"red": "#FF0000", "green": "#00FF00"}
      for key, value := range colors {
          fmt.Println(key, value)
      }
  }`,
      answerOptions: [
        { answerText: "red #FF0000\ngreen #00FF00 (or vice versa)", isCorrect: true },
        { answerText: "red green", isCorrect: false },
        { answerText: "#FF0000 #00FF00", isCorrect: false },
        { answerText: "Error", isCorrect: false },
      ],
    },
    {
      questionText: "Can map keys in Go be of any data type?",
      code: ``,
      answerOptions: [
        { answerText: "No, map keys must be comparable types", isCorrect: true },
        { answerText: "Yes, map keys can be of any type", isCorrect: false },
        { answerText: "Yes, but only if they are integers or strings", isCorrect: false },
        { answerText: "No, map keys must be strings", isCorrect: false },
      ],
    },
    {
      questionText: "What will happen if you try to modify a map while iterating over it?",
      code: ``,
      answerOptions: [
        { answerText: "It is allowed, but may lead to unpredictable behavior", isCorrect: true },
        { answerText: "It causes a compile-time error", isCorrect: false },
        { answerText: "It causes a runtime panic", isCorrect: false },
        { answerText: "It is ignored", isCorrect: false },
      ],
    },
  ];

  const code1 = `
  // Deklarasi Sederhana
  package main

  import "fmt"

  func main() {
      // Membuat sebuah map bernama "ibuKota" dengan tipe kunci string dan tipe nilai string
      ibuKota := make(map[string]string)

      // Menambahkan elemen-elemen ke dalam map
      ibuKota["Indonesia"] = "Jakarta"
      ibuKota["Jepang"] = "Tokyo"
      ibuKota["India"] = "New Delhi"

      // Menampilkan semua pasangan kunci dan nilai dalam map
      fmt.Println("Ibu kota negara:", ibuKota) // Output: Ibu kota negara: map[India:New Delhi Indonesia:Jakarta Jepang:Tokyo]

      // Mengakses nilai dalam map menggunakan kunci
      fmt.Println("Ibu kota Indonesia:", ibuKota["Indonesia"])  // Output: Ibu kota Indonesia: Jakarta

      // Mengubah nilai dalam map
      ibuKota["Jepang"] = "Kyoto"
      fmt.Println("Ibu kota Jepang setelah diubah:", ibuKota["Jepang"]) // Output: Ibu kota Jepang setelah diubah: Kyoto

      // Menghapus elemen dari map
      delete(ibuKota, "India")
      fmt.Println("Setelah dihapus, ibu kota negara:", ibuKota) // Output: Setelah dihapus, ibu kota negara: map[Indonesia:Jakarta Jepang:Kyoto]

      // Menampilkan jumlah elemen dalam map
      fmt.Println("Jumlah negara dalam map:", len(ibuKota)) // Output: Jumlah negara dalam map: 2
  }

    `;
  const codew = `
  // Deklarasi Langsung
  var ages map[string]int = map[string]int{"Alice": 30, "Bob": 25}
    `;

  return (
    <div className='flex flex-col pb-3 lg:items-start lg:flex-row lg:gap-x-3 gap-y-7'>
      <div className='lg:w-[60%] xl:w-4/5'>
        <h1 className='mb-3 text-2xl font-bold font-poppins'>Map</h1>
        <div className='flex flex-col gap-y-2'>
          <h2 className='text-base italic font-medium font-poppins'>Pengertian: <br /> <span className='not-italic font-normal'>map adalah seperti kamus. Bayangkan kita memiliki sebuah kamus yang berisi kata-kata (kunci) dan artinya (nilai). Map memungkinkan kita untuk menyimpan data dalam bentuk pasangan kunci (key) dan nilai (value). Kita bisa mencari nilai dengan cepat menggunakan kunci.</span></h2>
          <h2 className='text-base italic font-medium font-poppins'>Fungsi: <br /><span className='not-italic font-normal'>Map sangat berguna ketika kita ingin menyimpan data yang memiliki pasangan, seperti nama siswa dan nilainya, atau nama negara dan ibukotanya. Kita bisa dengan mudah mengambil nilai yang kita inginkan dengan mengetahui kunci yang sesuai..</span></h2>
          <div className='max-w-[22rem] sm:max-w-full xl:max-w-3xl'>
            <h2 className='mb-1 text-base italic font-medium font-poppins'>Cara penggunaan:</h2>
            <SyntaxHighlighter language="go" style={nightOwl} className="mb-4 rounded-lg font-poppins">
              {code1}
            </SyntaxHighlighter>
          </div>
        </div>
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
