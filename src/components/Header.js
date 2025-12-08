/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin, FaXTwitter, FaGoogle } from 'react-icons/fa6'
import Terminal from './Terminal';
import '../styles/Header.css';

const Header = ({ onAnimationComplete }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [arrowVisible, setArrowVisible] = useState(false);

    const handleAnimationComplete = () => {
        setIsVisible(true);
        setArrowVisible(true);
        if (onAnimationComplete) {
            onAnimationComplete();
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setArrowVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
                    <a href='https://mail.google.com/mail/u/0/?fs=1&to=sohanrambhat@gmail.com&tf=cm' className='social-link' target='_blank' rel="noreferrer">
                        <FaGoogle />
                    </a>
                    <a href='#' className='social-link'>
                        <FaLinkedin />
                    </a>
                    <a href='https://x.com/The_Sohan_Bhat' target='_blank' className='social-link' rel="noreferrer">
                        <FaXTwitter />
                    </a>
                </div>
            </div>
            <div className={`arrow-down ${arrowVisible ? 'visible' : 'hidden'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 5v14M5 12l7 7 7-7"></path>
                </svg>
            </div>
        </header>
    )
}

export default Header
