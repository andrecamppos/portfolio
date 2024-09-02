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
    },
    {
        title: "Project 3",
        description: "Description of project 3",
        link: "#"
    },
    {
        title: "Project 4",
        description: "Description of project 4",
        link: "#"
    }
];

const Projects = () => {
    return (
        <section id="projects">
            <h2>Projects</h2>
            <div className="container">
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <a href={project.link}>View Project</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
