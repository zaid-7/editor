// import { useState } from "react";
// import Options from "./Options";
// import { appActions, appState } from "../../store";
// import QuestionPanel from "./QuestionPanel";
// import Timer from "./Timer";
// import { enableMapSet } from 'immer';

// enableMapSet();
// let x = new Map();
// x.set(1,2);
// x.set(3,6);
// const questions = [
//     {
//         question: 'Ben pays $40 per month to attend a weekly yoga class. His sister Ilene gets a discount at her yoga class and pays $35 per month. Over the course of one year, how much more money does Ben pay a year to attend his yoga class?',
//         containsSymbol: false,
//         containsImage: false,
//         options: [62, 75, 55, 60],
//         correctOption: 62,
//         marks: 10
//     },
//     {
//         question: 'Ben pays $500 per month to attend a weekly yoga class. His sister Ilene gets a discount at her yoga class and pays $35 per month. Over the course of one year, how much more money does Ben pay a year to attend his yoga class?',
//         containsSymbol: false,
//         containsImage: false,
//         options: [62, 75, 55, 60],
//         correctOption: 62,
//         marks: 10
//     },
//     {
//         question: 'Ben pays $60 per month to attend a weekly yoga class. His sister Ilene gets a discount at her yoga class and pays $35 per month. Over the course of one year, how much more money does Ben pay a year to attend his yoga class?',
//         containsSymbol: false,
//         containsImage: false,
//         options: [62, 75, 55, 60],
//         correctOption: 62,
//         marks: 10
//     },
//     {
//         question: 'Ben pays $70 per month to attend a weekly yoga class. His sister Ilene gets a discount at her yoga class and pays $35 per month. Over the course of one year, how much more money does Ben pay a year to attend his yoga class?',
//         containsSymbol: false,
//         containsImage: false,
//         options: [62, 75, 55, 60],
//         correctOption: 62,
//         marks: 10
//     },
//     // Add more questions as needed
//   ];

// const Renderer = ()=>{
//     const RendererAction = appActions((actions) => actions.RendererModel);
//     const RendererState = appState((state) => state.RendererModel);

//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [selectedOption, setSelectedOption] = useState(null);

//   const handleOptionClick = (option: any) => {
//     setSelectedOption(option);
//     let obj:  any ={ key:currentQuestion, value: option  }
    
//     RendererAction.setActivityRecord(obj);

//     console.log(JSON.stringify(RendererState.activityRecord))
//     console.log(option);
    
//   };

//   const handleNextQuestion = () => {
//     if (currentQuestion < questions.length - 1) {
//       {setCurrentQuestion(currentQuestion + 1);
//       RendererAction.setCurrentQuestion(currentQuestion + 1)}
//     }
//   };

//   return (
//     <div className="App">
//       {}
//       <Timer />
//       <h4> { questions[currentQuestion].question }</h4>
//       <div style={{display: 'flex', justifyContent: 'space-between'}}>
//       <Options 
//         options={questions[currentQuestion].options} 
//         selectedOption={selectedOption}
//         onOptionClick={handleOptionClick}
//       />
//       <QuestionPanel 
//         totalQuestions={questions.length} 
//         currentQuestion={currentQuestion} 
//         onQuestionClick={setCurrentQuestion}
//       />
//       </div>
//       <button onClick={handleNextQuestion}>Next</button>
//     </div>
//   );
// }
// export default Renderer;


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import { SetStateAction, useState } from "react";
// import Options from "./Options";
// import { appActions, appState } from "../../store";
// import QuestionPanel from "./QuestionPanel";
// import Timer from "./Timer";

