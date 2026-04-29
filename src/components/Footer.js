import React from 'react';
import { FaGithub, FaEnvelope } from 'react-icons/fa6';
import '../styles/Footer.css';

const LINE_COUNT = 30;

const randomBinary = () =>
    Array.from({ length: 8 }, () => Math.round(Math.random())).join('');

const computePositions = (count) => {
    const sectionWidth = 100 / count;
    return Array.from({ length: count }, (_, i) =>
        i * sectionWidth + (Math.random() - 0.5) * sectionWidth * 0.5
    );
};

const Footer = () => {
    const positions = computePositions(LINE_COUNT);

    return (
        <footer className="footer">
            <div className="matrix-bg">
                {positions.map((position, index) => (
                    <div
                        key={index}
                        className="matrix-line"
                        style={{
                            left: `${position}%`,
                            animationDuration: `${8 + Math.random() * 8}s`,
                            opacity: 0.5 + Math.random() * 0.5
                        }}
                    >
                        {randomBinary()}
                    </div>
                ))}
            </div>
            <div className="container">
                <div className="footer-content">
                    <div className="footer-links">
                        <a
                            href="mailto:sohanrambhat@gmail.com"
                            className="footer-link"
                            aria-label="Email"
                        >
                            <FaEnvelope />
                            <span>sohanrambhat@gmail.com</span>
                        </a>
                        <a
                            href="https://github.com/sohan-bhat"
                            target="_blank"
                            rel="noreferrer"
                            className="footer-link"
                            aria-label="GitHub"
                        >
                            <FaGithub />
                            <span>github.com/sohan-bhat</span>
                        </a>
                    </div>
                    <p>© 2025 Sohan Bhat. Crafted with &lt;/&gt; and ♥</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
