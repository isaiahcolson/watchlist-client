import React from 'react';
import {Link} from 'react-router-dom';
import './UserDestroy.css';

class UserDestroy extends React.Component {
    render() {
        return(
            <div className="destroy-container">
                <p>You are about to delete your account.</p>
                <p>Are you sure you would like to proceed?</p>
                <Link to='/profile'>No</Link>
            </div>
        );
    }
}

export default UserDestroy;