// const questions = [
//     {
//         question: 'Ben pays $40 per month to attend a weekly yoga class. His sister Ilene gets a discount at her yoga class and pays $35 per month. Over the course of one year, how much more money does Ben pay a year to attend his yoga class?',
//         containsSymbol: false,
//         containsImage: false,
//         options: ["62", "75", "55", "60"],
//         correctOption: "62",
//         marks: 10
//     },
//     {
//         question: 'Ben pays $500 per month to attend a weekly yoga class. His sister Ilene gets a discount at her yoga class and pays $35 per month. Over the course of one year, how much more money does Ben pay a year to attend his yoga class?',
//         containsSymbol: false,
//         containsImage: false,
//         options: ["62", "75", "55", "60"],
//         correctOption: "62",
//         marks: 10
//     },
//     {
//         question: 'Ben pays $60 per month to attend a weekly yoga class. His sister Ilene gets a discount at her yoga class and pays $35 per month. Over the course of one year, how much more money does Ben pay a year to attend his yoga class?',
//         containsSymbol: false,
//         containsImage: false,
//         options: ["62", "75", "55", "60"],
//         correctOption: "62",
//         marks: 10
//     },
//     {
//         question: 'Ben pays $70 per month to attend a weekly yoga class. His sister Ilene gets a discount at her yoga class and pays $35 per month. Over the course of one year, how much more money does Ben pay a year to attend his yoga class?',
//         containsSymbol: false,
//         containsImage: false,
//         options: ["62", "75", "55", "60"],
//         correctOption: "62",
//         marks: 10
//     },
//     // Add more questions as needed
// ];

// const Renderer = () => {
//     const RendererAction = appActions((actions) => actions.RendererModel);
//     const RendererState = appState((state) => state.RendererModel);

//     const [currentQuestion, setCurrentQuestion] = useState(0);
//     const [selectedOption, setSelectedOption] = useState(null);

//     const handleOptionClick = (option: any) => {
//         setSelectedOption(option);
//         RendererAction.setActivityRecord({ questionNumber: currentQuestion, selectedOption: option });
//     };

//     const handleNextQuestion = () => {
//         if (currentQuestion < questions.length - 1) {
//             setCurrentQuestion(currentQuestion + 1);
//             RendererAction.setCurrentQuestion(currentQuestion + 1);
//         }
//     };

//     return (
//         <div className="App">
//             <Timer />
//             <h4>{questions[currentQuestion].question}</h4>
//             <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//                 <Options
//                     options={questions[currentQuestion].options}
//                     selectedOption={selectedOption}
//                     onOptionClick={handleOptionClick}
//                 />
//                 <QuestionPanel
//                     totalQuestions={questions.length}
//                     currentQuestion={currentQuestion}
//                     onQuestionClick={setCurrentQuestion}
//                 />
//             </div>
//             <button onClick={handleNextQuestion}>Next</button>
//         </div>
//     );
// }

// export default Renderer;

////////////////////////////////////////////////////////////////////////////////////////////////////////

import { useState, useEffect } from "react";
import Options from "./Options";
import { appActions, appState } from "../../store";
import QuestionPanel from "./QuestionPanel";
import Timer from "./Timer";
import "./Style.scss"
import MathTex from "react-mathtex";
import React from "react";

