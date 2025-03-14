import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './styles/App.css'

function App() {
  return (
    <Router>
        <div className='App'>
            <Header />
            <Projects />
            <Footer />
        </div>
    </Router>
  );
}

export default App;