import React from 'react';

const Header = () => {
    return (
        <header>
            <section className="ini-container">

                <div className="header-content">
                    <img src="Perfil/Perfil.jpg" alt=" Foto do perfil do Desenvolvedor" />

                    <p className="name-content">Marcelo Medeiros dos Santos</p>
                </div>

                <h1><strong><span className="typed-text"></span></strong></h1>

                <p>Desenvolvedor Front-end (HTML, CSS, JS, REACT, DOCKER e NODE)</p>

                <nav>

                    <ul>
                        <li><a href="#Introduction">Sobre Mim</a></li>
                        <li><a href="#Developments">Projetos</a></li>
                        <li><a href="#Certificates">Certificados</a></li>
                        <li><a href="#contato">Contato</a></li>
                    </ul>

                </nav>

            </section>

        </header>
    );
};

export default Header;
