import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from '../Cert/Card/Card';
import './Pro.css';


const Pro = () => {
    return (
        
        <>
            <div className="cert_main">
                <div className="cert">
                    <Card />
                    <Card />
                    <Card />
                </div>
                
                <Link to="/" style={{textDecoration: "none"}}><button>Go to home page</button></Link>
            </div>  
        </>
            
        
    );
}

export default Pro;
