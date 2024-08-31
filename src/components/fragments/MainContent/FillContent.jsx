import React from 'react'

export const FillContent = ({ judul, pengertian, fungsi, children }) => {
  return (
    <>
      <h1 className='mb-3 text-2xl font-bold font-poppins'>{judul}</h1>
      <div className='flex flex-col gap-y-2'>
        <h2 className='text-base italic font-medium font-poppins'>Pengertian: <br /> <span className='not-italic font-normal'>{pengertian}</span></h2>
        <h2 className='text-base italic font-medium font-poppins'>Fungsi: <br /><span className='not-italic font-normal'>{fungsi}</span></h2>
        <div>
          <h2 className='mb-1 text-base italic font-medium font-poppins'>Cara penggunaan:</h2>
          {children}
        </div>
      </div>
    </>
  )
}

//
// 
