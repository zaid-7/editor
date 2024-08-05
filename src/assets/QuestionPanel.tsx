// src/components/QuestionPanel.js
import React from 'react';
import "./Style.scss"

const QuestionPanel = ({ totalQuestions, currentQuestion, onQuestionClick }) => {
  return (
    <div className='options-panel-grid'>
      {Array.from({ length: totalQuestions }, (_, index) => (
        <button 
          key={index} 
          onClick={() => onQuestionClick(index)}
          style={{ backgroundColor: currentQuestion === index ? 'lightblue' : 'white', width:'25px', height:'20px'}}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
}

export default QuestionPanel;
