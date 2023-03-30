import React from "react";
import ModalVideo from "react-modal-video";

const Information = () => {
  return (
    <React.Fragment>
      <section className="inner-services-area pt-120 mb-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-6">
              <div className="section-title mb-30">
                <h2 className="title">Incremento de tarifas 2023</h2>
              </div>
              <div className="services-inner-content">
                <p className="mb-1">
                  Debido a los incrementos autorizados por el gobierno y a los
                  costos que debemos incurrrir para prestar el servicio, nos
                  vemos en la obligación de aumentar las tarifas.
                </p>
                <p className="mb-1">
                  Por eso, queremos contarte que este año a partir de tu factura
                  emitida en Mayo 2023, veras un incremento el valor del
                  servicio de internet de <b>$5.000</b>.
                </p>
                <p>
                  Nuestro objetivo sigue siendo ofrecerte un servicio de calidad
                  y agradecemos de antemano tu <b>confianza</b> y{" "}
                  <b>comprensión</b>.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-img-wrap">
                <img
                  src="/assets/img/images/about_img01.jpg"
                  alt="img not found"
                />
                <img
                  src="/assets/img/images/about_img02.jpg"
                  className="main-img"
                  alt="img not found"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Information;
