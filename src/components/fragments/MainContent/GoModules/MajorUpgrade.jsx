// Integer.js
import React, { useState } from 'react';
import { FillContent } from '../FillContent';
export const MajorUpgrade = () => {

  const code1 = [
    {
      id: 1,
      name: "Upgrade isi module yang ingin diupgrade",
      img: "/img/Screenshot (613).png",
    },
    {
      id: 2,
      name: "Upgrade URL module dengan v2 , kemudian commit dan push ke github",
      img: "/img/Screenshot (614).png",
    },
    {
      id: 3,
      name: "Upgrade tag dengan cara git tag v2.0.0 & git push origin v2.0.0",
      img: "/img/Screenshot (616).png",
    },
    {
      id: 4,
      name: "Masuk ke file yang menggunakan module tersebut lalu hapus modulenya",
      img: "/img/Screenshot (618).png",
    },
    {
      id: 5,
      name: "Upgrade URL module dengan cara , go get (URL module terbaru)",
      img: "/img/Screenshot (619).png",
    },
    {
      id: 6,
      name: "Ubah URL dari import module tersebut serta sesuaikan package yang panggil dengan upgrade module sebelumnya",
      img: "/img/Screenshot (621).png",
    },
  ]

  return (
    <div className='flex flex-col pb-3 lg:pt-5 lg:items-start lg:flex-row lg:gap-x-3 gap-y-7'>
      <div className='w-full'>
        <FillContent
          classname={'xl:max-w-4xl'}
          judul={'Major Upgrade'}
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
