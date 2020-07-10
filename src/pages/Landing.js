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
                <h1>Watch Later, Now.</h1>
                <h3>Add movies and shows to your watch list the right way.</h3>
            </div>
        </div>
    );
}

// exports
export default Landing;