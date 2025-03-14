/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react'
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
            <Terminal onAnimationComplete={handleAnimationComplete}/>

            <h1 className={`title ${isVisible ? 'visible': ''}`}>Sohan Bhat</h1>
            <p className={`subtitle ${isVisible ? 'visible': ''}`}>Full Stack Developer</p>

            <div className={`social-links ${isVisible ? 'visible' : ''}`}>
                <a href='https://github.com/sohan-bhat' className='social-link'>
                    <FaGithub />
                </a>
                <a href='#' className='social-link'>
                    <FaLinkedin />
                </a>
                <a href='https://x.com/The_Sohan_Bhat' className='social-link'>
                    <FaTwitter />
                </a>
                <a href='#' className='social-link'>
                    <FaInstagram />
                </a>
            </div>
        </div>
    </header>
  )
}

export default Header