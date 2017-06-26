import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
    return (
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header" >
                    Catch the Rabbit with React and Redux!
                </div>
                <ul className="nav navbar-nav navbar-right">
                    <li><IndexLink to="/"><span className="glyphicon glyphicon-home"></span> Home</IndexLink></li>
                    <li><Link to="/subscribe"><span className="glyphicon glyphicon-user"></span> Subscribe</Link></li>
                </ul>
            </div>
        </nav>  
    );
};

export default Header;