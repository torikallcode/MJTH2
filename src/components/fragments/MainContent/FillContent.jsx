import React from 'react'

export const FillContent = ({ judul, pengertian, fungsi, children, classname, tambahan }) => {
  return (
    <div className={`${classname} max-w-[22rem] vsm:max-w-[24rem] sm:max-w-full xl:max-w-3xl`}>
      <h1 className='mb-3 text-3xl font-bold font-poppins'>{judul}</h1>
      <div className='flex flex-col gap-y-2 lg:gap-y-5'>
        <h2 className='text-lg italic font-medium font-poppins'>Pengertian: <br /> <span className='text-base not-italic font-normal'>{pengertian}</span></h2>
        <h2 className='text-lg italic font-medium font-poppins'>Fungsi: <br /><span className='text-base not-italic font-normal'>{fungsi}</span></h2>
        {tambahan}
        <div>
          <h2 className='mb-1 text-lg italic font-medium font-poppins'>Cara penggunaan:</h2>
          {children}
        </div>
      </div>
    </div>
  )
}

