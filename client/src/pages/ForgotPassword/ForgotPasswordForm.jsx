import { Form } from "formik";
import withForgotPasswordForm from "./withForgotPasswordForm";
import Field from "../../components/Form/Field";
import Button from "../../components/Button";

const ForgotPasswordForm = (x) => {
  return (
    <Form style={{ display: "contents" }}>
      <Field type="text" name="email" label="Email" placeholder="Email" />
      <Button
        loading={x.isSubmitting.toString()}
        style={{ width: "100%" }}
        type="submit"
      >
        Login
      </Button>
    </Form>
  );
};

export default withForgotPasswordForm(ForgotPasswordForm);
