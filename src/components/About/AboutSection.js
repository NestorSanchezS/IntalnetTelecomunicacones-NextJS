import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <section className="about-area pt-120">
      <div className="container">
        <div className="row align-items-center">
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
          <div className="col-lg-6">
            <div className="section-title mb-30">
              <h2 className="title">¿Quiénes Somos?</h2>
            </div>
            <div className="about-content">
              <p>
                Somos INTALNET TELECOMUNICACIONES, creada a partir del 11 de
                septiembre de 2015 en Montería - Córdoba, una empresa prestadora
                de servicios de telecomunicaciones para cubrir las necesidades
                de conexión y tecnologías de la información en algunos
                municipios del departamento de Córdoba.
              </p>
              <ul className="about-list">
                <li>Equipo técnico experto</li>
                <li>Mejor red</li>
                <li>Más de 50 áreas de cobertura</li>
                <li>Servicio tecnico inmediato</li>
                <li>Planes a precios Razonables</li>
                <li>De confianza y recomendado</li>
              </ul>
              <Link href="/contact">
                <a className="btn transparent-btn">Contactenos</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
