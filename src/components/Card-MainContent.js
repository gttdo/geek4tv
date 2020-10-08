import React, {Component} from 'react';

import redDragon from '../assets/pictures/red_dragon.jpg'

class CardMainContent extends Component{
    render(){
        return(
            <div className="resultsCard">
                <div className="resultsCard_imageContainer">
                    <img src={redDragon} className="resultsCard_image"/>
                </div>
                <div className="resultsCard_text">
                    <p className="resultsCard_timePosted">1h - <i class="far fa-comment"></i> 3</p>
                    <p className="resultsCard_postDesc">Lorem Ipsum</p>
                </div>
            </div>
        )
    }
}

export default CardMainContent;