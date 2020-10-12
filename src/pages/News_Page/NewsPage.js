import React, {Component} from 'react';

import Navbar from '../../layout/Navbar';
import Footer from '../../layout/Footer';
import PageMainContent from '../../layout/PageMainContent';

class NewsPage extends Component{
    render(){
        return(
            <>
                <Navbar/>
                <PageMainContent/>
                <Footer/>
            </>
        )
    }
}

export default NewsPage;