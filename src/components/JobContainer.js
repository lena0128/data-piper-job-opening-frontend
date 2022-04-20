import React from 'react';
import JobSearchBar from './JobSearchBar';
import JobCard from './JobCard'

function JobContainer(){
    return(
        <div className="job-container">
            <JobSearchBar />
            <JobCard />
        </div>
    )
}

export default JobContainer;