import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';
import './styles.css';
import JobContainer from './components/JobContainer';
import {fetchJobs} from './components/actions/jobActions';
import { fetchCandidates } from './components/actions/candidateActions';
import Navbar from './components/Navbar';
import Loading from './components/Loading';
import FrontPage from './components/FrontPage';
import CandidatesContainer from './components/CandidatesContainer';

function App() {
  const jobs = useSelector(state => state.jobs.jobs)
  const jobsLoading = useSelector(state => state.jobs.loading)
  const candidates = useSelector(state => state.candidates.candidates)
  const candidatesLoading = useSelector(state => state.candidates.loading)
  const dispatch = useDispatch()

  // fetch all job objects from backend api
  useEffect(() => {
    console.log("mounting all jobs once")
    dispatch(fetchJobs())
  }, [dispatch])

  // fetch all candidate objects from backend api
  useEffect(() => {
    console.log("mounting all candidate objects")
    dispatch(fetchCandidates())
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

       <Route path="/candidates">
          { candidatesLoading ? <Loading /> : <CandidatesContainer candidates={candidates} /> }
       </Route> 
    </div>
  );
}

export default App;
