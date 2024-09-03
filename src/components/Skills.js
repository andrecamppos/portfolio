import React from 'react';
import './Skills.css';

const Skills = () => {
    return (
        <section id="skills">
            <h2>Skills</h2>
            <div className="skills-container">
                <div className="skill-item">
                    <h3>Frontend Development</h3>
                    <p>React, JavaScript, HTML, CSS</p>
                </div>
                <div className="skill-item">
                    <h3>Backend Development</h3>
                    <p>Node.js, Express, MongoDB, SQL</p>
                </div>
                <div className="skill-item">
                    <h3>Tools & Technologies</h3>
                    <p>Git, Docker, Webpack, Babel</p>
                </div>
                <div className="skill-item">
                    <h3>Other Skills</h3>
                    <p>Problem Solving, Teamwork, Agile Methodologies</p>
                </div>
            </div>
        </section>
    );
};

export default Skills;
