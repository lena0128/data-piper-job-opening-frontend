import React, { useState } from 'react';
import JobSearchBar from './JobSearchBar';
import JobCard from './JobCard'

function JobContainer(props){
    const [search, setSearch ] = useState("")

    const jobElements = props.jobs.map(job => <JobCard key={job.id} job={job} />)

    function displaySearchResult() {
        const searchResult = props.jobs.filter(job => job.role.toLowerCase().includes(search.toLowerCase()) || job.client.toLowerCase() === search.toLowerCase());
        
        if(search.length > 6 && searchResult.length === 0) {
           return(
             <h3 className="no-search-result">No openings found. Please try some other options.</h3>
           )
        } else {
           const searchElements = searchResult.map(job => <JobCard key={job.id} job={job} />)
           return searchElements;
        }  
    }

    return(
        <div className="job-container">
            <JobSearchBar search={search} handleSearch={(e) => setSearch(e.target.value)} clearSearch={() => setSearch("")} />
            <div className="job-container">{ search.length === 0 ? jobElements : displaySearchResult() }</div>
        </div>
    )
}

export default JobContainer;