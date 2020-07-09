import React from 'react';
import {NavLink} from 'react-router-dom';

const LandingNav = () => {
    return(
        <header>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/signup'>Sign Up</NavLink>
            <NavLink to='/login'>Log In</NavLink>
        </header>
    );
}

export default LandingNav;