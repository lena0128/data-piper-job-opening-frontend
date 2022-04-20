import React, { useState } from 'react';
import { createCandidate } from './actions/candidateActions';
import { useDispatch } from 'react-redux';

function CandidateForm(props){
    const dispatch = useDispatch();
    
    const [ formData, setFormData ] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        address: "",
        city: "",
        state: "",
        zipcode: "",
    })

    const [ jobInfo, setJobInfo ] = useState("4. Datavault 2.0 / PwC")

    function handleFormChange(e){
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })

    }

    function handleFormSubmit(e) {
        e.preventDefault();
        const job_id = jobInfo.split(".")[0]
        const first_name = formData.firstName
        const last_name = formData.lastName
        const phone = formData.phone
        const email = formData.email
        const address = formData.address
        const city = formData.city
        const state = formData.state
        const zipcode = formData.zipcode
        dispatch(createCandidate({first_name, last_name, phone, email, address, city, state, zipcode, job_id}))

    }

    return(
        <>
         <h3 className="form-title">ADD CANDIDATE TO THIS POSITION</h3>
        <form className="form" onSubmit={handleFormSubmit}>

            <input
                type="text"
                name="firstName"
                placeholder="First Name *"
                className="form-input"
                value={formData.firstName}
                onChange={handleFormChange} 
            />

            <input
                type="text"
                name="lastName"
                placeholder="Last Name *"
                className="form-input"
                value={formData.lastName}
                onChange={handleFormChange} 
            />

            <input
                type="text"
                name="email"
                placeholder="Email Address *"
                className="form-input"
                value={formData.email}
                onChange={handleFormChange} 
            />

            <input
                type="text"
                name="phone"
                placeholder="Phone Number *"
                className="form-input"
                value={formData.phone}
                onChange={handleFormChange} 
            />

            <input
                type="text"
                name="address"
                placeholder="Address *"
                className="form-input"
                value={formData.address}
                onChange={handleFormChange} 
            />

            <input
                type="text"
                name="city"
                placeholder="City *"
                className="form-input"
                value={formData.city}
                onChange={handleFormChange} 
            />

            <input
                type="text"
                name="state"
                placeholder="State *"
                className="form-input"
                value={formData.state}
                onChange={handleFormChange} 
            />

            <input
                type="text"
                name="zipcode"
                placeholder="Zipcode *"
                className="form-input"
                value={formData.zipcode}
                onChange={handleFormChange} 
            />

            <label htmlFor="jobInfo">What job is this candidate applied to?</label>
            <select
                id="jobInfo"
                className="form-select"
                name="jobInfo"
                value={jobInfo}
                onChange={(e) => setJobInfo(e.target.value)}  
            >
                {props.jobs.map(job => <option key={job.id} >{job.id}. {job.role} / {job.client}</option>)}
            </select>

            <button
                className="form-button"
            >
                ADD CANDIDATE
            </button>    

        </form>

        </>
    )

}

export default CandidateForm;