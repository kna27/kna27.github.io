import React from 'react';

function Home() {
    return (
        <div>
            <h1>Hi, I'm Krish!</h1>
            <code>&#62; whoami</code>
            <pre>
                <code>
                    <p>Developer. Designer. CTF Player.</p>
                    <p>Computer Science student at the Bergen County Academies</p>
                </code>
            </pre>
            <code>&#62; cat contact.txt</code>
            <pre>
                <code>
                    <a href="https://github.com/kna27">GitHub</a>
                    <a href="https://www.linkedin.com/in/krisharora27/">LinkedIn</a>
                    <a href="mailto:krisharora27@gmail.com">Email (krisharora27@gmail.com)</a>
                </code>
            </pre>


            <p>Check out some of my <a href="/projects">projects</a>!</p>
        </div>
    );
}

export default Home;
