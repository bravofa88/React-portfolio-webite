import React from 'react';
import minewsLogo from './imagez/MinewsLogo2.svg';
import signUp from './videos/minews_signup.mp4';
import wire1 from './imagez/minews_wireframe_signup.svg';
import wire2 from './imagez/minews_wireframe_media.svg';
import wire3 from './imagez/minews_wireframe_feed.svg';
import minews from '../components/images/project_1.svg';


const BlogPageOne = () => {
    return(
        <section id='BlogPageOne'>
            <div className="topHeader">
                <h1>Class Final Project: Minews news application.</h1>
                <p>Posted: 2021-04-29 </p>
            </div>
            <div className="mainContent">
                <p>The Interactive User Interface Design course at Sheridan College involved (5) group members tasked with building and designing the interface for an application using the techniques and skills
                    learned in the course. We created the Minews application.</p>
                <img id="logo" src={minewsLogo} alt="Logo of minews application"/>
                <h3>Requirements</h3>
                <p>The project required us to adopt a user-centric approach to design. We also analysed data surveyed from user testing. Finally, we created an MVP (Minimum Viable Product). Our journey started with the following: </p>
                <ol>
                    <li>Ideation & Research of application</li>
                    <li>Questioning target audience</li>
                    <li>Low and High fidelity wireframes</li>
                    <li>User testing of mock prototypes</li>
                    <li>Final UI design</li>
                </ol>
                <h3>My Job</h3>
                <p>As the group leader, I divided the application into various features and assigned them to different group members to complete based on their interests. I also designed the overall look and feel of the
                application, news feed feature, sign up process, and media mode. My design was inspired by popular social media apps like Instagram and Twitter. In particular, I enjoyed the ability conveniently browse various content in an efficient way using finger swipe movements.</p>
                <h3>Low and High fidelity wireframes</h3>
                <img src={wire1} alt="wireframe of signup"/>
                <img src={wire2} alt="wireframe of media mode"/>
                <img src={wire3} alt="wireframe of feed"/>
                <p> I designed the wireframes using Figma, a very powerful tool for creating rapid wireframe and prototypes.</p>
                <h3>User testing & coding mock-up process:</h3>
                <video autoPlay loop muted>
                    <source src={signUp}/>
                </video>
                <p>I coded the sign up form and the interactive process for our application using JavaScript and CSS3.</p>
                <h3>Conclusion</h3>
                <img src={minews} id="final" alt="final landing page of minews"/>
                <p>Thanks to my time management skills, our group delivered and received a great mark. We learned many new skills. For example, we learned to
                apply information architecture principles to user interface design.</p>
                <a className="btn" href="/">Home</a>
            </div>
        </section>
    );

}

export default BlogPageOne;