// Integer.js
import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FillContent } from '../FillContent';
export const Time = () => {

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
    // 1. Mengetahui waktu saat ini = time.Now()
    waktuSekarang := time.Now()
    fmt.Println("Waktu saat ini:", waktuSekarang)
    // Output: Waktu saat ini: 2024-09-14 15:04:05.123456789 +0700 WIB m=+0.000000001

    // 2. Menghentikan program sejenak selama durasi tertentu  = time.Sleep(duration)
    fmt.Println("Menunggu 2 detik...")
    time.Sleep(2 * time.Second)
    fmt.Println("Waktu sudah berlalu!")
    // Output: Menunggu 2 detik...
    //         Waktu sudah berlalu!

    // 3. Mengurutkan daftar angka decimal dari yang terkecil = time.Since(startTime)
    mulai := time.Now()

    // Simulasi menunggu 3 detik
    time.Sleep(3 * time.Second)

    durasi := time.Since(mulai)
    fmt.Println("Waktu yang berlalu:", durasi)
    //Output: Waktu yang berlalu: 3s



    // 4. Membuat waktu berdasarkan tahun , bulan ,hari jam , 
    // menit , detik  yang kita tentukan= time.Date()
    ulangTahun := time.Date(2010, time.April, 10, 9, 30, 0, 0, time.UTC)
    fmt.Println("Ulang tahun pada:", ulangTahun)
    // Output: Ulang tahun pada: 2010-04-10 09:30:00 +0000 UTC

    // 5. Mengubah teks(string) menjadi waktu yang bisa digunakan = time.Parse()
    waktu, err := time.Parse("2006-01-02", "2024-09-14")
    if err != nil {
        fmt.Println("Error:", err)
    } else {
        fmt.Println("Waktu yang di-parse:", waktu)
    }
    // Output: Waktu yang di-parse: 2024-09-14 00:00:00 +0000 UTC
  }
  `
    },
  ]

  return (
    <div className='flex flex-col pb-3 lg:pt-5 lg:items-start lg:flex-row lg:gap-x-3 gap-y-7'>
      <div className='w-full'>
        <FillContent
          classname={'xl:max-w-4xl'}
          judul={'Time'}
          pengertian={'Package time digunakan untuk bekerja dengan waktu. Misalnya, kita bisa menggunakan time untuk mengetahui waktu saat ini, menghitung berapa lama waktu yang sudah berlalu, atau membuat program berhenti sementara waktu.'}
          fungsi={'Kita menggunakan time untuk banyak hal yang berhubungan dengan waktu, seperti:Mengetahui waktu saat ini (jam, menit, detik, tanggal).Menghitung lama waktu yang dibutuhkan untuk melakukan sesuatu.Menghentikan program sejenak, seperti menunggu beberapa detik sebelum melakukan tindakan.'}
          tambahan={
            <div className='mb-5'>
              <h1 className='text-lg italic font-medium font-poppins'>Fungsi-fungsi yang sering digunakan:</h1>
              <ul className='flex flex-col ml-5 text-base list-outside font-poppins'>
                <li className='list-decimal'>time.Now(): Mengetahui waktu saat ini.</li>
                <li className='list-decimal'>time.Sleep(duration): Membuat program berhenti sementara.</li>
                <li className='list-decimal'>time.Since(startTime): Menghitung selisih waktu dari waktu tertentu.</li>
                <li className='list-decimal'>time.Date(): Membuat nilai waktu berdasarkan tahun, bulan, hari, jam, menit, dan detik.</li>
                <li className='list-decimal'>time.Parse(): Mengubah string menjadi waktu.</li>
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
