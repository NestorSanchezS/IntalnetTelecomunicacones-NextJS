import React from "react";
import { Formik } from "formik";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { formPqrSchema } from "../../schemas";
import Breadcrumb from "../Common/Breadcumb";

const onSubmit = async (values, actions) => {
  // console.log(values);
  // console.log(actions);
  emailjs
    .send("service_7hlj17d", "template_dozp72v", values, "9lX7hXXub4LjBAc_z")
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

export const PqrMain = () => {
  return (
    <main>
      <Breadcrumb pageTitle="PQR´S" />
      <section className="contact-area pt-115 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="contact-title">
                <h3 className="title">Peticiones, Quejas y Reclamos</h3>
              </div>

              <Formik
                initialValues={{
                  addresspqr: "",
                  namepqr: "",
                  phonepqr: "",
                  emailpqr: "",
                  messagepqr: "",
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
                          <label htmlFor="email">Dirección</label>
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
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
