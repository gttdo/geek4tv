import React, {Component} from 'react';

class Sidebar extends Component{
    render(){
        return(
            <nav className="sidebar">
                <ul className="sidebar_list">
                    <li className="sidebar_item"><i class="far fa-clock"></i> Latest</li>
                    <li className="sidebar_item"><i class="fas fa-desktop"></i> PC</li>
                    <li className="sidebar_item"><i class="fas fa-gamepad"></i> Games</li>
                    <li className="sidebar_item"><i class="fas fa-tv"></i> TV</li>
                    <li className="sidebar_item"><i class="fab fa-twitch"></i> Twitch</li>
                </ul>
            </nav>
        )
    }
}

export default Sidebar;