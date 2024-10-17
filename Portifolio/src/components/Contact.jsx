import React from "react";

const Contact = () => {
    return (
        <section id="Contact">

            <h2>Contato</h2>
            
            <div className="contact">
                <p>Você pode me encontrar em:</p>

                <ul className="contact-list">
                    <li>
                        Email: 
                        <a href="mailto:marcelomederi11@gmail.com" target="_blank" rel="noopener noreferrer"> marcelomederi11@gmail.com</a>
                    </li>

                    <li>
                        GitHub: 
                        <a href="https://github.com/MarceloMederi" target="_blank" rel="noopener noreferrer"> GitHub</a>
                    </li>

                    <li>
                        LinkedIn: 
                        <a href="https://www.linkedin.com/in/marcelo-medeiros-dos-santos-9aa50b1a7" target="_blank" rel="noopener noreferrer"> LinkedIn</a>
                    </li>

                </ul>  

            </div>
            
        </section>
    );
};

export default Contact;
