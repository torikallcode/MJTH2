// Integer.js
import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FillContent } from '../FillContent';
export const ContainerLIst = () => {

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
          judul={'Container List'}
          pengertian={'container/list adalah sebuah standard library (pustaka standar) yang berisi tipe data list. List adalah sebuah jenis struktur data yang memungkinkan kita menyimpan dan mengatur sekelompok item dengan cara yang fleksibel. Struktur data ini cocok untuk menyimpan data yang sering diubah atau ditambahkan di berbagai posisi.'}
          fungsi={'Kita menggunakan container/list ketika kita membutuhkan struktur data yang bisa dengan mudah menambah, menghapus, atau mengakses elemen dari posisi yang berbeda dalam list. Misalnya, jika kita memiliki daftar tugas dan sering menambah atau menghapus tugas dari daftar tersebut, kita bisa menggunakan container/list untuk mengelolanya.'}
          tambahan={
            <div className='mb-5'>
              <h1 className='text-lg italic font-medium font-poppins'>Fungsi-fungsi yang sering digunakan:</h1>
              <ul className='flex flex-col ml-5 text-base list-outside font-poppins'>
                <li className='list-decimal'>list.New(): Membuat list baru.</li>
                <li className='list-decimal'>list.PushBack(): Menambahkan elemen ke akhir list.</li>
                <li className='list-decimal'>list.PushFront(): Menambahkan elemen ke awal list.</li>
                <li className='list-decimal'>list.Remove(): Menghapus elemen dari list.</li>
                <li className='list-decimal'>list.Front(): Mengambil elemen pertama dari list.</li>
                <li className='list-decimal'>list.Back(): Mengambil elemen terakhir dari list.</li>
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
