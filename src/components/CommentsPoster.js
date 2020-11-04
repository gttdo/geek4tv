import React, {Component} from 'react';
import LabelTab from './label_tab';

class Comments extends Component{
    render(){
        return(
            <div className="Article_comments Comments">
                <h3 className="Article_comments_sectionHeader">Comments</h3>
                <div className="Article_comments_label">
                    <LabelTab/>
                </div>
                <p className="Article_comments_note">
                    <a>Comment Guidelines:</a> Have fun. Don't be mean. Feel free to criticize ideas, not people.
                    <br/>
                    Report bad behavior: <a id="guidelines">Read our community guidelines.</a>
                </p>
                <form className="Article_comments_form">
                    <input placeholder="Post a comment" className="Article_comments_input"/>
                    <button className="Article_comments_button">Post</button>
                </form>
            </div>
        )
    }
}

export default Comments;