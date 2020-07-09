import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return(
        <header>
            <NavLink to='/titles'>Home</NavLink>
            <NavLink to='/profile'>Profile</NavLink>
            <NavLink to='/'>Landing</NavLink>
            <NavLink to='/signup'>Sign Up</NavLink>
            <NavLink to='/login'>Log In</NavLink>
        </header>
    );
}

export default Navbar;