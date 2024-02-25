import React,{useEffect, useState} from 'react'
import './index.css'
import Geolocation from './useGeolocation'


export default function App(){

const [amount, setAmount] = useState('1')
const [converter,setConverter] = useState('INR')
const [conversion, setConversion] = useState('USD')
const [result, setResult] = useState({})

useEffect(()=>{
    CurrencyConveter()
},[amount,converter,conversion])


async function CurrencyConveter(){
    try{
        const response = await fetch(`https://api.frankfurter.app/latest?amount=${Number(amount)}&from=${converter}&to=${conversion}`)
        if(!response.ok){
            throw new Error(`Network Error White fetchind data`)
        }
        const data = await response.json()
        console.log(data)
        setResult(data)
    }
    catch(error){
        console.error(`Error ${error}`)
    }
}


    return(
        <>
        <span className = "cc">
        <input value={amount} onChange={(e)=>setAmount(e.target.value)} type = "number"/>
        <select value = {converter} onChange={(e)=>setConverter(e.target.value)}>
            <option value="INR">INR</option>
            <option value="CAD">CAD</option>
            <option value="EUR">EUR</option>
            <option value="USD">USD</option>
        </select>
        <select value = {conversion} onChange={(e)=>setConversion(e.target.value)}>
            <option value="INR">INR</option>
            <option value="CAD">CAD</option>
            <option value="EUR">EUR</option>
            <option value="USD">USD</option>
        </select>
       
        </span>
         <span className = "ccbottom">
         <p>Refreshed date = <b>{result.date}</b></p>
         <h4>Converted value = {result.rates?.[`${conversion}`]}</h4>
         </span>
         <Geolocation/>
         </>

    )
}