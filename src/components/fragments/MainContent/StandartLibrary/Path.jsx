// Integer.js
import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FillContent } from '../FillContent';
export const Path = () => {

  const code1 = [
    {
      id: 1,
      name: "path.Join()",
      desc: "Fungsi path.Join() digunakan untuk menggabungkan beberapa bagian dari sebuah jalur file menjadi satu.",
      contoh:
        `
  package main

  import (
      "fmt"
      "path"
  )

  func main() {
    folder := "myfolder"
    file := "myfile.txt"
    fullPath := path.Join(folder, file)
    fmt.Println(fullPath) 
    // Output: myfolder/myfile.txt
  }
  `,
    },
    {
      id: 2,
      name: "path.Base()",
      desc: "Fungsi path.Base() digunakan untuk mendapatkan bagian akhir (nama file atau folder) dari sebuah jalur.",
      contoh:
        `
  package main

  import (
      "fmt"
      "path"
  )

  func main() {
    fullPath := "/home/user/myfile.txt"
    base := path.Base(fullPath)
    fmt.Println(base) 
    // Output: myfile.txt
  }
  `,
    },
    {
      id: 3,
      name: "path.Dir()",
      desc: "Fungsi path.Dir() digunakan untuk mendapatkan direktori dari sebuah jalur file.",
      contoh:
        `
  package main

  import (
      "fmt"
      "path"
  )

  func main() {
    fullPath := "/home/user/myfile.txt"
    dir := path.Dir(fullPath)
    fmt.Println(dir) 
    // Output: /home/user
  }
  `,
    },
    {
      id: 4,
      name: "path.Ext()",
      desc: "Fungsi path.Ext() digunakan untuk mendapatkan ekstensi file dari sebuah jalur.",
      contoh:
        `
  package main

  import (
      "fmt"
      "path"
  )

  func main() {
    file := "myfile.txt"
    ext := path.Ext(file)
    fmt.Println(ext) 
    // Output: .txt
  }
  `,
    },
  ]

  return (
    <div className='flex flex-col pb-3 lg:pt-5 lg:items-start lg:flex-row lg:gap-x-3 gap-y-7'>
      <div className='w-full'>
        <FillContent
          classname={'xl:max-w-4xl'}
          judul={'Path'}
          pengertian={'Package path adalah bagian dari Go standard library yang digunakan untuk bekerja dengan path atau jalur file di dalam program Go. Jalur file biasanya digunakan untuk menunjukkan lokasi file atau folder di dalam sistem komputer.'}
          fungsi={'Kita menggunakan package path untuk: Menyusun dan menggabungkan jalur file, Menemukan bagian tertentu dari sebuah jalur, Mengubah atau memperbaiki jalur file yang salah.'}
          tambahan={
            <div className='mb-5'>
              <h1 className='text-lg italic font-medium font-poppins'>Fungsi-fungsi yang sering digunakan:</h1>
              <ul className='flex flex-col ml-5 text-base list-outside font-poppins'>
                <li className='list-decimal'>path.Join(): Menggabungkan beberapa bagian jalur file menjadi satu jalur lengkap.</li>
                <li className='list-decimal'>path.Base(): Mendapatkan nama file atau folder terakhir dari sebuah jalur.</li>
                <li className='list-decimal'>path.Dir(): Mendapatkan jalur direktori dari sebuah jalur file.</li>
                <li className='list-decimal'>path.Ext(): Mendapatkan ekstensi file dari sebuah jalur.</li>
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
