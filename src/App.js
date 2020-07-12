import React from 'react';
import logo from './logo.svg';
import './App.css';

import Jobs from './Jobs';

const JOB_API_URL = 'http://localhost:3001/jobs';

const mockJobs = [
  {title: 'SWE 1', company: 'Google'},
  {title: 'SWE 1', company: 'facebook'},
  {title: 'SWE 1', company: 'Apple'}
]

async function fetchJobs(updateCb) {
  const res = await fetch(JOB_API_URL);
  const json = await res.json();

  console.log({json});

  updateCb(json);
}

function App() {

  const [jobList, updateJobs] = React.useState([])

  React.useEffect(() => {
    fetchJobs(updateJobs);
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Jobs jobs={jobList} />
        </div>

        <img src={logo} className="App-logo" alt="logo" />

      </header>
    </div>
  );
}

export default App;
