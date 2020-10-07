import React, {Component} from 'react';

import Sidebar from '../components/Sidebar';

class PageMainContent extends Component{
    render(){
        return(
            <section className="PageContent">
                <div className="PageContent_container">
                    <div className="PageContent_title">
                        <h2 >Page Name</h2>
                    </div>
                    <Sidebar/>
                    <div>Results Card</div>
                </div>
            </section>
        )
    }
}

export default PageMainContent;