import React, {Component} from 'react';

import Sidebar from '../components/Sidebar';
import CardMainContent from '../components/Card-MainContent';

class PageMainContent extends Component{
    render(){
        return(
            <section className="PageContent">
                <div className="PageContent_container">
                    <div className="PageContent_title">
                        <h2 >Page Name</h2>
                    </div>
                    <Sidebar/>
                    <CardMainContent/>
                </div>
            </section>
        )
    }
}

export default PageMainContent;