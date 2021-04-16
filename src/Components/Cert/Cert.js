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
                    <Card image={first} src="https://www.freecodecamp.org/certification/abhijith27/responsive-web-design"  text="Learn Data structures and algorithm in javascript"/>
                    <Card image={second} src="https://coursera.org/share/5ea4ee48de88708ba29c4efe20f1cba4" text="Learn about front end development using javascript library React"/>
                    <Card image={third} src="https://coursera.org/share/e35311585fc6af3513f85db023c5cd9f" text="Learn javascript ES6 basics"/>
                </div>
                <div className="cert">
                    <Card image={fourth} src="https://coursera.org/share/75bedb7684fbcf7e2bf8de1827063d93" text="learn machine learning"/>
                    <Card image={fifth} src='https://www.freecodecamp.org/certification/abhijith27/javascript-algorithms-and-data-structures' text="Learn how to make websites responsive"/>
                   
                </div>
                <Link to="/" style={{textDecoration: "none"}}><button>Go to home page</button></Link>
            </div>  
        </>
    );
}

export default Cert;
