import React, {Component} from 'react';

class ArticleFeedback extends Component{
    render(){
        return(
            <div className="Article_feedback">
                <p className="Article_feedback-suggestionBox">
                    Have a tip for us? Want to discuss a possible story? Please send an email to newstips@ign.com.
                    <br/>
                    Sir Rob O'Tombo is a news writer for IGN. You can follow him on Twitter @blahblah and on Twitch.
                </p>
                <div className="Article_feedback-approval">
                    <p>Was this article informative</p>
                    <div>
                        <button>YES</button>
                        <button>NO</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ArticleFeedback;