import React from 'react';

function Header() {
    return (
        <div>
            <header>
                <p>Krish Arora</p>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/projects">Projects</a></li>
                    <li><a href="/resume">Resume</a></li>
                </ul>
            </header>
        </div>
    );
}

export default Header;