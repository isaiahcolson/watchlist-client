// imports
import React from 'react';
import {Link} from 'react-router-dom';
import UserModel from '../models/User';
import './profile.css';

// profile page with users information
class Profile extends React.Component {
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

    render() {
        return(
            <div className="profile-container">
                {this.state.user ? 
                    <div>
                        <h1>You are on the profile page.</h1>
                        <h4>{this.state.user.firstName} {this.state.user.lastName}</h4>
                        <p>{this.state.user.username}</p>
                        <p>{this.state.user.email}</p>
                        <p>Movies in watchlist: </p>
                        <p>Shows in watchlist: </p>
                        <Link to={`/watchlists/${this.state.user.watchlists[0]}`}>Watchlist</Link>
                        <a href='/logout' onClick={this.props.logout}>Log Out</a>
                        <Link to='/profile'>Delete Account</Link>
                    </div>
                :
                    <p>You are in the wrong place.</p>
                }
            </div>
        );
    }
}

// exports
export default Profile;