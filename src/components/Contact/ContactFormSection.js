import React, { useState } from "react"; // <-- 1. Importar useState
import Link from "next/link";
import { Formik } from "formik";
import { formContactusSchema } from "../../schemas";
import emailjs from "@emailjs/browser";

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

const ContactForm = () => {
  // <-- 2. Estado para el mensaje de éxito
  const [isSubmitted, setIsSubmitted] = useState(false);

  // <-- 3. Mover onSubmit dentro del componente
  const onSubmit = async (values, actions) => {
    try {
      await emailjs.send(
        "service_qtgrjty",
        "template_3q5q9ta",
        values,
        "4LKILnUTxxRAYn2YR"
      );

      // Éxito:
      setIsSubmitted(true); // Mostrar el mensaje de éxito
      actions.resetForm(); // Limpiar el formulario

      // Ocultar el mensaje después de 5 segundos
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
      
    } catch (error) {
      console.log("Error al enviar el email:", error);
      // Aquí podrías poner un estado para un mensaje de error si quisieras
    }
  };

  return (
    <section className="contact-area pt-115 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="contact-title">
              <h3 className="title">CONECTATE AHORA</h3>
            </div>

            {/* <-- 4. Mensaje de éxito (se muestra condicionalmente) --> */}
            {isSubmitted && (
              <div style={successMessageStyle}>
                ¡Mensaje enviado con éxito! Te contactaremos pronto.
              </div>
            )}

            <Formik
              initialValues={{
                servi: "",
                address: "",
                name: "",
                phone: "",
                email: "",
                message: "",
                privacy: false, // <-- 5. Añadir el campo de privacidad
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
                    {/* ... (Todos tus campos de input: name, phone, email, etc.) ... */}
                    {/* No es necesario copiar, solo es para referencia */}
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
                        <label htmlFor="email">Dirección y Municipio</label>
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

                  {/* <-- 6. Bloque de Checkbox actualizado --> */}
                  <div className="contact-form-check">
                    <input
                      type="checkbox"
                      className={`form-check-input ${
                        errors.privacy && touched.privacy ? "input-error" : ""
                      }`}
                      id="privacy" // <-- Cambiar ID
                      {...getFieldProps("privacy")} // <-- Conectar a Formik
                    />
                    <label
                      htmlFor="privacy" // <-- Cambiar htmlFor
                      className="form-check-label"
                    >
                      Acepto que mis datos enviados se recopilen y almacenen.
                      <Link href="/contact">
                        <a> Privacy Policy</a>
                      </Link>
                    </label>
                  </div>
                  
                  {/* <-- 7. Mostrar error del checkbox --> */}
                  {errors.privacy && touched.privacy && (
                    <p className="error" style={{marginTop: "5px"}}>{errors.privacy}</p>
                  )}


                  <button
                    type="submit"
                    id=" button_submit-disabled"
                    className="btn"
                    disabled={isSubmitting}
                    style={{marginTop: "15px"}} // <-- Un poco de espacio
                  >
                    Enviar
                  </button>
                </form>
              )}
            </Formik>
          </div>
          
          {/* ... (Tu columna derecha de "col-lg-4" no cambia) ... */}
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
                    servicioalcliente@intalnet.com
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