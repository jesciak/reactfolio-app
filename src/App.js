import React from 'react';
import './input.css';
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


export default function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/about" element={<About />}/>
        <Route exact path="/contact" element={<Contact />}/>
        <Route exact path="/portfolio" element={<Portfolio />}/>
        

      </Routes>
    </BrowserRouter>

  );
}

