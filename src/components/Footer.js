import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
    const generateRandomBinary = () => {
        return Array.from({ length: 8 })
            .map(() => Math.round(Math.random()))
            .join('');
    };

    // Create an array of evenly spaced positions with some randomness
    const createDistributedPositions = (count) => {
        const positions = [];
        const sectionWidth = 100 / count; // Divide the width into equal sections

        for (let i = 0; i < count; i++) {
            // Position in the middle of each section with a small random offset
            const basePosition = i * sectionWidth;
            const randomOffset = (Math.random() - 0.5) * (sectionWidth * 0.5);
            positions.push(basePosition + randomOffset);
        }

        return positions;
    };

    const lineCount = 30;
    const positions = createDistributedPositions(lineCount);

    return (
        <footer className='footer'>
            <div className='matrix-bg'>
                {positions.map((position, index) => (
                    <div
                        key={index}
                        className='matrix-line'
                        style={{
                            left: `${position}%`,
                            animationDuration: `${8 + Math.random() * 8}s`,
                            opacity: 0.5 + Math.random() * 0.5
                        }}
                    >
                        {generateRandomBinary()}
                    </div>
                ))}
            </div>
            <div className="container">
                <div className="footer-content">
                    <p>© 2025 Sohan Bhat. Crafted with &lt;/&gt; and ♥</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer