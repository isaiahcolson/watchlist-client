// imports
import React from 'react';
import {NavLink} from 'react-router-dom';
import UserModel from '../models/User';
import './navbar.css';

// navbar with links to routes
class Navbar extends React.Component {
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
            <header>
                {this.state.user ? 
                    <div className="navbar">
                        <NavLink to='/titles'><img src="WL-logo.png" alt="Watch Later Logo"/></NavLink>
                        <div className="right-nav">
                        <NavLink to={`/watchlists/${this.state.user.watchlists[0]._id}`}>Watchlist</NavLink>
                            <NavLink to='/profile'>Profile</NavLink>
                            {/* <a href='/logout' onClick={props.logout}>Log Out</a> */}
                        </div>
                    </div>
                :
                    <div className="navbar">
                        <NavLink to='/'><img src="WL-logo.png" alt="Watch Later Logo"/></NavLink>
                        <div className="right-nav">
                            <NavLink to='/login'>Log In</NavLink>
                            <NavLink className="signup-button" to='/signup'>Sign Up</NavLink>
                        </div>
                    </div>
                }
            </header>
        );
    }
}

// exports
export default Navbar;