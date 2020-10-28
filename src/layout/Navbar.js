import React, {Component} from 'react';
import logo from '../assets/logo/logo_navbar.png';

// Router
import { Link } from 'react-router-dom';
class Navbar extends Component{
    render(){
        return(
            <nav className="navbar">
                <a href="/" className="navbar_logo"><img src={logo} alt= "Logo"/></a>
                <ul className="navbar_menu">
                    <li><Link to="/news">News</Link></li>
                    <li><Link to="/reviews">Reviews</Link></li>
                    <li><Link to="/videos">Videos</Link></li>
                    <li><Link to="/articles/article">More</Link></li>
                    <div className="navbar_menu_social-media">
                        <a target="_blank" href="https://www.facebook.com/geekTVmedia"><i class="fab fa-facebook"></i></a>
                        <a target="_blank" href="https://www.instagram.com/geek4tv"><i class="fab fa-instagram"></i></a>
                        <a target="_blank" href="https://www.youtube.com/channel/UCL77HAX3gb0rp-foI7Ya8UA?view_as=subscriber"><i class="fab fa-youtube"></i></a>
                    </div>
                    <a className="navbar_menu-search"><i class="fas fa-search"></i></a>
                </ul>
                <button className="btn navbar_btn">Sign In</button>
            </nav>
        )
    }
}

export default Navbar