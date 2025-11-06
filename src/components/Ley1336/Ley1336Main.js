import Link from "next/link";
import React from "react";
import Breadcrumb from "../Common/Breadcumb";

export const Ley1336Main = () => {
  return (
    <main>
      <Breadcrumb pageTitle="Ley 1336 de 2009" />

      {/* Sección Hero */}
      <section className="internet-sano-hero pt-120 pb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="section-title mb-30">
                <span className="badge-internet-sano">Marco Legal</span>
                <h2 className="title">LEY No. 1336 DE 2009</h2>
              </div>
              <div className="hero-content">
                <p>
                  <strong>
                    "POR MEDIO DE LA CUAL SE ADICIONA Y ROBUSTECE LA LEY 679 DE
                    2001, DE LUCHA CONTRA LA EXPLOTACIÓN, LA PORNOGRAFÍA Y EL
                    TURISMO SEXUAL CON NIÑOS, NIÑAS Y ADOLESCENTES".
                  </strong>
                </p>
                <p className="mt-3">EL CONGRESO DE COLOMBIA DECRETA:</p>
                <a
                  href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=37072"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tool-link"
                  style={{ textDecoration: 'none', marginTop: '20px' }}
                >
                  Ver Norma Completa (Fuente Oficial)
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-img-wrap">
                {/* Re-usamos las mismas imágenes de Internet Sano para consistencia */}
                <img
                  src="https://images.unsplash.com/photo-1588072432836-e10032774350?w=800&q=80"
                  className="main-hero-img"
                  alt="Protección Legal"
                />
                <img
                  src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&q=80"
                  className="small-hero-img"
                  alt="Protección Infantil"
                />
                <div className="hero-overlay-shape"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Artículos (usando el estilo de 'normas-section') */}
      <section className="normas-section pt-80 pb-120">
        <div className="container">
          <div className="section-title-center text-center mb-60">
            <h2 className="title">Artículos Principales</h2>
            <p className="subtitle">
              Resumen de las adiciones y robustecimientos a la Ley 679 de 2001
            </p>
          </div>
          <div className="row justify-content-center">
            {/* Artículo 1 */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="norma-card h-100">
                <div className="norma-number">ART. 1</div>
                <h5>Autorregulación en servicios turísticos y de hospedaje</h5>
                <p>
                  Los prestadores de servicios turísticos y los
                  establecimientos que presten el servicio de hospedaje no
                  turístico deberán adoptar, fijar en lugar público y
                  actualizar cuando se les requiera, códigos de conducta
                  eficaces, que promuevan políticas de prevención y eviten la
                  utilización y explotación sexual de niños, niñas y
                  adolescentes en su actividad...
                </p>
                {/* El resto del artículo es extenso, puedes agregarlo si es necesario */}
              </div>
            </div>

            {/* Artículo 2 */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="norma-card h-100">
                <div className="norma-number">ART. 2</div>
                <h5>Autorregulación de aerolíneas</h5>
                <p>
                  Las aerolíneas adoptarán códigos de conducta eficaces que
                  promuevan políticas de prevención y eviten la utilización y
                  explotación sexual de niños, niñas y adolescentes en su
                  actividad. Un modelo de estos sistemas y códigos se
                  elaborará con la participación de organismos
                  representativos del sector...
                </p>
              </div>
            </div>

            {/* Artículo 3 */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="norma-card h-100">
                <div className="norma-number">ART. 3</div>
                <h5>Competencia para exigir información</h5>
                <p>
                  El artículo 10 de la Ley 679 de 2001 tendrá un parágrafo del
                  siguiente tenor: "Parágrafo. El Ministerio de Comunicaciones
                  tendrá competencia para exigir, en el plazo que éste
                  determine, toda la información que considere necesaria a los
                  proveedores de servicios de internet, relacionada con la
                  aplicación de la ley 679...
                </p>
                {/* Nota: Se limpió el texto de SPAM que estaba mezclado en el original */}
              </div>
            </div>

            {/* Artículo 4 */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="norma-card h-100">
                <div className="norma-number">ART. 4</div>
                <h5>Autorregulación de café Internet</h5>
                <p>
                  Todo establecimiento abierto al público que preste servicios
                  de Internet o de café Internet deberá colocar en lugar
                  visible un reglamento de uso público adecuado de la red...
                  incluirá un sistema de "autorregulación y códigos de
                  conducta eficaces que promuevan politicas de prevención de
                  explotación sexual de niños, niñas y adolescentes...
                </p>
              </div>
            </div>

            {/* Artículo 5 */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="norma-card h-100">
                <div className="norma-number">ART. 5</div>
                <h5>Adhesión a los códigos de conducta</h5>
                <p>
                  El Ministerio de Comercio, Industria y Turismo, exigirá a
                  los prestadores de servicios turísticos para efectos de su
                  inscripción en el Registro Nacional de Turismo su adhesión
                  al código de conducta señalado en el artículo 1° de esta
                  Ley...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Copiamos EXACTAMENTE los mismos estilos de InternetSanoMain.js
        para mantener la consistencia visual.
      */}
      <style jsx>{`
        /* Hero Section */
        .internet-sano-hero {
          position: relative;
          overflow: hidden;
          background-color: #f8f9fa;
        }

        .internet-sano-hero::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            135deg,
            rgba(0, 122, 255, 0.05),
            rgba(0, 82, 212, 0.05)
          );
          z-index: 0;
        }

        .container {
          position: relative;
          z-index: 1;
        }

        .badge-internet-sano {
          display: inline-block;
          padding: 8px 20px;
          font-size: 0.85rem;
          font-weight: 600;
          color: white;
          background: linear-gradient(45deg, #007bff, #0056b3);
          border-radius: 20px;
          margin-bottom: 20px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          box-shadow: 0 4px 10px rgba(0, 123, 255, 0.3);
        }

        .title {
          font-size: 2.5rem;
          font-weight: 700;
          line-height: 1.3;
          color: #1a202c;
          margin-bottom: 20px;
        }

        .hero-content p {
          font-size: 1.05rem;
          line-height: 1.8;
          color: #4a5568;
        }
        
        .hero-content p strong {
          text-align: justify;
        }

        .hero-img-wrap {
          position: relative;
          padding-right: 50px;
          padding-bottom: 50px;
          max-width: 550px;
          margin: 0 auto;
        }

        .main-hero-img {
          width: 100%;
          height: auto;
          border-radius: 20px;
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          position: relative;
          z-index: 2;
        }

        .main-hero-img:hover {
          transform: translateY(-5px);
          box-shadow: 0 25px 45px rgba(0, 0, 0, 0.2);
        }

        .small-hero-img {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 180px;
          height: auto;
          border-radius: 15px;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
          border: 4px solid white;
          transition: transform 0.4s ease;
          z-index: 3;
        }

        .small-hero-img:hover {
          transform: scale(1.05) rotate(2deg);
        }

        .hero-overlay-shape {
          position: absolute;
          top: 20px;
          left: -20px;
          width: 80%;
          height: 80%;
          background: linear-gradient(
            45deg,
            rgba(0, 122, 255, 0.2),
            rgba(0, 82, 212, 0.2)
          );
          border-radius: 25px;
          z-index: 1;
          transform: rotate(-5deg);
          pointer-events: none;
        }

        /* Código de Conducta (usado para el botón 'tool-link') */
        .tool-link {
          display: inline-block;
          padding: 12px 30px;
          background: linear-gradient(45deg, #007bff, #0056b3);
          color: white;
          text-decoration: none;
          border-radius: 8px;
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 123, 255, 0.3);
        }

        .tool-link:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 123, 255, 0.4);
          color: white;
        }

        /* Títulos de sección */
        .section-title-center {
            margin-bottom: 60px;
        }

        .section-title-center .title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1a202c;
          margin-bottom: 15px;
        }
        .section-title-center .subtitle {
          font-size: 1.1rem;
          color: #4a5568;
          max-width: 700px;
          margin: 0 auto;
        }

        /* Normas Legales / Artículos */
        .normas-section {
          background: #f8f9fa;
        }
        
        .norma-card {
          background: white;
          border-radius: 15px;
          padding: 35px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        /* Asegura que todas las tarjetas tengan la misma altura */
        .h-100 {
            height: 100%;
        }

        .norma-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 5px;
          background: linear-gradient(45deg, #007bff, #0056b3);
        }

        .norma-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
        }

        .norma-number {
          display: inline-block;
          padding: 10px 20px;
          background: linear-gradient(
            135deg,
            rgba(0, 122, 255, 0.1),
            rgba(0, 82, 212, 0.1)
          );
          color: #007bff;
          font-weight: 800;
          font-size: 1.1rem;
          border-radius: 8px;
          margin-bottom: 20px;
        }

        .norma-card h5 {
          font-size: 1.3rem;
          font-weight: 700;
          color: #1a202c;
          margin-bottom: 10px;
        }

        .norma-card p {
          font-size: 0.95rem;
          line-height: 1.7;
          color: #4a5568;
          margin-bottom: 25px;
        }

        /* Responsive */
        @media (max-width: 991px) {
          .hero-img-wrap {
            padding-right: 0;
            padding-bottom: 0;
            margin-bottom: 50px;
          }

          .small-hero-img {
            position: static;
            margin-top: 20px;
            width: 150px;
          }

          .hero-overlay-shape {
            display: none;
          }

          .title {
            font-size: 2rem;
          }
        }

        @media (max-width: 767px) {
          .internet-sano-hero {
            padding-top: 80px;
            padding-bottom: 60px;
          }

          .title {
            font-size: 1.8rem;
          }

          .hero-content p {
            font-size: 0.95rem;
          }

          .main-hero-img {
            border-radius: 15px;
          }

          .small-hero-img {
            width: 120px;
            border-radius: 10px;
            border: 3px solid white;
          }

          .section-title-center .title {
            font-size: 2rem;
          }

          .norma-card {
            padding: 25px;
          }
        }
      `}</style>
    </main>
  );
};

export default Ley1336Main;