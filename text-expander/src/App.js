import React,{useState} from 'react'
import "./index.css"


function TextExpander({children, 
                       collapsedNumWords = 120,
                       expandButtonText = 'Show...',
                       collapseButtonText = 'Hide',
                       buttonColor = 'blue',
                       classs
                    }){

const [hide,SetHide] = useState(false)
const [num,setNum] = useState(collapsedNumWords)


function handleShow(){
    if(hide){
        setNum(collapsedNumWords)
    }
    else{
    setNum(hide ? collapseButtonText : children.length)
    }
    SetHide(()=>!hide)
}

    return(
    <div className = {classs}>
        <span>{children.slice(0,num)}</span>
        <button onClick={handleShow} style = {{color:`${buttonColor}`,background:'none',border:'0px'}}>{hide ? `${collapseButtonText}`:`${expandButtonText}`}</button>
    </div>
    
    )
}


export default function App(){
    return(
        <div>
            <TextExpander>
            Space travel is the ultimate adventure! Imagine soaring past the stars
            and exploring new worlds. It's the stuff of dreams and science fiction,
            but believe it or not, space travel is a real thing. Humans and robots
            are constantly venturing out into the cosmos to uncover its secrets and
            push the boundaries of what's possible.
            </TextExpander>
            <TextExpander collapsedNumWords = {20}
                          expandButtonText = 'Show Text'
                          collapseButtonText = 'Collapse Text'
                          buttonColor='#ff6622'
            >
            Space travel requires some seriously amazing technology and
            collaboration between countries, private companies, and international
            space organizations. And while it's not always easy (or cheap), the
            results are out of this world. Think about the first time humans stepped
            foot on the moon or when rovers were sent to roam around on Mars.
            </TextExpander>
            <TextExpander classs={'box'}>
            Space travel requires some seriously amazing technology and
            collaboration between countries, private companies, and international
            space organizations. And while it's not always easy (or cheap), the
            results are out of this world. Think about the first time humans stepped
            foot on the moon or when rovers were sent to roam around on Mars.
            </TextExpander>
        </div>
    )
}