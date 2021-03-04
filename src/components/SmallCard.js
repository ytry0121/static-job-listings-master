import React from "react";

export default function SmallCard({ keyword, handleCriteria, inFilter }) {

    function handleClick() {
        handleCriteria(keyword);
    }
    return (
        <div className="smallCardContainer" >
            <div className="smallCard" onClick={handleClick} >{keyword}</div>
            <img className={inFilter ? "remove" : "hide"} alt="icon-remove" src="./images/icon-remove.svg" onClick={handleClick}/>
        </div>
    )
}