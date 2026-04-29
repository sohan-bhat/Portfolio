import React, { useEffect, useRef, useState } from 'react';
import '../styles/Robotics.css';

const seasons = [
    {
        year: 2025,
        name: 'REEFSCAPE',
        theme: '',
        logo: { src: '/imgs/seasons/reefscape-logo.png', alt: 'REEFSCAPE logo' },
        photo: { src: '/imgs/robot-2025.jpg', alt: 'FRC Team 2714 robot at REEFSCAPE 2025' },
        entries: [
            { hash: '0a1b2c3', line: 'REEFSCAPE 2025 — Winner, Fort Worth District' },
            { hash: '7d8e9f0', type: 'image', src: '/imgs/banner-2025-fortworth.png', alt: 'Winner — 2025 Fort Worth District' },
        ],
    },
    {
        year: 2026,
        name: 'REBUILT',
        theme: 'FIRST AGE',
        logo: { src: '/imgs/seasons/first-age-logo.webp', alt: 'FIRST AGE logo' },
        photo: { src: '/imgs/robot-2026.jpg', alt: 'FRC Team 2714 robot at REBUILT 2026' },
        entries: [
            { hash: 'a3f4e92', line: 'REBUILT 2026 — FIRST AGE released by Haas' },
            { hash: '8b2c1d5', type: 'image', src: '/imgs/blue-banner.png', alt: 'Blue banner' },
        ],
    },
];

const SeasonImage = ({ src, alt, fallback, imgClassName, onLoad }) => {
    const [broken, setBroken] = useState(false);

    useEffect(() => {
        setBroken(false);
    }, [src]);

    if (broken) {
        return <span className="image-fallback">{fallback}</span>;
    }

    return (
        <img
            className={imgClassName}
            src={src}
            alt={alt}
            onLoad={onLoad}
            onError={() => setBroken(true)}
        />
    );
};

const DEFAULT_PHOTO_RATIO = 3 / 4;

const ANIM_DURATION = 320;

const easeOutBack = (t) => {
    const c1 = 1.70158;
    const c3 = c1 + 1;
    return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
};

const SNAP_DEBOUNCE_MS = 140;

