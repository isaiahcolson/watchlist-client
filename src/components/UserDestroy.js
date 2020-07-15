import React from 'react';
import './UserDestroy.css';

class UserDestroy extends React.Component {
    render() {
        return(
            <div className="destroy-container">
                <p>You are about to delete your account.</p>
                <p>Are you sure you would like to proceed?</p>
            </div>
        );
    }
}

export default UserDestroy;