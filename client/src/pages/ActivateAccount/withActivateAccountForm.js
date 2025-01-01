import { withFormik } from "formik";
import api from "../../service/api";


const withActivateAccountForm = withFormik({
  mapPropsToValues: () => ({ email: "", code: "" }),
  validate: false,
  validateOnChange: false,
  handleSubmit: (values, rest) => {
    console.log(values)
    api.activateAccount(values)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      }).finally(() => rest.setSubmitting(false));
  },
});

export default withActivateAccountForm;
