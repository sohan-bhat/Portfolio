import React from 'react';
import '../styles/About.css';

const About = () => (
    <section className="about">
        <div className="container">
            <div className="about-layout">
                <div className="about-col">
                    <h2 className="section-title">About<span className="title-period">.</span></h2>
                    <div className="about-prose">
                        <p>
                            I'm 15 studying as a  sophomore at Heritage High School in Frisco, TX.
                        </p>
                        <p>
                            I build ML systems from scratch to understand what's under the frameworks.
                            Most recently: SignNet, a convolutional neural network written entirely in
                            NumPy (no PyTorch, no autograd) that classifies German traffic signs at 90%
                            accuracy, with a live browser demo. Before that, a scalar autograd engine.
                            Currently starting a research project on detecting silent training failures,
                            because of a bug in SignNet that lost me weeks.
                        </p>
                        <p>
                            I program for FRC Team 2714 in Java, heading into the season focused on
                            vision and autonomous. I'm also training for USACO Bronze in C++.
                        </p>
                        <p>
                            Outside of that, I have a hobby in soccer and tennis while also loving to spend time hiking with my family.
                        </p>
                    </div>
                </div>

                <aside className="research-col" aria-label="Current research">
                    <h2 className="section-title">Research<span className="title-period">.</span></h2>
                    <article className="research-entry">
                        <h3 className="research-paper-title">
                            Early detection of silent training failures in neural networks
                        </h3>
                        <p className="research-meta">Sohan Bhat · working draft, 2026</p>
                        <p className="research-description">
                            The network trains, the loss falls, and the model is still wrong.
                            Studying how these failures slip through unnoticed and how to catch
                            them early.
                        </p>
                        <a
                            className="research-link"
                            href="https://docs.google.com/document/d/1m9FRd58Kw7oxOFHpu17VgfbktLi-XrZAXAe1FFqH_d8/edit?usp=sharing"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Read the draft ↗
                        </a>
                    </article>
                </aside>
            </div>
        </div>
    </section>
);

export default About;
