import React from 'react'; // Importa a biblioteca React
import { Swiper, SwiperSlide } from 'swiper/react'; // Importa componentes Swiper e SwiperSlide da biblioteca Swiper
import 'swiper/swiper-bundle.css'; // Importa o CSS padrão do Swiper
import { Autoplay } from 'swiper/modules'; // Importa o módulo Autoplay para permitir a reprodução automática dos slides
import './styles/Certificates.css'; // Importa o arquivo de estilos CSS específico para a seção de certificados

const Certificates = () => {
    return (
        <section id='Certificates'> {/* Define a seção de certificados com um ID para referência */}
            <h2>Certificados</h2> {/* Título da seção */}

            {/* Configuração do Swiper para exibir os certificados em slides */}
            <Swiper
                modules={[Autoplay]}  // Adiciona o módulo Autoplay para permitir que os slides avancem automaticamente
                spaceBetween={30} // Define o espaço entre os slides
                slidesPerView={3} // Número de slides visíveis ao mesmo tempo
                loop={true} // Permite que a apresentação de slides continue em loop
                autoplay={{
                    delay: 2000, // Tempo em milissegundos entre cada transição de slide
                    disableOnInteraction: false, // Mantém o autoplay ativo mesmo após interação do usuário
                }}
                breakpoints={{
                    320: { slidesPerView: 1 }, // Define 1 slide visível em telas pequenas (até 320px)
                    768: { slidesPerView: 2 }, // Define 2 slides visíveis em telas médias (até 768px)
                    1024: { slidesPerView: 3 }, // Define 3 slides visíveis em telas grandes (a partir de 1024px)
                }}
            >
                {/* Cada SwiperSlide contém uma imagem de um certificado */}
                <SwiperSlide>
                    <img src="/Certificados/Azure-Az-900.png" alt="Certificação Azure 900" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/Certificados/CentOS-7.png" alt="Certificação CentOS 7" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/Certificados/BI-Empowerdata.png" alt="Certificação BI" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/Certificados/Computacao-em-Nuvem-AWS-Discovery-Day.png" alt="Certificação AWS" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/Certificados/Gerencia-de-Projetos-TI.png" alt="Certificação Gerência de Projetos" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/Certificados/Imersao-Dev-Alura.png" alt="Certificação Imersão Dev Alura" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/Certificados/Implantacao-de-Governanca-TI.png" alt="Certificação Implantação de Governança" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/Certificados/Programacao-Algoritimos-Escalaveis.png" alt="Certificação Algoritmos Escaláveis" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/Certificados/Programacao-para-Dispositivos-Moveis.png" alt="Certificação Programação Móveis" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/Certificados/Programacao-para-internet.png" alt="Certificação Programação para Internet" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/Certificados/Scrum-Foundation.png" alt="Certificação Scrum Foundation" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/Certificados/Virtualizacao-VMware-vShere-6.7.png" alt="Certificação VMware vSphere" />
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Certificates; // Exporta o componente Certificates para uso em outras partes da aplicação
