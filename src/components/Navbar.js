import React from 'react';
import { NavLink } from "react-router-dom"; 

function Navbar(){
    return(
        <div className="navbar">

                <img className="navbar--logo" src="../images/dp-logo-colored.svg" alt="data piper logo" />

            <NavLink
               className="navbar--text"
               to="/jobs"
            >
                JOB OPENINGS
            </NavLink>
            <NavLink
               className="navbar--text"
               to="/candidates/new"
            >
                CANDIDATES
            </NavLink>
        </div>
    )
}

export default Navbar;