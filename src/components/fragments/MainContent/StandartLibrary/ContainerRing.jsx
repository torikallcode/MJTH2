// Integer.js
import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FillContent } from '../FillContent';
export const ContaierRing = () => {

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
    // 1. Membuat list baru = list.New()
    myList := list.New()
    fmt.Println("List baru dibuat:", myList)
    // output: List baru dibuat: &{0xc000010060}

    // 2. Menambahkan elemen ke akhir list = list.PushBack()
    myList := list.New()
    myList.PushBack("Tugas 1")
    myList.PushBack("Tugas 2")
    fmt.Println("List setelah menambahkan elemen:", myList)
    // Output: List setelah menambahkan elemen: &{0xc000010060}

    // 3. Menambahkan elemen ke awal list = list.PushFront()
    myList := list.New()
    myList.PushFront("Tugas 1")
    myList.PushFront("Tugas 2")
    fmt.Println("List setelah menambahkan elemen di awal:", myList)
    // output: List setelah menambahkan elemen di awal: &{0xc000010060}

    // 4. Menghapus elemen = list.Remove()
    myList := list.New()
    elem1 := myList.PushBack("Tugas 1")
    elem2 := myList.PushBack("Tugas 2")
    
    myList.Remove(elem1)
    fmt.Println("List setelah menghapus elemen pertama:", myList)
    // Output: List setelah menghapus elemen pertama: &{0xc000010060}

    // 5. Mengambil elemen pertama = list.Front()
    myList := list.New()
    myList.PushBack("Tugas 1")
    myList.PushBack("Tugas 2")
    
    firstElem := myList.Front()
    fmt.Println("Elemen pertama dalam list:", firstElem.Value)
    //Output: Elemen pertama dalam list: Tugas 1

    // 6. Mengambil elemen terakhir
    myList := list.New()
    myList.PushBack("Tugas 1")
    myList.PushBack("Tugas 2")
    
    lastElem := myList.Back()
    fmt.Println("Elemen terakhir dalam list:", lastElem.Value)
    // Output: Elemen terakhir dalam list: Tugas 2
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
          pengertian={'container/ring adalah sebuah standard library (pustaka standar) yang menyediakan struktur data ring. Ring adalah jenis struktur data yang mirip dengan list, tetapi elemen-elemennya saling terhubung dalam bentuk lingkaran. Ini berarti elemen terakhir terhubung kembali ke elemen pertama, membentuk siklus.'}
          fungsi={'Kita menggunakan container/ring ketika kita perlu menyimpan data dalam bentuk lingkaran, di mana kita sering ingin mengakses elemen-elemen dalam urutan yang melingkar. Ini berguna untuk aplikasi seperti buffer sirkular atau antrian putar.'}
          tambahan={
            <div className='mb-5'>
              <h1 className='text-lg italic font-medium font-poppins'>Fungsi-fungsi yang sering digunakan:</h1>
              <ul className='flex flex-col ml-5 text-base list-outside font-poppins'>
                <li className='list-decimal'>ring.New(n int): Membuat ring baru dengan kapasitas n elemen.</li>
                <li className='list-decimal'>ring.Value: Menyimpan nilai elemen dalam ring.</li>
                <li className='list-decimal'>ring.Next(): Mengambil elemen berikutnya dalam ring (dalam bentuk siklus).</li>
                <li className='list-decimal'>ring.Prev(): Mengambil elemen sebelumnya dalam ring (dalam bentuk siklus).</li>
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
