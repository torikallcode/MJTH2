// Integer.js
import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FillContent } from '../FillContent';
export const Bufio = () => {

  const code1 = [
    {
      id: 1,
      name: "bufio.NewReader()",
      desc: "bufio.NewReader() digunakan untuk membuat pembaca yang efisien dari suatu sumber data, seperti file atau input dari user. Fungsi ini membuat buffer sehingga membaca data menjadi lebih cepat.",
      contoh:
        `
  package main

  import (
      "bufio"
      "fmt"
      "os"
  )

  func main() {
    reader := bufio.NewReader(os.Stdin) // Membuat reader dari input
    fmt.Print("Ketik sesuatu: ")
    text, _ := reader.ReadString('\n')  // Membaca sampai ada newline
    fmt.Println("Kamu mengetik:", text)
    // Output: Ketik sesuatu: Halo Go!
    // Kamu mengetik: Halo Go!
  }
  `,
    },
    {
      id: 2,
      name: "bufio.NewWriter()",
      desc: "bufio.NewWriter() digunakan untuk menulis data ke tujuan dengan buffer. Ini membuat penulisan data lebih efisien.",
      contoh:
        `
  package main

  import (
      "bufio"
      "os"
  )

  func main() {
    file, _ := os.Create("output.txt")      // Membuat file baru
    writer := bufio.NewWriter(file)         // Membuat writer dengan buffer
    writer.WriteString("Hello, bufio!\n")   // Menulis string ke buffer
    writer.Flush()                          // Menyimpan data di buffer ke file
    file.Close()
    // Output: Hello, bufio!
  }
  `,
    },
    {
      id: 3,
      name: "ReadString()",
      desc: "Fungsi ReadString() digunakan untuk membaca data dari input sampai menemukan karakter tertentu, seperti newline ('\n').",
      contoh:
        `
  package main

  import (
      "bufio"
      "fmt"
      "strings"
  )

  func main() {
    reader := bufio.NewReader(strings.NewReader("Hello, Go!\nHow are you?"))
    line, _ := reader.ReadString('\n') // Membaca sampai newline
    fmt.Print(line)
    // Output: Hello, Go!
  }
  `,
    },
    {
      id: 4,
      name: "WriteString()",
      desc: "Fungsi WriteString() digunakan untuk menulis string ke buffer. Kita bisa menulis beberapa data secara bertahap sebelum akhirnya disimpan ke file atau tujuan lain.",
      contoh:
        `
  package main

  import (
      "bufio"
      "os"
  )

  func main() {
    file, _ := os.Create("output.txt")      // Membuat file baru
    writer := bufio.NewWriter(file)         // Membuat writer dengan buffer
    writer.WriteString("First line.\n")     // Menulis baris pertama
    writer.WriteString("Second line.\n")    // Menulis baris kedua
    writer.Flush()                          // Menyimpan data di buffer ke file
    file.Close()
    // Output: First line.
     // Second line.
  }
  `,
    },
    {
      id: 5,
      name: "Flush()",
      desc: "Fungsi Flush() digunakan untuk menyimpan atau mengeluarkan data dari buffer ke tujuan akhir, seperti file. Jika kita menggunakan bufio.NewWriter(), kita perlu memanggil Flush() agar data benar-benar ditulis ke file atau output.",
      contoh: 'Belum ada contoh hehe'
    },
  ]

  return (
    <div className='flex flex-col pb-3 lg:pt-5 lg:items-start lg:flex-row lg:gap-x-3 gap-y-7'>
      <div className='w-full'>
        <FillContent
          classname={'xl:max-w-4xl'}
          judul={'Bufio'}
          pengertian={'Package bufio digunakan untuk membaca dan menulis data secara lebih efisien. Ia menyimpan data dalam buffer (tempat penyimpanan sementara) sehingga program tidak perlu terus-menerus mengakses sumber data, yang bisa memperlambat proses.'}
          fungsi={'Membuat pembacaan data lebih cepat, Memungkinkan membaca data per baris atau per kata, Memungkinkan menulis data secara bertahap ke output.'}
          tambahan={
            <div className='mb-5'>
              <h1 className='text-lg italic font-medium font-poppins'>Fungsi-fungsi yang sering digunakan:</h1>
              <ul className='flex flex-col ml-5 text-base list-outside font-poppins'>
                <li className='list-decimal'>bufio.NewReader(): Membaca data dengan buffer.</li>
                <li className='list-decimal'>bufio.NewWriter(): Menulis data dengan buffer.</li>
                <li className='list-decimal'>ReadString(): Membaca data sampai karakter tertentu, seperti newline.</li>
                <li className='list-decimal'>WriteString(): Menulis string ke buffer.</li>
                <li className='list-decimal'>Flush(): Menyimpan data yang ada di buffer ke tujuan.</li>
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
