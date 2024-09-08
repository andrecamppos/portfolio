import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaDatabase, FaJava } from 'react-icons/fa';
import './Skills.css';

const skills = [
    { name: 'HTML5', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <FaCss3Alt /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'Java', icon: <FaJava /> },
    { name: 'Databases', icon: <FaDatabase /> },
];

const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <h2>My Skills</h2>
            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-card">
                        <div className="icon-container">{skill.icon}</div>
                        <h3>{skill.name}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
