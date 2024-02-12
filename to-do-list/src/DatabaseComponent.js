import React, {useState,useEffect} from 'react'
import "./index.css"

function Items({currData,sendingId}){

const [status,setStatus] = useState({})

function handleStatus(id){
    setStatus(prevState => ({
        ...prevState, [id]: !prevState[id]
    }))
}

    return(
        <ul>  
            {currData.map((item)=>(
                <div className = "items"  style={{ display: 'flex', alignItems: 'center' }} key = {item.id}>
                    <input type = "checkbox" onChange={()=>handleStatus(item.id)}></input>
                    <li style = {{textDecoration: status[item.id] ? 'line-through':'none',fontStyle: status[item.id] ? 'italic':''}}><h3>{item.Item}</h3></li>
                    <button onClick={()=>sendingId(item.id)}>x</button>
                </div>
            ))}
        </ul>
    )
}

function RemovingItem({sendingNewItem}){

const [newItem, setNewItem] = useState('')

function handleFormData(e){
    e.preventDefault();
    console.log(newItem)
    sendingNewItem(newItem)
}

    return(
        <form onSubmit={handleFormData}>
            <input type = "text" 
                   placeholder='Add New'
                   style = {{height:'20px',width:'150px'}}
                   value = {newItem}
                   onChange={(e)=>setNewItem(e.target.value)}
                   ></input>
        </form>
    )
}

function DatabaseComponent(){

const [data,setData] = useState([])

useEffect(()=>{
    try{
        fetch(`http://127.0.0.1:5001/data`,{
            headers:{
                'api-key':'837703'
            }
        })
        .then((response)=>{
            if(!response.ok){
                throw new Error(`Network Error while fetching data`)
            }
            return response.json()
        })
        .then((data)=>{
            setData(data.data)
        })
        .catch(function(err){
            console.log(err)
        })
    }
    catch(error){
        console.error(`Error in fetching data ${error}`)   
    }
},[])

async function handleRemoveFromDatabase(value){
    try{
    console.log(value)
    const response = await fetch(`http://127.0.0.1:5001/addingItem`,{
        method:'POST',
        headers:{
            'api-key':'837703',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            'Item':value
        })
    })
    if(!response.ok){
        throw new Error(`Error while making post request`)
    }
    const data = await response.json();
    console.log('Success',data) 
    setData(data.data)
    }
    catch(error){
        console.log(`Error while fetching data ${error}`)
    }
}

async function handleItemRemove(value){
    console.log(value)
    try{
        const response = await fetch(`http://127.0.0.1:5001/data/${value}`,{
            method:'DELETE',
            headers:{
                'api-key':'837703'
            }
        })
        if(!response.ok){
            throw new Error(`Network error while sending data`)
        }
        const data = await response.json()
        console.log('Deleted',data)
        setData(data.data)
    }
    catch(err){
        console.error(err)
    }
}

    return(
        <div className = "main">
            <h1> To do List</h1>
            <RemovingItem sendingNewItem = {handleRemoveFromDatabase}/>
            <Items currData = {data}
                   sendingId = {handleItemRemove}
            />
        </div>
    )
}

export default DatabaseComponent;