import React from "react";

const Queries = () => {
  return (
    <section
      className="queries-area"
      style={{ backgroundImage: `url(${"/assets/img/bg/queries_bg.jpg"})` }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-8">
            <div className="section-title text-center white-title mb-50">
              <h2 className="title">
                ¿Aún Necesitas Ayuda Para Saber Más Consultas?
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="queries-form">
              <form action="#">
                <div className="row">
                  <div className="col">
                    <div className="form-grp">
                      <input type="text" placeholder="Tu Nombre" />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-grp">
                      <input type="email" placeholder="Tu Email" />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-grp">
                      <input type="text" placeholder="Pregunta" />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-grp text-end">
                      <button className="btn">Enviar</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Queries;
