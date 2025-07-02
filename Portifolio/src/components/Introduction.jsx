import React from 'react'; // Importa a biblioteca React
import './styles/Introduction.css'; // Importa o arquivo de estilos CSS para a seção

// Componente funcional 'Introduction'
const Introduction = () => {
    return (
        <section id="Introduction"> {/* Início da seção com o id 'Introduction' */}

            <h2>Sobre Mim</h2> {/* Título da seção */}

            <p>
            Marcelo Medeiros dos Santos {/* Nome do profissional */}<br />
            Sou um profissional de TI entusiasta, com uma forte paixão por tecnologia e desenvolvimento de software. Possuo experiência sólida em suporte técnico e análise de dados, o que me permite entender profundamente as necessidades dos usuários e traduzir essas demandas em soluções eficazes.<br />
            Atualmente, atuo como Analista de Testes na NTT DATA EUROPE & LATAM, onde tenho a oportunidade de aprimorar minhas habilidades em testes manuais e na elaboração de cenários, sempre respeitando rigorosamente os parâmetros estabelecidos. Além disso, estou profundamente envolvido no desenvolvimento de projetos em React, onde aplico minhas competências técnicas para criar interfaces dinâmicas e responsivas. Embora a telemetria seja um interesse secundário, continuo explorando suas aplicações.<br />
            Recentemente, direcionei meu foco para a inteligência artificial, buscando automatizar processos e explorar áreas com grande potencial, como entrevistas, monitoramento de comportamento, agilidade em processos e análise de dados.<br /> Estou sempre em busca de novas tecnologias e melhores práticas, com o objetivo de contribuir de forma significativa em ambientes desafiadores e inovadores.
            </p>

        </section>
    );
};

export default Introduction; // Exporta o componente para uso em outras partes da aplicação
