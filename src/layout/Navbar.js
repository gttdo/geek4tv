import React, {Component} from 'react';
import logo from '../assets/logo/logo_navbar.png';

class Navbar extends Component{
    render(){
        return(
            <nav className="navbar">
                <img src={logo} alt= "Logo" className="navbar_logo"/>
                <ul className="navbar_menu">
                    <li>News</li>
                    <li>Watch</li>
                    <li>Reviews</li>
                    <li>More</li>
                    <div className="navbar_menu_social-media">
                        <a><i class="fab fa-facebook"></i></a>
                        <a><i class="fab fa-instagram"></i></a>
                        <a><i class="fab fa-youtube"></i></a>
                    </div>
                    <a className="navbar_menu-search"><i class="fas fa-search"></i></a>
                </ul>
                <button className="btn navbar_btn">Sign In</button>
            </nav>
        )
    }
}

export default Navbar