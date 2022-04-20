import React, { useState } from 'react';
import JobSearchBar from './JobSearchBar';
import JobCard from './JobCard';
import { Switch, Route } from 'react-router-dom'; 
import JobPage from './JobPage';

function JobContainer(props){
    const [search, setSearch ] = useState("")

    const jobElements = props.jobs.map(job => <JobCard key={job.id} job={job} />)

    function displaySearchResult() {
        const searchResult = props.jobs.filter(job => job.role.toLowerCase().includes(search.toLowerCase()));
        
        if(search.length > 4 && searchResult.length === 0) {
           return(
             <h3 className="no-search-result">No openings found. Please try some other options.</h3>
           )
        } else {
           const searchElements = searchResult.map(job => <JobCard key={job.id} job={job} />)
           return searchElements;
        }  
    }

    return(
        <div>
            <Switch>
                <Route exact path="/jobs" render={() => {
                    return (
                      <>
                        <JobSearchBar search={search} handleSearch={(e) => setSearch(e.target.value)} clearSearch={() => setSearch("")} />
                       <section className="job-container">{ search.length === 0 ? jobElements : displaySearchResult() }</section>
                      </>  
                    )
                }} />

                <Route path="/jobs/:id" render={(routeInfo) => {
                      const paramsId = parseInt(routeInfo.match.params.id) 
                      const singleJob = props.jobs.find((job) => job.id === paramsId)
                      return <JobPage job={singleJob} goBack={() => routeInfo.history.push("/jobs")} />
                  }}>
  
              </Route> 

            </Switch>
        </div>
    )
}

export default JobContainer;