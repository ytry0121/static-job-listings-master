import React from "react";
import SmallCard from "./SmallCard"

export default function Card({ job }) {
    const langs = job.languages;
//if(typeof langs !== "undefined")langs.map(lang => console.log(lang));

return (<div className="cardContainer">
        <div className="top">
           {job.company}
            <img alt="logo"  src={job.logo} />
           <div className={job.new ? "new stamp" : "hide"}>{job.new ? "NEW!" : ""}</div>
           <div className={job.featured ? "featured stamp" : "hide"}>{job.featured ? "FEATURED" : ""}</div>
                       
            <h3> {job.position}</h3>

           <p className="sub">{job.postedAt} • {job.contract} • {job.location}</p> 
        </div>
        <div className="bottom">
        <SmallCard key="role" keyWord={job.role}/>
        <SmallCard key="level" keyWord={job.level}/>
        {typeof langs !== "undefined"? langs.map(lang =>  <SmallCard key={lang} keyWord={lang}/>):null } 

            
           
        </div>
    </div>)
}