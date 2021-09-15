import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div class="navbar">
            <div class="logo">FCCincy</div>
            <div class="nav-link"><Link to={'home'}>Home</Link></div>
            <div class="nav-link"><Link to={'schedule'}>Schedule</Link></div>
            <div class="nav-link"><Link to={'roster'}>Roster</Link></div>
        </div>
    )
}

export default Navbar
