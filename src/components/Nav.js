import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="nav">
            <Link to="/forms">Forms</Link>
            <Link to="/sheets">Sheets</Link>
            <Link to="/about">About</Link>
        </div>
    )
}

export default Nav;