const questions = [
    {
        question: 'Given a function <$>f: A \\longrightarrow \\mathbb{R}</$>, we say that the limit of <$>f</$> at the point <$> \\sqrt{a^2 + b^2} </$> exists and is equal to  If such a limit exists, we write it as: <$>\\displaystyle{\\lim_{x \\rightarrow x_0}} f(x) = L</$>. find the value of',
        containsSymbol: false,
        containsImage: false,
        options: ["62", "75", "55", "60"],
        correctOption: "62",
        marks: 10
    },
    {
        question: 'Ben pays $500 per month to attend a weekly yoga class. His sister Ilene gets a discount at her yoga class and pays $35 per month. Over the course of one year, how much more money does Ben pay a year to attend his yoga class?',
        containsSymbol: false,
        containsImage: false,
        options: ["45", "90", "18", "67"],
        correctOption: "67",
        marks: 10
    },
    {
        question: 'Ben pays $60 per month to attend a weekly yoga class. His sister Ilene gets <$>x_n</$>a discount at her yoga class and pays $35 per month. Over the course of one year, how much more money does Ben pay a year to attend his yoga class?',
        containsSymbol: false,
        containsImage: false,
        options: ["15", "85", "66", "78"],
        correctOption: "66",
        marks: 10
    },
    {
        question: 'Ben pays $70 per month to attend a weekly yoga class. His sister Ilene gets a discount at her yoga class and pays $35 per month. Over the course of one year, how much more money does Ben pay a year to attend his yoga class?',
        containsSymbol: false,
        containsImage: false,
        options: ["60", "88", "85", "43"],
        correctOption: "43",
        marks: 10
    },
    {
        question: 'Ben pays $40 per month to attend a weekly yoga class. His sister Ilene gets a discount at her yoga class and pays $35 per month. Over the course of one year, how much more money does Ben pay a year to attend his yoga class?',
        containsSymbol: false,
        containsImage: false,
        options: ["675", "778", "5765", "6087"],
        correctOption: "778",
        marks: 10
    },
    {
        question: 'Ben pays $500 per month to attend a weekly yoga class. His sister Ilene gets a discount at her yoga class and pays $35 per month. Over the course of one year, how much more money does Ben pay a year to attend his yoga class?',
        containsSymbol: false,
        containsImage: false,
        options: ["672", "795", "565", "600"],
        correctOption: "600",
        marks: 10
    },
    {
        question: 'Ben pays $60 per month to attend a weekly yoga class. His sister Ilene gets a discount at her yoga class and pays $35 per month. Over the course of one year, how much more money does Ben pay a year to attend his yoga class?',
        containsSymbol: false,
        containsImage: false,
        options: ["6882", "7665", "59955", "560"],
        correctOption: "6882",
        marks: 10
    },
    {
        question: 'Ben pays $70 per month to attend a weekly yoga class. His sister Ilene gets a discount at her yoga class and pays $35 per month. Over the course of one year, how much more money does Ben pay a year to attend his yoga class?',
        containsSymbol: false,
        containsImage: false,
        options: ["987", "765", "558", "607"],
        correctOption: "607",
        marks: 10
    }
    // Add more questions as needed
];

let score: number = 0;
let showResult: boolean = false;
let text: string = 'Next';
const Renderer = () => {
    const RendererAction = appActions((actions) => actions.RendererModel);
    const RendererState = appState((state) => state.RendererModel);

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');

    useEffect(() => {
        // Set the selected option when the current question changes
        const savedOption = RendererState.activityRecord[currentQuestion];
        setSelectedOption(savedOption);
    }, [currentQuestion, RendererState.activityRecord]);

    const handleOptionClick = (option: any) => {
        setSelectedOption(option);
        RendererAction.setActivityRecord({ questionNumber: currentQuestion, selectedOption: option });
    };

    const handleNextQuestion = () => {
        if (currentQuestion < questions.length - 1) {
            text = (currentQuestion == (questions.length - 2))?'Show result':'Next'
            setCurrentQuestion(currentQuestion + 1);
            RendererAction.setCurrentQuestion(currentQuestion + 1);
        }
        else {
            for(let i=0;i<questions.length;i++)
                {
                    score+= (RendererState?.activityRecord[i] === questions[i].correctOption)?questions[i].marks:0;
                }
                showResult = true;
                 window.alert(`total marks score ${score}`) 
        }
    };

    const handleSkipQuestion = () => {
        if (currentQuestion < questions.length - 1) {
            RendererAction.setActivityRecord({ questionNumber: currentQuestion, selectedOption: '' });
            setCurrentQuestion(currentQuestion + 1);
            RendererAction.setCurrentQuestion(currentQuestion + 1);
        }
    };

    return (
        <>
            <div className="App">
            <Timer />
            <div style={{width: '100%'}}>
                <MathTex >
                  {questions[currentQuestion].question}
                </MathTex>
            </div>
           
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop:'30px'}}>
                <Options
                    options={questions[currentQuestion].options}
                    selectedOption={selectedOption}
                    onOptionClick={handleOptionClick}
                />
                <QuestionPanel
                    totalQuestions={questions.length}
                    currentQuestion={currentQuestion}
                    onQuestionClick={setCurrentQuestion}
                />
            </div>
            <div style={{marginTop:'20px'}}>
            <button onClick={handleSkipQuestion}>Skip</button>
            <button onClick={handleNextQuestion}>{text}</button>
            </div>
            
        </div>
        </>


    );
}

export default Renderer;
