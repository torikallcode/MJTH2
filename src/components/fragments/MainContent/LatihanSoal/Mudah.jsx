// Integer.js
import React, { useState } from 'react';
import { Table } from '../../../elements/Table';
import { latihanData } from '../../../../data/LatihanDataMudah';
export const Mudah = () => {

  return (
    <div className='flex flex-col pb-3 lg:pt-5 lg:items-start lg:flex-row lg:gap-x-3 gap-y-7'>
      <div className='w-full'>
        <div className="overflow-x-auto">
          <div className="w-full max-w-screen-lg mx-auto">
            <table className="table w-full border border-gray-400 font-poppins">
              <thead className="w-full">
                <tr className="border border-gray-400">
                  <th className="w-1/3 px-4 py-2 max-w-7 sm:max-w-full">Nama</th>
                  <th className="w-2/3 px-4 py-2">Soal</th>
                </tr>
              </thead>
              <tbody>
                {latihanData.map((item, index) => (
                  <tr key={index} className="border border-gray-400">
                    <th className="w-1/3 px-4 py-2 max-w-7 sm:max-w-full">{item.nama}</th>
                    <td className="w-2/3 px-4 py-2">{item.soal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div >
  );
};
