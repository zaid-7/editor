import React from 'react';

const symbols = [
  { label: 'α', code: '<$>\\alpha</$>' },
  { label: 'β', code: '<$>\\beta</$>' },
  { label: '∃', code: '<$>\\exists</$>' },
  { label: 'Delta', code: '<$>\\sqrt[n]{x}</$>' },
  { label: '∑ ', code: '<$>\\sum</$>' },
  { label: 'π', code: '<$>\\pi</$>' },
  { label: 'σ', code: '<$>\\sigma</$>' },
  { label: '𝜃', code: '<$>\\theta</$>' },
  { label: '𝜔', code: '<$>\\omega</$>' },
  { label: '⟹', code: '<$>\\Longrightarrow</$>' },
  { label: '∫', code: '<$>\\int</$>' },
  { label: 'x_n', code: '<$>x_n</$>' },
  { label: 'lim', code: '<$>\\varinjlim</$>' },
  // Add more symbols as needed
];

const SymbolSelector = ({ onSelect }) => {
  return (
    <div style={{ marginBottom: '10px' }}>
      {symbols.map((symbol, index) => (
        <button key={index} onClick={() => onSelect(symbol.code)} style={{ marginRight: '5px' }}>
          {symbol.label}
        </button>
      ))}
    </div>
  );
};

export default SymbolSelector;
