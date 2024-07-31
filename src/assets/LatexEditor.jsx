// LatexEditor.js
import React, { useState } from 'react';
import { BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import MathTex from "react-mathtex";
import SymbolSelector from './SymbolSelector.jsx';

const LatexEditor = () => {
  const [latex, setLatex] = useState('');

  const handleSymbolSelect = (symbol) => {
    setLatex((prevLatex) => prevLatex + ' ' + symbol);
  };

  const handleChange = (event) => {
    setLatex(event.target.value);
  };

  return (
    <div>
      <h2>Editor</h2>
      <SymbolSelector onSelect={handleSymbolSelect} />
      <textarea
        value={latex}
        onChange={handleChange}
        rows="10"
        cols="50"
        style={{ width: '100%', marginBottom: '10px' }}
      />
      <div>
        {/* <BlockMath math={latex} /> */}
        <MathTex classname="w-full border-4 border-sky-500 bg-sky-950 text-lg text-sky-100 my-10 p-6">
          {latex}
        </MathTex>
      </div>
    </div>
  );
};

export default LatexEditor;
