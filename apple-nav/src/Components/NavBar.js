import React from 'react';


import { NavLink } from 'react-router-dom'


const NavBar = props => {
    return (
        <div className="top-bar">
            <nav className="nav-wrapper">   
                <NavLink className="main-nav">{props.item}</NavLink>
            </nav>
        </div>
        
        
    )
}

export default NavBar;