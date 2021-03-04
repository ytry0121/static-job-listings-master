
import React, { useState } from "react"
import data from "./data"
import Card from "./components/Card"
import SmallCard from "./components/SmallCard"


export default function App() {
  const [jobs,setJobs] = useState(data);
  const [criteria, setCriteria] = useState([]);
  function addCriteria(newCriteria) {
    setCriteria(prevCriteria => {
      let list = [...prevCriteria, newCriteria];
      return list.filter((item, index) => list.indexOf(item) === index)
    })
    // setJobs(data.filter(job =>{
    //   const list = [job.role,job.level]
    //   typeof job.languages !=== "undefined"?...job.languages,list.push(...job.tools)];
    //   return criteria.filter(criterion=> list.map(item=>item === criterion))
    // }))
    
  }

  function deleteCriteria(targetCriteria) {
    setCriteria(prevCriteria => prevCriteria.filter(item => item !== targetCriteria))
  }

  return (
    <div>
      <div className="header"></div>
      <div className="main">
        <div id="filter">
          {criteria.map(criterion => <SmallCard key={criterion} keyword={criterion} handleCriteria={deleteCriteria} inFilter={true}/>)}

        </div>
        {jobs.map(job => (<Card key={job.id} job={job} addCriteria={addCriteria} />))}
      </div>
    </div>
  );
}
