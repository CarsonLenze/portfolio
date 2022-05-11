import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import axios from "axios";

export function Projects() {
    const [projectsArray, setProjectsArray] = useState([]);

    useEffect(() => {
        axios.get('https://api.github.com/users/carsonlenze/starred')
        .then(({ data }) => {
            setProjectsArray(data.slice(0, 6));
        })
        .finally(() => {
          // always executed
        });
    }, []);

    return (
        <div id="projects" className="jumbotron jumbotron-fluid bg-transparent m-0">
            {projectsArray.length && (
                <div className="container container-fluid p-5">
                    <h1 className="display-4 pb-5 mb-4 text-center">My Projects</h1>
                    <div className="row mb-1 pb-1">
                        {projectsArray.map((project) => (
                            <ProjectCard key={project.id} id={project.id} value={project} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};