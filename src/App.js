import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Social from './components/Social';
import Footer from './components/Footer';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <About />
                <Projects />
                <Experience />
                <Social />
            </main>
            <Footer />
        </div>
    );
}

export default App;
