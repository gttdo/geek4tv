import React, {Component} from 'react';

import Snoopy from '../assets/profile/Snoopy_Peanuts.png';

class ArticleInfo extends Component{
    render(){
        return(
            <div className="Article_info">
                <div className="Article_info-writer">
                    <div className="Article_info-writer-pic"><img src={Snoopy}/></div>
                    <p>By <a href="#">Sir Rob O'Tombo</a></p>
                </div>
                <div className="Article_info-updated">
                    <i class="far fa-check-circle"></i>
                    <p>Updated: 21 Oct 2020 6:05 am</p>
                </div>
                <div className="Article_info-posted">
                    <i class="far fa-file-alt"></i>
                    <p>Posted: 21 Oct 2020 6:05 am</p>
                </div>
            </div>
        )
    }
}

export default ArticleInfo;