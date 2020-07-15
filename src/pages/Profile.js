// imports
import React from 'react';
import {Link} from 'react-router-dom';
import TitleModel from '../models/title';
import UserModel from '../models/User';
import './profile.css';

// profile page with users information
class Profile extends React.Component {
    state = {
        titles: [],
        user: null
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        TitleModel.all().then((json) => {
            this.setState({titles: json.titles}, this.fetchUserData);
        });
    }

    fetchUserData = () => {
        UserModel.profile(this.props.currentUser).then((json) => {
            this.setState({user: json.user});
        });
    }

    render() {
        return(
            <div className="profile">
                {this.state.user ? 
                    <div className="profile-container">
                        <div className="profile-left">
                            <h3>My Profile - edit</h3>
                            <h4>{this.state.user.firstName} {this.state.user.lastName}</h4>
                            <p>{this.state.user.username}</p>
                            <p>{this.state.user.email}</p>
                            <div className="profile-links">
                                <Link to={`/watchlists/${this.state.user.watchlists[0]._id}`}>My Watchlist</Link>
                                <a href='/logout' onClick={this.props.logout}>Log Out</a>
                                <Link to='/profile'>Delete Account</Link>
                            </div>
                        </div>

                        <div className="profile-right">
                            <h3>Next Titles in Watchlist</h3>
                            <div className="profile-titles">
                                <div className="profile-titles__1">
                                    <p>{this.state.user.watchlists[0].titles[0]}</p>
                                </div>
                                <div className="profile-titles__2">
                                    <p>{this.state.user.watchlists[0].titles[1]}</p>
                                </div>
                            </div>
                            <h4>{this.state.user.watchlists[0].titles.length} Titles in Watchlist.</h4>
                        </div>
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