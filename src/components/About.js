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

    return (
        <section id="about">
            <div className="about-content">
                <img src="/my-image.png" alt="Your Name" className="about-picture" />
                <div className="about-text">
                    <h2>Hey there!</h2>
                    <h2>I'm Andre Campos</h2>
                    <p>Brief introduction about yourself.</p>
                    <button className="get-in-touch" onClick={handleOpenModal}>
                        Get in Touch!
                    </button>
                    {isModalOpen && <ContactModal onClose={handleCloseModal} />}
                </div>
            </div>
        </section>
    );
};

export default About;
