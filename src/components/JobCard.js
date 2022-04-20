import React from 'react';
import { Link } from 'react-router-dom';

function JobCard(props){
    return(
        <>
        <div className="job-card">
            <h3>{props.job.role}</h3>
            <h5>Client: {props.job.client}</h5>
            <p>
                Point of Contact: {props.job.poc} - <span>{props.job.email}</span>
            </p>
            <p>Urgency: {props.job.urgency}</p>
            <p>Skills Needed: {props.job.skillsNeeded}</p>
            <Link to="/candidates/new">
              <button>
                ADD CANDIDATE
              </button>
            </Link>
        </div>
        <hr className="line" />
        </>
    )
}

export default JobCard;