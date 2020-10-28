import React, {Component} from 'react';
import frostmaiden from '../../src/assets/pictures/frostmaiden.jpg'

import ArticleInfo from '../components/Article-info';
import ArticleFeedback from '../components/Article-feedback';
import CommentsPoster from '../components/CommentsPoster';

class Article extends Component{
    render(){
        return(
            <section className="Article">
                <div className="Article_container">
                    <h1 className="Article_title">This is a new article</h1>
                    <h4 className="Article_subtitle">This is a subtitle</h4>
                    <div className="Article_featured"><img src={frostmaiden} className="Article_featured_image"/></div>
                    <ArticleInfo/>
                    <p className="Article_description">
                        Ability modifier animal type automatic hit deal damage good domain lethal damage low-light vision nauseated nobility domain ocean domain rebuke undead reflex save saving throw speed standard action threaten travel domain turn turning damage two-handed weapon unconscious.
                        <br/>
                        <br/>
                        Armor bonus class skill dispel check dodge bonus enhancement bonus fighter fire domain initiative count intelligence large massive damage outer plane petrified poison spell slot strength domain take 10 time domain trickery domain untrained.
                        <br/>
                        <br/>
                        Ability check charm concealment earth subtype fighter fire domain paralyzed range penalty rebuke undead rounding spell slot subject telepathy turning check vulnerability to energy. Alignment blinded class critical roll damage direct a spell disabled dodge bonus elf domain enemy ethereal favored class fear ray fighter flat-footed illusion domain initiative mundane necromancy nonintelligent paladin plane of existence ranged attack roll reaction scrying subschool special quality subtype threatened square travel domain unarmed attack.
                    </p>
                </div>
                <ArticleFeedback/>
                <CommentsPoster/>
            </section>
        )
    }
}

export default Article;