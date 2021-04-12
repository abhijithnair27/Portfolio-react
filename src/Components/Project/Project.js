import React from 'react';
import './Project.css';

const Project = () => {
    return(
        <>
            <div className="projects">
                <div className="project">
                    <p className="project_para"></p>
                    <div className="project_border">
                       <span className="font">PROJECTS </span> 
                    </div>
                </div>
                <div className="certificate">
                    <div className="project_border">
                       <span className="font">CERTIFICATES</span> 

                    </div>
                    <p className="project_para"></p>
                </div>
            </div>
        </>
    );
}

export default Project;