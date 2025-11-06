import * as yup from "yup";

export const formContactusSchema = yup.object().shape({
  servi: yup.string().required("Este campo es requrido"),
  address: yup.string().required("Este campo es requerido"),
  name: yup.string().required("Este campo es requerido"),
  phone: yup
    .number("Inserte numero de celular valido ")
    .typeError("Estos digitos son inválidos")
    .positive()
    .required("Este campo es requerido"),
  email: yup
    .string()
    .email("Inserte un email valido")
    .required("Este campo es requerido"),
  message: yup.string().required("Este campo es requerido"),
  privacy: yup // <-- El que ya tenías
    .boolean()
    .oneOf([true], "Debes aceptar la política de privacidad para continuar")
    .required("Debes aceptar la política de privacidad para continuar"),
});

export const formPqrSchema = yup.object().shape({
  namepqr: yup.string().required("Este campo es requerido"),
  phonepqr: yup
    .number("Inserte num celular valido ")
    .positive()
    .required("Este campo es requerido"),
  emailpqr: yup
    .string()
    .email("Inserta un email valido")
    .required("Este camp es requerido"),
  addresspqr: yup.string().required("Este campo es requerido"),
  messagepqr: yup.string().required("Este campo es requerido"),

  // --- CAMBIO AQUÍ ---
  // Esta es la validación para el checkbox del PQR
  privacy_pqr: yup
    .boolean()
    .oneOf([true], "Debes aceptar la política de privacidad para continuar")
    .required("Debes aceptar la política de privacidad para continuar"),
  // --- FIN DEL CAMBIO ---
});