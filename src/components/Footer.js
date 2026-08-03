import React from 'react';
import { FaGithub, FaXTwitter, FaInstagram } from 'react-icons/fa6';
import '../styles/Footer.css';

const Footer = () => (
    <footer className="footer">
        <div className="container footer-inner">
            <p className="footer-name">© {new Date().getFullYear()} Sohan Bhat</p>
            <div className="footer-links">
                <a href="mailto:sohanrambhat@gmail.com" className="footer-email">
                    sohanrambhat@gmail.com
                </a>
                <div className="footer-icons">
                    <a
                        href="https://github.com/sohan-bhat"
                        target="_blank"
                        rel="noreferrer"
                        className="footer-icon"
                        aria-label="GitHub"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://x.com/The_Sohan_Bhat"
                        target="_blank"
                        rel="noreferrer"
                        className="footer-icon"
                        aria-label="X"
                    >
                        <FaXTwitter />
                    </a>
                    <a
                        href="https://www.instagram.com/thesohanbhat"
                        target="_blank"
                        rel="noreferrer"
                        className="footer-icon"
                        aria-label="Instagram"
                    >
                        <FaInstagram />
                    </a>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
