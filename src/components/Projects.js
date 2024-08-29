import React from 'react';
import './Projects.css';

const projects = [
    {
        title: "Project 1",
        description: "Description of project 1",
        link: "#"
    },
    {
        title: "Project 2",
        description: "Description of project 2",
        link: "#"
    }
];

const Projects = () => {
    return (
        <section id="projects">
            <h2>Projects</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link}>View Project</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
