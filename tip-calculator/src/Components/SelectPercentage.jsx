import React from 'react'

function SelectPercentage({children, percentage, selectedValue}){
    return(
        <div>
            
            <label>{children}</label>
            <select 
            value={percentage} 
            onChange={(e)=>selectedValue(Number(e.target.value))}
            >
                <option value = {0}>Dissatisfied (0%)</option>
                <option value = {25}>It was okay (25%)</option>
                <option value = {50}>It was good (50%)</option>
                <option value = {100}>Absolutely Amazing ! (100%)</option>
            </select>
            {console.log(percentage)}
        </div>
    )
}

export default SelectPercentage;