import React, { useState } from "react"
import "./index.css"

function ExpanderItem({num,title,text}){

    const [isOpen, setIsOpen] = useState(false);

    function handleHideShow(){
        setIsOpen((isOpen)=>!isOpen)
    }

    return(
        <div className = {`item ${isOpen ? "open":""}`} onClick = {handleHideShow}>
            <p className = "number">{num<9?`0${num}`:num+1}</p>
            <p className = "title">{title}</p>
            <p className = "icon">{isOpen?"-":"+"}</p>
            { isOpen && (<p className = "content-box" >{text}</p> )}
        </div>
    )

}

export default ExpanderItem;