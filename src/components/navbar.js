import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = (props) => {
    return(
        <header>
            <NavLink to='/'>Landing</NavLink>
            <NavLink to='/titles'>Home</NavLink>

            {props.currentUser ? 
                <>
                    <NavLink to='/profile'>Profile</NavLink>
                    <a href='/logout' onClick={props.logout}>Log Out</a>
                </>
            :
                <>
                    <NavLink to='/signup'>Sign Up</NavLink>
                    <NavLink to='/login'>Log In</NavLink>
                </>
            }
        </header>
    );
}

export default Navbar;