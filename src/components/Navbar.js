import React from 'react';


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
                    <a href="/">Home</a>
                </div>
                <div style={linkStyle}>
                    <a href="/about">About</a>
                </div>
                <div style={linkStyle}>
                    <a href="/portfolio">Portfolio</a>
                </div>
                <div style={linkStyle}>
                    <a href="/contact">Contact</a>
                </div>
            </section>
        </nav>
    );
}

