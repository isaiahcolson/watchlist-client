import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return(
        <header>
            <NavLink to='/titles'>Home</NavLink>
            <NavLink to='/profile'>Profile</NavLink>
        </header>
    );
}

export default Navbar;