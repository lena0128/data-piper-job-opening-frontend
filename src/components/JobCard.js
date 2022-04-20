import React from 'react';
import { Link } from 'react-router-dom';

function JobCard(props){
    return(
        <>
        <div className="job-card">
          <img src="" alt={props.job.role} className="card--thumb" />
          <div className="card--stats">
            <div className="card--urgency">
              <p className="urgency--text">Urgency: {props.job.urgency}</p>
            </div>

            <h1 className="card--name">{props.job.role}</h1>
            <p className="card--client">Client: {props.job.client}</p>
                    
          </div>
            <Link to={`/jobs/${props.job.id}`}>
              <button>
                LEARN MORE
              </button>
            </Link>
        </div>
        <hr className="line" />
        </>
    )
}

export default JobCard;