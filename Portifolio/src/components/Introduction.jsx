import React from 'react'; // Importa a biblioteca React
import './styles/Introduction.css'; // Importa o arquivo de estilos CSS para a seção

// Componente funcional 'Introduction'
const Introduction = () => {
    return (
        <section id="Introduction"> {/* Início da seção com o id 'Introduction' */}

            <h2>Sobre Mim</h2> {/* Título da seção */}

            <p>
            Marcelo Medeiros dos Santos {/* Nome do profissional */}
            Sou um profissional de TI apaixonado por tecnologia e desenvolvimento de software, {/* Breve descrição profissional */}
            com experiência em suporte técnico e análise de dados. {/* Experiência em suporte técnico e análise de dados */}
            Atualmente, trabalho como Técnico de Suporte em TI na Sabin Medicina Diagnóstica, {/* Descrição do cargo atual e empresa */}
            onde aprimoro minhas habilidades em gestão de tickets e desenvolvimento de dashboards com Power BI. {/* Habilidades desenvolvidas no trabalho atual */}
            Além disso, venho me dedicando ao desenvolvimento de projetos em React, {/* Envolvimento com projetos em React */}
            enquanto a telemetria ocupa um espaço secundário na minha atuação.  {/* Interesses em telemetria */}
            Nos últimos tempos, tenho focado em inteligência artificial, como reconhecimento facial e de voz para análise de emoções, {/* Foco atual em inteligência artificial */}
            áreas com grande potencial para aplicações em entrevistas e monitoramento de comportamento. {/* Aplicações práticas da inteligência artificial */}
            Estou sempre em busca de novas tecnologias e melhores práticas para contribuir efetivamente em um ambiente desafiador. {/* Mentalidade de aprendizado e contribuição */}
            </p>

        </section>
    );
};

export default Introduction; // Exporta o componente para uso em outras partes da aplicação
