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
                <div class="mai">
                <ul>
                    <li><span class="text2">Developer</span></li>
                    <li><span class="text2">Programmer</span></li>
                    <li><span class="text2">Entrepreneur</span></li>
                </ul>
                </div>
                <div className="icons">
                    <FaTwitter size="35"/>
                    <FaFacebook size="35"/>
                    <FaLinkedin size="35"/>
                    <FaInstagram size="35"/>  
                    <FaGithub size="35"/> 
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

