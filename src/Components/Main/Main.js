import React from 'react';
import Front from '../Front/Front';
import Footer from '../Footer/Footer';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Project from '../Project/Project';

const Main = () => {
    return(
        <>
            <Front />
            <About />
            <Project />
            <Contact />
            <Footer />  
        </>
    );
}

export default Main;