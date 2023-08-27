import React from 'react';

function Project(props: { title: string, description: string, year: string, tags: string[], bgImage?: string, link: string }) {
    return (
        <div className="project" style={{ backgroundImage: `url(${props.bgImage})` }}>
            <div className="project-text">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <p>{props.year}</p>
                <p>{props.tags.join(", ")}</p>
                <p><a href={props.link}>View Project</a></p>
            </div>
        </div>
    );
}

export default Project;