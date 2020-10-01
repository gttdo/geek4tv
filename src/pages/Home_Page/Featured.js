import React, {Component} from 'react';

import CardLg from "../../components/Card-lg";

class Featured extends Component{
    render(){
        return(
            <section className="featured-section">
                <div className="featured-section_card-1"><CardLg/></div>
                <div className="featured-section_card-2"><CardLg/></div>
                <div className="featured-section_card-3"><CardLg/></div>
                <div className="featured-section_card-4"><CardLg/></div>
            </section>
        )
    }
}

export default Featured;