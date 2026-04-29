import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Robotics from './components/Robotics';
import Footer from './components/Footer';
import FloatingTerminal from './components/FloatingTerminal';
import './styles/App.css';

function App() {
    const [animationComplete, setAnimationComplete] = useState(false);

    useEffect(() => {
        document.body.style.overflow = animationComplete ? '' : 'hidden';
        return () => {
            document.body.style.overflow = '';
        };
    }, [animationComplete]);

    return (
        <Router>
            <div className="App">
                <Header onAnimationComplete={() => setAnimationComplete(true)} />
                <About />
                <Projects />
                <Robotics />
                <Footer />
                <FloatingTerminal isVisible={animationComplete} />
            </div>
        </Router>
    );
}

export default App;
