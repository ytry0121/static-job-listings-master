
import React, { useState } from "react"
import data from "./data"
import Card from "./components/Card"
import SmallCard from "./components/SmallCard"


export default function App() {
  const [jobs, setJobs] = useState(data);
  const [criteria, setCriteria] = useState([]);
  function addCriterion(newCriterion) {
    const criterionArray = [...criteria, newCriterion];
    setCriteria(criterionArray.filter((item, index) => criterionArray.indexOf(item) === index))
    handleFilter(criterionArray)
  }

  function handleFilter(criterionArray) {
    setJobs(
      data.filter(
        job => {
          const keywords = [job.role, job.level];
          if ('languages' in job) keywords.push(...job.languages)
          if ('tools' in job) keywords.push(...job.tools)
          const matchedKeywords = criterionArray.filter(criterion => keywords.find(item => item === criterion))
          return matchedKeywords.length === criterionArray.length;
        }
      )
    )
  }

  function deleteCriterion(targetCriterion) {
    const criterionList = criteria.filter(item => item !== targetCriterion)
    setCriteria(criterionList)
    handleFilter(criterionList)
  }

  function allClear() {
    setCriteria([])
    handleFilter([])
  }

  return (
    <div>
      <div className="header"></div>
      <div className="main">
        <div className={criteria.length === 0 ? "hide" : "filter"}>
          <div className="selectedCriteria">{criteria.map(criterion => <SmallCard key={criterion} keyword={criterion} handleCriteria={deleteCriterion} inFilter={true} />)}</div>
          <span className="clear" onClick={allClear}>Clear</span>
        </div>
        <div className="cardsContainer">
        {jobs.map(job => (<Card key={job.id} job={job} addCriterion={addCriterion} />))}
        </div>
      </div>
    </div>
  );
}
