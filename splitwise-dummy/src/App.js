import React, {useState} from 'react'
import "./index.css"

const initialFriends = [
    {
      id: 118836,
      name: "Ritesh",
      image: "https://i.pravatar.cc/48?u=118836",
      balance: -7,
    },
    {
      id: 933372,
      name: "Arushi",
      image: "https://i.pravatar.cc/48?u=933372",
      balance: 20,
    },
    {
      id: 499476,
      name: "Priya",
      image: "https://i.pravatar.cc/48?u=118831",
      balance: 0,
    },
  ];

function Button({children, handleClick}){
    return <button className = "button" onClick={handleClick}>{children}</button>
}

function FormSplitButton(){
    return (
    <form className = "form-split-bill">
        <h2>Split a bill with X</h2>

        <label>💰 Bill Value</label>
        <input type = "text"/>

        <label>👯‍♂️ Your Expense</label>
        <input type = "text"/>

        <label>🧍🏼‍♂️Clarks Expense</label>
        <input type = "text" disabled/>

        <label>💲Who is paying the bill</label>
        <select>
            <option value = {'user'}>You</option>
            <option value = {'friend'}>Friend</option>
        </select>
        

        <Button>Split bill</Button>
    </form>)
}
  
function FormAddFriend(){
    return(
        <form className = "form-add-friend">
            <label>🙎🏼‍♀️Friend Name</label>
            <input type = "text"/>
            
            <label>🌄Image URL</label>
            <input type = "text"/>
            
            <Button>Select</Button>

        </form>
    )
}

function FriendsList(){
    return (
    initialFriends.map((value)=>(
        <Friend friend={value} key = {value.id}/>
    ))
    )
}

function Friend({friend}){
    return (<li>
        <img src = {friend.image} alt = "xyz"/>
        <h3>{friend.name}</h3>
        {/*Conditional rendering */}
        {friend.balance < 0 && <p className = "red">You owe {friend.name} {Math.abs(friend.balance)}$</p>}
        {friend.balance > 0 && <p className = "green">Your friend {friend.name} owns you {Math.abs(friend.balance)}$</p>}
        {friend.balance === 0 && <p>You and {friend.name} are even </p>}
        <Button>Select</Button>
        </li>)
}

function App(){

const [hide,setHide] = useState(false)

function handleFormAddFriend(){
    setHide(test => !test)
}

    return(
        <div className = "app">
        <div className = "sidebar">
        <FriendsList/>
        {hide && <FormAddFriend/>}
        <Button handleClick = {handleFormAddFriend}> Add Friend</Button>
        </div>
        <FormSplitButton/>    
        </div>
    )
}
export default App