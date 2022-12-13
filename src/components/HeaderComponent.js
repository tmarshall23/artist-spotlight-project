import React from 'react';
import {Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import '../header.css';


const Header = () => {
        return(
            // <div>
                <div className="header-container" >  
                    <div className='box'>  
                        <div className="header-title">
                            <h1>ARTIST SPOTLIGHT</h1>   
                        </div>
                            <Nav className="navbar">
                                <NavItem className="li">
                                    <NavLink className="nav-link" to="/aboutus">
                                    ABOUT US
                                    </NavLink>
                                </NavItem>
                                <NavItem className="li">
                                    <NavLink className="nav-link" to="/">
                                    HOME
                                    </NavLink>
                                </NavItem>
                                <NavItem className="li">
                                    <NavLink className="nav-link" to="/contactus">
                                    CONTACT US
                                    </NavLink>
                                </NavItem>
                            </Nav> 
                    </div>
                </div>
            // </div>
        );    
}

export default Header;