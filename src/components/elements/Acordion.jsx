import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Accordion = ({ pertanyaan, jawaban, level }) => {
  return (
    <div className="flex flex-col w-full p-0 join join-vertical font-poppins">
      <div className="relative p-0 border pt-7 collapse collapse-arrow join-item border-base-300">
        <h1 className='absolute italic text-gray-400 left-3 top-3'>{level}</h1>
        <input type="radio" name="my-accordion-4" defaultChecked />
        <div className="text-base font-poppins collapse-title">{pertanyaan}</div>
        <div className="collapse-content max-w-[22rem] sm:max-w-full">
          <SyntaxHighlighter language="go" style={nightOwl} className="mb-4 rounded-lg font-poppins">
            {jawaban}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
