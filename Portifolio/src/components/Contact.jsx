import React from "react"; 
import './styles/Contact.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; 
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'; 

const Contact = () => {
    return (
        <section id="Contact">
            <h2>Contato</h2>
            
            <div className="contact">
                <p>Você pode me encontrar em:</p>
                
                <ul className="contact-list">
                    <li>
                        <FontAwesomeIcon icon={faEnvelope} /> Email: 
                        <a href="mailto:marcelomederi11@gmail.com" target="_blank" rel="noopener noreferrer"> marcelomederi11@gmail.com</a>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faGithub} /> GitHub: 
                        <a href="https://github.com/MarceloMederi" target="_blank" rel="noopener noreferrer"> GitHub</a>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faLinkedin} /> LinkedIn: 
                        <a href="https://www.linkedin.com/in/marcelo-medeiros-dos-santos-9aa50b1a7" target="_blank" rel="noopener noreferrer"> LinkedIn</a>
                    </li>
                </ul>  
            </div>
        </section>
    );
};

export default Contact;