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
                        <h2>My Profile</h2>
                        <div className="prof-info">
                            <div className="prof-info__left">
                                <p>Name:</p>
                                <p>Username:</p>
                                <p>Email:</p>
                                <Link to={`/watchlists/${this.state.user.watchlists[0]._id}`}>My Watchlist</Link>
                                <Link to={`/auth/${this.state.user._id}`}>Delete Account</Link>
                            </div>
                            <div className="prof-info__right">
                                <h4>{this.state.user.firstName} {this.state.user.lastName}</h4>
                                <h4>{this.state.user.username}</h4>
                                <h4>{this.state.user.email}</h4>
                                <a href='/logout' onClick={this.props.logout}>Log Out</a>
                            </div>
                        </div>
                        
                        <div className="profile-titles">
                            <h4>{this.state.user.watchlists[0].titles.length} Titles in Watchlist</h4>
                            <h3>Next Titles in Watchlist</h3>
                            <div className="profile-titles__list">
                                <ProfileTitle titleId={this.state.user.watchlists[0].titles[0]} />
                                <ProfileTitle titleId={this.state.user.watchlists[0].titles[1]} />
                                <ProfileTitle titleId={this.state.user.watchlists[0].titles[2]} />
                            </div> 
                        </div>
                    </div>
                :
                    <p>Loading account information.</p>
                }
                <div className="underlay"></div>
            </div>
        );
    }
}

// exports
export default Profile;