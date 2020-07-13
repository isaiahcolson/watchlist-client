// imports
import React from 'react';
import './profile.css';

// profile page with users information
const Profile = (props) => {
    // const {username, _id} = props;

    return(
        <div className="profile-container">
            <h1>You are on the profile page.</h1>
            <h1>{props.currentUser}</h1>
            {props.currentUser ? 
                <a href='/logout' onClick={props.logout}>Log Out</a>
            :
                <p>You are in the wrong place.</p>
            }
        </div>
    );
}

// exports
export default Profile;