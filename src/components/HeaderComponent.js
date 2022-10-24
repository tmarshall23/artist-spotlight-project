import React from 'react';
import {Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import '../header.css';


const Header = () => {
        return(
            <div>
                {/* <Navbar> */}
                    <div className="header-container" >    
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
                                        <NavLink className="nav-link" to="/home">
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
                {/* </Navbar> */}
            </div>
        );    
}

export default Header;