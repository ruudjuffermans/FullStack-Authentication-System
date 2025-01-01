import { Form } from "formik";
import withLoginForm from "./withLoginForm";
import Field from "../../components/Form/Field";
import Button from "../../components/Button";

const LoginForm = (x) => {
  return (
    <Form style={{ display: "contents" }}>
      <Field type="text" name="email" label="Email" placeholder="Email" />
      <Field
        type="password"
        label="Password"
        name="password"
        placeholder="Password"
      />
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

export default withLoginForm(LoginForm);
