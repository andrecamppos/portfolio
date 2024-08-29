import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header>
            <h1>Your Name</h1>
            <nav>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#social">Social</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
