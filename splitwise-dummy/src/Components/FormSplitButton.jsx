import React from 'react'
import Button from './Button'
import { useState } from 'react'

function FormSplitButton({friendData,onSubmitValueChange }) {

const [bill,setBill] = useState('')
const [yourExpense,setYourExpense] = useState('')
const [paidbywho,setPaidByWho] = useState('user')
const paidByFriend = bill ? bill - yourExpense : ""

function handleSubmit(e){
    e.preventDefault()

    if(!bill || !yourExpense) return;

    console.log(bill,yourExpense,paidbywho)
    onSubmitValueChange( paidbywho === 'user'? paidByFriend : -yourExpense)
}


  return (
    <form className = "form-split-bill" onSubmit={handleSubmit}>
        <h2>Split a bill with {friendData.name}</h2>

        <label>💰 Bill Value</label>
        <input type = "text" value = {bill} onChange={(e)=>setBill(Number(e.target.value))}/>

        <label>👯‍♂️ Your Expense {friendData.name}</label>
        <input type = "text" value = {yourExpense} onChange={(e)=>setYourExpense(Number(e.target.value)>bill ? yourExpense : Number(e.target.value))}/>

        <label>🧍🏼‍♂️{friendData.name} Expense</label>
        <input type = "text" disabled value = {paidByFriend}/>

        <label>💲Who is paying the bill</label>
        <select value = {paidbywho} onChange={(e)=>setPaidByWho(e.target.value)}>
            <option value = {'user'}>Himanshu</option>
            <option value = {'friend'}>{friendData.name}</option>
        </select>
        

        <Button >Split bill</Button>
    </form>
    )
  
}

export default FormSplitButton