import React, { Component } from 'react';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

import Hero from './components/Hero';
import Experience from './components/Experience';
import Contact from './components/Contact';
//import logo from './logo.svg';
import './App.css';

class App extends Component {

    render() {

        return (
            <div className="App">
                <Navbar />
                <Hero />
                <Contact />
                <Experience />
                <Footer />
            </div>
        );
    }
}

export default App;
