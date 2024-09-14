// Integer.js
import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FillContent } from '../FillContent';
export const Reflect = () => {

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
    // 1. mengetahui tipe data dari suatu variabel atau nilai = reflect.TypeOf()
    var angka int = 10
    var teks string = "Halo"

    fmt.Println("Tipe dari angka:", reflect.TypeOf(angka))
    fmt.Println("Tipe dari teks:", reflect.TypeOf(teks))
    // Output: Tipe dari angka: int
              Tipe dari teks: string


    // 2. untuk mendapatkan nilai dari sebuah variabel atau data. 
    // Ini sering dipakai saat kita tidak tahu apa tipe datanya.  = reflect.ValueOf()
    var angka int = 42
    nilai := reflect.ValueOf(angka)

    fmt.Println("Nilai dari angka:", nilai)
    // Output: Nilai dari angka: 42

    // 3.  untuk mengetahui "jenis" dari sebuah tipe, misalnya apakah itu int,
    // string, slice, atau struct = reflect.Kind()
    var angka int = 100
    var teks string = "Go"
    var daftar []int = []int{1, 2, 3}

    fmt.Println("Kind dari angka:", reflect.TypeOf(angka).Kind())
    fmt.Println("Kind dari teks:", reflect.TypeOf(teks).Kind())
    fmt.Println("Kind dari daftar:", reflect.TypeOf(daftar).Kind())

    //Output: Kind dari angka: int
              Kind dari teks: string
              Kind dari daftar: slice

    // 4. digunakan untuk mengambil field dari sebuah struct = reflect.Value.Field()
    type Orang struct {
    Nama string
    Umur int
    }
    orang := Orang{"Joko", 25}
    nilai := reflect.ValueOf(orang)

    fmt.Println("Nama:", nilai.Field(0))
    fmt.Println("Umur:", nilai.Field(1))
    // Output: nama: Joko
              Umur: 25

    // 5. digunakan untuk mengubah nilai dari suatu data. Namun, 
    // kita hanya bisa mengubahnya jika data tersebut bisa diubah (mutable). = reflect.Value.Set()
    var angka int = 10
    nilai := reflect.ValueOf(&angka).Elem()

    fmt.Println("Nilai sebelum:", angka)

    nilai.SetInt(20)

    fmt.Println("Nilai sesudah:", angka)
    // Output: Nilai sebelum: 10
                Nilai sesudah: 20
  }
  `
    },
  ]

  return (
    <div className='flex flex-col pb-3 lg:pt-5 lg:items-start lg:flex-row lg:gap-x-3 gap-y-7'>
      <div className='w-full'>
        <FillContent
          classname={'xl:max-w-4xl'}
          judul={'Reflect'}
          pengertian={'Package reflect digunakan untuk melihat dan bekerja dengan informasi tentang tipe data di Go. Biasanya, kita menggunakan reflect saat kita tidak tahu tipe data apa yang sedang kita hadapi, atau jika kita ingin mengetahui lebih banyak tentang suatu nilai di waktu runtime (saat program sedang berjalan).'}
          fungsi={'Di Go, kita sering tahu tipe data apa yang sedang kita pakai saat menulis program. Tapi ada kalanya kita tidak tahu tipe datanya di awal dan butuh cara untuk mengetahuinya saat program berjalan. Di sinilah reflect berguna: Mengetahui tipe data dari suatu nilai (apakah itu integer, string, struct, dll.). Mengubah nilai dari satu tipe ke tipe lain, jika memungkinkan. Melihat field (bagian-bagian) dari sebuah struct.'}
          tambahan={
            <div className='mb-5'>
              <h1 className='text-lg italic font-medium font-poppins'>Fungsi-fungsi yang sering digunakan:</h1>
              <ul className='flex flex-col ml-5 text-base list-outside font-poppins'>
                <li className='list-decimal'>reflect.TypeOf(): Untuk mengetahui tipe data suatu nilai.</li>
                <li className='list-decimal'>reflect.ValueOf(): Untuk mendapatkan nilai dari suatu data.</li>
                <li className='list-decimal'>reflect.Kind(): Untuk mengetahui "jenis" tipe data, misalnya apakah itu array, slice, int, string, atau struct.</li>
                <li className='list-decimal'>reflect.Value.Field(): Digunakan untuk mengakses field dalam sebuah struct.</li>
                <li className='list-decimal'>reflect.Value.Set(): Untuk mengubah nilai dari suatu data, tapi nilai tersebut harus bisa diubah (bukan konstanta atau variabel yang tidak bisa diubah).</li>
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
