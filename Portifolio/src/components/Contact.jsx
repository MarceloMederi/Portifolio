// Importa o React, necessário para trabalhar com componentes funcionais em aplicações React
import React from "react"; 

// Importa o arquivo CSS para estilizar o componente de contato
import './styles/Contact.css'; 

// Importa o componente de ícones da biblioteca FontAwesome para uso de ícones personalizados
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 

// Importa ícones específicos da FontAwesome, como envelope, GitHub e LinkedIn
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; 
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'; 

// Cria o componente funcional 'Contact'
const Contact = () => {
    return (
        // Seção do componente identificada pelo id 'Contact', que pode ser usada para ancoragem de links na página
        <section id="Contact">
            <h2>Contato</h2> {/* Título da seção */}
            
            <div className="contact">
                <p>Você pode me encontrar em:</p> {/* Texto que introduz as formas de contato */}
                
                {/* Lista de contatos com links */}
                <ul className="contact-list">
                    
                    {/* Primeiro item da lista, para exibir o email */}
                    <li>
                        {/* Ícone de envelope representando o email */}
                        <FontAwesomeIcon icon={faEnvelope} /> Email: 
                        {/* Link para abrir o email no cliente de email padrão */}
                        <a href="mailto:marcelomederi11@gmail.com" target="_blank" rel="noopener noreferrer"> marcelomederi11@gmail.com</a>
                    </li>

                    {/* Segundo item da lista, para exibir o link do GitHub */}
                    <li>
                        {/* Ícone do GitHub */}
                        <FontAwesomeIcon icon={faGithub} /> GitHub: 
                        {/* Link para o perfil do GitHub, abre em nova aba */}
                        <a href="https://github.com/MarceloMederi" target="_blank" rel="noopener noreferrer"> GitHub</a>
                    </li>

                    {/* Terceiro item da lista, para exibir o link do LinkedIn */}
                    <li>
                        {/* Ícone do LinkedIn */}
                        <FontAwesomeIcon icon={faLinkedin} /> LinkedIn: 
                        {/* Link para o perfil do LinkedIn, abre em nova aba */}
                        <a href="https://www.linkedin.com/in/marcelo-medeiros-dos-santos-9aa50b1a7" target="_blank" rel="noopener noreferrer"> LinkedIn</a>
                    </li>
                </ul>  
            </div>
        </section>
    );
};

// Exporta o componente 'Contact' para ser utilizado em outras partes da aplicação
export default Contact;
