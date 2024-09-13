// Integer.js
import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FillContent } from '../FillContent';
export const Os = () => {

  const code1 = [
    {
      contoh:
        `
  package main

  import (
      "fmt"
      "os"
  )

  func main() {
  // 1. os.Open()
  // Membuka file "data.txt"
  file, err := os.Open("data.txt")
  if err != nil {
      fmt.Println("Error:", err)
      return
  }

  // 2. os.Create()
  // Membuat file baru "baru.txt"
  file, err := os.Create("baru.txt")
  if err != nil {
      fmt.Println("Error:", err)
      return
  }

  // 3. os.Remove()
  err := os.Remove("baru.txt")
  if err != nil {
      fmt.Println("Error:", err)
      return
  }

  // 4. os.Mkdir()
  // Membuat direktori baru "folder_baru"
  err := os.Mkdir("folder_baru", 0755)
  if err != nil {
      fmt.Println("Error:", err)
      return
  }

  // 5. os.Getenv()
  // Mengambil nilai variabel lingkungan "PATH"
  path := os.Getenv("PATH")
  fmt.Println("PATH:", path)
  
  // Pastikan file ditutup setelah selesai digunakan
  defer file.Close()

  fmt.Println("File berhasil dibuka!")
  } 
  `
    },
  ]

  return (
    <div className='flex flex-col pb-3 lg:pt-5 lg:items-start lg:flex-row lg:gap-x-3 gap-y-7'>
      <div className='w-full'>
        <FillContent
          classname={'xl:max-w-4xl'}
          judul={'Os'}
          pengertian={'Dalam bahasa pemrograman Go, os adalah sebuah standard library (pustaka standar) yang menyediakan fungsi-fungsi untuk berinteraksi dengan sistem operasi. Package ini memungkinkan kita untuk melakukan berbagai tugas seperti membaca atau menulis file, menghapus file, membuat direktori, atau mendapatkan informasi tentang lingkungan tempat program dijalankan.'}
          fungsi={'Kita menggunakan os untuk mengelola file, folder, dan informasi sistem lainnya. Ini penting saat kita ingin membuat program yang dapat bekerja dengan file atau melakukan operasi lain yang bergantung pada sistem operasi.'}
          tambahan={
            <div className='mb-5'>
              <h1 className='text-lg italic font-medium font-poppins'>Fungsi-fungsi yang sering digunakan:</h1>
              <ul className='flex flex-col ml-5 text-base list-outside font-poppins'>
                <li className='list-decimal'>os.Open(): Membuka file untuk membaca.</li>
                <li className='list-decimal'>os.Create(): Membuat file baru atau menimpa file yang sudah ada.</li>
                <li className='list-decimal'>os.Remove(): Menghapus file.</li>
                <li className='list-decimal'>os.Mkdir(): Membuat direktori baru.</li>
                <li className='list-decimal'>os.Getenv(): Mengambil nilai dari variabel lingkungan (environment variable).</li>
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
