import React from   'react';
import portrait from './images/portrait.jpg';
import stars from './images/stars.jpg';
import {animateScroll as scroll} from "react-scroll";


const Hero = () => {
    return (
        <section id="heroBanner" style={ {backgroundImage: `url(${stars})`}}>
            <div className="grid">
                <div className="heroImg">
                    <img src={portrait} alt="myself"/>
                </div>
                <div className="heroText">
                    <h2>Hello, I am a Web Developer</h2>
                    <p className="lead">I build in Javascript & Java using many frameworks like React and SpringBoot.</p>
                    <a onClick={() => scroll.scrollTo(990)} className="btn" href="#projects">View my projects</a>
                </div>
            </div>
        </section>
    );
}

export default Hero;