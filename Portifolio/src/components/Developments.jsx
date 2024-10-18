import React from 'react';
import './styles/Developments.css';

const Developments = () => {
    return (
        <section id="Developments">

            <h2>Projetos</h2>

            <article className="project">

                <h3>Emoção_Flask</h3>

                <div>
                    <img src="/Emocao_Flask/Emocao_Flask.png" alt="Print do projeto Emocao Flask" />
                    <p><strong>Descrição:</strong>  Uma aplicação Flask que utiliza detecção de emoções em tempo real a partir de vídeo, capturando imagens da webcam e analisando as emoções das faces detectadas.</p>
                    <p><strong>Tecnologias:</strong> Python, OpenCV, DeepFace, Flask, HTML.</p>
                    <a href="https://github.com/MarceloMederi/Emocao_Flask">GitHub</a> | <a href="#">Demo</a>
                </div>  

            </article>
            
            <article  className="project">

                <h3>Text-to-Speech</h3>

                <div>
                    <img src="/text-to-speech/text-to-speech.png" alt="Print do projeto text-to-speech" />
                    <p><strong>Descrição:</strong> Conversor de Texto para Áudio com uma interface amigável e um modo acessível, pensado especialmente para pessoas com daltonismo. O usuário pode inserir texto, convertê-lo em áudio, limpar o campo de texto e alternar entre temas, melhorando a acessibilidade visual.</p>
                    <p><strong>Tecnologias:</strong> Node, HTML, CSS e JS</p>
                    <p><strong>Destaque:</strong> O destaque do projeto é sua acessibilidade. O Conversor de Texto para Áudio foi pensado para atender não apenas à necessidade de converter texto em áudio, mas também para ser acessível a pessoas com daltonismo. </p>
                    <a href="https://github.com/MarceloMederi/Text-to-Speech/tree/main">GitHub</a> | <a href="https://text-to-speech-l03dtt6yh-marcelomederis-projects.vercel.app/" target="_blank" rel="noopener noreferrer">Demo</a>
                </div>

            </article>

            <article  className="project">

                <h3>ConsumoCombustivelReact</h3>
                
                <div>
                    <img src="/ConsumoCombustivelReact/ConsumoCombustivelReact.png" alt="Print do projeto ConsumoCombustivelReact" />
                    <p><strong>Descrição:</strong> Uma calculadora desenvolvida com React para calcular o valor gasto em combustível.</p>
                    <p><strong>Tecnologias:</strong> React, JavaScript, HTML, CSS.</p>
                    <p><strong>Destaque:</strong> Cálculo dinâmico com inputs do usuário e interface responsiva.</p>
                    <a href="https://github.com/MarceloMederi/consumoCombustivelReact">GitHub</a> | <a href="https://consumo-combustivel-react-2gk7.vercel.app/" target="_blank" rel="noopener noreferrer">Demo</a>
                </div>

            </article>

            <article  className="project">

                <h3>Convert-Documents</h3>
                
                <div>
                    <img src="/Convert-Documents/Convert-Documents.png" alt="Print do projeto Convert-Documents" />
                    <p><strong>Descrição:</strong> Uma aplicação que converte imagens (JPG, PNG) e PDFs em um único documento PDF, mantendo a ordem correta conforme a seleção dos arquivos.</p>
                    <p><strong>Tecnologias:</strong> JavaScript, HTML, CSS.</p>
                    <p><strong>Destaque:</strong> Lógica em JavaScript que organiza e mescla imagens e PDFs em um único arquivo PDF, além de incluir uma barra de progresso visual para o acompanhamento do processo de mesclagem.</p>
                    <a href="https://github.com/MarceloMederi/convertDocuments">GitHub</a> | <a href="https://convert-documents.vercel.app/" target="_blank" rel="noopener noreferrer">Demo</a>
                </div>

            </article>

            <article  className="project">

                <h3>Calendario Digital</h3>

                <div>
                    <img src="/Calendario-Digital/Calendario-Digital.png" alt="Print do projeto Calendario-Digital" />
                    <p><strong>Descrição:</strong> Aplicação web de calendário digital que exibe a data atual, horário local e informações climáticas, incluindo temperatura e umidade, para a cidade ou país inserido pelo usuário. A interface interativa apresenta um mapa da localização.</p>
                    <p><strong>Tecnologias:</strong> HTML, CSS, JavaScript, API OpenWeatherMap, Leaflet.js, Docker.</p>
                    <p><strong>Destaque:</strong> Integração de dados em tempo real de clima e geolocalização com suporte para Docker, facilitando a execução em contêineres.</p>
                    <a href="https://github.com/MarceloMederi/calendarioDigital">GitHub</a> | <a href="https://calendario-digital.vercel.app/" target="_blank" rel="noopener noreferrer">Demo</a>
                </div>

            </article>

        </section>
    );
};

export default Developments;
