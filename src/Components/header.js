import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className="ui inverted menu">
            <Link to="/" className="item">Chainyard <i className="linkify icon"></i></Link>
            <div className="right menu">
                <Link to="/" className="item">Today's Block </Link>
                <Link to="/latestblock" className="item">Latest Block </Link>
            </div>
        </div>
    )
}

export default Header;