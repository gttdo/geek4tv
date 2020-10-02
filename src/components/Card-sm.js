import React, {Component} from 'react';

import dragon from '../assets/pictures/bone_dragon.jpg';

class CardSm extends Component{
    render(){
        return(
            <div className="card-sm">
                <img src={dragon} className="card-sm_image"/>
                <p className="card-sm_text">Dracolich is a more than powerful form of undead</p>
            </div>
        )
    }
}

export default CardSm;