// Integer.js
import React, { useState } from 'react';
import { FillContent } from '../FillContent';
export const UpgradeDependency = () => {

  const code1 = [
    {
      id: 1,
      name: "Ubah tag / versi module secara manual lalu klik go get di terminal",
      img: "/img/Screenshot (609).png",
    },
    {
      id: 2,
      name: "Sesuaikan package yang panggil dengan upgrade module sebelumnya",
      img: "/img/Screenshot (610).png",
    },
  ]

  return (
    <div className='flex flex-col pb-3 lg:pt-5 lg:items-start lg:flex-row lg:gap-x-3 gap-y-7'>
      <div className='w-full'>
        <FillContent
          classname={'xl:max-w-4xl'}
          judul={'Upgrade Dependency'}
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
