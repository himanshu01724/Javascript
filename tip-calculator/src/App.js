import React from 'react'
import "./index.css"
import Bill from "./Components/Bill"
import SelectPercentage from './Components/SelectPercentage'
import Output from "./Components/Output"
import { useState } from 'react'


function Reset({onClickReset}){
    return(
        <button onClick={onClickReset}>Reset</button>
    )
}

function App(){

const [billAmount,setBillAmount] = useState("")
const [percentage1,setPercentage1] = useState(0)
const [percentage2,setPercentage2] = useState(0)

const tip = billAmount * ((percentage1 + percentage2)/2/100);

const handleRemove = ()=>{
    setBillAmount("")
    setPercentage1(0)
    setPercentage2(0)
}

    return(
        <div>
            <h1><i>Tip Calculator</i></h1>
            <Bill amount={billAmount} selectedAmount = {setBillAmount}>How much was your Bill Amount ? </Bill><br/>
            <SelectPercentage percentage={percentage1} selectedValue = {setPercentage1}>How much do you like the service ? </SelectPercentage><br/>
            <SelectPercentage percentage={percentage2} selectedValue={setPercentage2}>How much your friend like the service ? </SelectPercentage>
            {billAmount > 0 && (
                <>
                <Output bill = {billAmount} tip = {tip}/>
                <Reset onClickReset = {handleRemove}/>
                </>
            )}
        </div>
    )
}
export default App;