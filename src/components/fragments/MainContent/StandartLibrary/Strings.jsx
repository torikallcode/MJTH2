// Integer.js
import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FillContent } from '../FillContent';
export const Strings = () => {

  const code1 = [
    {
      contoh:
        `
  package main

  import (
      "flag"
      "strings"
  )

  func main() {
    fmt.Println(strings.Contains("M.Torikal Akbar", "Akbar"))               
    //Mencari kata "Akbar"
    fmt.Println(strings.Split("M. Torikal Akbar", ""))                      
    //untuk memisah string
    fmt.Println(strings.ToLower("M. Torikal Akbar"))                        
    //membuat string menjadi huruf kecil semua
    fmt.Println(strings.ToUpper("M. Torikal Akbar"))                        
    // membuat string menjadi huruf besar semua
    fmt.Println(strings.Trim("  M. Torikal Akbar   ", " "))                 
    // menghapus spasi pada awal dan akhir string
    fmt.Println(strings.ReplaceAll("Torikal Akbar", "Torikal", "Muhammad")) 
    //mengganti kata "Torikal" dengan "Muhammad"
    words := []string{"halo", "dunia", "Go"}
    joinedText := strings.Join(words, " ")
    fmt.Println("Teks setelah digabungkan:", joinedText)
  }
  `
    },
  ]

  return (
    <div className='flex flex-col pb-3 lg:pt-5 lg:items-start lg:flex-row lg:gap-x-3 gap-y-7'>
      <div className='w-full'>
        <FillContent
          classname={'xl:max-w-4xl'}
          judul={'Strings'}
          pengertian={'Dalam bahasa pemrograman Go, strings adalah sebuah standard library (pustaka standar) yang berisi fungsi-fungsi untuk memanipulasi teks (string). Dengan menggunakan strings, kita dapat melakukan berbagai hal seperti mencari kata dalam teks, mengubah huruf besar menjadi kecil, memotong teks, dan lain-lain.'}
          fungsi={'Kita menggunakan strings untuk memudahkan kita dalam mengolah teks, misalnya ketika ingin mencari kata tertentu di dalam kalimat, mengganti satu kata dengan kata lain, atau menggabungkan beberapa kata menjadi satu kalimat.'}
          tambahan={
            <div className='mb-5'>
              <h1 className='text-lg italic font-medium font-poppins'>Fungsi-fungsi yang sering digunakan:</h1>
              <ul className='flex flex-col ml-5 text-base list-outside font-poppins'>
                <li className='list-decimal'>strings.Contains(): Mengecek apakah suatu teks mengandung teks lain.</li>
                <li className='list-decimal'>strings.ToUpper(): Mengubah semua huruf dalam teks menjadi huruf besar.</li>
                <li className='list-decimal'>strings.ToLower(): Mengubah semua huruf dalam teks menjadi huruf kecil.</li>
                <li className='list-decimal'>strings.ReplaceAll(): Mengganti semua kemunculan suatu teks dengan teks lain.</li>
                <li className='list-decimal'>strings.Split(): Memotong teks menjadi potongan-potongan kecil berdasarkan pemisah tertentu.</li>
                <li className='list-decimal'>strings.Join(): Menggabungkan potongan-potongan teks menjadi satu teks.</li>
                <li className='list-decimal'>strings.TrimSpace(): Menghapus spasi di awal dan akhir teks.</li>
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
