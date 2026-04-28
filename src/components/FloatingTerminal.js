import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import '../styles/FloatingTerminal.css';

const CHIPS = ['about', 'projects', 'robotics', 'contact', 'github', 'help'];

const COMMANDS = {
    about: () => [
        'Sohan Bhat — 15, sophomore at Heritage High School (Frisco, TX).',
        'Build full-stack web + Android. FRC Team 2714 programmer (Java).',
        'Currently: VacantCourt iOS port, FRC offseason, makemore reading.',
    ],
    projects: () => [
        'VacantCourt   real-time court availability (Web + Android + Firebase)',
        'Foodify       recipe finder from ingredients you have',
        'CareerAI      AI-powered career recommender',
    ],
    robotics: () => [
        'FRC Team 2714 — programmer, Java.',
        'Just finished REBUILT 2026 (FIRST AGE, presented by Haas).',
        'https://www.thebluealliance.com/team/2714',
    ],
    contact: () => [
        'email:  sohanrambhat@gmail.com',
        'github: https://github.com/sohan-bhat',
    ],
    github: () => ['https://github.com/sohan-bhat'],
    socials: () => [
        'github:  https://github.com/sohan-bhat',
        'x:       https://x.com/The_Sohan_Bhat',
        'email:   sohanrambhat@gmail.com',
    ],
    whoami: () => ['sohan-bhat'],
    help: () => [
        'available commands:',
        '  about      short bio',
        '  projects   list projects',
        '  robotics   FRC 2714 summary',
        '  contact    email + github',
        '  github     github profile',
        '  socials    all social links',
        '  whoami     current user',
        '  clear      clear terminal',
        '  help       this list',
    ],
};

const ALL_COMMANDS = [...Object.keys(COMMANDS), 'clear'].sort();
const WELCOME = 'Type a command or click below.';

const URL_RE = /(https?:\/\/[^\s)]+)|([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})/g;

const renderWithLinks = (text) => {
    const out = [];
    let last = 0;
    let match;
    let key = 0;
    URL_RE.lastIndex = 0;
    while ((match = URL_RE.exec(text)) !== null) {
        if (match.index > last) out.push(text.slice(last, match.index));
        const token = match[0];
        const isEmail = !!match[2];
        out.push(
            <a
                key={`lnk-${key++}`}
                className="ft-link"
                href={isEmail ? `mailto:${token}` : token}
                target={isEmail ? undefined : '_blank'}
                rel="noreferrer"
            >
                {token}
            </a>
        );
        last = match.index + token.length;
    }
    if (last < text.length) out.push(text.slice(last));
    return out.length ? out : text;
};

const FloatingTerminal = ({ isVisible }) => {
    const [open, setOpen] = useState(false);
    const [history, setHistory] = useState([]);
    const [input, setInput] = useState('');
    const bodyRef = useRef(null);
    const inputRef = useRef(null);

    const suggestion = useMemo(() => {
        const q = input.trim().toLowerCase();
        if (!q) return '';
        const match = ALL_COMMANDS.find((c) => c.startsWith(q) && c !== q);
        return match || '';
    }, [input]);

    const ghostSuffix = suggestion ? suggestion.slice(input.length) : '';

    const runCommand = useCallback((rawCmd) => {
        const cmd = rawCmd.trim().toLowerCase();
        if (!cmd) return;

        if (cmd === 'clear') {
            setHistory([]);
            return;
        }

        const handler = COMMANDS[cmd];
        const outputLines = handler
            ? handler()
            : [`command not found: ${cmd}. type 'help' for available commands.`];

        setHistory((prev) => [
            ...prev,
            { type: 'input', content: cmd },
            ...outputLines.map((line) => ({ type: 'output', content: line })),
        ]);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        runCommand(input);
        setInput('');
    };

    const handleChip = (cmd) => {
        runCommand(cmd);
        if (inputRef.current) inputRef.current.focus();
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Tab' && ghostSuffix) {
            e.preventDefault();
            setInput(suggestion);
        } else if (e.key === 'ArrowRight' && ghostSuffix) {
            const el = inputRef.current;
            if (el && el.selectionStart === input.length && el.selectionEnd === input.length) {
                e.preventDefault();
                setInput(suggestion);
            }
        }
    };

    useEffect(() => {
        if (bodyRef.current) {
            bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
        }
    }, [history, open]);

    useEffect(() => {
        if (open && inputRef.current) {
            inputRef.current.focus();
        }
    }, [open]);

    const handleToggle = () => {
        setOpen((v) => !v);
    };

    if (!isVisible) return null;

    return (
        <div className={`float-term ${open ? 'open' : 'closed'}`}>
            {!open && (
                <button
                    className="float-term-toggle"
                    onClick={handleToggle}
                    aria-label="Open terminal"
                >
                    <span className="toggle-icon">&gt;_</span>
                    <span className="toggle-label">terminal</span>
                </button>
            )}

            {open && (
                <div className="float-term-panel" role="dialog" aria-label="CLI mode">
                    <div className="float-term-header">
                        <button
                            className="float-term-close mac-dot"
                            onClick={handleToggle}
                            aria-label="Close terminal"
                        >
                            <span className="mac-dot-x">×</span>
                        </button>
                        <span className="float-term-title">cli mode</span>
                        <span className="float-term-header-spacer" />
                    </div>

                    <div className="float-term-body" ref={bodyRef}>
                        <div className="ft-line ft-welcome">{WELCOME}</div>

                        <div className="ft-chips">
                            {CHIPS.map((c) => (
                                <button
                                    key={c}
                                    className="ft-chip"
                                    onClick={() => handleChip(c)}
                                >
                                    {c}
                                </button>
                            ))}
                        </div>

                        {history.map((item, i) => (
                            <div
                                key={i}
                                className={`ft-line ${item.type === 'input' ? 'ft-input-line' : 'ft-output-line'}`}
                            >
                                {item.type === 'input' ? (
                                    <>
                                        <span className="ft-prompt">~$</span>
                                        <span className="ft-input-text">{item.content}</span>
                                    </>
                                ) : (
                                    <span>{renderWithLinks(item.content)}</span>
                                )}
                            </div>
                        ))}
                    </div>

                    <form className="float-term-input-row" onSubmit={handleSubmit}>
                        <span className="ft-prompt">~$</span>
                        <div className="ft-input-wrap">
                            <div className="ft-input-ghost" aria-hidden="true">
                                <span className="ghost-typed">{input}</span>
                                <span className="ghost-suggestion">{ghostSuffix}</span>
                            </div>
                            <input
                                ref={inputRef}
                                className="float-term-input"
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleKeyDown}
                                spellCheck={false}
                                autoCapitalize="off"
                                autoComplete="off"
                                autoCorrect="off"
                                placeholder={input ? '' : 'type a command…'}
                            />
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default FloatingTerminal;
