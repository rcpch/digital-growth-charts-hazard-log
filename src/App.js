import { Octokit } from '@octokit/core';
import './App.css';

function App() {
  const octokit = new Octokit();
  
  const issues = async () => {
    const response = await octokit.request('GET /repos/{owner}/{repo}/issues', {
      owner: "rcpch",
      repo: "digital-growth-charts-hazard-log"
    })
    return response;
  };
  
  issues().then((response) => console.log(response.data))
  
  return (
    <div className="App">
      Hello World
    </div>
  );
}

export default App;