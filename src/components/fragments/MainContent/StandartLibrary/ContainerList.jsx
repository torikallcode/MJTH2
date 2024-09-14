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
