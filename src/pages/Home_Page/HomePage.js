import React, {Component} from 'react';

import Featured from './Featured';
import TopStories from './TopStories';
import PageMainContent from '../../layout/PageMainContent';


class HomePage extends Component{
    render(){
        return(
            <main className="homepage">
                <Featured/>
                <TopStories/>
                <PageMainContent/>
            </main>
        )
    }
}

export default HomePage;