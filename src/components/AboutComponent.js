import React from 'react';
import Header from './HeaderComponent';
import '../header.css';
import "@fontsource/montserrat";




const About = () => {

    const AboutSection = () => {
        return(
            <div className="about">
                <h3>About Us</h3> 
                &nbsp;
                <p>THIS IS WHERE YOU WRITE STUFF</p>
            </div>
            
        );
    }


    return(

        <div className="about-container">
            <Header/>
            <AboutSection/>  
        </div>
    );
    
}

export default About;