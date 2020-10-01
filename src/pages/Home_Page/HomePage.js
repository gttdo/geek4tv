import React, {Component} from 'react';

import NavBar from '../../layout/Navbar';
import Featured from './Featured';

class HomePage extends Component{
    render(){
        return(
            <>
                <NavBar/>
                <Featured/>
            </>
        )
    }
}

export default HomePage;