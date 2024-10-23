import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay } from 'swiper/modules'; // Importe o módulo Autoplay
import './styles/Certificates.css';

const Certificates = () => {
    return (
        <section id='Certificates'>
            <h2>Certificados</h2>

            <Swiper
                modules={[Autoplay]}  // Adicione o Autoplay como um módulo
                spaceBetween={30}
                slidesPerView={3}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
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
                    <img src="/Certificados/Implantacao-de-Governança-TI.png" alt="Certificação Implantação de Governança" />
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

export default Certificates;
