import React from 'react';
import './About.css';
import logo from './me.jpg';

const About = () => {
    return(
        <div className="about">
          <div className="aboutt">

          <div className="left">
            <img src={logo} alt="myphoto" className="left_image"/>
            <p className="left_name">Abhijith Nair</p>
            <p className="left_quote">
               Success Is So Much Happiness!!
            </p>
          </div>

          <div className="right">
            <div className="right_header">
              <p>ABOUT</p>
              <hr />
            </div>
            <div className="right_body">
              <p className="right_body_1">Who Is Abhijith?</p>
              <p className="right_body_2">
                I am just a regular Child who is currently pursuing graduation
                from Shri Vaishnav Vidhyapeeth Vishwavidhlaya.Currently i am working on 
                building Skills through practicing various languages, my projects 
                are basically build on web development where i prefered to be called as a full stack web developer!
                </p>
                <p className="right_body_2">
                <span className="body_span">
                  Apart from coding i love to play outdoor sports, reading articles and 
                many others things, had been an athlete in past representing at national level!!! 
                </span>

              </p>
                <button className="right_button">Resume</button>

            </div>
          </div>
          </div>
            
        </div>
    );
}

export default About;