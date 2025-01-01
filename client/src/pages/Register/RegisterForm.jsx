import { Form } from "formik";
import Row from "../../components/Row";
import withRegisterForm from "./withRegisterForm";
import Field from "../../components/Form/Field";
import Button from "../../components/Button";

const RegisterForm = (x) => {
  return (
    <Form style={{ display: "contents" }}>
      <Row>
        <Row.Col>
          <Field
            type="firstname"
            name="firstname"
            placeholder="Firstname"
            label="Firstname"
          />
        </Row.Col>
        <Row.Col>
          <Field
            type="lastname"
            label="Lastname"
            name="lastname"
            placeholder="Lastname"
          />
        </Row.Col>
      </Row>
      <Field
        type="password"
        label="password"
        name="password"
        placeholder="Password"
      />

      <Field
        type="email"
        name="email"
        label="Email"
        placeholder="Email address or phone number"
      />

      <Button style={{ width: "100%" }} type="submit">
        Register
      </Button>
    </Form>
  );
};

export default withRegisterForm(RegisterForm);
