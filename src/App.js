import React from 'react';

import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'



export default function App() {
  return (
    <main className="text-tan-300 bg-brown-800 body-font">
    <Navbar/>
    <Home/>
    <About/>
    <Portfolio/>
    <Contact/>
    <Footer/>

  </main>
  );
  }

