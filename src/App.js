import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Social from './components/Social';
import Footer from './components/Footer';
import Skills from './components/Skills';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <About />
                <Skills />
                <Projects />
                <Social />
            </main>
            <Footer />
        </div>
    );
}

export default App;
