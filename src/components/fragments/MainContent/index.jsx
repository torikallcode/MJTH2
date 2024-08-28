import React from 'react';
import { Variable } from './Variable';
import { Integer } from './Integer';

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
        <div className='mb-5 font-poppins'>
          <h1 className="text-3xl font-bold mb-4 ">Variable</h1>
          <p>Variable adalah tempat meyimpan data  , di Golang variable hanya menyimpan tipe data yang sama. Untuk membuat Variable kita menggunakan kata kunci “var” lalu diikuti dengan “nama” dan “tipe datanya” </p>
        </div>
        <Variable />
      </div>
    ),
    'integer': (
      <div>
        <h1 className="text-3xl font-bold mb-4">Tipe Data Integer</h1>
        <Integer />
      </div>
    ),
    'getting-started': (
      <div>
        <h1 className="text-3xl font-bold mb-4">Getting Started</h1>
        <p>This is the getting started content.</p>
      </div>
    ),
    'basics': (
      <div>
        <h1 className="text-3xl font-bold mb-4">The Basics</h1>
        <p>This is the basics content.</p>
      </div>
    ),
    'advanced': (
      <div>
        <h1 className="text-3xl font-bold mb-4">Advanced</h1>
        <p>This is the advanced content.</p>
      </div>
    ),
    'customization': (
      <div>
        <h1 className="text-3xl font-bold mb-4">Customization</h1>
        <p>This is the customization content.</p>
      </div>
    ),
    'theme': (
      <div>
        <h1 className="text-3xl font-bold mb-4">Theme</h1>
        <p>This is the theme content.</p>
      </div>
    ),
    'layout': (
      <div>
        <h1 className="text-3xl font-bold mb-4">Layout</h1>
        <p>This is the layout content.</p>
      </div>
    ),
    'components': (
      <div>
        <h1 className="text-3xl font-bold mb-4">Components</h1>
        <p>This is the components content.</p>
      </div>
    ),
    'buttons': (
      <div>
        <h1 className="text-3xl font-bold mb-4">Buttons</h1>
        <p>This is the buttons content.</p>
      </div>
    ),
    'cards': (
      <div>
        <h1 className="text-3xl font-bold mb-4">Cards</h1>
        <p>This is the cards content.</p>
      </div>
    ),
  }; 0

  return (
    <main className="flex-grow px-5 pt-5 lg:pt-2 lg:ml-80 mt-3 lg:mt-7 pb-10">
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
