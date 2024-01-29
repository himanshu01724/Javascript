import React, { useState } from 'react'
import "./index.css"


function App(){

const [result,setResult] = useState('')
const [input,setInput] = useState('0')

const values = ['AC','/','C',')','7','8','9','x','4','5','6','-','1','2','3','+','(','0','.','=']

const handleClick = (e) =>{
    if(e === '='){
        console.log(input)
        const res = eval(input);
        setResult(res)
        setInput('')
    }
    else if (e === 'AC'){
        setInput('')
        setResult('')
    }
    else if (e === 'C'){
        setInput(inp =>inp.slice(0,-1));
    }
    else {if( input === '0' && e != '.'){
        setInput(e)
    }
        else{
        setInput(value => value + e);
    }
    }
}

    return(
        <>
            <div className = "main">
                <div className = "result">
                    <h1>{input}{result}</h1>
                </div>
                <div className = "action">
                    {values.map((val,index)=>(
                        <button key = {index} onClick = {()=>handleClick(val)}>{val}</button>
                    ))}
                </div>
            </div>
        </>
    )
}
export default App;