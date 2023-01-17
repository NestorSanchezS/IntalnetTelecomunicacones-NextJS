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
                  Brindar a los usuarios el servicio de conexión para el acceso
                  a internet, a través de equipos altamente tecnológicos y
                  confiables, con el fin de garantizar la calidad, velocidad y
                  oportunidad del servicio, llegando a los hogares,
                  instituciones publicas, empresas privadas, y todos los
                  sectores que requieran alinearse e ingresar a la nueva era
                  digital, creándole a la sociedad oportunidades de acceso a
                  tecnologías de la información y comunicación
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-8">
              <div className="section-title mb-40">
                <h2 className="title">Visión</h2>
              </div>
              <div className="video-content-wrap">
                <p>
                  Ser la empresa líder en la región del Alto Sinú, con
                  tecnología a la vanguardia de las telecomunicaciones,
                  reconocidos por la calidad del servicio, la excelencia y el
                  acompañamiento permanente..
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
