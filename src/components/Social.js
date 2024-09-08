import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Import icons
import './Social.css';

const Social = () => {
    return (
        <section id="social">
            <h2>Social</h2>
            <div className="social-icons">
                <a href="https://github.com/andrecamppos" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="icon github-icon" /> {/* GitHub Icon */}
                </a>
                <a href="https://linkedin.com/in/andrecamppos" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="icon linkedin-icon" /> {/* LinkedIn Icon */}
                </a>
            </div>
        </section>
    );
};

export default Social;
