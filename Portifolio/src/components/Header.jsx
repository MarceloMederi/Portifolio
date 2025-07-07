import React, { useEffect } from 'react';
import './styles/Header.css';
import Typed from 'typed.js'; // Importando a biblioteca Typed.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCode, faCertificate, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    useEffect(() => {
        const options = {
            strings: [
                "Portfólio do Futuro",
                "Desenvolvedor Front-end apaixonado",
                "Criando experiências digitais envolventes",
                "Transformando ideias em realidade,",
                "Com HTML, CSS, JavaScript, Docker e Node",
                "Explorando o desenvolvimento com inovações."
            ],
            typeSpeed: 80,
            backSpeed: 40,
            startDelay: 500,
            backDelay: 1000,
            loop: true,
        };

        // Inicializando o Typed.js
        const typed = new Typed(".typed-text", options);

        // Limpeza do efeito ao desmontar o componente
        return () => {
            typed.destroy();
        };
    }, []); // O array vazio indica que o efeito deve rodar apenas uma vez após o primeiro render

    return (
        <header>
            <section className="ini-container">
                <div className="header-content">
                    <img className='profile-photo' src="Perfil/Perfil.jpg" alt="Foto do perfil do Desenvolvedor" />
                    <p className="name-content">Marcelo Medeiros dos Santos</p>
                    <h1><strong><span className="typed-text"></span></strong></h1>
                    <p>Desenvolvedor Front-end (HTML, CSS, JS, REACT, DOCKER e NODE)</p>
                    <nav>
                        <ul>
                            <li>
                                <FontAwesomeIcon icon={faUser} />
                                <a href="#Introduction">Sobre Mim</a>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faCode} />
                                <a href="#Developments">Projetos</a>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faCertificate} />
                                <a href="#Certificates">Certificados</a>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faEnvelope} />
                                <a href="#Contact">Contato</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>
        </header>
    );
};

export default Header;