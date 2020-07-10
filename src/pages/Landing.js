// imports
import React from 'react';
import './landing.css';

// landing page for non-auth users
const Landing = () => {
    return(
        <div className="landing-container">
            <div>
                <img src="WL-landing-image.png" alt="Landing"/>
            </div>
            <div>
                <h1>You are on the landing page.</h1>
            </div>
        </div>
    );
}

// exports
export default Landing;