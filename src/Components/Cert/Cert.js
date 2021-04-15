import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card/Card';
import './Cert.css';


const Cert = () => {
    return (
        <>
            <div className="cert_main">
                <div className="cert">
                    <Card />
                    <Card />
                    <Card />
                </div>
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

export default Cert;
