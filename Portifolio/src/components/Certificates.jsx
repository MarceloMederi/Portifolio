import React from 'react';
import './styles/Certificates.css';

const Certificates = () => {
    return (
        <section id='Certificates'>

            <h2>Certificados</h2>

            <div className="certificate-grid">
                <img src="/Certificados/Azure-Az-900.png" alt="Certificação Azure 900" />
                <img src="/Certificados/CentOS-7.png" alt="Certificação CentOS 7" />
                <img src="/Certificados/BI-Empowerdata.png" alt="Certificação BI" />
                <img src="/Certificados/Computacao-em-Nuvem-AWS-Discovery-Day.png" alt="Certificação AWS" />
                <img src="/Certificados/Gerencia-de-Projetos-TI.png" alt="Certificação Gerência de Projetos em TI" />
                <img src="/Certificados/Imersao-Dev-Alura.png" alt="Certificação Imersão Dev Alura" />
                <img src="/Certificados/Implantacao-de-Governança-TI.png" alt="Certificação Implantação de Governança em TI" />
                <img src="/Certificados/Programacao-Algoritimos-Escalaveis.png" alt="Certificação Programação de Algoritmos Escaláveis" />
                <img src="/Certificados/Programacao-para-Dispositivos-Moveis.png" alt="Certificação Programação para Dispositivos Móveis" />
                <img src="/Certificados/Programacao-para-internet.png" alt="Certificação Programação para Internet" />
                <img src="/Certificados/Scrum-Foundation.png" alt="Certificação Scrum Foundation" />
                <img src="/Certificados/Virtualizacao-VMware-vShere-6.7.png" alt="Certificação Virtualização VMware vSphere 6.7" />
            </div>

        </section>
    );
};

export default Certificates;
