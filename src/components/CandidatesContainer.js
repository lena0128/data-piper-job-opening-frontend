import React from 'react';
import { Link } from 'react-router-dom';

function CandidatesContainer(props){
    const items = props.candidates
    console.log(items)

    return(
      <table id="candidates">
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Address</th>
          <th>Job Applied</th>
          <th>Client</th>
        </tr>
        {items.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.firstName}</td>
              <td>{val.lastName}</td>
              <td>{val.phone}</td>
              <td>{val.email}</td>
              <td>{val.address}, {val.city}, {val.state}, {val.zipcode}</td>
              <td><Link to={`/jobs/${val.job.id}`}>{val.job.role}</Link></td>
              <td>{val.job.client}</td>
            </tr>
          )
        })}
      </table>

    )

}

export default CandidatesContainer;