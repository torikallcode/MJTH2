import { useState } from 'react';
import { IoCopyOutline } from 'react-icons/io5';
import { FaCheck } from 'react-icons/fa';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { propTypes } from 'react';


const ComponentShowcase = ({ componentName, componentCode, componentPreview }) => {
  ComponentShowcase.propTypes = {
    componentName: propTypes.string.isRequired,
    componentCode: propTypes.string.isRequired,
    componentPreview: propTypes.node.isRequired,
  };
  const [view, setView] = useState('preview'); // 'preview' or 'code'
  const [copied, setCopied] = useState(false);
  const handleCopyCode = () => {
    navigator.clipboard.writeText(componentCode);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000); // Kembalikan ikon setelah 2 detik
  };
  return (
    <div className="">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">{componentName}</h3>
        <div className="flex gap-2">
          <button
            className={`px-2 py-1 ease-in-out transition-transform font-poppins text-sm font-semibold ${view === 'preview' ? 'border-b-2 border-hitam py-0 px-0' : 'border-none'}`}
            onClick={() => setView('preview')}
          >
            Preview
          </button>
          <button
            className={`px-2 py-1 ease-in-out transition-transform font-poppins text-sm font-semibold ${view === 'code' ? 'border-b-2 border-hitam py-0 px-0' : 'border-none'}`}
            onClick={() => setView('code')}
          >
            Code
          </button>
          <button
            className="px-2 py-2 ml-2 bg-gray-200 rounded-md"
            onClick={handleCopyCode}
          >
            {copied ? <FaCheck /> : <IoCopyOutline />}
          </button>
        </div>
      </div>

      <div className="p-5 rounded-md max-w-[22rem] sm:min-w-full bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-200">
        {view === 'preview' ? (
          <div className="flex items-center justify-center w-full h-full component-preview">
            {componentPreview}
          </div>
        ) : (
          <pre className="w-full h-full mx-auto whitespace-pre-wrap component-code">
            <SyntaxHighlighter language="kotlin" style={nightOwl} className="rounded-lg font-poppins">
              {componentCode}
            </SyntaxHighlighter>
          </pre>
        )}
      </div>
    </div>
  );
};

export default ComponentShowcase;
