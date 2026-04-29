import React, { useState, useEffect } from 'react';
import { FaGithub, FaXTwitter } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';
import Terminal from './Terminal';
import '../styles/Header.css';

const Header = ({ onAnimationComplete }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [arrowVisible, setArrowVisible] = useState(false);

    const handleAnimationComplete = () => {
        setIsVisible(true);
        setArrowVisible(true);
        if (onAnimationComplete) onAnimationComplete();
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) setArrowVisible(false);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="header">
            <div className="container">
                <Terminal onAnimationComplete={handleAnimationComplete} />

                <h1 className={`title ${isVisible ? 'visible' : ''}`}>Sohan Bhat</h1>
                <p className={`subtitle ${isVisible ? 'visible' : ''}`}>Building things that work </p>

                <div className={`social-links ${isVisible ? 'visible' : ''}`}>
                    <a
                        href="https://github.com/sohan-bhat"
                        target="_blank"
                        rel="noreferrer"
                        className="social-link"
                        aria-label="GitHub"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://mail.google.com/mail/u/0/?fs=1&to=sohanrambhat@gmail.com&tf=cm"
                        target="_blank"
                        rel="noreferrer"
                        className="social-link"
                        aria-label="Email"
                    >
                        <FcGoogle />
                    </a>
                    <a
                        href="https://x.com/The_Sohan_Bhat"
                        target="_blank"
                        rel="noreferrer"
                        className="social-link"
                        aria-label="X"
                    >
                        <FaXTwitter />
                    </a>
                </div>
            </div>
            <div className={`arrow-down ${arrowVisible ? 'visible' : 'hidden'}`}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
            </div>
        </header>
    );
};

export default Header;
