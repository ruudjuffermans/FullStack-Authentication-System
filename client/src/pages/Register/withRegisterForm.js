import { withFormik } from "formik";
import * as Yup from "yup";
import api from "../../service/api";

const validationSchema = Yup.object({
  firstname: Yup.string().required("Firstname is required."),
  lastname: Yup.string().required("Lastname is required."),
  email: Yup.string().email("Invalid email address").required("Email is required."),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Must contain at least 8 characters")
    .matches(/[A-Z]/, "Must contain one uppercase letter")
    .matches(/[a-z]/, "Must contain one lowercase letter")
    .matches(/[0-9]/, "Must contain one number")
    .matches(/[!@#$%^&*]/, "Must contain one special character"),
});


const withRegisterForm = withFormik({
  mapPropsToValues: () => ({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  }),
  validationSchema,
  validateOnChange: true,
  validateOnBlur: true,
    handleSubmit: (values, rest) => {
      api.register(values).then((response) => {
        console.log(response);
      }).catch((error) => {
        console.error(error);
      }).finally(() => rest.setSubmitting(false));
  },
});

export default withRegisterForm