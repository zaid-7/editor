// import './Style.scss'; //

// const Options = ({ options, selectedOption, onOptionClick }) => {
//   return (
//     <div className="options-grid">
//       {options.map((option, index) => (
//         <button 
//           key={index} 
//           onClick={() => onOptionClick(option)}
//           className={`option-button ${selectedOption === option ? 'selected' : ''}`}
//         >
//           {option}
//         </button>
//       ))}
//     </div>
//   );
// }

// export default Options;


import React from 'react';
import './Style.scss';

const Options = ({ options, selectedOption, onOptionClick }) => {
  return (
    <div className="options-grid">
      {options.map((option, index) => (
        <button 
          key={index} 
          onClick={() => onOptionClick(option)}
          className={`option-button ${selectedOption === option ? 'selected' : ''}`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
