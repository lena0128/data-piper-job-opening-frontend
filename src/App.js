import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';
import './styles.css';
import JobContainer from './components/JobContainer';
import {fetchJobs} from './components/actions/jobActions';
import Navbar from './components/Navbar';
import Loading from './components/Loading';
import FrontPage from './components/FrontPage';
import CandidateForm from './components/CandidateForm';

function App() {
  const jobs = useSelector(state => state.jobs.jobs)
  const jobsLoading = useSelector(state => state.jobs.loading)
  const dispatch = useDispatch()

  // fetch all job objects from backend api
  useEffect(() => {
    console.log("mounting all jobs once")
    dispatch(fetchJobs())
  }, [dispatch])

  return (
    <div className="App">
      <Navbar />
      <Route exact path="/">
        <FrontPage />
      </Route>
      <Route path="/jobs">
         { jobsLoading ? <Loading /> :<JobContainer jobs={jobs} /> }
       </Route>

       <Route path="/candidates/new">
          <CandidateForm jobs={jobs}/>
       </Route>  
    </div>
  );
}

export default App;
