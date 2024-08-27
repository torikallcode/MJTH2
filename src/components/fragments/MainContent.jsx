import React from 'react';

const MainContent = ({ selected }) => {
  const content = {
    'introduction': (
      <div>
        <h1 className="text-3xl font-bold mb-4">Introduction</h1>
        <p>This is the introduction content.</p>
      </div>
    ),
    'getting-started': (
      <div>
        <h1 className="text-3xl font-bold mb-4">Getting Started</h1>
        <p>This is the getting started content.</p>
      </div>
    ),
    'customization': (
      <div>
        <h1 className="text-3xl font-bold mb-4">Customization</h1>
        <p>This is the customization content.</p>
      </div>
    ),
    'components': (
      <div>
        <h1 className="text-3xl font-bold mb-4">Components</h1>
        <p>This is the components content.</p>
      </div>
    ),
  };

  return (
    <main className="flex-grow p-6 lg:ml-64 mt-7 pb-[100rem]">
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
