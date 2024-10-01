// Integer.js
import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FillContent } from '../FillContent';
export const AddDependency = () => {

  const code1 = [
    {
      id: 1,
      name: "Buat repository github di app yang akan menggunakan sebuah module",
      img: "/img/Screenshot (601).png",
    },
    {
      id: 2,
      name: "Buat go.mod dengan cara menambahkan URL repository github",
      img: "/img/Screenshot (602).png",
    },
    {
      id: 3,
      name: "Tambahkan Module",
      desc: "dengan cara go get (URL module)",
      img: "/img/Screenshot (603).png",
    },
    {
      id: 4,
      name: "Menggunakan Module",
      desc: "buat file main.go lalu import module dan panggil di funcion main tersebut, kemudian run untuk test module tersebut",
      img: "/img/Screenshot (604).png",
    },
  ]

  return (
    <div className='flex flex-col pb-3 lg:pt-5 lg:items-start lg:flex-row lg:gap-x-3 gap-y-7'>
      <div className='w-full'>
        <FillContent
          classname={'xl:max-w-4xl'}
          judul={'Add Dependency'}
          pengertian={'Package encoding di Go berfungsi untuk melakukan konversi data dari satu bentuk ke bentuk lain. Contohnya, mengubah data menjadi format yang bisa dibaca oleh komputer (seperti JSON atau base64) dan sebaliknya.'}
        >
          {code1.map((item) => (
            <div className='flex flex-col mb-3 gap-y-3 '>
              <div>
                <ul className='flex flex-row font-medium list-inside font-poppins'>
                  <li className='flex items-center gap-x-3'>{item.id}.<span className='bg-[#efeffd] rounded-lg px-2 py-1 text-[#6366f1]'>{item.name} </span></li>
                </ul>
                <p className='text-base font-poppins'>{item.desc}</p>
                <img src={item.img} alt="" />
              </div>
            </div>
          ))}
        </FillContent>
      </div>
    </div >
  );
};
