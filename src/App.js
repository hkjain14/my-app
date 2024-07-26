import './App.css';
import {useState, useEffect} from 'react';
import {getIssue, statuses} from "./api/tasks";
import TaskComponent from "./components/TaskComponent";

function App() {
  const [issue, setIssue] = useState(undefined);

  useEffect(() => {
    async function fetchIssue() {
      const issueApiResponse = await getIssue();
      setIssue(issueApiResponse);
    }
    fetchIssue();
  },[]);
  return (
    <div className="App">
        {
            issue ?
                <div>
                <span>
                    <span className='issue-title'>
                        {issue.title}
                    </span>
                    <span className='status'>
                      <select defaultValue={issue.status} name='status' id='status' className='select-status'>
                        {
                          statuses.map((status) => {
                            return (
                                <option value={status}>{status}</option>
                            )
                          })
                        }
                      </select>
                    </span>
                </span>
                <TaskComponent subtasks={issue.subtasks}/>
                </div>
                :
                <span/>

        }


    </div>
  );
}

export default App;
