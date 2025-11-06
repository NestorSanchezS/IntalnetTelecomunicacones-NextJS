import React, { useState } from "react"; // <-- 1. Importar useState
import { Formik } from "formik";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { formPqrSchema } from "../../schemas";
import Breadcrumb from "../Common/Breadcumb";
import { ServiceSectionCard } from "../Services/ServiceSectionCard";
import Brand from "../Home/BrandSection";

// Los estilos para el mensaje de éxito
const successMessageStyle = {
  backgroundColor: "#d4edda",
  color: "#155724",
  border: "1px solid #c3e6cb",
  padding: "15px",
  borderRadius: "5px",
  margin: "10px 0",
  textAlign: "center",
  fontWeight: "bold",
};

export const PqrMain = () => {
  // <-- 2. Estado para el mensaje de éxito
  const [isSubmitted, setIsSubmitted] = useState(false);

  // <-- 3. Mover onSubmit dentro del componente
  const onSubmit = async (values, actions) => {
    try {
      await emailjs.send(
        "service_qtgrjty", // Tu Service ID
        "template_3qxrd59", // Tu Template ID de PQR
        values,
        "4LKILnUTxxRAYn2YR" // Tu Public Key
      );

      // Éxito:
      setIsSubmitted(true); // Mostrar el mensaje de éxito
      actions.resetForm(); // Limpiar el formulario

      // Ocultar el mensaje después de 5 segundos
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);

    } catch (error) {
      console.log("FALLÓ...", error);
    }
  };

  return (
    <main>
      <Breadcrumb pageTitle="PQR´S" />
      <Brand />
      <section className="contact-area pt-115 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="contact-title">
                <h3 className="title">Peticiones, Quejas y Reclamos</h3>
              </div>

              {/* <-- 4. Mensaje de éxito (se muestra condicionalmente) --> */}
              {isSubmitted && (
                <div style={successMessageStyle}>
                  ¡PQR enviada con éxito! Te contactaremos pronto.
                </div>
              )}

              <Formik
                initialValues={{
                  addresspqr: "",
                  namepqr: "",
                  phonepqr: "",
                  emailpqr: "",
                  messagepqr: "",
                  privacy_pqr: false, // <-- 5. Añadir el campo de privacidad
                }}
                validationSchema={formPqrSchema}
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
                      {/* ... (Todos tus campos: namepqr, phonepqr, etc.) ... */}
                      <div className="col-md-6">
                        <div className="form-grp">
                          <input
                            type="text"
                            id="name"
                            aria-required="true"
                            className={` ${
                              errors.namepqr && touched.namepqr
                                ? "input-error"
                                : ""
                            }`}
                            {...getFieldProps("namepqr")}
                          />

                          <label htmlFor="name">Nombres</label>
                          {errors.namepqr && touched.namepqr && (
                            <p className="error">{errors.namepqr}</p>
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
                              errors.phonepqr && touched.phonepqr
                                ? "input-error"
                                : ""
                            }`}
                            {...getFieldProps("phonepqr")}
                          />
                          <label htmlFor="phone">Numero de celular</label>
                          {errors.phonepqr && touched.phonepqr && (
                            <p className="error">{errors.phonepqr}</p>
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
                              errors.emailpqr && touched.emailpqr
                                ? "input-error"
                                : ""
                            }`}
                            {...getFieldProps("emailpqr")}
                          />

                          <label htmlFor="email">Email</label>
                          {errors.emailpqr && touched.emailpqr && (
                            <p className="error">{errors.emailpqr}</p>
                          )}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-grp">
                          <input
                            type="text"
                            id="address"
                            className={` ${
                              errors.addresspqr && touched.addresspqr
                                ? "input-error"
                                : ""
                            }`}
                            {...getFieldProps("addresspqr")}
                          />
                          <label htmlFor="email">Dirección y Municipio</label>
                          {errors.addresspqr && touched.addresspqr && (
                            <p className="error">{errors.addresspqr}</p>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="form-grp">
                      <textarea
                        name="message"
                        id="message"
                        className={`form-control ${
                          errors.messagepqr && touched.messagepqr
                            ? "input-error"
                            : ""
                        }`}
                        {...getFieldProps("messagepqr")}
                      ></textarea>
                      <label htmlFor="message">PQR</label>
                      {errors.messagepqr && touched.messagepqr && (
                        <p className="error">{errors.messagepqr}</p>
                      )}
                    </div>
                    
                    {/* <-- 6. Bloque de Checkbox actualizado --> */}
                    <p className="contact-form-check">
                      <input
                        type="checkbox"
                        className={`form-check-input ${
                          errors.privacy_pqr && touched.privacy_pqr ? "input-error" : ""
                        }`}
                        id="privacy_pqr" // <-- ID único
                        {...getFieldProps("privacy_pqr")} // <-- Conectar a Formik
                      />
                      <label
                        htmlFor="privacy_pqr" // <-- Conectar al ID
                        className="form-check-label"
                      >
                        Acepto que mis datos enviados se recopilen y almacenen.
                        <Link href="/contact">
                          <a> Privacy Policy</a>
                        </Link>
                      </label>
                    </p>

                    {/* <-- 7. Mostrar error del checkbox --> */}
                    {errors.privacy_pqr && touched.privacy_pqr && (
                      <p className="error" style={{marginTop: "5px"}}>{errors.privacy_pqr}</p>
                    )}

                    <button
                      type="submit"
                      id=" button_submit-disabled"
                      className="btn"
                      disabled={isSubmitting}
                      style={{marginTop: "15px"}} // <-- Espacio
                    >
                      Enviar
                    </button>
                  </form>
                )}
              </Formik>
            </div>

            {/* ... (Tu columna derecha "col-lg-4" no cambia) ... */}
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
                    <a href="mailto:info@example.com">pqr@intalnet.com</a>
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
            </div>
          </div>
        </div>
      </section>
      <ServiceSectionCard />
    </main>
  );
};