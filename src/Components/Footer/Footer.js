import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return(
        <>
        <div className="footer">

          <div className="to">
          <a href="#to" style={{textDecoration: "none"}}><span style={{fontSize: "30px", color: "white"}}>&#8607;</span></a>
          </div>
          <div className="fgh">
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
          <div className="t">
            Developed by ABHIJITH NAIR 
          </div>
        </div>
      </>
    );
}

export default Footer;
