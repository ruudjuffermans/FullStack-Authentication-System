import { withFormik } from "formik";
import * as Yup from "yup";
import api from "../../service/api";

const validationSchema = Yup.object({
  email: Yup.string().required("Email address is required."),
  password: Yup.string()
    .required("Required field password")
    .test({
      test: (value) => {
        let errors = [];

        if (!/^(?=.{8,})/.test(value)) {
          errors.push("Must Contain 8 Characters");
        }

        if (!/^(?=.*[!@#$%^&*])/.test(value)) {
          errors.push("One Special Case Character");
        }

        if (!/^(?=.*[0-9])/.test(value)) {
          errors.push("One Number");
        }

        if (!/^(?=.*[a-z])/.test(value)) {
          errors.push("One Lowercase");
        }

        if (!/^(?=.*[A-Z])/.test(value)) {
          errors.push("One Uppercase");
        }

        if (errors.length > 0) {
          throw new Yup.ValidationError({
            errors: errors,
            inner: true,
            path: "password",
            message: errors,
            value: value,
            name: "ValidationError",
          });
        }

        return true;
      },
    }),
});

const withForm = withFormik({
  mapPropsToValues: () => ({ email: "", password: "", response: undefined, status: undefined, message: "" }),
  validationSchema,
  validate: false,
  validateOnChange: true,
  handleSubmit: async (values, { setSubmitting, setFieldError, setErrors, resetForm, setValues}) => {
    try {
      const response = await api.login(values);
      console.log(response.data);
      setValues({
        ...values,
        status: response.data.status,
        response: response.data.payload,
        message: response.data.message,
      });

    } catch (error) {
      console.error(error);

      if (error.response && error.response.data) {
        console.error("!!! api error !!!")
      }
    } finally {
      setSubmitting(false);
    }
  },
});

export default withForm;
