import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return(
        <>
        <div className="footer">

          <div className="to">
          <a href="#ho" style={{textDecoration: "none"}}><span style={{fontSize: "30px", color: "white"}}>&#8607;</span></a>
          </div>
          <div className="fgh">
              <FaTwitter size="35"/>
                        
              <FaFacebook size="35"/>
              <FaLinkedin size="35"/>

              <FaInstagram size="35"/>  
              <FaGithub size="35"/>
          </div>
          <div className="t">
            Developed by ABHIJITH NAIR &copy; 2020
          </div>
        </div>
      </>
    );
}

export default Footer;
