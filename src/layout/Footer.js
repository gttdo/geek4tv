import React, {Component} from 'react';
import logo from '../assets/logo/logo_navbar.png';

class Footer extends Component{
    render(){
        return(
            <section className="footer">
                <div className="footer_container">
                    <img src={logo} className="footer_logo"/>
                    <p className="footer_copyright">&copy; Geek4TV 2020</p>
                </div>
            </section>
        )
    }
}

export default Footer;