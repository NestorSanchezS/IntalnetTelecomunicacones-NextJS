import React from "react";
import Link from "next/link";
import { Formik } from "formik";
import { formContactusSchema } from "../../schemas";
import emailjs from "@emailjs/browser";

const onSubmit = async (values, actions) => {
  // console.log(values);
  // console.log(actions);
  emailjs
    .send("service_ii3fhsq", "template_xij9e9k", values, "9lX7hXXub4LjBAc_z")
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const ContactForm = () => {
  return (
    <section className="contact-area pt-115 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="contact-title">
              <h3 className="title">CONECTATE AHORA</h3>
            </div>

            <Formik
              initialValues={{
                servi: "",
                address: "",
                name: "",
                phone: "",
                email: "",
                message: "",
              }}
              validationSchema={formContactusSchema}
              onSubmit={onSubmit}
            >
              {({
                isSubmitting,
                touched,
                handleSubmit,
                errors,
                getFieldProps,
              }) => (
                <form
                  onSubmit={handleSubmit}
                  className="contact-form"
                  action="/"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-grp">
                        <input
                          type="text"
                          id="name"
                          aria-required="true"
                          className={` ${
                            errors.name && touched.name ? "input-error" : ""
                          }`}
                          {...getFieldProps("name")}
                        />

                        <label htmlFor="name">Nombres</label>
                        {errors.name && touched.name && (
                          <p className="error">{errors.name}</p>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-grp">
                        <input
                          type="text"
                          id="phone"
                          aria-required="true"
                          className={` ${
                            errors.phone && touched.phone ? "input-error" : ""
                          }`}
                          {...getFieldProps("phone")}
                        />
                        <label htmlFor="phone">Numero de celular</label>
                        {errors.phone && touched.phone && (
                          <p className="error">{errors.phone}</p>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-grp">
                        <input
                          type="email"
                          id="email"
                          aria-required="true"
                          className={` ${
                            errors.email && touched.email ? "input-error" : ""
                          }`}
                          {...getFieldProps("email")}
                        />

                        <label htmlFor="email">Email</label>
                        {errors.email && touched.email && (
                          <p className="error">{errors.email}</p>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-grp">
                        <select
                          aria-label="Default select example"
                          className={`form-control form-select ${
                            errors.servi && touched.servi ? "input-error" : ""
                          }`}
                          id="select"
                          {...getFieldProps("servi")}
                        >
                          <option>--Escoge una opción--</option>
                          <option>Uso residencial / Negocio</option>
                          <option>Servicio internet dedicado</option>
                          <option>Camaras de seguridad</option>
                          <option>Deseo accesorio tecnologico</option>
                        </select>
                        {errors.servi && touched.servi && (
                          <p className="error">{errors.address}</p>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-grp">
                        <input
                          type="text"
                          id="address"
                          className={` ${
                            errors.address && touched.address
                              ? "input-error"
                              : ""
                          }`}
                          {...getFieldProps("address")}
                        />
                        <label htmlFor="email">Dirección</label>
                        {errors.address && touched.address && (
                          <p className="error">{errors.address}</p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="form-grp">
                    <textarea
                      name="message"
                      id="message"
                      className={`form-control ${
                        errors.message && touched.message ? "input-error" : ""
                      }`}
                      {...getFieldProps("message")}
                    ></textarea>
                    <label htmlFor="message">Mensaje</label>
                    {errors.message && touched.message && (
                      <p className="error">{errors.message}</p>
                    )}
                  </div>
                  <p className="contact-form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="cookies-consent"
                    />
                    <label
                      htmlFor="cookies-consent"
                      className="form-check-label"
                    >
                      Acepto que mis datos enviados se recopilen y almacenen.
                      <Link href="/contact">
                        <a> Privacy Policy</a>
                      </Link>
                    </label>
                  </p>
                  <button
                    type="submit"
                    id=" button_submit-disabled"
                    className="btn"
                    disabled={isSubmitting}
                  >
                    Enviar
                  </button>
                </form>
              )}
            </Formik>
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
