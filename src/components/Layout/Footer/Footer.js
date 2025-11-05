import React from "react";
import Link from "next/link";
import FooterBottom from "./FooterBottom";
// import Head from "next/head"; // <-- ELIMINADO

const Footer = () => {
  return (
    // <React.Fragment> {/* <-- ELIMINADO */}
      <footer className="footer-modern-area">
        {/* <Head> ... </Head> */} {/* <-- ELIMINADO */}
        <div className="footer-modern-wrap">
          <div className="container">
            <div className="row justify-content-between">
              {/* Columna 1: Horarios de Atención y Redes Sociales */}
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="footer-widget-modern">
                  {/* Título para los horarios */}
                  <div className="fw-title-modern">
                    <h4 className="title">Horarios de Atención</h4>
                  </div>
                  {/* Horarios (movidos de la última columna) */}
                  <ul className="fw-schedule-list-modern">
                    <li>
                      Lunes - Viernes
                      <span>8:00 AM - 12:00 PM & 2:00 PM - 6:00 PM</span>
                    </li>
                    <li>
                      Sábados
                      <span>8:00 AM - 12:00 PM</span>
                    </li>
                    <li>
                      Domingos & Festivos
                      <span className="close">Cerrado</span>
                    </li>
                  </ul>
                  {/* Redes Sociales */}
                  <div className="footer-social-modern mt-30"> {/* mt-30 para un poco de espacio */}
                    <a
                      href="https://www.facebook.com/profile.php?id=100064053851230"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/intalnet_telecomunicaciones/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* Columna 2: Sedes (Mantiene su contenido) */}
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="footer-widget-modern">
                  <div className="fw-title-modern">
                    <h4 className="title">Nuestras Sedes</h4>
                  </div>
                  <ul className="fw-list-modern location-list">
                    <li>
                      <strong>Montería:</strong> Cr. 25 No. 23-74 Calle la Pradera.
                    </li>
                    <li>
                      <strong>Tierralta:</strong> Cr. 13 # 5-31 Barrio El Prado.
                    </li>
                    <li>
                      <strong>Valencia:</strong> Carrera 14 # 12-26 Barrio Centro.
                    </li>
                    <li>
                      <strong>San Pedro:</strong> Calle 49 No 45-00 Barrio Alfonso López.
                    </li>
                    <li>
                      <strong>Puerto Libertador:</strong> Carrera 10 # 11-20 Barrio Camilo Jiménez.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Columna 3: Servicios (Mantiene su contenido) */}
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="footer-widget-modern">
                  <div className="fw-title-modern">
                    <h4 className="title">Servicios</h4>
                  </div>
                  <ul className="fw-list-modern service-list">
                    <li><a>Canales Full HD</a></li>
                    <li><a>Internet Dedicado</a></li>
                    <li><a>Internet de Alta Velocidad</a></li>
                    <li><a>Fibra Óptica</a></li>
                    <li><a>Accesorios de Tecnología</a></li>
                  </ul>
                </div>
              </div>

              {/* Columna 4: Contacto (Ahora solo tiene los teléfonos) */}
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="footer-widget-modern">
                  {/* Contacto */}
                  <div className="fw-title-modern">
                    <h4 className="title">Contacto</h4>
                  </div>
                  <ul className="fw-list-modern contact-list">
                    <li>
                      <span>Montería:</span>
                      <a href="tel:+573148042601">(+57) 314 8042601</a>
                    </li>
                    <li>
                      <span>Tierralta:</span>
                      <a href="tel:+573113934218">(+57) 311 3934218</a>
                    </li>
                    <li>
                      <span>Valencia:</span>
                      <a href="tel:+573152522215">(+57) 315 2522215</a>
                    </li>
                    <li>
                      <span>San Pedro:</span>
                      <a href="tel:+573135745320">(+57) 321 7915903</a> {/* Corrección de un número */}
                    </li>
                    <li>
                      <span>Puerto Libertador:</span>
                      <a href="tel:+573135745320">(+57) 313 5745320</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <FooterBottom />

        <style jsx>{`
          /* --- ESTILOS GENERALES DEL FOOTER --- */
          .footer-modern-area {
            background-color: #1A202C; /* Mismo fondo de Intalflix */
            color: #a0aec0; /* Texto gris-azulado */
            position: relative;
          }
          .footer-modern-wrap {
            padding: 60px 0 40px; 
          }
          .footer-widget-modern {
            margin-bottom: 30px; /* Espacio para responsive */
          }

          /* --- TÍTULOS DE WIDGET --- */
          .fw-title-modern {
            margin-bottom: 25px;
          }
          .fw-title-modern .title {
            font-size: 1.5rem;
            font-weight: 700;
            color: #ffffff;
            margin: 0;
            position: relative;
            padding-bottom: 10px;
          }
          .fw-title-modern .title::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 40px;
            height: 3px;
            background-color: #007bff; /* Acento azul */
          }
          
          /* --- LISTA DE HORARIOS (Primera Columna) --- */
          .fw-schedule-list-modern {
            list-style: none;
            padding: 0;
            margin: 0;
          }
          .fw-schedule-list-modern li {
            color: #ffffff;
            font-weight: 600;
            font-size: 0.95rem;
            margin-bottom: 10px;
          }
          .fw-schedule-list-modern li span {
            display: block;
            font-size: 0.9rem;
            color: #a0aec0;
            font-weight: 400;
            margin-top: 4px;
          }
          .fw-schedule-list-modern li span.close {
            color: #e53e3e; /* Rojo para "Cerrado" */
            font-weight: 600;
          }

          /* --- REDES SOCIALES (Primera Columna) --- */
          .footer-social-modern {
            margin-top: 30px; /* Espacio entre horarios y redes */
          }
          .footer-social-modern a {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            font-size: 0.9rem;
            background-color: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            color: #a0aec0;
            border-radius: 50%;
            margin-right: 10px;
            transition: all 0.3s ease;
            text-decoration: none;
          }
          .footer-social-modern a:hover {
            background-color: #007bff;
            border-color: #007bff;
            color: #ffffff;
            transform: translateY(-3px);
          }

          /* --- LISTAS GENERALES (Sedes, Servicios) --- */
          .fw-list-modern {
            list-style: none;
            padding: 0;
            margin: 0;
          }
          .fw-list-modern li {
            font-size: 0.95rem;
            margin-bottom: 12px;
            line-height: 1.6;
          }
          .fw-list-modern li strong {
            color: #ffffff;
          }
          
          .service-list li {
            position: relative;
            /* padding-left: 20px; */ /* <-- ELIMINADO */
          }
          
          /* --- ELIMINADO ---
          .service-list li::before {
            content: "\\f105"; 
            font-family: "Font Awesome 5 Free";
            font-weight: 900;
            position: absolute;
            left: 0;
            top: 0;
            color: #007bff;
            transition: all 0.3s ease;
          }
          .service-list li:hover::before {
            left: 3px;
          }
          */

          .service-list li a {
            color: #a0aec0;
            text-decoration: none;
            transition: all 0.3s ease;
          }
          .service-list li a:hover {
            color: #ffffff;
          }
          
          /* --- LISTA DE CONTACTO (Última Columna) --- */
          .contact-list li {
            display: flex;
            flex-direction: column;
            margin-bottom: 15px;
          }
          .contact-list li span {
            font-weight: 700;
            color: #ffffff;
            font-size: 0.9rem;
          }
          .contact-list li a {
            font-size: 1rem;
            color: #a0aec0;
            text-decoration: none;
            transition: color 0.3s ease;
          }
          .contact-list li a:hover {
            color: #007bff;
          }

          /* --- Responsive Adjustments --- */
          @media (max-width: 991px) {
            .footer-modern-wrap {
              padding: 50px 0 20px;
            }
            .footer-widget-modern {
              margin-bottom: 40px;
              text-align: center; /* Centrar contenido en pantallas más pequeñas */
            }
            .fw-title-modern .title::after {
              left: 50%;
              transform: translateX(-50%);
            }
            .footer-social-modern {
              justify-content: center;
              display: flex; /* Asegura que los iconos se centren */
            }
          }

          @media (max-width: 767px) {
            .fw-title-modern .title {
              font-size: 1.3rem;
            }
            .fw-list-modern li, .fw-schedule-list-modern li {
              font-size: 0.9rem;
            }
            .fw-schedule-list-modern li span {
              font-size: 0.85rem;
            }
            .contact-list li a {
              font-size: 0.95rem;
            }
          }
        `}</style>
      </footer>
    // </React.Fragment> // <-- ELIMINADO
  );
};

export default Footer;

