import React from 'react';
import profilePhoto from '../../public/Perfil/Perfil.jpg'; // Ajuste o caminho para a imagem

const Header = () => {
    return (
        <header>
            <section className="ini-container">
                <div className="header-content">
                    <img src={profilePhoto} alt="Foto do Perfil" className="profile-photo" />
                    <p className="name-content">Marcelo Medeiros dos Santos</p>
                </div>
                <h1><strong><span className="typed-text"></span></strong></h1>
                <p>Desenvolvedor Front-end (HTML, CSS, JS, REACT, DOCKER e NODE)</p>
                <div className="icon-container">
                    <i className="fab fa-html5"></i>
                    <i className="fab fa-css3-alt"></i>
                    <i className="fab fa-js"></i>
                    <i className="fab fa-react"></i>
                    <i className="fab fa-node-js"></i>
                    <i className="fab fa-docker"></i>
                </div>
                <nav>
                    <ul>
                        <li><i className="fas fa-user-tie"></i><a href="#Introduction">Sobre Mim</a></li>
                        <li><i className="fas fa-lightbulb"></i><a href="#Developments">Projetos</a></li>
                        <li><i className="fas fa-trophy"></i><a href="#Certificates">Certificados</a></li>
                        <li><i className="fas fa-handshake"></i><a href="#contato">Contato</a></li>
                    </ul>
                </nav>
            </section>
        </header>
    );
};

export default Header;
