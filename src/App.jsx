import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MathJax, MathJaxContext } from "better-react-mathjax";
import MathTex from "react-mathtex";
const math =
    "Given a function <$>f: A \\longrightarrow \\mathbb{R}</$>, we \longrightarrow say that the limit of <$>f</$> at the \\f point <$> \\Updownarrow \\lBrace \\lmoustache \\sqrt{a^2 + b^2} \\lambda </$> exists and is equal to <$>L</$>  if it holds that:: \n <$>\\forall \\epsilon >0: \\exist \\delta >0: \\hspace{0.2cm} 0 < |x-x_0| < \\delta \\hspace{0.2cm} \\textrm{  y  } x \\in A \\hspace{0.2cm} \\Longrightarrow |f(x)-L| < \\epsilon</$$> \n If such a limit exists, we write it as: <$>\\displaystyle{\\lim_{x \\rightarrow x_0}} f(x) = L</$>.";

function App() {

  return (
    <>
       <MathJaxContext>
              <h2>Basic MathJax example with Latex</h2>
              <MathJax>{"\\(\\frac{10}{4x} \\approx 2^{12}\\)"}</MathJax>
        </MathJaxContext>

        <MathTex classname="w-full border-4 border-sky-500 bg-sky-950 text-lg text-sky-100 my-10 p-6">
          {math}
        </MathTex>
     </>
  )
}

export default App
