import React from 'react'; // Importa a biblioteca React
import './styles/Developments.css'; // Importa o arquivo de estilos CSS para este componente

// Define o componente Developments
const Developments = () => {
    return (
        <section id="Developments"> {/* Seção principal que agrupa todos os projetos */}
            <h2>Projetos</h2> {/* Título da seção */}

            {/* Artigo para o projeto Study English */}
            <article className="project">
                <h3>Study English</h3> {/* Subtítulo do projeto */}
                <div className="project-content"> {/* Classe para facilitar a estilização */}
                    <img src="/StudyEnglish/Study_English.png" alt="Print do projeto Study_English" /> {/* Imagem do projeto */}
                    <p><strong>Descrição:</strong> Um projeto simples para ajudar os usuários a praticar o inglês através de perguntas de diferentes níveis de dificuldade. O aplicativo apresenta perguntas e permite que os usuários insiram suas respostas, recebendo feedback imediato sobre sua precisão.</p>
                    <p><strong>Tecnologias:</strong> HTML, CSS e JS</p>
                    <p><strong>Destaque:</strong> Com três níveis de dificuldade, Feedback imediato e com a interface responsiva</p>
                    <a href="https://github.com/MarceloMederi/Study_English" target="_blank" rel="noopener noreferrer">GitHub</a> | <a href="https://study-english-beta.vercel.app/" target='_blank'>Demo</a> {/* Links para o GitHub e a demonstração do projeto */}
                </div>  
            </article>

            {/* Artigo para o projeto Text-to-Speech */}
            <article className="project">
                <h3>Text-to-Speech</h3>
                <div className="project-content">
                    <img src="/text-to-speech/text-to-speech.png" alt="Print do projeto text-to-speech" /> {/* Imagem do projeto */}
                    <p><strong>Descrição:</strong> Conversor de Texto para Áudio com uma interface amigável e um modo acessível, pensado especialmente para pessoas com daltonismo. O usuário pode inserir texto, convertê-lo em áudio, limpar o campo de texto e alternar entre temas, melhorando a acessibilidade visual.</p>
                    <p><strong>Tecnologias:</strong> Node, HTML, CSS e JS</p>
                    <p><strong>Destaque:</strong> O destaque do projeto é sua acessibilidade. O Conversor de Texto para Áudio foi pensado para atender não apenas à necessidade de converter texto em áudio, mas também para ser acessível a pessoas com daltonismo.</p>
                    <a href="https://github.com/MarceloMederi/Text-to-Speech/tree/main" target="_blank" rel="noopener noreferrer">GitHub</a> | <a href="https://text-to-speech-43v9.vercel.app/" target="_blank" rel="noopener noreferrer">Demo</a> {/* Links para o GitHub e a demonstração do projeto */}
                </div>
            </article>

            {/* Artigo para o projeto ConsumoCombustivelReact */}
            <article className="project">
                <h3>Cálculo de Combustível</h3>
                <div className="project-content">
                    <img src="/ConsumoCombustivelReact/ConsumoCombustivelReact.png" alt="Print do projeto ConsumoCombustivelReact" /> {/* Imagem do projeto */}
                    <p><strong>Descrição:</strong> Uma calculadora desenvolvida com React para calcular o valor gasto em combustível.</p>
                    <p><strong>Tecnologias:</strong> React, JavaScript, HTML, CSS.</p>
                    <p><strong>Destaque:</strong> Cálculo dinâmico com inputs do usuário e interface responsiva.</p>
                    <a href="https://github.com/MarceloMederi/consumoCombustivelReact" target="_blank" rel="noopener noreferrer">GitHub</a> | <a href="https://consumo-combustivel-react-2gk7.vercel.app/" target="_blank" rel="noopener noreferrer">Demo</a> {/* Links para o GitHub e a demonstração do projeto */}
                </div>
            </article>

            {/* Artigo para o projeto Convert-Documents */}
            <article className="project">
                <h3>Convert-Documents</h3>
                <div className="project-content">
                    <img src="/Convert-Documents/Convert-Documents.png" alt="Print do projeto Convert-Documents" /> {/* Imagem do projeto */}
                    <p><strong>Descrição:</strong> Uma aplicação que converte imagens (JPG, PNG) e PDFs em um único documento PDF, mantendo a ordem correta conforme a seleção dos arquivos.</p>
                    <p><strong>Tecnologias:</strong> JavaScript, HTML, CSS.</p>
                    <p><strong>Destaque:</strong> Lógica em JavaScript que organiza e mescla imagens e PDFs em um único arquivo PDF, além de incluir uma barra de progresso visual para o acompanhamento do processo de mesclagem.</p>
                    <a href="https://github.com/MarceloMederi/convertDocuments" target="_blank" rel="noopener noreferrer">GitHub</a> | <a href="https://convert-documents.vercel.app/" target="_blank" rel="noopener noreferrer">Demo</a> {/* Links para o GitHub e a demonstração do projeto */}
                </div>
            </article>

            {/* Artigo para o projeto Calendario Digital */}
            <article className="project">
                <h3>Calendario Digital</h3>
                <div className="project-content">
                    <img src="/Calendario-Digital/Calendario-Digital.png" alt="Print do projeto Calendario-Digital" /> {/* Imagem do projeto */}
                    <p><strong>Descrição:</strong> Aplicação web de calendário digital que exibe a data atual, horário local e informações climáticas, incluindo temperatura e umidade, para a cidade ou país inserido pelo usuário. A interface interativa apresenta um mapa da localização.</p>
                    <p><strong>Tecnologias:</strong> HTML, CSS, JavaScript, API OpenWeatherMap, Leaflet.js, Docker.</p>
                    <p><strong>Destaque:</strong> Integração de dados em tempo real de clima e geolocalização com suporte para Docker, facilitando a execução em contêineres.</p>
                    <a href="https://github.com/MarceloMederi/calendarioDigital" target="_blank" rel="noopener noreferrer">GitHub</a> | <a href="https://calendario-digital.vercel.app/" target="_blank" rel="noopener noreferrer">Demo</a> {/* Links para o GitHub e a demonstração do projeto */}
                </div>
            </article>

        </section>
    );
};

export default Developments; // Exporta o componente Developments para uso em outros arquivos