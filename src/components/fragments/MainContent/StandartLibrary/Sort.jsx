// Integer.js
import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FillContent } from '../FillContent';
export const Sort = () => {

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
    // 1. Mengurutkan daftar angka dari yang terkecil = sort.Ints(slice []int)
    angka := []int{5, 3, 8, 1, 2}
    fmt.Println("Sebelum diurutkan:", angka)

    sort.Ints(angka)
    fmt.Println("Setelah diurutkan:", angka)
    // Output: Sebelum diurutkan: [5 3 8 1 2]
              Setelah diurutkan: [1 2 3 5 8]



    // 2. Mengurutkan daftar string dari A - Z  = sort.Strings(slice []string)
    kata := []string{"apel", "jeruk", "pisang", "anggur"}
    fmt.Println("Sebelum diurutkan:", kata)

    sort.Strings(kata)
    fmt.Println("Setelah diurutkan:", kata)
    // Output: Sebelum diurutkan: [apel jeruk pisang anggur]
              Setelah diurutkan: [anggur apel jeruk pisang]


    // 3. Mengurutkan daftar angka decimal dari yang terkecil = sort.Float64s(slice []float64)
    desimal := []float64{3.14, 1.618, 2.718, 0.577}
    fmt.Println("Sebelum diurutkan:", desimal)

    sort.Float64s(desimal)
    fmt.Println("Setelah diurutkan:", desimal)
    //Output: Sebelum diurutkan: [3.14 1.618 2.718 0.577]
              Setelah diurutkan: [0.577 1.618 2.718 3.14]


    // 4. Mengurutkan Slice dengan aturan yang ditentukan sendiri = sort.Slice(slice []T, less func(i, j int) bool)
    angka := []int{5, 3, 8, 1, 2}
    fmt.Println("Sebelum diurutkan:", angka)

    // Mengurutkan slice dari yang terbesar ke terkecil
    sort.Slice(angka, func(i, j int) bool {
        return angka[i] > angka[j]
    })
    fmt.Println("Setelah diurutkan (dari besar ke kecil):", angka)
    // Output: Sebelum diurutkan: [5 3 8 1 2]
              Setelah diurutkan (dari besar ke kecil): [8 5 3 2 1]
  }

  `
    },
  ]

  return (
    <div className='flex flex-col pb-3 lg:pt-5 lg:items-start lg:flex-row lg:gap-x-3 gap-y-7'>
      <div className='w-full'>
        <FillContent
          classname={'xl:max-w-4xl'}
          judul={'Sort'}
          pengertian={'Package sort dalam Go digunakan untuk mengurutkan data. Misalnya, kamu punya daftar angka atau kata, dan ingin menempatkan mereka dalam urutan dari yang terkecil ke yang terbesar atau dari A sampai Z. Dengan sort, kamu bisa melakukan itu dengan mudah.'}
          fungsi={'Kita menggunakan sort ketika kita ingin menyusun elemen-elemen dalam suatu urutan, misalnya: Menyusun daftar angka dari yang terkecil hingga terbesar. Menyusun kata-kata dari A ke Z. Menyusun data lain, seperti berdasarkan tanggal atau panjang suatu kata.'}
          tambahan={
            <div className='mb-5'>
              <h1 className='text-lg italic font-medium font-poppins'>Fungsi-fungsi yang sering digunakan:</h1>
              <ul className='flex flex-col ml-5 text-base list-outside font-poppins'>
                <li className='list-decimal'>sort.Ints(slice []int): Mengurutkan slice (daftar) integer dari yang terkecil hingga yang terbesar.</li>
                <li className='list-decimal'>sort.Strings(slice []string): Mengurutkan slice string dari A sampai Z.</li>
                <li className='list-decimal'>sort.Float64s(slice []float64): Mengurutkan slice angka desimal (float64) dari yang terkecil hingga yang terbesar.</li>
                <li className='list-decimal'>sort.Slice(slice []T, less func(i, j int) bool): Mengurutkan slice berdasarkan aturan yang kita tentukan sendiri.</li>
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
