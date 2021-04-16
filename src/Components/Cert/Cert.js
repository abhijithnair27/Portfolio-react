import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card/Card';
import './Cert.css';
import first from './certificates/DS and algo javascript.png';
import second from './certificates/Front end web development using react.jpg';
import third from './certificates/Javascript Es6.jpg';
import fourth from './certificates/Machine learning.jpg';
import fifth from './certificates/Responsive web design.png';




const Cert = () => {
    return (
        <>
            <div className="cert_main">
                <div className="cert">
                    <Card image={first} text="Kayaks crowd Three Sister Springs, where people and manatees maintain controversial coexistence"/>
                    <Card image={second} text="Kayaks crowd Three Sister Springs, where people and manatees maintain controversial coexistence"/>
                    <Card image={third} text="Kayaks crowd Three Sister Springs, where people and manatees maintain controversial coexistence"/>
                </div>
                <div className="cert">
                    <Card image={fourth} text="Kayaks crowd Three Sister Springs, where people and manatees maintain controversial coexistence"/>
                    <Card image={fifth} text="Kayaks crowd Three Sister Springs, where people and manatees maintain controversial coexistence"/>
                   
                </div>
                <Link to="/" style={{textDecoration: "none"}}><button>Go to home page</button></Link>
            </div>  
        </>
    );
}

export default Cert;
