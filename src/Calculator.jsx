import React, { useState } from 'react'
import './Calculator.css'

const calculator = () => {
const [display,setDisplay]= useState('')

const handleClick = (value) => {
    setDisplay(display+value)
}

const calculateResult = ( ) => {
 try {
    const result = eval(display);
     setDisplay(result)
 } catch (error) {
    setDisplay("ERROR ,Invalid Entry")
 }
}

const reset = ()=>{
    setDisplay('')
}

  return (
    <div className='calc'>
        <div className='section'>
            <div className="display">{display}</div>
            <div className="buttons">
                <div className="row">
                    <div className="col" onClick={()=>handleClick('1')} >1</div>
                    <div className="col" onClick={()=>handleClick('2')} >2</div>
                    <div className="col" onClick={()=>handleClick('3')} >3</div>
                    <div className="col" onClick={()=>handleClick('+')} >+</div>
                </div>
                <div className="row">
                    <div className="col" onClick={()=>handleClick('4')} >4</div>
                    <div className="col" onClick={()=>handleClick('5')} >5</div>
                    <div className="col" onClick={()=>handleClick('6')} >6</div>
                    <div className="col" onClick={()=>handleClick('-')} >-</div>
                </div>
                <div className="row">
                    <div className="col" onClick={()=>handleClick('7')} >7</div>
                    <div className="col" onClick={()=>handleClick('8')} >8</div>
                    <div className="col" onClick={()=>handleClick('9')} >9</div>
                    <div className="col" onClick={()=>handleClick('*')} >*</div>
                </div>
                <div className="row">
                    <div className="col" onClick={()=>handleClick('.')} >.</div>
                    <div className="col" onClick={()=>handleClick('0')} >0</div>
                    <div className="col" onClick={calculateResult}>=</div>
                    <div className="col" onClick={()=>handleClick('/')} >/</div>
                </div>
                <div className="row">
                    <div className="col" onClick={reset}>C</div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default calculator
