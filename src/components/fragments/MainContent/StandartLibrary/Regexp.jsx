// Integer.js
import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FillContent } from '../FillContent';
export const Regexp = () => {

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
    // 1. digunakan untuk memeriksa apakah suatu string cocok dengan pola 
    // regex yang kita tentukan. = regexp.MatchString()
    cocok, _ := regexp.MatchString("halo", "halo dunia")
    fmt.Println("Cocok:", cocok)
    // Output: cocok: true
    // Dalam contoh ini, program memeriksa apakah teks "halo" ada di dalam "halo dunia". 
    // Hasilnya true, karena cocok.

    // 2. MustCompile() digunakan untuk membuat pola regex yang bisa digunakan berulang kali.
    // FindString() digunakan untuk menemukan dan mengembalikan teks pertama yang cocok dengan pola. 
    // = regexp.MustCompile() dan FindString()
    re := regexp.MustCompile("dunia")
    hasil := re.FindString("halo dunia")
    fmt.Println("Ditemukan:", hasil)
    // Output: ditemukan: dunia
    //Program ini mencari kata "dunia" di dalam string "halo dunia" 
    //dan mengembalikannya jika ditemukan.

    // 3. mencari dan mengembalikan semua string yang cocok 
    // dengan pola dalam teks, bukan hanya yang pertama. = FindAllString()
    re := regexp.MustCompile("[a-z]+")
    hasil := re.FindAllString("123 abc def 456 ghi", -1)
    fmt.Println("Semua yang cocok:", hasil)
    //Output: Semua yang cocok: [abc def ghi]
    //Dalam contoh ini, kita menggunakan pola [a-z]+, yang berarti 
    //"cari semua kata yang terdiri dari huruf kecil". Hasilnya adalah semua kata kecil dalam string.


    // 4. mengganti semua teks yang cocok dengan pola dengan teks yang kita tentukan = ReplaceAllString()
    re := regexp.MustCompile("halo")
    hasil := re.ReplaceAllString("halo dunia, halo semua", "hi")
    fmt.Println("Hasil setelah diganti:", hasil)
    // Output: Hasil setelah diganti: hi dunia, hi semua
    //Program ini mengganti semua kemunculan kata "halo" dengan "hi".


    // 5. memecah string menjadi beberapa bagian berdasarkan pola tertentu = Split()
    re := regexp.MustCompile("[0-9]+")
    hasil := re.Split("abc123def456ghi", -1)
    fmt.Println("Hasil split:", hasil)
    // Output: Hasil split: [abc def ghi]
  }
  `
    },
  ]

  return (
    <div className='flex flex-col pb-3 lg:pt-5 lg:items-start lg:flex-row lg:gap-x-3 gap-y-7'>
      <div className='w-full'>
        <FillContent
          classname={'xl:max-w-4xl'}
          judul={'Regexp'}
          pengertian={'Package regexp di Go digunakan untuk mencocokkan pola dalam teks. Dengan kata lain, kita bisa mencari kata atau bentuk tertentu dalam sebuah string menggunakan regular expressions (atau biasa disingkat sebagai regex). Regex adalah serangkaian aturan atau pola yang membantu kita menemukan, mengganti, atau memanipulasi teks berdasarkan pola tersebut.'}
          fungsi={'Biasanya, kita menggunakan regexp jika ingin: Memeriksa apakah suatu teks cocok dengan pola tertentu. Mencari kata atau kalimat dalam teks yang sesuai dengan pola. Mengganti bagian dari teks yang cocok dengan pola tertentu. Memecah string berdasarkan pola tertentu.'}
          tambahan={
            <div className='mb-5'>
              <h1 className='text-lg italic font-medium font-poppins'>Fungsi-fungsi yang sering digunakan:</h1>
              <ul className='flex flex-col ml-5 text-base list-outside font-poppins'>
                <li className='list-decimal'>regexp.MatchString(): Untuk memeriksa apakah sebuah teks cocok dengan pola tertentu.</li>
                <li className='list-decimal'>regexp.MustCompile(): Untuk membuat objek regex yang bisa kita gunakan berulang kali.</li>
                <li className='list-decimal'>FindString(): Untuk mencari dan mengambil teks yang cocok dengan pola.</li>
                <li className='list-decimal'>FindAllString(): Untuk mencari semua teks yang cocok dengan pola.</li>
                <li className='list-decimal'>ReplaceAllString(): Untuk mengganti bagian teks yang cocok dengan pola tertentu.</li>
                <li className='list-decimal'>Split(): Untuk memecah teks menjadi beberapa bagian berdasarkan pola tertentu.</li>
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
