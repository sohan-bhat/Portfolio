import React, { useState, useEffect, useMemo } from 'react';
import '../styles/Terminal.css';

const Terminal = ({ onAnimationComplete }) => {
    const [commandIndex, setCommandIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [displayedOutput, setDisplayedOutput] = useState([]);

    const terminalData = useMemo(() => [
        { prompt: "~$", command: "whoami", output: "sohan-bhat@portfolio:~$" },
        { prompt: "~$", command: "cat skills.txt", output: "Java | TypeScript | Kotlin | Python | React" },
        { prompt: "~$", command: "sudo getstarted.exe", output: "Welcome! Learn more about me and what I do!" },
    ], []);

    useEffect(() => {
        if (commandIndex >= terminalData.length) {
            if (onAnimationComplete) onAnimationComplete();
            return;
        }

        const currentCommand = terminalData[commandIndex].command;

        if (charIndex < currentCommand.length) {
            const timer = setTimeout(() => setCharIndex(charIndex + 1), 55);
            return () => clearTimeout(timer);
        }

        if (terminalData[commandIndex].output) {
            const outputTimer = setTimeout(() => {
                setDisplayedOutput([...displayedOutput, commandIndex]);
                setCommandIndex(commandIndex + 1);
                setCharIndex(0);
            }, 200);
            return () => clearTimeout(outputTimer);
        }
    }, [commandIndex, charIndex, displayedOutput, terminalData, onAnimationComplete]);

    return (
        <div className="terminal-window">
            <div className="terminal-header">
                <div className="terminal-button"></div>
                <div className="terminal-button"></div>
                <div className="terminal-button"></div>
            </div>
            <div className="terminal-body">
                {terminalData.map((line, index) => (
                    <React.Fragment key={index}>
                        {index <= commandIndex && (
                            <div className="terminal-line">
                                <span className="terminal-prompt">{line.prompt}</span>
                                <span className={`terminal-command ${index === commandIndex ? 'typing' : ''}`}>
                                    {index === commandIndex ? line.command.substring(0, charIndex) : line.command}
                                </span>
                            </div>
                        )}
                        {line.output && displayedOutput.includes(index) && (
                            <div className="terminal-line">
                                <span className="terminal-output">{line.output}</span>
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default Terminal;
