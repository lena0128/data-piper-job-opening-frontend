import React from 'react';

function JobSearchBar(props){
    const findJobsLabel = <label className="search-label">FIND JOBS</label>
    const clearALL = <button className="search-button" onClick={props.clearSearch}>CLEAR</button>
    return(
        <div className="search-bar">
            <input 
                type="text"
                placeholder="Please enter a job title..."
                value={props.search}
                onChange={props.handleSearch}
                className="search-input" 
            />

        { props.search.length > 2 ? clearALL : findJobsLabel } 
        

        </div>
    )
}

export default JobSearchBar;