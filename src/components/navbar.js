// imports
import React from 'react';
import {NavLink} from 'react-router-dom';
import './navbar.css';

// navbar with links to routes
const Navbar = (props) => {
    return(
        <header>
            {props.currentUser ? 
                <div className="navbar">
                    <NavLink to='/titles'><img src="WL-logo.png" alt="Watch Later Logo"/></NavLink>
                    <div className="right-nav">
                        <NavLink to='/profile'>Profile</NavLink>
                        <a href='/logout' onClick={props.logout}>Log Out</a>
                    </div>
                </div>
            :
                <div className="navbar">
                    <NavLink to='/'><img src="WL-logo.png" alt="Watch Later Logo"/></NavLink>
                    <div className="right-nav">
                        <NavLink to='/login'>Log In</NavLink>
                        <NavLink to='/signup'>Sign Up</NavLink>
                    </div>
                </div>
            }
        </header>
    );
}

// exports
export default Navbar;