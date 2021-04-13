import React from 'react';
import { Link } from 'react-router-dom';
import './Project.css';

const Project = () => {
    return(
        <>
            <div className="projects">
                <div className="project">
                    <p className="project_para">
This are all the Projects on which I have been working on till date. All these projects are been showcased here to show the amount on skills I have earned around all this time!!!</p>
                    <Link to="/projects" className="project_border">
                    <span className="font">PROJECTS </span> 
                    </Link>
                </div>
                <div className="certificate">
                    <Link to="/certificates" className="project_border">
                    <span className="font">CERTIFICATES </span> 
                    </Link>
                    <p className="project_para">
                        I have been working around these past years building some skills which can become helpful for me. I have studied around some multiple courses , I have presented some of those Certificates which I have earned!!!!
                    
                    </p>
                </div>
            </div>
        </>
    );
}

export default Project;