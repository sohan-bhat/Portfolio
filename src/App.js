import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './styles/App.css'

function App() {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    if (!animationComplete) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [animationComplete]);

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };

  return (
    <Router>
        <div className='App'>
            <Header onAnimationComplete={handleAnimationComplete} />
            <Projects />
            <Footer />
        </div>
    </Router>
  );
}

export default App;