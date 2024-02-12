import React,{useState,useEffect} from 'react'
import "./index.css"

function Button({children,handleClick}){
    return(
        <button onClick={handleClick}>{children}</button>
    )
}


function App(){

const [time,setTime] = useState(0)
const [isActive,setIsActive] = useState(false)

useEffect(()=>{

    let interval;

    if(isActive){
        interval = setInterval(()=>{
            setTime((preValue)=>preValue+1)
        },1000);
    } else{
        clearInterval(interval);
    }

    return () => clearInterval(interval)
},[isActive])

const formatTime = (time) =>{
    const minutes = Math.floor(time/60).toString().padStart(2,'0');
    const seconds = (time % 60).toString().padStart(2,'0');
    return `${minutes}:${seconds}`;
}

function handleStart(){
    setIsActive(true)
}
function handleStop(){
    setIsActive(false)
}
function reset(){
    setTime(0)
    setIsActive(false)
}

    return(
        <div className = "stopwatch">
            <div className = "display">
                <h1>STOPWATCH</h1>
                <h1>{formatTime(time)}</h1>
            </div>
        <div className = "button-container">
        <Button style={{ marginRight: '10px' }} handleClick={handleStart}>Start</Button>
        <Button style={{ marginRight: '10px' }} handleClick={handleStop}>Stop</Button>
        <Button handleClick={reset}>Reset</Button>
        </div>
        </div>
    )
}
export default App;