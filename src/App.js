
import React from "react"
import data from "./data"
import Card from "./components/Card"

const jobs = data;
function App() {
  return (
    <div className="App">
    <ul> 
    {
      jobs.map( job =>(<Card key={job.id} job={job}/> ))
    //<li key={job.id}>{job.company}<img src={process.env.PUBLIC_URL + job.logo}></img></li>
    }
    </ul>

    </div>
  );
}

export default App;
