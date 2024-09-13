// Integer.js
import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FillContent } from '../FillContent';
export const Math = () => {

  const code1 = [
    {
      contoh:
        `
  package main

  import (
    "fmt"
    "math"
  )

  func main() {
    // 1. Menghitung nilai absolut dari -8.5
    fmt.Println(math.Abs(-8.5))  
    // output: 8.5

    // 2. Menghitung nilai pangkat
    fmt.Println(math.Pow(2, 4)) 
    // Output: 16

    // 3. Menghitung akar kuadrat
    fmt.Println(math.Sqrt(16.0))
    // Output: 4
    
    // 4. Membulatkan float64 keatas
    fmt.Println(math.Ceil(1.40))  
    // Output: 2

    // 5. Membulatkan float64 kebawah
    fmt.Println(math.Floor(1.60)) 
    //Output: 1

    // 6. Membualatkan float64 sesuai dengan yang paling dekat
    fmt.Println(math.Round(1.49)) 
    //Output: 1

    // 7. Mengembalikan nilai float64 paling besar
    fmt.Println(math.Max(10, 11)) 
    //Output: 11

    // 8. Mengembalikan nilai float64 paling kecil
    fmt.Println(math.Min(10, 11)) 
    // Output: 10

  }

  `
    },
  ]

  return (
    <div className='flex flex-col pb-3 lg:pt-5 lg:items-start lg:flex-row lg:gap-x-3 gap-y-7'>
      <div className='w-full'>
        <FillContent
          classname={'xl:max-w-4xl'}
          judul={'Math'}
          pengertian={'math adalah sebuah standard library (pustaka standar) yang berisi berbagai fungsi matematika. Pustaka ini menyediakan fungsi untuk perhitungan matematika dasar seperti penjumlahan, pengurangan, hingga operasi matematika yang lebih kompleks seperti akar kuadrat, eksponen, trigonometri, dan lain-lain.'}
          fungsi={'Kita menggunakan math ketika ingin melakukan perhitungan matematika yang lebih kompleks dalam program. Package ini sangat berguna ketika kita perlu menghitung sesuatu seperti panjang sisi segitiga dengan rumus Pythagoras, mengubah derajat menjadi radian, atau menghitung nilai eksponen.'}
          tambahan={
            <div className='mb-5'>
              <h1 className='text-lg italic font-medium font-poppins'>Fungsi-fungsi yang sering digunakan:</h1>
              <ul className='flex flex-col ml-5 text-base list-outside font-poppins'>
                <li className='list-decimal'>math.Abs(): Menghitung nilai absolut (nilai positif) dari sebuah bilangan.</li>
                <li className='list-decimal'>math.Pow(): Menghitung hasil pangkat dari sebuah bilangan.</li>
                <li className='list-decimal'>math.Sqrt(): Menghitung akar kuadrat dari sebuah bilangan.</li>
                <li className='list-decimal'>math.Round(): Membulatkan bilangan desimal ke bilangan bulat terdekat.</li>
                <li className='list-decimal'>math.Floor(): Membulatkan bilangan desimal ke bawah.</li>
                <li className='list-decimal'>math.Ceil(): Membulatkan bilangan desimal ke atas.</li>
                <li className='list-decimal'>math.Max(): Mencari nilai terbesar dari dua bilangan.</li>
                <li className='list-decimal'>math.Min(): Mencari nilai terkecil dari dua bilangan.</li>
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
