import React from "react";
import SmallCard from "./SmallCard"

export default function Card({ job, addCriteria }) {
    const {languages,tools}= job;
 
    return (<div className="card">
        <div className="top">
            <img alt="logo" src={job.logo} />
            {/* <div className="description"> */}
                <div className="cardHeader">
                    <div className="name">{job.company}</div>
                    <div className={job.new ? "new stamp" : "hide"}>{job.new ? "NEW!" : ""}</div>
                    <div className={job.featured ? "featured stamp" : "hide"}>{job.featured ? "FEATURED" : ""}</div>
                </div>

                <h3>{job.position}</h3>

                <p className="sub">{job.postedAt} • {job.contract} • {job.location}</p>
            {/* </div> */}
        </div>
        <div className="bottom">
            <SmallCard key="role" keyword={job.role} handleCriteria={addCriteria} inFilter={false}/>
            <SmallCard key="level" keyword={job.level} handleCriteria={addCriteria} inFilter={false}/>
            {typeof languages !== "undefined" ? languages.map(lang => <SmallCard key={lang} keyword={lang} handleCriteria={addCriteria} inFilter={false}/>) : null}
            {typeof tools !== "undefined" ? tools.map(tool => <SmallCard key={tool} keyword={tool} handleCriteria={addCriteria} inFilter={false}/>) : null}



        </div>
    </div>)
}