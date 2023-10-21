import React from "react";
import Link from "next/link";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  return (
    <footer>
      <div className="footer-wrap">
        <div className="container">
          <div className="row g-0">
            <div className="col-3">
              <div className="footer-widget">
                <div className="footer-contact">
                  <div className="footer-call">
                    <div className="icon">
                      <i className="flaticon-support"></i>
                    </div>
                    <div className="content">
                      <span>Montería - Córdoba</span>
                      <h6 className="title">
                        <a href="tel:123">(+57) 314 8042601</a>
                      </h6>
                    </div>
                  </div>
                  <div className="footer-call">
                    <div className="icon">
                      <i className="flaticon-support"></i>
                    </div>
                    <div className="content">
                      <span>Tierralta - Córdoba</span>
                      <h6 className="title">
                        <a href="tel:123">(+57) 311 3934218</a>
                      </h6>
                    </div>
                  </div>
                  <div className="footer-call">
                    <div className="icon">
                      <i className="flaticon-support"></i>
                    </div>
                    <div className="content">
                      <span>Valencia - Córdoba</span>
                      <h6 className="title">
                        <a href="tel:123">(+57) 315 2522215</a>
                      </h6>
                    </div>
                  </div>
                  <div className="footer-call">
                    <div className="icon">
                      <i className="flaticon-support"></i>
                    </div>
                    <div className="content">
                      <span>San Pedro de Urabá - Antioquia</span>
                      <h6 className="title">
                        <a href="tel:123">(+57) 313 5745320</a>
                      </h6>
                    </div>
                  </div>
                  <div className="footer-call">
                    <div className="icon">
                      <i className="flaticon-support"></i>
                    </div>
                    <div className="content">
                      <span>Puerto Libertador - Córdoba</span>
                      <h6 className="title">
                        <a href="tel:123">(+57) 313 5745320</a>
                      </h6>
                    </div>
                  </div>
                  {/* <h6 className="title">Contact info</h6>
                                    <p>Street House, Greater London NW1 8JR, UK</p> */}
                  <div className="footer-social">
                    <a href="#" target="_blank">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      href="https://www.facebook.com/profile.php?id=100064053851230"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/intalnet_telecomunicaciones/"
                      target="_blank"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" target="_blank">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-2">
              <div className="footer-widget">
                <div className="fw-title">
                  <h4 className="title">Visitanos</h4>
                </div>
                <ul className="fw-list">
                  <li>
                    <a>
                      Cr. 25 No. 23-74 Calle la Pradera.
                      <strong> Montería</strong>
                    </a>
                  </li>
                  <li>
                    <a>
                      Cr. 13 # 5-31 Barrio El Prado. <strong>Tierralta</strong>{" "}
                    </a>
                  </li>
                  <li>
                    <a>
                      Carrera 14 # 12-26 Barrio Centro.{" "}
                      <strong>Valencia</strong>{" "}
                    </a>
                  </li>
                  <li>
                    <a>
                      Calle 49 No 45-00 Barrio Alfonso López.{" "}
                      <strong>San Pedro</strong>
                    </a>
                  </li>
                  <li>
                    <a>
                    Carrera 10 # 11-20 Barrio Camilo Jiménez.{" "}
                      <strong>Puerto Libertador</strong>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-2">
              <div className="footer-widget">
                <div className="fw-title">
                  <h4 className="title">Servicios</h4>
                </div>
                <ul className="fw-list">
                  <li>
                    <a>Canales Full HD.</a>
                  </li>
                  <li>
                    <a>Internet Dedicado.</a>
                  </li>
                  <li>
                    <a>Internet de Alta Velocidad.</a>
                  </li>
                  <li>
                    <a>Fibra Optica.</a>
                  </li>
                  <li>
                    <a>Accesorios de Tecnologia.</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-1">
              <div className="footer-widget">
                <div className="fw-title">
                  <h4 className="title">Horario de apertura:</h4>
                </div>
                <ul className="fw-schedule-list">
                  <li>
                    Saturday - Lunes - Viernes{" "}
                    <span>8:00 AM - 12:00 PM & 2:00 PM - 6:00 PM</span>
                  </li>
                  <li>
                    Sábados<span>8:00 AM - 12:00 PM</span>
                  </li>
                  <li>
                    Domingos & Festivos : <span className="close">Cerrado</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterBottom />
    </footer>
  );
};

export default Footer;
