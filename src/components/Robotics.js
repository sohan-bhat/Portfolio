/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import '../styles/Robotics.css';

const seasons = [
    {
        year: 2026,
        name: 'REBUILT',
        theme: 'FIRST AGE',
        entries: [
            { hash: 'a3f4e92', line: 'REBUILT 2026 — FIRST AGE released by Haas' },
            { hash: '8b2c1d5', type: 'image', src: '/imgs/blue-banner.png', alt: 'Blue banner' },
        ],
    },
    // Template for adding the 2025 REEFSCAPE season later — uncomment and fill in:
    // {
    //     year: 2025,
    //     name: 'REEFSCAPE',
    //     theme: '',
    //     entries: [
    //         { hash: '0000000', line: 'REEFSCAPE 2025 — [result]' },
    //         { hash: '0000000', line: '[milestone]: [description]' },
    //     ],
    // },
];

const Robotics = () => {
    return (
        <section className="robotics">
            <div className="container">
                <h2 className="section-title">Robotics<span className="title-period">.</span></h2>
                <p className="robotics-subtitle">FRC Team 2714</p>

                {/* PLACEHOLDER prose — replace with real role description */}
                <p className="robotics-prose">
                    I'm a programmer on Team 2714, writing Java for the robot. I focus on autonomous
                    routines and vision integration with Limelight™.
                </p>

                <div className="robotics-grid">
                    <div className="robot-photo-slot">
                        <img src="/imgs/robot-2026.jpg" alt="FRC Team 2714 robot at REBUILT 2026" />
                    </div>

                    <div className="robotics-right">
                        <div className="season-log">
                            {seasons.map((season) => (
                                <div className="season" key={season.year}>
                                    <div className="season-prompt-line">
                                        <span className="season-prompt">~$</span>
                                        <span className="season-command">git log --season={season.year} --oneline</span>
                                    </div>
                                    <div className="season-entries">
                                        {season.entries.map((entry) => (
                                            <div
                                                className={`season-entry ${entry.type === 'image' ? 'season-entry-image' : ''}`}
                                                key={entry.hash}
                                            >
                                                <span className="entry-hash">{entry.hash}</span>
                                                {entry.type === 'image' ? (
                                                    <img className="entry-image" src={entry.src} alt={entry.alt} />
                                                ) : (
                                                    <span className="entry-line">{entry.line}</span>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <a
                    className="tba-link"
                    href="https://www.thebluealliance.com/team/2714"
                    target="_blank"
                    rel="noreferrer"
                >
                    view team on The Blue Alliance →
                </a>
            </div>
        </section>
    );
};

export default Robotics;
