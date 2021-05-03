import React from 'react';
import Navigation from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

const SPA = () => {
    return(
        <>
            <Navigation/>
            <Hero/>
            <About/>
            <Projects/>
            <Contact/>
            <Footer/>
        </>
    );
}

export default SPA;