import React, { useState } from 'react';
import './About.css';
import ContactModal from './ContactModal';

const About = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleResumeClick = () => {
        // Replace with your actual resume link
        window.open('/path-to-your-resume.pdf', '_blank');
    };

    return (
        <section id="about">
            <div className="about-content">
                <img src="/my-image.png" alt="Your Name" className="about-picture" />
                <div className="about-text">
                    <h2>Hey there!</h2>
                    <h2>I am Andre Campos</h2>
                    <p>Having over 10 years of experience in developing and implementing complex software solutions for diverse clients. Proficient in multiple programming languages. Experienced in agile development methodologies, strong communication and problem-solving skills.</p>
                    <div className="about-buttons">
                        <button className="get-in-touch" onClick={handleOpenModal}>
                            Get in Touch!
                        </button>
                        <button className="btn resume-btn" onClick={handleResumeClick}>
                            My Resume
                        </button>
                    </div>
                    {isModalOpen && <ContactModal onClose={handleCloseModal} />}
                </div>
            </div>
        </section>
    );
};

export default About;
