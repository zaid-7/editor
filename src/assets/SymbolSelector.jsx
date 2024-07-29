import React from 'react';

const symbols = [
  { label: 'α', code: '<$>\\alpha</$>' },
  { label: 'β', code: '<$>\\beta</$>' },
  { label: '∃', code: '<$>\\exists</$>' },
  { label: 'Delta', code: '<$>\\sqrt[n]{x}</$>' },
  { label: '∑ ', code: '<$>\\sum</$>' },
  { label: 'Pi', code: '\\pi' },
  { label: 'Sigma', code: '\\sigma' },
  { label: 'Theta', code: '\\theta' },
  { label: 'Omega', code: '\\omega' },
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
