import React from 'react';
import { Link } from "react-router-dom";
import project1 from './images/project_1.svg';
import project2 from './images/project_2.svg';
import project3 from './images/project_3.jpg';
import {animateScroll as scroll} from "react-scroll";


const Projects = () => {
    return(
        <section id="projects">
            <h3>Projects</h3>
            <div className="project grid">
                <a href="/minews">
                    <Link to="/minews" onClick={() => scroll.scrollTo(0,0)}>
                    <img src={project1} alt="first project minews."/>
                    <h4>Interactive User Interface Design course final Project.</h4>
                    <p className="leading">Minews Application.</p>
                    </Link>
                </a>
                <a href="/munchies">
                    <Link to="/munchies" onClick={() => scroll.scrollTo(0,0)}>
                    <img src={project2} alt="second project munchies"/>
                    <h4>San Francisco Hacks: Hackathon</h4>
                    <p className="leading">Munchies Application.</p>
                    </Link>
                </a>
                <a href="/accell">
                    <Link to="/accell" onClick={() => scroll.scrollTo(0,0)}>
                    <img src={project3} alt="third project Accell."/>
                    <h4>nWHacks : Hackathon</h4>
                    <p className="leading">Accell Application.</p>
                    </Link>
                </a>
            </div>
        </section>
    );
}

export default Projects;