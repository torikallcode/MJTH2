// Integer.js
import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FillContent } from '../FillContent';
export const Flag = () => {

  const code1 = [
    {
      contoh:
        `
  package main

  import (
      "flag"
      "fmt"
  )

  func main() {
      name := flag.String("name", "anonim", "Masukkan nama Anda")
      age := flag.Int("age", 0, "Masukkan umur Anda")
      married := flag.Bool("married", false, "Apakah Anda sudah menikah?")

      // Memproses semua flag
      flag.Parse()

      fmt.Printf("Nama: %s, Umur: %d, Menikah: %t", *name, *age, *married)
      // balikkannya adalah pointer
  }
  `
    },
  ]
  const code2 = [
    {
      contoh:
        `
  go run main.go
  //Output: nama: anonim, Umur: 0, Menikah: false
      
  go run main.go -name=Budi -age=25 -married=true
  //Output: nama: Budi, Umur: 25, Menikah: true

  go run main.go -name="Budi Lestari" //jika lebih dari satu kata maka menggunakan string
  // Output: nama: Budi Lestari
  `
    },
  ]

  return (
    <div className='flex flex-col pb-3 lg:pt-5 lg:items-start lg:flex-row lg:gap-x-3 gap-y-7'>
      <div className='w-full'>
        <FillContent
          classname={'xl:max-w-4xl'}
          judul={'Flag'}
          pengertian={'Dalam bahasa pemrograman Go, flag adalah sebuah standard library (pustaka standar) yang digunakan untuk membaca argument baris perintah (command-line arguments). Ketika kita menjalankan program di terminal atau command prompt, kita bisa memberikan beberapa informasi tambahan untuk mengubah perilaku program. Informasi tambahan ini disebut "flag".'}
          fungsi={'Kita menggunakan flag ketika ingin membuat program yang bisa menerima input dari pengguna saat dijalankan di terminal. Contohnya, kita bisa membuat program yang meminta pengguna untuk menentukan nama atau angka tertentu yang digunakan dalam program.'}
          tambahan={
            <div className='mb-5'>
              <h1 className='text-lg italic font-medium font-poppins'>Fungsi-fungsi yang sering digunakan:</h1>
              <ul className='flex flex-col ml-5 text-base list-outside font-poppins'>
                <li className='list-decimal'>flag.String(): Membaca flag berupa string (teks).</li>
                <li className='list-decimal'>flag.Int(): Membaca flag berupa integer (angka bulat).</li>
                <li className='list-decimal'>flag.Bool(): Membaca flag berupa boolean (benar atau salah).</li>
                <li className='list-decimal'>flag.Parse(): Memproses semua flag yang telah didefinisikan.</li>
              </ul>
            </div>
          }
        >
          {code1.map((item) => (
            <SyntaxHighlighter language="go" style={nightOwl} className="mb-4 rounded-lg font-poppins">
              {item.contoh}
            </SyntaxHighlighter>
          ))}
          <h1 className='font-poppins'>Cara menjalankan: </h1>
          {code2.map((item) => (
            <SyntaxHighlighter language="go" style={nightOwl} className="mb-4 rounded-lg font-poppins">
              {item.contoh}
            </SyntaxHighlighter>
          ))}
        </FillContent>
      </div>
    </div >
  );
};
