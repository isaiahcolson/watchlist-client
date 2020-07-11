// imports
import React from 'react';
import './landing.css';

// landing page for non-auth users
const Landing = () => {
    return(
        <div className="landing-container">
            <div className="landing-image">
                <img src="WL-landing-image.png" alt="Landing"/>
            </div>
            <div className="landing-content">
                <h1>Grab the Popcorn.</h1>
                <h3>Add movies and shows to your watchlist the right way.</h3>
            </div>
        </div>
    );
}

// exports
export default Landing;