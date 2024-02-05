import React,{useState} from 'react'
import "./index.css"


const dummy_data = [
    {
        task:'Read a book',
        id:1,
        checked:false
    },
    {
        task:'Learn Data structure',
        id:2,
        checked:false
        
    },
    {
        task:'Learn Python',
        id:3,
        checked:false
    }

]

function Items({data,newwData,removeButton}){
    return(
        <ul>
            {data.map((value)=>(
                <div className = "items"  style={{ display: 'flex', alignItems: 'center' }} key = {value.task}>
                <input type = "checkbox" 
                       checked = {value.checked} 
                       onClick={() =>newwData(Number(value.id))}
                ></input>
                <li style = {{textDecoration: value.checked ? "line-through":"",fontStyle: value.checked ? 'italic':''}}><h3>{value.task}</h3></li>
                <button onClick = {()=>{removeButton(value.id)}}>x</button>
                </div>
            ))}
        </ul>
    )
}

function AddItemsToList({newItemAddition}){

const [newItem,setNewItem] = useState('')

function handleFormSubmit(e){
    e.preventDefault()
    if(newItem === '') return;
    const Item = {
        task:newItem,
        id:Math.floor(Math.random(10)*100),
        checked:false
    }
    newItemAddition(Item)
    setNewItem('')
}
    return( <form onSubmit={handleFormSubmit}>
            <input type = "text" 
                   placeholder='Add New' 
                   value = {newItem} onChange={(e)=>setNewItem(e.target.value)}
                   style = {{height:'20px',width:'200px'}}
            />
            </form>
        )
}

function App() {

const [data,setData] = useState(dummy_data)

function handleSetMainState(value){
    setData(newItm => [...newItm,value])
}

function handlingIndividualComponent(testId){
    // console.log(testId)
    // const testing = data.some(prevData => prevData.id === testId)
    // console.log(testing)
    // setCheckSelect(1)
    setData(prevData => prevData.map((item)=>{
        if(item.id === testId){
            return{...item,checked: !item.checked}
        }
        return item
    }))
}

function handleRemoveItem(itemId){
    const updated = data.filter(item => item.id !== itemId)
    setData(updated)
}

  return (
    <div className = "main">
        <h1>To do list</h1> 
        <AddItemsToList newItemAddition = {handleSetMainState} />
        {data.length === 0 && <p>Try Adding a new item</p>}
        <Items data = {data} 
               newwData={handlingIndividualComponent}
               removeButton = {handleRemoveItem}
        />
    </div>
  )
}

export default App