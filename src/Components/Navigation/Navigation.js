import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    const [ post, setPost ] = useState(null);
    const submit = () => {
        setPost(!post)
    }
    return(
        <>
            <div className="toggleButton"><a onClick={submit}><div></div><div></div><div></div></a></div>

            <div className="nav_sub" id={ post ? "hidden" : ""}>       
                <Link to="/" onClick={submit}>Home</Link>
                <Link to="/projects" onClick={submit}>Projects</Link>
                <Link to="/certificate" onClick={submit}>Certificates</Link>
                <a href="https://twitter.com/AbhijithNair27">Twitter</a>
                <a href="https://www.linkedin.com/in/abhijithnair27/">LinkedIn</a>
                <a href="https://github.com/abhijithnair27">GitHub</a>
                <a href="https://www.facebook.com/abhijith.nair.3150807/">Facebook</a>
                <a href="https://www.instagram.com/abhi.___.13/">Instagram</a>
            </div>                            
        </>
    );
}

export default Navigation;