// Integer.js
import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FillContent } from '../FillContent';
export const SelectStatement = () => {

  const code1 = [
    {
      id: 1,
      name: "Contoh sederhana Select Statement",
      contoh:
        `
    func TestSelectStatement(t *testing.T) {
    ch1 := make(chan string)
    ch2 := make(chan string)

    // Goroutine pertama
    go func() {
      time.Sleep(2 * time.Second)
      ch1 <- "Data dari ch1"
    }()

    // Goroutine kedua
    go func() {
      time.Sleep(1 * time.Second)
      ch2 <- "Data dari ch2"
    }()

    for i := 0; i < 2; i++ {
      select {
      case msg1 := <-ch1:
        fmt.Println("Menerima:", msg1)
      case msg2 := <-ch2:
        fmt.Println("Menerima:", msg2)
      }
    }
  }
  `,
    },
    {
      id: 2,
      name: "Contoh menerima data berupa rata-rata dan nilai max",
      desc: "io.Writer adalah interface yang digunakan untuk menulis data. Jika kita ingin menulis ke file atau layar, kita bisa menggunakan io.Writer",
      contoh:
        `
    func RataRata(angka []int, ch1 chan int) {
    result := 0
    for _, n := range angka {
      result += n
      time.Sleep(1 * time.Second)
    }
    ch1 <- result / len(angka) //ch1 menerima data berupa result
  }

  func Max(angka []int, ch1 chan int) {
    max := angka[0]
    for _, n := range angka {
      if max < n {
        max = n
      }
      time.Sleep(1 * time.Second)
    }
    ch1 <- max //ch1 menerima data berupa max
  }

  func TestSelectStatement(t *testing.T) {
    ch1 := make(chan int)
    ch2 := make(chan int)
    n := []int{1, 2, 3, 4, 5}
    fmt.Println("Angka:", n)
    go RataRata(n, ch1) //memanggil fungsi RataRata dengan memasukkan slice n dan channels ch1
    go Max(n, ch2)      //memanggil fungsi Max dengan memasukkan slice n dan channels ch2

    for i := 0; i < 2; i++ { //melakukan perulangan untuk kedua fungsi dan channels
      select {
      case rtr := <-ch1: // menerima data dari channels ch1
        fmt.Println("Rata rata:", rtr)
      case max := <-ch2: //menerima data dari channels ch2
        fmt.Println("Max:", max)
      default:
        fmt.Println("Tidak ada data yang diterima")
      }
    }
    defer close(ch1)
    defer close(ch2)

  }
  `,
    },
    {
      id: 3,
      name: "Contoh sederhana Buffered Channels",
      desc: "Fungsi io.Copy() digunakan untuk menyalin data dari io.Reader ke io.Writer. Ini sangat berguna saat kita ingin menyalin data antara file, memori, atau jaringan.",
      contoh:
        `
      func TestBuffered(t *testing.T) {
      ch := make(chan int, 3) //channel dengan kapasitas 3

      // mengirim nilai ke channel
      ch <- 1
      ch <- 2
      ch <- 3

      fmt.Println("Buffered data sent")

      // menerima nilai dari channel
      fmt.Println(<-ch)
      fmt.Println(<-ch)
      fmt.Println(<-ch)
    }
  `,
    },
    {
      id: 4,
      name: "Blocking pada Bufferde channels",
      desc: "Fungsi io.TeeReader() digunakan untuk membaca data dan menulisnya secara bersamaan. Saat membaca, data juga ditulis ke tujuan yang kita tentukan.",
      contoh:
        `
      func TestBuffered(t *testing.T) {
      ch := make(chan int, 2) // channel dengan kapasitas 2

      // mengirim nilai ke chanel
      ch <- 1
      ch <- 2
      fmt.Println("Channel penuh , akan menunggu penerima") //chanel ngeblock karena kapasitas penuh
      fmt.Println("Data yang sudah diterima:", <-ch) // menerima channel agar channel bisa menerima nilai karena kapasitasnya sudah lega

      // mengirim nilai baru
      ch <- 3
      fmt.Println("Data ketiga berhasil dikirim")
    }
  `,
    },
    {
      id: 5,
      name: "Buffer penuh",
      desc: "Fungsi io.TeeReader() digunakan untuk membaca data dan menulisnya secara bersamaan. Saat membaca, data juga ditulis ke tujuan yang kita tentukan.",
      contoh:
        `
      ch := make(chan int, 2)  // Buffer dengan kapasitas 2

      ch <- 1
      ch <- 2

      fmt.Println("Buffer penuh. Akan menunggu...")

      // Pengiriman ini akan blocking karena buffer sudah penuh
      ch <- 3  // Menunggu hingga ada yang menerima data
      fmt.Println("Data ketiga berhasil dikirim.")
    `,
    },
    {
      id: 6,
      name: "Buffered kosong",
      desc: "Fungsi io.TeeReader() digunakan untuk membaca data dan menulisnya secara bersamaan. Saat membaca, data juga ditulis ke tujuan yang kita tentukan.",
      contoh:
        `
      ch := make(chan int, 2)  // Buffer dengan kapasitas 2

      ch <- 1
      ch <- 2

      fmt.Println(<-ch)  // Mengambil nilai pertama dari buffer (1)
      fmt.Println(<-ch)  // Mengambil nilai kedua dari buffer (2)

      fmt.Println("Buffer kosong. Akan menunggu...")

      // Ini akan blocking sampai ada data baru yang dikirim ke channel
      fmt.Println(<-ch)  // Menunggu data masuk
    `,
    },
    {
      id: 7,
      name: "Buffered chanel dengan goroutines",
      desc: "Fungsi io.TeeReader() digunakan untuk membaca data dan menulisnya secara bersamaan. Saat membaca, data juga ditulis ke tujuan yang kita tentukan.",
      contoh:
        `
      func SendData(ch chan int) {
      for i := 1; i <= 5; i++ {
        fmt.Println("Mengirim:", i)
        ch <- i
        time.Sleep(1 * time.Second)
      }
      defer close(ch)
    }

    func TestBuffered(t *testing.T) {
      ch := make(chan int, 2)

      go SendData(ch)
      for data := range ch {
        fmt.Println("Menerima data:", data)
        time.Sleep(2 * time.Second)
      }
      time.Sleep(10 * time.Second)
      fmt.Println("Selesai menerima semua data")
    }
    `,
    },
  ]

  return (
    <div className='flex flex-col pb-3 lg:pt-5 lg:items-start lg:flex-row lg:gap-x-3 gap-y-7'>
      <div className='w-full'>
        <FillContent
          classname={'xl:max-w-4xl'}
          judul={`Select Statement`}
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
