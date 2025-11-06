import Link from "next/link";
import React from "react";
import Breadcrumb from "../Common/Breadcumb";

export const InternetSanoMain = () => {
  return (
    <main>
      <Breadcrumb pageTitle="Internet Sano" />
      
      {/* Sección Principal */}
      <section className="internet-sano-hero pt-120 pb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="section-title mb-30">
                <span className="badge-internet-sano">Compromiso Social</span>
                <h2 className="title">
                  INTERNET SANO
                </h2>
              </div>
              <div className="hero-content">
                <p>
                  <strong>INTALNET SAS</strong> como parte de su compromiso social y en cumplimiento de las 
                  normas vigentes, informa a sus usuarios sobre la existencia y los alcances de la 
                  Ley 679 de 2001, y sus decretos reglamentarios, los cuales pueden ser consultados 
                  y sobre los sitios en que nuestros usuarios pueden denunciar ante las autoridades 
                  competentes sitios en la red con presencia de contenidos de pornografía infantil.
                </p>
                <p className="mt-3">
                  Internet Sano es la campaña del Ministerio de Tecnologías de la Información y las 
                  Comunicaciones por medio de la cual se pretende generar opinión y conocimiento en 
                  torno al tema de la explotación infantil en Internet, destacando mensajes de 
                  prevención, de denuncia, informativos e institucionales.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-img-wrap">
                <img
                  src="https://images.unsplash.com/photo-1588072432836-e10032774350?w=800&q=80"
                  className="main-hero-img"
                  alt="Internet Sano"
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

      {/* Código de Conducta */}
      <section className="codigo-conducta-section pt-80 pb-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="codigo-box">
                <div className="codigo-icon">
                  <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3>Código de Conducta</h3>
                <p>
                  <strong>INTALNET SAS</strong> adoptó el Código de Conducta para el manejo y aprovechamiento 
                  de redes globales de información y la protección de los menores de edad contra la 
                  pornografía infantil con el objetivo de prevenir la divulgación de material de 
                  pornografía infantil a través de las redes y equipos de cómputo bajo su directa 
                  administración, con el fin de prevenir el acceso de menores de edad a cualquier 
                  tipo de material pornográfico, como herramienta para la lucha contra la pornografía infantil.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lugares para Denunciar */}
      <section className="denuncia-section pt-80 pb-80">
        <div className="container">
          <div className="section-title-center text-center mb-60">
            <h2 className="title">Lugares para Realizar Denuncias</h2>
            <p className="subtitle">
              En los siguientes lugares de Internet se pueden realizar las denuncias relacionadas 
              con sitios y contenidos de pornografía de menores de edad
            </p>
          </div>
          <div className="row">
            {/* MinTIC */}
            <div className="col-lg-6 col-md-6 mb-4">
              <div className="denuncia-card">
                <div className="card-header">
                  <h4>MINISTERIO DE TECNOLOGÍAS DE LA INFORMACIÓN Y LAS COMUNICACIONES</h4>
                </div>
                <div className="card-body">
                  <div className="info-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>Línea Anticorrupción: 01-800-0912667</span>
                  </div>
                  <div className="info-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    <a href="https://www.mintic.gov.co/portal/inicio/" target="_blank" rel="noopener noreferrer">
                      www.mintic.gov.co
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Fiscalía */}
            <div className="col-lg-6 col-md-6 mb-4">
              <div className="denuncia-card">
                <div className="card-header">
                  <h4>FISCALÍA GENERAL DE LA NACIÓN</h4>
                </div>
                <div className="card-body">
                  <div className="info-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>Línea nacional gratuita: 01 8000 9197 48</span>
                  </div>
                  <div className="info-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    <a href="https://www.fiscalia.gov.co/colombia/" target="_blank" rel="noopener noreferrer">
                      www.fiscalia.gov.co
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* DIJIN */}
            <div className="col-lg-6 col-md-6 mb-4">
              <div className="denuncia-card">
                <div className="card-header">
                  <h4>DIRECCIÓN CENTRAL DE POLICÍA JUDICIAL – DIJIN</h4>
                </div>
                <div className="card-body">
                  <div className="info-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Lun - Vie: 08:00 a.m. – 12:00 p.m. y 02:00 p.m. – 05:00 p.m.</span>
                  </div>
                  <div className="info-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>PBX: (601) 5159000</span>
                  </div>
                  <div className="info-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    <a href="https://www.policia.gov.co/especializados/judicial" target="_blank" rel="noopener noreferrer">
                      www.policia.gov.co
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* ICBF */}
            <div className="col-lg-6 col-md-6 mb-4">
              <div className="denuncia-card">
                <div className="card-header">
                  <h4>INSTITUTO COLOMBIANO DE BIENESTAR FAMILIAR</h4>
                </div>
                <div className="card-body">
                  <div className="info-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>01 8000 918080 | PBX: +57 601 4377630</span>
                  </div>
                  <div className="info-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Lun - Vie: 8:00 a.m. a 5:00 p.m.</span>
                  </div>
                  <div className="info-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    <a href="https://www.icbf.gov.co" target="_blank" rel="noopener noreferrer">
                      www.icbf.gov.co
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Te Protejo */}
            <div className="col-lg-12 mb-4">
              <div className="denuncia-card destacada">
                <div className="card-header">
                  <h4>TE PROTEJO / LÍNEA DE REPORTE</h4>
                </div>
                <div className="card-body">
                  <div className="info-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    <a href="https://teprotejocolombia.org/" target="_blank" rel="noopener noreferrer">
                      www.teprotejocolombia.org
                    </a>
                  </div>
                  <div className="info-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:contactenos@teprotejo.org">contactenos@teprotejo.org</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Control Parental */}
      <section className="control-parental-section pt-80 pb-80">
        <div className="container">
          <div className="section-title-center text-center mb-60">
            <h2 className="title">Mecanismos de Control Parental</h2>
            <p className="subtitle">
              Herramientas de filtrado y control que pueden ser instaladas en sus equipos
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="tool-card">
                <div className="tool-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4>OpenDNS</h4>
                <a href="http://www.opendns.com/" target="_blank" rel="noopener noreferrer" className="tool-link">
                  Visitar sitio
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="tool-card">
                <div className="tool-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4>DansGuardian</h4>
                <a href="http://dansguardian.org/" target="_blank" rel="noopener noreferrer" className="tool-link">
                  Visitar sitio
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="tool-card">
                <div className="tool-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4>Norton Family</h4>
                <a href="https://onlinefamily.norton.com" target="_blank" rel="noopener noreferrer" className="tool-link">
                  Visitar sitio
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Normas Legales */}
      <section className="normas-section pt-80 pb-120">
        <div className="container">
          <div className="section-title-center text-center mb-60">
            <h2 className="title">Marco Legal</h2>
            <p className="subtitle">Normatividad vigente para la protección de menores en internet</p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="norma-card">
                <div className="norma-number">LEY 679</div>
                <h5>LEY 679 DE 2001</h5>
                <p className="norma-date">(agosto 3) - Diario Oficial No. 44.509</p>
                <p>
                  Estatuto para prevenir y contrarrestar la explotación, la pornografía y el 
                  turismo sexual con menores, en desarrollo del artículo 44 de la Constitución.
                </p>
                <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=18309" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="norma-link">
                  Ver norma completa →
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="norma-card">
                <div className="norma-number">DECRETO 067</div>
                <h5>DECRETO 067 DE 2003</h5>
                <p className="norma-date">(enero 15) - Diario Oficial 45.066</p>
                <p>
                  Establece las medidas técnicas y administrativas destinadas a prevenir el 
                  acceso de menores de edad a cualquier modalidad de información pornográfica 
                  en Internet.
                </p>
                <a href="https://www.icbf.gov.co/cargues/avance/docs/decreto_0067_2003.htm" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="norma-link">
                  Ver norma completa →
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="norma-card">
                <div className="norma-number">DECRETO 1524</div>
                <h5>DECRETO 1524 DE 2002</h5>
                <p className="norma-date">Publicado el 31 de julio de 2002</p>
                <p>
                  Reglamenta el artículo 5° de la Ley 679 de 2001. Los niños serán protegidos 
                  contra toda forma de abandono, violencia, secuestro, venta y abuso sexual.
                </p>
                <a href="https://www.enticconfio.gov.co/decreto-1524-de-2002" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="norma-link">
                  Ver norma completa →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

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
          background: linear-gradient(135deg, rgba(0, 122, 255, 0.05), rgba(0, 82, 212, 0.05));
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
          background: linear-gradient(45deg, rgba(0, 122, 255, 0.2), rgba(0, 82, 212, 0.2));
          border-radius: 25px;
          z-index: 1;
          transform: rotate(-5deg);
          pointer-events: none;
        }

        /* Código de Conducta */
        .codigo-conducta-section {
          background: white;
        }

        .codigo-box {
          background: linear-gradient(135deg, rgba(0, 122, 255, 0.08), rgba(0, 82, 212, 0.08));
          border-left: 5px solid #007bff;
          padding: 40px;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease;
        }

        .codigo-box:hover {
          transform: translateY(-5px);
        }

        .codigo-icon {
          width: 70px;
          height: 70px;
          background: linear-gradient(45deg, #007bff, #0056b3);
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          margin-bottom: 25px;
          box-shadow: 0 8px 20px rgba(0, 123, 255, 0.3);
        }

        .codigo-box h3 {
          font-size: 1.8rem;
          font-weight: 700;
          color: #1a202c;
          margin-bottom: 20px;
        }

        .codigo-box p {
          font-size: 1.05rem;
          line-height: 1.8;
          color: #4a5568;
          margin: 0;
        }

        /* Sección de Denuncias */
        .denuncia-section {
          background: #f8f9fa;
        }

        .section-title-center .title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1a202c;
          margin-bottom: 15px;
        }.section-title-center .subtitle {
          font-size: 1.1rem;
          color: #4a5568;
          max-width: 700px;
          margin: 0 auto;
        }

        .denuncia-card {
          background: white;
          border-radius: 15px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          height: 100%;
        }

        .denuncia-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
        }

        .denuncia-card.destacada {
          border: 2px solid #007bff;
        }

        .denuncia-card .card-header {
          background: linear-gradient(45deg, #007bff, #0056b3);
          padding: 20px;
          min-height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .denuncia-card .card-header h4 {
          color: white;
          font-size: 1.1rem;
          font-weight: 700;
          text-align: center;
          margin: 0;
          line-height: 1.4;
        }

        .denuncia-card .card-body {
          padding: 25px;
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 15px;
          padding-bottom: 15px;
          border-bottom: 1px solid #e2e8f0;
        }

        .info-item:last-child {
          margin-bottom: 0;
          padding-bottom: 0;
          border-bottom: none;
        }

        .info-item svg {
          flex-shrink: 0;
          color: #007bff;
        }

        .info-item span {
          color: #4a5568;
          font-size: 0.95rem;
          line-height: 1.5;
        }

        .info-item a {
          color: #007bff;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.3s ease;
          word-break: break-word;
        }

        .info-item a:hover {
          color: #0056b3;
          text-decoration: underline;
        }

        /* Control Parental */
        .control-parental-section {
          background: white;
        }

        .tool-card {
          background: white;
          border-radius: 15px;
          padding: 35px;
          text-align: center;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          height: 100%;
        }

        .tool-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
        }

        .tool-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, rgba(0, 122, 255, 0.1), rgba(0, 82, 212, 0.1));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 25px;
          color: #007bff;
          transition: all 0.3s ease;
        }

        .tool-card:hover .tool-icon {
          background: linear-gradient(45deg, #007bff, #0056b3);
          color: white;
          transform: scale(1.1);
        }

        .tool-card h4 {
          font-size: 1.4rem;
          font-weight: 700;
          color: #1a202c;
          margin-bottom: 20px;
        }

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

        /* Normas Legales */
        .normas-section {
          background: #f8f9fa;
        }

        .norma-card {
          background: white;
          border-radius: 15px;
          padding: 35px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          height: 100%;
          position: relative;
          overflow: hidden;
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
          background: linear-gradient(135deg, rgba(0, 122, 255, 0.1), rgba(0, 82, 212, 0.1));
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

        .norma-date {
          font-size: 0.85rem;
          color: #718096;
          margin-bottom: 15px;
          font-style: italic;
        }

        .norma-card p {
          font-size: 0.95rem;
          line-height: 1.7;
          color: #4a5568;
          margin-bottom: 25px;
        }

        .norma-link {
          display: inline-flex;
          align-items: center;
          color: #007bff;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .norma-link:hover {
          color: #0056b3;
          transform: translateX(5px);
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

          .codigo-box {
            padding: 30px;
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

          .codigo-box {
            padding: 25px;
          }

          .codigo-icon {
            width: 60px;
            height: 60px;
          }

          .codigo-box h3 {
            font-size: 1.5rem;
          }

          .section-title-center .title {
            font-size: 2rem;
          }

          .denuncia-card .card-header {
            min-height: 80px;
            padding: 15px;
          }

          .denuncia-card .card-header h4 {
            font-size: 1rem;
          }

          .denuncia-card .card-body {
            padding: 20px;
          }

          .tool-card {
            padding: 25px;
          }

          .tool-icon {
            width: 70px;
            height: 70px;
          }

          .norma-card {
            padding: 25px;
          }
        }

        @media (max-width: 575px) {
          .info-item {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }

          .info-item a {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </main>
  );
};