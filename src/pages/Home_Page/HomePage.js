import React, {Component} from 'react';

import NavBar from '../../layout/Navbar';
import Featured from './Featured';
import TopStories from './TopStories';
import PageMainContent from '../../layout/PageMainContent';
import Footer from '../../layout/Footer';


class HomePage extends Component{
    render(){
        return(
            <main className="homepage">
                <NavBar/>
                <Featured/>
                <TopStories/>
                <PageMainContent/>
                <Footer/>
            </main>
        )
    }
}

export default HomePage;