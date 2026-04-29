import React from 'react';
import '../styles/About.css';

const About = () => {
    const processes = [
        { pid: '1247', cpu: '45%', command: 'building VacantCourt iOS port' },
        { pid: '1248', cpu: '30%', command: 'FRC offseason — swerve drive tuning' },
        { pid: '1249', cpu: '15%', command: "reading Karpathy's makemore series" },
        { pid: '1250', cpu: '5%',  command: 'AP CS A' },
    ];

    return (
        <section className="about">
            <div className="container">
                <h2 className="section-title">About<span className="title-period">.</span></h2>

                <div className="about-prose">
                    <p>
                        I'm Sohan, a 15-year-old sophomore at Heritage High School in Frisco, TX.
                        I build full-stack web apps and Android tools.
                    </p>
                    <p>
                        I program for FRC Team 2714 in Java. Just finished the REBUILT 2026 season
                        (FIRST AGE, presented by Haas) and I'm spending the offseason getting deeper
                        into vision and autonomous routines.
                    </p>
                    <p>
                        Outside of school and robotics, I'm usually shipping side projects, reading
                        about ML internals, or breaking and fixing my own setup.
                    </p>
                </div>

                <div className="currently-block" aria-label="Currently working on">
                    <div className="currently-prompt-line">
                        <span className="currently-prompt">~$</span>
                        <span className="currently-command">ps aux --user=sohan</span>
                    </div>
                    <div className="currently-table">
                        <div className="currently-row currently-header-row">
                            <span className="col-pid">PID</span>
                            <span className="col-cpu">%CPU</span>
                            <span className="col-cmd">COMMAND</span>
                        </div>
                        {processes.map((p) => (
                            <div className="currently-row" key={p.pid}>
                                <span className="col-pid">{p.pid}</span>
                                <span className="col-cpu">{p.cpu}</span>
                                <span className="col-cmd">{p.command}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
