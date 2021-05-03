import React from 'react';
import accellLogo from "./imagez/accellLogo.svg";
import concept from "./imagez/accellConcept.jpg";
import navIdea from "./imagez/accell_nav_idea.svg";
import accell from "../components/images/project_3.jpg";

const BlogPageThree = () => {
    return(
        <section id='BlogPageThree'>
            <div className="topHeader">
                <h1>Hackathon Project: Accell application.</h1>
                <p>Posted: 2021-05-02 </p>
            </div>
            <div className="mainContent">
                <p>I participated in a hackathon that Sheridan College hosts every year called Hackville. I and (3) other group members
                    challenged ourselves in developing a web application that would help students improve their study habits. Because of the necessity of distance learning during the pandemic, students must increasingly rely on motivating themselves to stay on top of school. Typically, being in a physical and formal
                    environment with teachers and peers would be a source of incentive to focus. Online learning has made this more challenging, and we hoped our app would provide tools that students can use to help them with productivity.</p>
                <img id="logo" src={accellLogo} alt="Logo of munchies application"/>
                <h3>Requirements</h3>
                <p>We decided to create an application that would help students with tracking their study time for a course and reminding them to take breaks. This
                application would also track their learning and allow them to summarize lessons for quick refreshers. </p>
                <img src={concept} alt="sketch drawings"/>
                <h3>My Job</h3>
                <p>My main tasks were in designing and coding the navigation features of our application. I used FIGMA to very quickly prototype the look and the features. I wanted something fun, streamlined, and easy to navigate. We also narrowed down our main navigation page to four main links that users can click to access related tools and features.
                </p>
                <img src={navIdea} alt="nag concept sketch"/>
                <h3>Conclusion</h3>
                <img src={accell} id="final" alt="final landing page of accell"/>
                <p>As a group we learned many new skills. I was introduced to Vue.js, which is another framework with similarities to REACT. I also enjoyed working with my teammates to problem-solve technical issues. Overall, I had a very positive experience and am looking forward to participating again next year.</p>
                <a className="btn" href="/">Home</a>
            </div>
        </section>
    );

}

export default BlogPageThree;