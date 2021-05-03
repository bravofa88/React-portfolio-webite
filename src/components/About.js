import React from 'react';
import node from './images/node.svg';
import mongo from './images/mongo.svg';
import cloud from './images/cloud.svg';
import ccna from './images/ccna.svg';


const About = () => {
    return(
        <section id="about">
            <h3>About</h3>
            <p className="lead">Hello my name is Fabian, I'm a 2<sup id="upperND">nd</sup> year Computer Science student at Sheridan College. I live in Oakville, Ontario Canada. I
                have a passion for all things related to Technology. I like web development and network communication. I am CISCO certified and hold a CCENT. When I am not on my computer you can find me in the kitchen or on a nature walk with my girlfriend.</p>
            <div className="about">
                <ul className="grid2">
                    <li>
                        <img src={node} alt="Node js logo"/>
                        <h4>Web Development</h4>
                    </li>
                    <li>
                        <img src={mongo} alt="MongoDB logo"/>
                        <h4>Database Management</h4>
                    </li>
                    <li>
                        <img src={cloud} alt="Server farms"/>
                        <h4>Cloud Ops</h4>
                    </li>
                    <li>
                        <img src={ccna} alt="CCENT certificate"/>
                        <h4>CCENT Cert.</h4>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export  default About;