// Integer.js
import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FillContent } from '../FillContent';
export const Slices = () => {

  const code1 = [
    {
      id: 1,
      name: "slices.Contains()",
      desc: "Fungsi slices.Contains() digunakan untuk mengecek apakah sebuah elemen ada di dalam slice.",
      contoh:
        `
  package main

  import (
      "fmt"
      "slices"
  )

  func main() {
      angka := []int{1, 2, 3, 4, 5}
      ada := slices.Contains(angka, 3)
      fmt.Println(ada) 
      // Output: true, karena 3 ada di dalam slice
  }
  `,
    },
    {
      id: 2,
      name: "slices.Equal()",
      desc: "Fungsi slices.Equal() digunakan untuk membandingkan dua slice, apakah isinya sama atau tidak.",
      contoh:
        `
  package main

  import (
      "fmt"
      "slices"
  )

  func main() {
      angka1 := []int{1, 2, 3}
      angka2 := []int{1, 2, 3}
      sama := slices.Equal(angka1, angka2)
      fmt.Println(sama) 
      // Output: true, karena kedua slice isinya sama
  }
  `,
    },
    {
      id: 3,
      name: "slices.Index()",
      desc: "Fungsi slices.Index() digunakan untuk mencari posisi pertama dari sebuah elemen di dalam slice.",
      contoh:
        `
  package main

  import (
      "fmt"
      "slices"
  )

  func main() {
      angka := []int{1, 2, 3, 4, 3}
      index := slices.Index(angka, 3)
      fmt.Println(index) 
      // Output: 2, karena angka 3 pertama kali muncul di indeks 2
  }
  `,
    },
    {
      id: 4,
      name: "slices.Sort()",
      desc: "Fungsi slices.Sort() digunakan untuk mengurutkan elemen-elemen di dalam slice.",
      contoh:
        `
  package main

  import (
      "fmt"
      "slices"
  )

  func main() {
      angka := []int{5, 3, 1, 4, 2}
      slices.Sort(angka)
      fmt.Println(angka) 
      // Output: [1 2 3 4 5], karena elemen-elemen sudah diurutkan
  }
  `,
    },
    {
      id: 5,
      name: "sslices.Reverse()",
      desc: "Fungsi slices.Reverse() digunakan untuk membalik urutan elemen di dalam slice.",
      contoh:
        `
  package main

  import (
      "fmt"
      "slices"
  )

  func main() {
      angka := []int{1, 2, 3, 4, 5}
      slices.Reverse(angka)
      fmt.Println(angka) 
      // Output: [5 4 3 2 1], karena urutan elemen dibalik
  }
  `,
    },
  ]

  return (
    <div className='flex flex-col pb-3 lg:pt-5 lg:items-start lg:flex-row lg:gap-x-3 gap-y-7'>
      <div className='w-full'>
        <FillContent
          classname={'xl:max-w-4xl'}
          judul={'Slices'}
          pengertian={'Package slices adalah bagian dari Go standard library yang menyediakan berbagai fungsi untuk memudahkan kita dalam bekerja dengan slice. Slice adalah struktur data yang sering digunakan di Go untuk menyimpan daftar elemen.'}
          fungsi={'Kita menggunakan package slices untuk: Mengurutkan elemen di dalam slice, Mencari nilai tertentu di dalam slice, Menyusun ulang atau menambah elemen dalam slice, Membandingkan dua slice.'}
          tambahan={
            <div className='mb-5'>
              <h1 className='text-lg italic font-medium font-poppins'>Fungsi-fungsi yang sering digunakan:</h1>
              <ul className='flex flex-col ml-5 text-base list-outside font-poppins'>
                <li className='list-decimal'>slices.Contains(): Mengecek apakah slice berisi elemen tertentu.</li>
                <li className='list-decimal'>slices.Equal(): Membandingkan dua slice apakah sama atau tidak.</li>
                <li className='list-decimal'>slices.Index(): Mencari indeks elemen pertama yang cocok di dalam slice.</li>
                <li className='list-decimal'>slices.Sort(): Mengurutkan elemen-elemen dalam slice.</li>
                <li className='list-decimal'>slices.Reverse(): Membalik urutan elemen di dalam slice.</li>
              </ul>
            </div>
          }
        >
          {code1.map((item) => (
            <div className='flex flex-col gap-y-3 mb-3'>
              <div>
                <ul className='flex flex-row font-poppins list-inside font-medium'>
                  <li className='flex gap-x-3 items-center'>{item.id}.<span className='bg-[#efeffd] rounded-lg px-2 py-1 text-[#6366f1]'>{item.name} </span></li>
                </ul>
                <p className='font-poppins text-base'>{item.desc}</p>
              </div>
              <SyntaxHighlighter language="go" style={nightOwl} className="mb-4 rounded-lg font-poppins">
                {item.contoh}
              </SyntaxHighlighter>
            </div>
          ))}
        </FillContent>
      </div>
    </div >
  );
};
