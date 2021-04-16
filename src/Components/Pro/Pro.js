import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from '../Cert/Card/Card';
import './Pro.css';


const Pro = () => {
    return (
        
        <>
            <div className="cert_main">
                <div className="cert">
                    <Card image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvLvaVsGNab3a1ccignkNeQG_vF1Gkg6QmdA&usqp=CAU" src="https://github.com/abhijithnair27" text="Built an online chatting platform for a group using react,bootstrap, expree.js,node.js,socket.io" />
                    <Card image="https://payload.cargocollective.com/1/23/747747/13539073/OR7V3B1_2000_c.jpg" src="https://github.com/abhijithnair27" text="Built an memories platform where you can store your memories using react, bootstrap, redux,  expree.js, node.js, mogoDB."/>
                    
                </div>
                
                <Link to="/" style={{textDecoration: "none"}}><button>Go to home page</button></Link>
            </div>  
        </>
            
        
    );
}

export default Pro;
