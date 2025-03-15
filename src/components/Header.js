/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa'
import Terminal from './Terminal';
import '../styles/Header.css';

const Header = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleAnimationComplete = () => {
        setIsVisible(true);
    }

    return (
        <header className='header'>
            <div className='container'>
                <Terminal onAnimationComplete={handleAnimationComplete} />

                <h1 className={`title ${isVisible ? 'visible' : ''}`}>Sohan Bhat</h1>
                <p className={`subtitle ${isVisible ? 'visible' : ''}`}>Full Stack Developer</p>

                <div className={`social-links ${isVisible ? 'visible' : ''}`}>
                    <a href='https://github.com/sohan-bhat' target='_blank' className='social-link' rel="noreferrer">
                        <FaGithub />
                    </a>
                    <a href='#' className='social-link' target='_blank'>
                        <FaLinkedin />
                    </a>
                    <a href='https://x.com/The_Sohan_Bhat' target='_blank' className='social-link' rel="noreferrer">
                        <FaTwitter />
                    </a>
                    <a href='#' className='social-link' target='_blank' rel="noreferrer">
                        <FaInstagram />
                    </a>
                </div>
                <div className={`arrow-down ${isVisible ? 'visible' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 5v14M5 12l7 7 7-7"></path>
                    </svg>
                </div>
            </div>
        </header>
    )
}

export default Header