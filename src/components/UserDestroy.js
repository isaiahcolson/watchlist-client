import React from 'react';
import {Link} from 'react-router-dom';
import UserModel from '../models/User';
import './UserDestroy.css';

class UserDestroy extends React.Component {
    state = {
        user: null
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        UserModel.profile(this.props.currentUser).then((json) => {
            this.setState({user: json.user});
        });
    }

    destroyUser = (event) => {
        event.preventDefault()
        UserModel.destroy(this.state.user._id)
        .then((json) => {
            this.props.history.push('/');         
        });
    }

    render() {
        return(
            <div className="destroy-container">
                <h3>You are about to delete your account.</h3>
                <h3>Are you sure you would like to proceed?</h3>
                <div className="destroy-buttons">
                    <Link to='/profile'>No, Return</Link>
                    <button onClick={this.destroyUser}>Yes, Delete</button>
                </div>
            </div>
        );
    }
}

export default UserDestroy;