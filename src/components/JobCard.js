import React from 'react';
import { Link } from 'react-router-dom';

function JobCard(props){
  let badgeText;
  if(props.job.urgency === "High") {
    badgeText = "URGENT HIRING"
  } else if (props.job.urgency === "Med" || props.job.urgency === "Low") {
    badgeText = "";
  }
    return(
      <Link to={`/jobs/${props.job.id}`}>
        <div className="job-card">
          {badgeText && <div className="card--badge">{badgeText}</div>}
          <img src={props.job.thumb} alt={props.job.role} className="card--thumb" />
            <h1 className="card--name">{props.job.role} <small className="card--text">| {props.job.client}</small></h1>
          </div>
        </Link>
    )
}

export default JobCard;