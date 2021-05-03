import React from 'react';
import munchiesLogo from "./imagez/munchiesLogo.svg";
import concept from "./imagez/munchiesIdeation.jpg";
import munchies from "../components/images/project_2.svg";
import video1 from "./videos/muchiesVideo_1.mp4";
import video2 from "./videos/muchiesVideo_2.mp4"
import video3 from "./videos/muchiesVideo_3.mp4"


const BlogPageTwo = () => {
    return(
        <section id='BlogPageTwo'>
            <div className="topHeader">
                <h1>Hackathon Project: Munchies application.</h1>
                <p>Posted: 2021-05-02 </p>
            </div>
            <div className="mainContent">
                <p>I participated in San Fransisco's hackathon with (3) group members. The event mapped a 3 day event for rapid development of an application that tacked
                a problems from a variety of sectors. For example our group decided to create a nutrition application that helped user with nutritional health information. </p>
                <img id="logo" src={munchiesLogo} alt="Logo of munchies application"/>
                <h3>Requirements</h3>
                <p>As a group we decided our application would connect to a API that we accept text and image inputs of foods and response back with
                nutrition information. Then we would display that information back to the user in a meaningful way.</p>
                <img src={concept} alt="sketch drawings"/>
                <h3>My Job</h3>
                <p>I created a console version of our application using Nodejs. The code from this would later be refactored and moved onto a web version
                with a React frontend. I concentrated my skills toward the backend technologies that would be used. If are interested in seeing the source code please check out my Github repo.
                    </p>
                <p><a href="https://github.com/bravofa88/" target="_blank" rel="noopener noreferrer" className="btn"> Github</a></p>
                <video autoPlay loop muted>
                    <source src={video1}/>
                </video>
                <video autoPlay loop muted>
                    <source src={video2}/>
                </video>
                <video autoPlay loop muted>
                    <source src={video3}/>
                </video>
                <h3>Conclusion</h3>
                <img src={munchies} id="final" alt="final landing page of munchies"/>
                <p>Our group did not win any prizes but we came out with alot more expirence and skills.</p>
                <a className="btn" href="/">Home</a>
            </div>
        </section>
    );

}

export default BlogPageTwo;