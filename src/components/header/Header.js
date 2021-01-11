import React from 'react';
import './Header.css'
import {NavLink} from 'react-router-dom';

class Header extends React.Component{
    render(){
        return(
            <div>
               <div className="header">
                    <span className="rotate90">The</span><h1 className="headerAppName">Siren</h1>
                    <span className="hamburger"><i className="fa fa-bars" aria-hidden="true"></i></span>
                </div>
                <div className="navbar">
                    <NavLink to="/home">
                        <div className="nav-element">
                            Home
                        </div>
                    </NavLink>
                    <NavLink to="/category/Bollywood">
                        <div className="nav-element">
                            Bollywood
                        </div>
                    </NavLink>
                    <NavLink to="/category/Technology">
                        <div className="nav-element">
                            Technology
                        </div>
                    </NavLink>
                    <NavLink to="/category/Fitness">
                        <div className="nav-element">
                            Fitness
                        </div>
                    </NavLink>
                    <NavLink to="/category/Travel">
                        <div className="nav-element">
                            Travel
                        </div>
                    </NavLink>
                    <NavLink to="/category/Food">
                        <div className="nav-element">
                            Food
                        </div>
                    </NavLink>

                </div>
            </div>
        )
    }
}

export default Header;