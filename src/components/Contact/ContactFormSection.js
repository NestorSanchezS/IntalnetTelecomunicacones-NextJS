import React from "react";
import Link from "next/link";

const ContactForm = () => {
  return (
    <section className="contact-area pt-115 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="contact-title">
              <h3 className="title">CONECTATE AHORA</h3>
            </div>
            <form action="#" className="contact-form">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-grp">
                    <input type="text" id="name" autoComplete="off" required />
                    <label htmlFor="name">Nombres</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-grp">
                    <input type="text" id="phone" autoComplete="off" required />
                    <label htmlFor="phone">Numero de celular</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-grp">
                    <input
                      type="email"
                      id="email"
                      autoComplete="off"
                      required
                    />
                    <label htmlFor="email">Email</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-grp">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option>--Escoge una opción--</option>
                      <option>Uso residencial / Negocio</option>
                      <option>Servicio internet dedicado</option>
                      <option>Camaras de seguridad</option>
                      <option>Deseo accesorio tecnologico</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="form-grp">
                <textarea name="message" id="message" required></textarea>
                <label htmlFor="message">Mensaje</label>
              </div>
              <p className="contact-form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="cookies-consent"
                />
                <label htmlFor="cookies-consent" className="form-check-label">
                  Acepto que mis datos enviados se recopilen y almacenen.
                  <Link href="/contact">
                    <a> Privacy Policy</a>
                  </Link>
                </label>
              </p>
              <button type="submit" className="btn">
                Enviar
              </button>
            </form>
          </div>
          <div className="col-lg-4">
            <div className="contact-info-wrap">
              <h3 className="contact-info-title">Contacto Directo</h3>
              <p>
                Somos el proveedor de servicios de Internet de banda ancha en
                Córdoba.
              </p>
              <ul className="contact-info-list">
                <li>
                  <i className="fas fa-phone-alt"></i>
                  <a href="tel:123">+57 314 8042601</a>
                </li>
                <li>
                  <i className="flaticon-email"></i>
                  <a href="mailto:info@example.com">
                    intalnet.monteria@gmail.com
                  </a>
                </li>
                <li>
                  <i className="flaticon-location"></i>
                  <span>
                    Cr. 25 No. 23-74 Calle la Pradera.
                    <br />
                    MONTERIA
                  </span>
                </li>
              </ul>
            </div>
            <div className="contact-info-wrap">
              <h3 className="contact-info-title">Chat En Vivo</h3>
              <p>
                Somos el proveedor de servicios de Internet de banda ancha en
                Córdoba.
              </p>
              <div className="live-chat">
                <div className="icon">
                  <i className="fas fa-comment"></i>
                </div>
                <a href="#" className="live-chat-link">
                  Chatea en vivo con un asesor.
                </a>
              </div>
            </div>
            <div className="contact-info-wrap">
              <h3 className="contact-info-title">¿No te interesa hablar?</h3>
              <p>
                Consulte el centro de ayuda y las preguntas frecuentes más
                recomendadas.{" "}
                <Link href="/">
                  <a>Centro de ayuda y Preguntas Frecuentes.</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
