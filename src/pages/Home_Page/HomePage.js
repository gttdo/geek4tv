import React, {Component} from 'react';

import NavBar from '../../layout/Navbar';
import Featured from './Featured';
import Footer from '../../layout/Footer';

class HomePage extends Component{
    render(){
        return(
            <>
                <NavBar/>
                <Featured/>
                <Footer/>
            </>
        )
    }
}

export default HomePage;