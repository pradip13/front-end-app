// Note:
// This file is not used throughout the application. 
// But this is a good place to undersatnd how to implement navigation in react-router-dom v6

import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div style={{ backgroundColor: 'cyan' }}>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/profile-page'>Profile</NavLink>
            <NavLink to='/profile-list'>All profile</NavLink>
        </div>
    )
}

export default NavBar;
