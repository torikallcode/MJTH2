// src/components/CodeEditor.jsx
import React from "react";
import AceEditor from "react-ace";

// Import bahasa dan tema Ace Editor
import "ace-builds/src-noconflict/mode-golang";
import "ace-builds/src-noconflict/theme-monokai";

const CodeEditor = ({ code, onChange }) => {
  return (
    <AceEditor
      mode="golang"
      theme="monokai"
      name="codeEditor"
      onChange={onChange}
      fontSize={14}
      width="100%"
      height="300px"
      value={code}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
      }}
    />
  );
};

export default CodeEditor;
