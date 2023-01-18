import Link from "next/link";
import React from "react";
import Breadcrumb from "../Common/Breadcumb";
import Blog from "../Home/BlogSection";

export const InternetSanoMain = () => {
  return (
    <main>
      <Breadcrumb pageTitle="Internet Sano" />
      <section className="about-area pt-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="section-title mb-30">
                <h2 className="title">
                  Protección Contra La Pornografía Infantil.
                </h2>
              </div>
              <div className="about-content">
                <p>
                  INTALNET TELECOMUNICACIONES (Inversiones Zuluaga Sejin S.A.S)
                  como parte de su compromiso social y en cumplimiento de las
                  normas vigentes, informa a sus usuarios sobre la existencia y
                  los alcances de la Ley 679 de 2001, y sus decretos
                  reglamentario. Si desea conocer el texto completo de la Ley,
                  puede ingresar a la secretaría del senado en:
                  http://www.secretariasenado.gov.co
                </p>
                <p className="mt-3">
                  Los niños cada vez tienen acceso a las nuevas tecnologías en
                  edades más tempranas ya que principalmente las usan para
                  llegar hasta recursos educativos o de entretenimiento. Sin
                  embargo, dejar al niño sólo con una tablet o un Smartphone o
                  computador sin llevar a cabo unas simples medidas de
                  seguridad, les puede exponer a ciertos peligros. Es importante
                  que los padres eduquemos a nuestros hijos y les avisemos de
                  los riesgos que supone la navegación en Internet y el uso de
                  las redes sociales. Saber qué puede ocurrir les mantendrá
                  alerta.
                </p>
                <p className="mt-3">
                  En los siguientes lugares de Internet se pueden realizar las
                  denuncias relacionadas con sitios y contenidos de pornografía
                  de menores de edad y páginas electrónicas en las que se
                  ofrezcan servicios sexuales con niños:
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-img-wrap">
                <img
                  src="/assets/img/images/internet_sano.jpg"
                  alt="img not found"
                />
                <img
                  src="/assets/img/images/internet_sano2.jpg"
                  className="main-img"
                  alt="img not found"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Blog />
    </main>
  );
};
