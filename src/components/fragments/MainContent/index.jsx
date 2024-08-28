import React from 'react';
import { Variable } from './Variable';
import { Integer } from './Integer';
import { Boolean } from './Boolean';
import { Constant } from './Constant';
import { Conversi } from './Conversi';
import { TypeDeklarasi } from './TypeDeklarasi';
import { OperasiMatematika } from './OperasiMatematika';
import { Perbandingan } from './Perbandingan';
import { Array } from './Array';
import { Slice } from './Slice';
import { Map } from './Map';
import { If } from './If';

const MainContent = ({ selected }) => {
  const content = {
    'introduction': (
      <div>
        <h1 className="text-3xl font-bold mb-4">Introduction</h1>
        <p>This is the introduction content.</p>
      </div>
    ),
    'variable': (
      <div>
        <div className='mb-10 font-poppins'>
          <h1 className="text-3xl sm:text-4xl lg:text-3xl font-bold mb-4">Variable</h1>
          <p className='sm:text-lg lg:text-base'>Variable adalah tempat meyimpan data  , di Golang variable hanya menyimpan tipe data yang sama. Untuk membuat Variable kita menggunakan kata kunci “var” lalu diikuti dengan “nama” dan “tipe datanya” </p>
        </div>
        <Variable />
      </div>
    ),
    'integer': (
      <div>
        <h1 className="text-3xl font-bold mb-4">Integer & FLoat</h1>
        <Integer />
      </div>
    ),
    'boolean': (
      <div>
        <h1 className="text-3xl font-bold mb-4">Boolean</h1>
        <p>This is the getting started content.</p>
        <Boolean />
      </div>
    ),
    'string': (
      <div>
        <h1 className="text-3xl font-bold mb-4">String</h1>
        <p>This is the basics content.</p>
        <String />
      </div>
    ),
    'const': (
      <div>
        <h1 className="text-3xl font-bold mb-4">Constant</h1>
        <p>This is the advanced content.</p>
        <Constant />
      </div>
    ),
    'conversi': (
      <div>
        <h1 className="text-3xl font-bold mb-4">Conversi</h1>
        <p>This is the customization content.</p>
        <Conversi />
      </div>
    ),
    'typeDeklarasi': (
      <div>
        <h1 className="text-3xl font-bold mb-4">Type Deklarasi</h1>
        <p>This is the theme content.</p>
        <TypeDeklarasi />
      </div>
    ),
    'opm': (
      <div>
        <h1 className="text-3xl font-bold mb-4">Operasi Matematika</h1>
        <p>This is the layout content.</p>
        <OperasiMatematika />
      </div>
    ),
    'perbandingan': (
      <div>
        <h1 className="text-3xl font-bold mb-4">Perbandingan</h1>
        <p>This is the components content.</p>
        <Perbandingan />
      </div>
    ),
    'array': (
      <div>
        <h1 className="text-3xl font-bold mb-4">Array</h1>
        <p>This is the buttons content.</p>
        <Array />
      </div>
    ),
    'slice': (
      <div>
        <h1 className="text-3xl font-bold mb-4">Slice</h1>
        <p>This is the cards content.</p>
        <Slice />
      </div>
    ),
    'map': (
      <div>
        <h1 className="text-3xl font-bold mb-4">Map</h1>
        <p>This is the cards content.</p>
        <Map />
      </div>
    ),
    'if': (
      <div>
        <h1 className="text-3xl font-bold mb-4">IF</h1>
        <p>This is the cards content.</p>
        <If />
      </div>
    ),
  }; 0

  return (
    <main className="flex-grow px-5 pt-5 lg:pt-2 lg:ml-80 mt-3 lg:mt-7 pb-10 max-w-[60rem]">
      {content[selected] || (
        <div>
          <h1 className="text-3xl font-bold mb-4">Welcome to My Documentation</h1>
          <p>Select an item from the sidebar to see the content.</p>
        </div>
      )}
    </main>
  );
};

export default MainContent;
