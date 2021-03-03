import React from "react";

export default function SmallCard({ keyword, handleCriteria,inFilter }) {
    
    function handleClick(e) {
        console.log(handleCriteria)
        // console.log(handleCriteria)
        // console.log(typeof handleCriteria)
         handleCriteria(e.target.innerText);
    }
    return (
        <div className="smallCard" onClick={(e) => handleClick(e)} >{keyword} <img className={inFilter? "remove": "hide"} alt="icon-remove" src="./images/icon-remove.svg" /></div>
    )
}