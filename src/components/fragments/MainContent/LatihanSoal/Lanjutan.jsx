// Integer.js
import React, { useState } from 'react';
import ExerciseList from '../../../elements/ExerciseList';
export const Lanjutan = () => {

  return (
    <div className='flex flex-col pb-3 lg:pt-5 lg:items-start lg:flex-row lg:gap-x-3 gap-y-7'>
      <div className='lg:w-[60%] xl:w-4/5'>
        <ExerciseList />
      </div>
    </div >
  );
};
