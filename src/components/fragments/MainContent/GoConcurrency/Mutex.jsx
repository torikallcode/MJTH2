// Integer.js
import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FillContent } from '../FillContent';
export const Mutex = () => {

  const code1 = [
    {
      id: 1,
      name: "io.Reader",
      desc: "io.Reader adalah interface yang digunakan untuk membaca data. Jika kita ingin membaca file, kita bisa menggunakan io.Reader.",
      contoh:
        `
  package main

  import (
      "fmt"
      "strings"
      "io"
  )

  func main() {
    r := strings.NewReader("Hello, world!") // Membuat reader dari string
    buf := make([]byte, 5)                  // Buffer untuk menampung data

    for {
        n, err := r.Read(buf) // Membaca data
        if err == io.EOF {
            break
        }
        fmt.Printf("%s", buf[:n]) // Menampilkan data yang dibaca
    }
    // Hello, world!
  }
  `,
    },
    {
      id: 2,
      name: "io.Writer",
      desc: "io.Writer adalah interface yang digunakan untuk menulis data. Jika kita ingin menulis ke file atau layar, kita bisa menggunakan io.Writer",
      contoh:
        `
  package main

  import (
      "fmt"
      "io"
      "os"
  )

  func main() {
    writer := os.Stdout // Menulis ke layar
    _, err := io.WriteString(writer, "Hello, Go!\n")
    if err != nil {
        fmt.Println("Error:", err)
    }
    // Hello, Go!
  }
  `,
    },
    {
      id: 3,
      name: "io.Copy()",
      desc: "Fungsi io.Copy() digunakan untuk menyalin data dari io.Reader ke io.Writer. Ini sangat berguna saat kita ingin menyalin data antara file, memori, atau jaringan.",
      contoh:
        `
  package main

  import (
      "io"
      "os"
  )

  func main() {
    src := strings.NewReader("Data to copy") // Sumber data
    dst := os.Stdout                         // Tujuan output (layar)

    io.Copy(dst, src) // Menyalin data dari sumber ke tujuan
    // Output: Data to copy
  }
  `,
    },
    {
      id: 4,
      name: "io.TeeReader()",
      desc: "Fungsi io.TeeReader() digunakan untuk membaca data dan menulisnya secara bersamaan. Saat membaca, data juga ditulis ke tujuan yang kita tentukan.",
      contoh:
        `
  package main

  import (
      "io"
      "os"
      "strings"
  )

  func main() {
    r := strings.NewReader("Hello, TeeReader!") // Membuat reader
    tee := io.TeeReader(r, os.Stdout)           // Membaca dan menulis ke layar

    buf := make([]byte, 5)
    tee.Read(buf) // Membaca sebagian data (data juga ditulis ke layar)
    // Output: Hello, TeeReader!
  }
  `,
    },
  ]

  return (
    <div className='flex flex-col pb-3 lg:pt-5 lg:items-start lg:flex-row lg:gap-x-3 gap-y-7'>
      <div className='w-full'>
        <FillContent
          classname={'xl:max-w-4xl'}
          judul={'Mutex'}
          pengertian={'Mutex: Anggap ini seperti sebuah kunci untuk mengakses sumber daya bersama. Misalnya, ada satu meja komputer yang hanya bisa digunakan oleh satu orang pada satu waktu. Jika seorang pekerja ingin menggunakan komputer tersebut, ia harus mengambil kunci terlebih dahulu (mengunci mutex). Setelah selesai menggunakan komputer, ia harus mengembalikan kunci tersebut agar orang lain bisa menggunakannya (membuka mutex). Ini memastikan bahwa tidak ada dua orang yang mencoba menggunakan komputer yang sama secara bersamaan dan menyebabkan kebingungan.'}
          fungsi={'Membaca data dari berbagai sumber (file, koneksi jaringan, dll), Menulis data ke berbagai tujuan (file, layar, memori, dll), Menyalin data dari satu tempat ke tempat lain.'}
          tambahan={
            <div className='mb-5'>
              <h1 className='text-lg italic font-medium font-poppins'>Fungsi-fungsi yang sering digunakan:</h1>
              <ul className='flex flex-col ml-5 text-base list-outside font-poppins'>
                <li className='list-decimal'>io.Reader: Interface untuk membaca data.</li>
                <li className='list-decimal'>io.Writer: Interface untuk menulis data.</li>
                <li className='list-decimal'>io.Copy(): Menyalin data dari reader ke writer.</li>
                <li className='list-decimal'>io.TeeReader(): Membaca dan menulis data secara bersamaan.</li>
              </ul>
            </div>
          }
        >
          {code1.map((item) => (
            <div className='flex flex-col mb-3 gap-y-3'>
              <div>
                <ul className='flex flex-row font-medium list-inside font-poppins'>
                  <li className='flex items-center gap-x-3'>{item.id}.<span className='bg-[#efeffd] rounded-lg px-2 py-1 text-[#6366f1]'>{item.name} </span></li>
                </ul>
                <p className='text-base font-poppins'>{item.desc}</p>
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
