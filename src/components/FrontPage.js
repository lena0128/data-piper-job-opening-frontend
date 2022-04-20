import React from 'react';
import { Link } from 'react-router-dom';

function FrontPage(){
    return(
        <div className="hero-section">
            <h1 className="hero-title">JOIN OUR TEAM</h1>
            <Link to="/jobs" className="hero-text">
                Learn more...
            </Link>
        </div>
    )

}

export default FrontPage;