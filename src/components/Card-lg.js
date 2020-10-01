import React, {Component} from 'react';

import HillGiant from '../assets/pictures/hillGiant.jpg';

class CardLg extends Component{
    render(){
        return(
            <div className="card-lg">
                <img src={HillGiant} className="card-lg_image"/>
                <div>
                    <a>Hill Giant</a>
                </div>
            </div>
        )
    }
}
export default CardLg;