const Robotics = () => {
    const [sliderPos, setSliderPos] = useState(seasons.length - 1);
    const [photoRatio, setPhotoRatio] = useState(DEFAULT_PHOTO_RATIO);
    const animRef = useRef(null);
    const snapTimerRef = useRef(null);
    const sliderPosRef = useRef(sliderPos);
    const draggingRef = useRef(false);
    const snapToNearestRef = useRef(() => {});

    sliderPosRef.current = sliderPos;

    const seasonIndex = Math.round(sliderPos);
    const selected = seasons[seasonIndex];

    useEffect(() => {
        setPhotoRatio(DEFAULT_PHOTO_RATIO);
    }, [selected.photo.src]);

    const handlePhotoLoad = (e) => {
        const w = e.target.naturalWidth;
        const h = e.target.naturalHeight;
        if (w && h) setPhotoRatio(w / h);
    };

    const stopAnim = () => {
        if (animRef.current) {
            cancelAnimationFrame(animRef.current);
            animRef.current = null;
        }
    };

    const clearSnapTimer = () => {
        if (snapTimerRef.current) {
            clearTimeout(snapTimerRef.current);
            snapTimerRef.current = null;
        }
    };

    const snapToNearest = () => {
        clearSnapTimer();
        const pos = sliderPosRef.current;
        const target = Math.round(pos);
        if (Math.abs(pos - target) > 0.001) {
            animateTo(target);
        }
    };

    snapToNearestRef.current = snapToNearest;

    const scheduleSnap = () => {
        clearSnapTimer();
        snapTimerRef.current = setTimeout(() => snapToNearestRef.current(), SNAP_DEBOUNCE_MS);
    };

    const animateTo = (target) => {
        stopAnim();
        const start = sliderPosRef.current;
        if (Math.abs(target - start) < 0.001) return;
        const startTime = performance.now();
        const tick = (now) => {
            const t = Math.min(1, (now - startTime) / ANIM_DURATION);
            const eased = easeOutBack(t);
            setSliderPos(start + (target - start) * eased);
            if (t < 1) {
                animRef.current = requestAnimationFrame(tick);
            } else {
                animRef.current = null;
            }
        };
        animRef.current = requestAnimationFrame(tick);
    };

    useEffect(() => {
        const onWindowPointerUp = () => {
            if (draggingRef.current) {
                draggingRef.current = false;
                snapToNearestRef.current();
            }
        };
        window.addEventListener('pointerup', onWindowPointerUp);
        window.addEventListener('pointercancel', onWindowPointerUp);
        return () => {
            window.removeEventListener('pointerup', onWindowPointerUp);
            window.removeEventListener('pointercancel', onWindowPointerUp);
            if (animRef.current) cancelAnimationFrame(animRef.current);
            if (snapTimerRef.current) clearTimeout(snapTimerRef.current);
        };
    }, []);

    const handleSliderChange = (e) => {
        stopAnim();
        setSliderPos(Number(e.target.value));
        scheduleSnap();
    };

    const handlePointerDown = () => {
        draggingRef.current = true;
        clearSnapTimer();
    };

    const handlePointerRelease = () => {
        draggingRef.current = false;
        snapToNearest();
    };

    const handleSliderKeyDown = (e) => {
        if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
            e.preventDefault();
            const target = Math.max(0, Math.round(sliderPosRef.current) - 1);
            animateTo(target);
        } else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
            e.preventDefault();
            const target = Math.min(seasons.length - 1, Math.round(sliderPosRef.current) + 1);
            animateTo(target);
        } else if (e.key === 'Home') {
            e.preventDefault();
            animateTo(0);
        } else if (e.key === 'End') {
            e.preventDefault();
            animateTo(seasons.length - 1);
        }
    };

    return (
        <section className="robotics">
            <div className="container">
                <h2 className="section-title">Robotics<span className="title-period">.</span></h2>
                <p className="robotics-subtitle">FRC Team 2714</p>

                <p className="robotics-prose">
                    I'm a programmer on Team 2714, writing Java for the robot. I focus on autonomous
                    routines and vision integration with Limelight™.
                </p>

                <div className="season-slider-wrap">
                    <div className="season-slider-labels">
                        {seasons.map((s, i) => (
                            <button
                                key={s.year}
                                type="button"
                                className={`season-tick ${i === seasonIndex ? 'active' : ''}`}
                                onClick={() => animateTo(i)}
                            >
                                <span className="tick-year">{s.year}</span>
                                <span className="tick-name">{s.name}</span>
                            </button>
                        ))}
                    </div>
                    <input
                        type="range"
                        min={0}
                        max={seasons.length - 1}
                        step="any"
                        value={sliderPos}
                        onChange={handleSliderChange}
                        onPointerDown={handlePointerDown}
                        onPointerUp={handlePointerRelease}
                        onPointerCancel={handlePointerRelease}
                        onBlur={handlePointerRelease}
                        onKeyDown={handleSliderKeyDown}
                        className="season-slider"
                        aria-label="Select season"
                        aria-valuemin={0}
                        aria-valuemax={seasons.length - 1}
                        aria-valuenow={seasonIndex}
                        aria-valuetext={`${selected.year} ${selected.name}`}
                    />
                </div>

                <div className="robotics-grid" key={seasonIndex}>
                    <div
                        className="robot-photo-slot"
                        style={{ aspectRatio: photoRatio }}
                    >
                        <SeasonImage
                            src={selected.photo.src}
                            alt={selected.photo.alt}
                            fallback={`robot photo — ${selected.year}`}
                            onLoad={handlePhotoLoad}
                        />
                    </div>

                    <div className="robotics-right">
                        <div className="season-header-row">
                            <div className="season-logo-slot">
                                <SeasonImage
                                    src={selected.logo.src}
                                    alt={selected.logo.alt}
                                    fallback={`${selected.name} logo`}
                                />
                            </div>
                            <div className="season-meta">
                                <span className="season-meta-year">{selected.year}</span>
                                <span className="season-meta-name">
                                    {selected.name}
                                    {selected.theme ? ` · ${selected.theme}` : ''}
                                </span>
                            </div>
                        </div>

                        <div className="season-log">
                            <div className="season">
                                <div className="season-prompt-line">
                                    <span className="season-prompt">~$</span>
                                    <span className="season-command">git log --season={selected.year} --oneline</span>
                                </div>
                                <div className="season-entries">
                                    {selected.entries.map((entry) => (
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
