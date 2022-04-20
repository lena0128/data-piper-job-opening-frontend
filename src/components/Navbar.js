import React from 'react';
import { NavLink } from "react-router-dom"; 

function Navbar(){
    return(
        <div className="navbar">

                <img className="navbar--logo" src="../images/dp-logo-colored.svg" alt="data piper logo" />
            
            <NavLink
               className="navlink"
               to="/"
            >
                HOME
            </NavLink>

            <NavLink
               className="navlink"
               to="/jobs"
            >
                JOB OPENINGS
            </NavLink>
            <NavLink
               className="navlink"
               to="/candidates"
            >
                CANDIDATES
            </NavLink>
        </div>
    )
}

export default Navbar;