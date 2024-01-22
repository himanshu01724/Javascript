import React from 'react'

function Bill({children, amount, selectedAmount}){
    return(
        <div>
            <label>{children}</label>
            <input type = "number" value = {amount} onChange={(e)=>selectedAmount(Number(e.target.value))}></input>
            {console.log(amount)}
        </div>
    )
}
export default Bill;