// Integer.js
import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FillContent } from '../FillContent';
export const Strconv = () => {

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
  i, err := strconv.Atoi("-42") //string to int
  s := strconv.Itoa(-42) // int to string
  b, err := strconv.ParseBool("true") //string to boolean
  f, err := strconv.ParseFloat("3.1415", 64) //string to float64
  i, err := strconv.ParseInt("-42", 10, 64) // string to int
  s := strconv.FormatBool(true) // bool ke string
  s := strconv.FormatFloat(3.1415, 'E', -1, 64) // float ke string
  s := strconv.FormatInt(-42, 16) //int ke string

  // contoh 1
	result, err := strconv.ParseBool("salah")
	if err != nil {
		fmt.Println("Error", err.Error())
	} else {
		fmt.Println(result)
	}
	output = true
  // contoh 2
	resultInt, err := strconv.Atoi("9999")
	if err != nil {
		fmt.Println("Error", err.Error())
	} else {
		fmt.Println(resultInt)
	}
  output 9999
  // contoh 3
    binary := strconv.FormatInt(9999, 2)
    fmt.Println(binary)
    output = 10011100001111
  }
  `
    },
  ]

  return (
    <div className='flex flex-col pb-3 lg:pt-5 lg:items-start lg:flex-row lg:gap-x-3 gap-y-7'>
      <div className='w-full'>
        <FillContent
          classname={'xl:max-w-4xl'}
          judul={'Strconv'}
          pengertian={'strconv adalah sebuah standard library (pustaka standar) yang berisi fungsi-fungsi untuk mengkonversi tipe data. strconv sering digunakan untuk mengubah teks (string) menjadi angka, atau sebaliknya. Fungsi ini sangat berguna ketika kita menerima input sebagai teks dan perlu menggunakannya sebagai angka, atau ingin menampilkan angka sebagai teks.'}
          fungsi={'Kita menggunakan strconv ketika ingin mengubah tipe data. Misalnya, ketika kita ingin mengubah teks seperti "123" menjadi angka 123 agar bisa digunakan untuk perhitungan, atau sebaliknya, mengubah angka menjadi teks untuk ditampilkan di layar.'}
          tambahan={
            <div className='mb-5'>
              <h1 className='text-lg italic font-medium font-poppins'>Fungsi-fungsi yang sering digunakan:</h1>
              <ul className='flex flex-col ml-5 text-base list-outside font-poppins'>
                <li className='list-decimal'>strconv.Atoi(): Mengubah teks menjadi angka bulat (integer).</li>
                <li className='list-decimal'>strconv.Itoa(): Mengubah angka bulat (integer) menjadi teks.</li>
                <li className='list-decimal'>strconv.ParseInt(): Mengubah teks menjadi nilai Int (Angka).</li>
                <li className='list-decimal'>strconv.ParseFloat(): Mengubah teks menjadi angka desimal (float).</li>
                <li className='list-decimal'>strconv.ParseBool(): Mengubah teks menjadi nilai boolean (true atau false).</li>
                <li className='list-decimal'>strconv.FormatInt(): Mengubah nilai boolean (angka) menjadi teks.</li>
                <li className='list-decimal'>strconv.FormatFloat(): Mengubah angka desimal (float) menjadi teks.</li>
                <li className='list-decimal'>strconv.FormatBool(): Mengubah nilai boolean (true atau false) menjadi teks.</li>
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
