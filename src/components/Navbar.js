import React from 'react';
import { NavLink } from 'react-router-dom'


export default function Navbar() {
    const linkStyle = { border: '2px tan', padding: '5px' };
    return (

        
        <nav className="main-header-menu">
            <section style={{
                display: 'flex',
                fontFamily: 'arial',
                flexDirection: 'row',
                alignItems: 'flex-start',
                justifyContent: 'flex-start'
            }}
            >
                <div style={linkStyle}>
                    <NavLink to="/">Home</NavLink>
                </div>
                <div style={linkStyle}>
                    <NavLink to="/about">About</NavLink>
                </div>
                <div style={linkStyle}>
                    <NavLink to="/portfolio">Portfolio</NavLink>
                </div>
                <div style={linkStyle}>
                    <NavLink to="/contact">Contact</NavLink>
                </div>
            </section>
        </nav>
    );
}

