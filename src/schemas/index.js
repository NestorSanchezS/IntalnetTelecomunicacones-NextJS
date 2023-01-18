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
});
