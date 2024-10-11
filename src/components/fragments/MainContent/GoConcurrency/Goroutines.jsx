// Integer.js
import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FillContent } from '../FillContent';
export const Goroutines = () => {

  const code1 = [
    {
      id: 1,
      name: "Contoh sederhana Goroutine",
      contoh:
        `
    func RunHelloWorld() {
    fmt.Println("Hello World")
   }

  func PrintNumbers() {
    for i := 0; i <= 5; i++ {
      fmt.Println(i)
      time.Sleep(100 * time.Millisecond)
    }
  }

  func TestHelloWorld(t *testing.T) {
    PrintNumbers()
    go RunHelloWorld()
    fmt.Println("Ups")

    time.Sleep(1 * time.Second) //Menunggu goroutine selesai sebelum program berakhir
  }
  `,
    },
    {
      id: 2,
      name: "Goroutine dengan fungsi anonim",
      desc: "io.Writer adalah interface yang digunakan untuk menulis data. Jika kita ingin menulis ke file atau layar, kita bisa menggunakan io.Writer",
      contoh:
        `
    func TestAnonim(t *testing.T) {
    go func() {
      fmt.Println("Goroutine dengan fungsi anonim")
    }()

    time.Sleep(1 * time.Second)
  }
  `,
    },
    {
      id: 3,
      name: "Goroutine tanpa sinkronisasi",
      desc: "Fungsi io.Copy() digunakan untuk menyalin data dari io.Reader ke io.Writer. Ini sangat berguna saat kita ingin menyalin data antara file, memori, atau jaringan.",
      contoh:
        `
      func Ganjil() {
      for i := 2; i <= 10; i += 2 {
        fmt.Println(i)
        time.Sleep(100 * time.Millisecond)
      }
    }

    func Genap() {
      for i := 1; i <= 9; i += 2 {
        fmt.Println(i)
        time.Sleep(100 * time.Millisecond)
      }
    }

    func TestNumber(t *testing.T) {
      go Ganjil()
      go Genap()

      time.Sleep(1 * time.Second)
    }
  `,
    },
    {
      id: 4,
      name: "Goroutine dengan Parameter",
      desc: "Fungsi io.TeeReader() digunakan untuk membaca data dan menulisnya secara bersamaan. Saat membaca, data juga ditulis ke tujuan yang kita tentukan.",
      contoh:
        `
      fmt.Println("Hello", name)
    }

    func TestGreet(t *testing.T) {
      go Greet("Akbar")

      time.Sleep(1 * time.Second)
    }
  `,
    },
  ]

  return (
    <div className='flex flex-col pb-3 lg:pt-5 lg:items-start lg:flex-row lg:gap-x-3 gap-y-7'>
      <div className='w-full'>
        <FillContent
          classname={'xl:max-w-4xl'}
          judul={'Goroutines'}
          pengertian={'Goroutines: Bayangkan goroutine seperti memiliki banyak pekerja yang bisa Anda minta untuk melakukan pekerjaan tertentu, tetapi mereka sangat ringan dan tidak memerlukan banyak sumber daya (mirip dengan "pembantu kecil"). Ketika Anda memanggil goroutine, Anda mempekerjakan pekerja tambahan untuk menangani pekerjaan. Jika Anda memiliki 100 pekerjaan, Anda bisa membuat 100 goroutine tanpa banyak masalah, karena mereka sangat efisien. Mereka bisa bekerja secara konkuren dan membagikan waktu secara efisien.'}
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
