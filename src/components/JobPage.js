import React from 'react';
import CandidateForm from './CandidateForm';

function JobPage(props){
    
    return(

        <div class="job-page">
           <div className="job-description">
           <h1>{props.job.role}</h1>
           <hr className="line" />
           <p><b className="description-title">Client: </b>{props.job.client}</p>
           <p><b className="description-title">POC: </b>{props.job.poc} - <a href={`mailto:${props.job.email}`}>{props.job.email}</a></p>
           <p><b className="description-title">Quantity: </b>{props.job.quantity}</p>
           <p><b className="description-title">Skills Needed: </b>{props.job.skillsNeeded}</p>
           </div>
           
           <div><CandidateForm myJobId={props.job.id}/></div>
        </div>
    )

}

export default JobPage;