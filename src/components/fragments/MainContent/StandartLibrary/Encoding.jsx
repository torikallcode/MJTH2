// Integer.js
import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FillContent } from '../FillContent';
export const Encoding = () => {

  const code1 = [
    {
      id: 1,
      name: "encoding / json",
      desc: "json.Marshal(): Mengonversi data Go (struct, map, dll.) menjadi format JSON, json.Unmarshal(): Membaca data JSON dan mengonversinya menjadi tipe data Go.",
      contoh:
        `
  package main

  import (
      "encoding/json"
      "fmt"
  )

  type Orang struct {
      Nama  string
      Umur  int
      Kota  string
  }

  func main() {
      orang := Orang{
          Nama: "Budi",
          Umur: 10,
          Kota: "Jakarta",
      }

      // Mengonversi struct menjadi JSON (json.Marshal)
      dataJSON, _ := json.Marshal(orang)
      fmt.Println(string(dataJSON)) // Output dalam bentuk JSON
      // Output: {"Nama":"Budi","Umur":10,"Kota":"Jakarta"}

      // Membaca data JSON (json.Unmarshal)
      dataJSON := \`{"Nama":"Budi","Umur":10,"Kota":"Jakarta"}\`
      var orang Orang
      json.Unmarshal([]byte(dataJSON), &orang)
      fmt.Println(orang) // Mengubah JSON menjadi struct
      // Output: {Budi 10 Jakarta}
  }
  `,
    },
    {
      id: 2,
      name: "encoding/xml",
      desc: "xml.Marshal(): Mengonversi data Go menjadi format XML, xml.Unmarshal(): Membaca data XML dan mengonversinya menjadi tipe data Go.",
      contoh:
        `
  package main

  import (
      "encoding/xml"
      "fmt"
  )

  type Orang struct {
    Nama  string \`xml: "nama"\`
    Umur  int    \`xml: "umur"\`
    Kota  string \`xml: "kota"\`
  }

  func main() {
      orang := Orang{
          Nama: "Budi",
          Umur: 10,
          Kota: "Jakarta",
      }

      // Mengonversi struct menjadi XML (xml.Marshal)
      dataXML, _ := xml.Marshal(orang)
      fmt.Println(string(dataXML)) // Output dalam bentuk XML
      // Output: <Orang><nama>Budi</nama><umur>10</umur><kota>Jakarta</kota></Orang>

      dataXML := \`<Orang><nama>Budi</nama><umur>10</umur><kota>Jakarta</kota></Orang>\`
      var orang Orang
      xml.Unmarshal([]byte(dataXML), &orang)
      fmt.Println(orang) // Mengubah XML menjadi struct
      // Output: {Budi 10 Jakarta}
  }
  `,
    },
    {
      id: 3,
      name: "encoding/base64",
      desc: "base64.StdEncoding.EncodeToString(): Mengonversi data menjadi string base64, base64.StdEncoding.DecodeString(): Mengonversi data base64 menjadi byte asli.",
      contoh:
        `
  package main

  import (
      "encoding/base64"
      "fmt"
  )

  func main() {
      // Mengonversi string menjadi base64 (EncodeToString)
      data := "Halo, Dunia!"
      encoded := base64.StdEncoding.EncodeToString([]byte(data))
      fmt.Println("Encoded:", encoded)
      // Output: encoded: SGFsbywgRHVuaWEh

      // Mengonversi base64 kembali menjadi string (DecodeString)
      encoded := "SGFsbywgRHVuaWEh"
      decoded, _ := base64.StdEncoding.DecodeString(encoded)
      fmt.Println("Decoded:", string(decoded))
      // Output: decoded: Halo, Dunia!
  }
  `,
    },
  ]

  return (
    <div className='flex flex-col pb-3 lg:pt-5 lg:items-start lg:flex-row lg:gap-x-3 gap-y-7'>
      <div className='w-full'>
        <FillContent
          classname={'xl:max-w-4xl'}
          judul={'Encoding'}
          pengertian={'Package encoding di Go berfungsi untuk melakukan konversi data dari satu bentuk ke bentuk lain. Contohnya, mengubah data menjadi format yang bisa dibaca oleh komputer (seperti JSON atau base64) dan sebaliknya.'}
          fungsi={'Kita menggunakan package encoding untuk: Menyimpan data dalam format yang lebih mudah diproses oleh komputer. Membaca data yang sudah disimpan dalam format khusus. Mengirim data melalui jaringan (misalnya dalam format JSON). Mengonversi data ke dalam bentuk teks atau angka yang berbeda.'}
          tambahan={
            <div className='mb-5'>
              <h1 className='text-lg italic font-medium font-poppins'>Fungsi-fungsi yang sering digunakan:</h1>
              <ul className='flex flex-col ml-5 text-base list-outside font-poppins'>
                <li className='list-decimal'>encoding/json: Digunakan untuk bekerja dengan data JSON.</li>
                <li className='list-decimal'>encoding/xml: Digunakan untuk bekerja dengan data XML.</li>
                <li className='list-decimal'>encoding/base64: Digunakan untuk mengonversi data ke dan dari format base64.</li>
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
