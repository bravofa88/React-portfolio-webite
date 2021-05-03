import React from 'react';
import emailjs from 'emailjs-com';
import { FaTwitterSquare } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { AiOutlineGithub } from 'react-icons/ai';


const Contact = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm(process.env.SERVICE_ID, process.env.TEMPLATE_ID, e.target, process.env.USER_ID )
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();

    }


    return(
        <section  id="contact">
            <div className="formContent">
                <h3>Say Hello!</h3>
                <p className="lead">Send me a message, kind words only. &#128522; </p>
                <form onSubmit={sendEmail}>
                    <label htmlFor="name">Name*</label>
                    <input type="text" placeholder="name..." name="name" required/>
                    <label htmlFor="email">Email address*</label>
                    <input type="text" placeholder="email..." name="email" required/>
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="" cols="30" rows="10"
    placeholder="thank you for your message.."/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
            <div className="linksContent">
                <h3>Links</h3>
                <table>
                    <tbody>
                        <tr>
                            <td><a href="https://twitter.com/bravofa88?lang=en" target="_blank" rel="noopener noreferrer">Twitter</a></td>
                            <td><a href="https://twitter.com/bravofa88?lang=en" target="_blank" rel="noopener noreferrer"><FaTwitterSquare/></a></td>
                        </tr>
                        <tr>
                            <td><a href="https://ca.linkedin.com/in/fabian-bravo" target="_blank" rel="noopener noreferrer">LinkedIn</a></td>
                            <td><a href="https://ca.linkedin.com/in/fabian-bravo" target="_blank" rel="noopener noreferrer"><SiLinkedin/></a></td>
                        </tr>
                        <tr>
                            <td><a href="https://github.com/bravofa88/" target="_blank" rel="noopener noreferrer">Github</a></td>
                            <td><a href="https://github.com/bravofa88/" target="_blank" rel="noopener noreferrer"><AiOutlineGithub/></a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default Contact;