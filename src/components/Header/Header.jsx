import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <div>
            <h1>This is Header components</h1>
            <nav>
                <ActiveLink to="/">Home</ActiveLink>
                <ActiveLink to="/about">About</ActiveLink>
                {/* <Link to="/friends">Friends</Link> */}
                <ActiveLink to="/friends">Friends</ActiveLink>
                <Link to='/posts'>Posts</Link>
                <Link to="/services">Services</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </div>
    );
};

export default Header;