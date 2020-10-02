import React, {Component} from 'react';

import NavBar from '../../layout/Navbar';
import Featured from './Featured';
import TopStories from './TopStories';
import Footer from '../../layout/Footer';

class HomePage extends Component{
    render(){
        return(
            <main className="homepage">
                <NavBar/>
                <Featured/>
                <TopStories/>
                <Footer/>
            </main>
        )
    }
}

export default HomePage;