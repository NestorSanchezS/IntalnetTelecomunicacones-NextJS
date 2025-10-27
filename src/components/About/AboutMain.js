import React from "react";
import dynamic from "next/dynamic";
import Breadcrumb from "../Common/Breadcumb";
import Cta from "../Home/CtaSection";
import About from "./AboutSection";
import CounterStyleOne from "../Elements/Counter/CounterStyleOne";
const Brand = dynamic(() => import("../Home/BrandSection"), {
  ssr: false,
});
const Faq = dynamic(() => import("../Home/FaqSection"), {
  ssr: false,
});

const AboutMain = () => {
  return (
    <main>
      {/* breadcrumb-area-start */}
      <Breadcrumb pageTitle="Nuestra Empresa" />
      {/* breadcrumb-area-end */}

      {/* about-area-start */}
      <About />
      {/* about-area-end */}

      {/* about-area-start */}
      <CounterStyleOne />
      {/* about-area-end */}

      {/* cta-area-start */}
      {/* <Cta /> */}
      {/* cta-area-end */}

      {/* faq-area-start */}
      {/* <Faq /> */}
      {/* faq-area-end */}

      {/* faq-area-start */}
      {/* <Brand paddingclassName="ptt-0" /> */}
      {/* faq-area-end */}

      <section className="fact-area pt-85 pb-110">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-xl-6 col-lg-8 mb-3">
              <div className="section-title mb-40">
                <h2 className="title">Misión</h2>
              </div>
              <div className="video-content-wrap">
                <p>
                En Intalnet brindamos soluciones integrales de conectividad, entretenimiento y telecomunicaciones con altos estándares de calidad, impulsando la transformación digital de nuestros clientes. Nos enfocamos en ofrecer experiencias confiables e innovadoras, a través de tecnología de vanguardia y un equipo humano comprometido y altamente capacitado. Nuestra vocación de servicio nos impulsa a generar oportunidades de acceso a las tecnologías de la información y la comunicación, contribuyendo al desarrollo social y al fortalecimiento de los diferentes sectores en la nueva era digital.
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-8">
              <div className="section-title mb-40">
                <h2 className="title">Visión</h2>
              </div>
              <div className="video-content-wrap">
                <p>
                Ser líderes en el mercado de las telecomunicaciones, reconocidos por nuestra innovación, calidad y compromiso con la satisfacción de nuestros clientes. Aspiramos a consolidarnos como una empresa sostenible y rentable, que impulsa la transformación digital en todos los sectores de la sociedad, generando confianza, desarrollo y oportunidades a través de soluciones tecnológicas de vanguardia y un servicio humano excepcional
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="fact-area mb-5">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-xl-6 col-lg-7">
              <div className="fact-img-wrap">
                <img
                  src="assets/img/images/valores.jpg"
                  className="main-img"
                  alt="img not found"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutMain;
