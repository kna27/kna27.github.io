import React from 'react';
import Project from '../components/Project';
import projects from '../Assets/projects.json';

function Projects() {
    return (
        <div>
            <h1>Projects</h1>
            <p>Here are some of the projects that I have created. Anything not listed here is (probably) on my <a href="https://github.com/kna27">GitHub</a>.</p>
            <div>
                {
                    Object.entries(projects).map(([projectName, project]) => {
                        return (
                            <Project
                                title={projectName}
                                description={project.description}
                                year={project.year}
                                tags={project.tags}
                                bgImage={project.bgImage}
                                link={project.link} />
                        );
                    })
                }

            </div>
        </div>
    );
}

export default Projects;
