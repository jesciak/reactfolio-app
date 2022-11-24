import React from 'react';
import './input.css';
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'



export default function App() {
  return (
    <div className="App">
    <Navbar />
    <Home />

  </div>
  );
  }

