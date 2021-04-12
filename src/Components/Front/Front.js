import React from 'react';
import './Front.css';
import { ImWhatsapp } from 'react-icons/im';
import {FaGithub, FaInstagram} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaFacebook} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';





const Front = () => {
    return(
        <>
        <div className="front">
            <div className="overlay"></div>
            <div className="front_div">
                <div>
                    <span class="text_primary">ABHIJITH </span><span class="text_secondary">NAIR</span>
                </div>
                <div className="wrapper">
                <p className="hello">I'm a <span></span></p>
                </div>
                <div className="icons">
                    <a href="https://twitter.com/AbhijithNair27">
                        <FaTwitter size="35"/>
                    </a>
                    <a href="https://www.facebook.com/abhijith.nair.3150807/">
                        <FaFacebook size="35"/>
                    </a>
                    <a href="https://www.linkedin.com/in/abhijithnair27/">
                        <FaLinkedin size="35"/>                        
                    </a>
                    <a href="https://www.instagram.com/abhi.___.13/">
                        <FaInstagram size="35"/>  
                    </a>
                    <a href="https://github.com/abhijithnair27">
                        <FaGithub size="35"/>                     
                    </a>                   
                </div>
                <div className="middle">
                    <div className="mouse"></div>
                </div>
            </div>
            
        </div>
        </>
    );
}

export default Front;

