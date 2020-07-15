// imports
import React from 'react';
import {Link} from 'react-router-dom';
import TitleModel from '../models/title';
import UserModel from '../models/User';
import ProfileTitle from '../components/Titles/profiletitle';
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

    displayTitle = () => {
        console.log(this);
    }

    render() {
        return(
            <div className="profile">
                {this.state.user ? 
                    <div className="profile-container">
                        <div className="profile-left">
                            <h3>My Profile</h3>
                            <h4>{this.state.user.firstName} {this.state.user.lastName}</h4>
                            <p>{this.state.user.username}</p>
                            <p>{this.state.user.email}</p>
                            <div className="profile-links">
                                <Link to={`/watchlists/${this.state.user.watchlists[0]._id}`}>My Watchlist</Link>
                                <a href='/logout' onClick={this.props.logout}>Log Out</a>
                                <Link to={`/auth/${this.state.user._id}`}>Delete Account</Link>
                            </div>
                        </div>

                        <div className="profile-right">
                            <h3>Next Titles in Watchlist</h3>
                            <div className="profile-titles">
                                <div className="profile-titles__1">
                                    <div className="protitle">
                                        <ProfileTitle titleId={this.state.user.watchlists[0].titles[0]} />
                                        <ProfileTitle titleId={this.state.user.watchlists[0].titles[1]} />
                                    </div>
                                </div> 
                                <div className="profile-titles__2">
                                    
                                </div>
                            </div>
                            <h4>{this.state.user.watchlists[0].titles.length} Titles in Watchlist.</h4>
                        </div>
                    </div>
                :
                    <p>Loading account information.</p>
                }
            </div>
        );
    }
}

// exports
export default Profile;