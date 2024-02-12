import React,{useState} from 'react'
import "./index.css"


function ColorInput({onChangeVal}){

const [color,setColor] = useState('')

function handleFormData(e){
    e.preventDefault()
    console.log(color)
    onChangeVal(color)
}

    return(
        <form className = "child" onSubmit={handleFormData}>
            <input type = 'text' style = {{marginRight:'5px'}} value = {color} onChange={(e)=>setColor(e.target.value)}/>
            <button>Go</button>
        </form>
    )
}

function App() {

const [changeColor, setChangeColor] = useState('')

function handleChange(value){
    setChangeColor(()=>value)
    console.log(`called`)
}

  return (<>
    <div className = "parent" style = {{ backgroundColor: changeColor}}>
    </div><br/>
    <ColorInput onChangeVal = {handleChange}/>
    </>
  )
}

export default App