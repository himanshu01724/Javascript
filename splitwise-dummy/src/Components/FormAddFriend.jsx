import React from 'react'
import "../index.css"
import Button from './Button'
import { useState } from 'react'

function FormAddFriend({addingFriendFunction}) {

const [name,setName] = useState('')
const [image,setImage] = useState('https://i.pravatar.cc/48')

function handleSubmitAddFriend(e){
    e.preventDefault()

    if (!name || !image) return;

    const newFreind = {
        id: crypto.randomUUID(),
        name: name,
        image:image,
        balance:0
    }
    addingFriendFunction(newFreind)
}

  return (
    <form className = "form-add-friend">
            
            <label>🙎🏼‍♀️Friend Name</label>
            <input type = "text" value = {name} onChange={(e)=>setName(e.target.value)}/>
            
            <label>🌄Image URL</label>
            <input type = "text" value = {image} onChange={(e)=>setImage(e.target.value)}/>
            
            <Button handleClick={handleSubmitAddFriend}>Select</Button>

        </form>
  )
}

export default FormAddFriend