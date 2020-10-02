import React, {Component} from 'react';

import CardSm from '../../components/Card-sm';

class TopStories extends Component{
    render(){
        return(
            <div className="top-stories">
                <div className="top-stories_container">
                    <h3 className="top-stories_header">Today's Top Stories</h3>
                    <div className="top-stories_card-1"><CardSm/></div>
                    <div className="top-stories_card-2"><CardSm/></div>
                    <div className="top-stories_card-3"><CardSm/></div>
                    <div className="top-stories_card-4"><CardSm/></div>
                </div>
            </div>
        )
    }
}

export default TopStories;