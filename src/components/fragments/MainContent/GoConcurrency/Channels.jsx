// Integer.js
import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FillContent } from '../FillContent';
export const Channels = () => {

  const code1 = [
    {
      id: 1,
      name: "Contoh sederhana Channels",
      contoh:
        `
    func TestChannels(t *testing.T) {
    channel := make(chan string)
    defer close(channel)

    go func() {
      time.Sleep(2 * time.Second)
      channel <- "Hello world"
      fmt.Println("Selesai mengirim data ke channel")
    }()

    data := <-channel
    fmt.Println(data)
    time.Sleep(5 * time.Second)
  }
  `,
    },
    {
      id: 2,
      name: "Contoh 2 channels",
      desc: "io.Writer adalah interface yang digunakan untuk menulis data. Jika kita ingin menulis ke file atau layar, kita bisa menggunakan io.Writer",
      contoh:
        `
    func TestChannelsInt(t *testing.T) {
    number := make(chan int)

    go func() {
      time.Sleep(2 * time.Second)
      number <- 13
      fmt.Println("Hello")
    }()

    value := <-number
    fmt.Println("angka dari variable number:", value)
    fmt.Println("Done")
    time.Sleep(5 * time.Second)
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
          judul={`Channels`}
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
