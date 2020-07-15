import React from 'react';
import {Link} from 'react-router-dom';
import './UserDestroy.css';

class UserDestroy extends React.Component {
    render() {
        return(
            <div className="destroy-container">
                <h3>You are about to delete your account.</h3>
                <h3>Are you sure you would like to proceed?</h3>
                <div className="destroy-buttons">
                    <Link to='/profile'>No, Return</Link>
                    <Link>Yes, Delete</Link>
                </div>
            </div>
        );
    }
}

export default UserDestroy;