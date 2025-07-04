import React from 'react'; // Importa a biblioteca React
import './styles/Introduction.css'; // Importa o arquivo de estilos CSS para a seção

// Componente funcional 'Introduction'
const Introduction = () => {
    return (
        <section id="Introduction"> {/* Início da seção com o id 'Introduction' */}

            <h2>Sobre Mim</h2> {/* Título da seção */}

            <p>

                <br />Sou um profissional de TI entusiasta, com uma forte paixão por tecnologia e desenvolvimento de software. 
                Com uma experiência sólida em suporte técnico e análise de dados, consigo entender profundamente as necessidades dos usuários e traduzir essas demandas em soluções eficazes.<br />

                <br />Atualmente, atuo como Analista de Testes na NTT DATA EUROPE & LATAM, onde aprimoro minhas habilidades em testes manuais e na elaboração de cenários, sempre respeitando rigorosamente os parâmetros estabelecidos. <br />

                <br />Estou também profundamente envolvido no desenvolvimento de projetos envolventes, aplicando minhas competências técnicas para criar interfaces dinâmicas e responsivas.
                Embora a telemetria seja um interesse secundário, continuo explorando suas aplicações.<br />

            </p>

        </section>
    );
};

export default Introduction; // Exporta o componente para uso em outras partes da aplicação
