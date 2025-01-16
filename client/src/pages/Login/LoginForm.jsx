import { Form } from "formik";
import withLoginForm from "./withLoginForm";
import Field from "../../components/Form/Field";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import useNotification from "../../context/notification/useNotification";
import { useEffect, useState } from "react";

const LoginForm = (x) => {
  const navigate = useNavigate();
  const { addNotification } = useNotification(); // Access notification context
  const [data, setData] = useState(null);

  useEffect(() => {
    if (x.values.status === "success") {
      // Create a success notification
      addNotification("Login successful!", "success");

      // Save data in the state
      setData(x.values.data);

      // Redirect to the home page
      navigate("/home");
    }
  }, [x.values.status, x.values.data, addNotification, navigate]);

  return (
    <Form style={{ display: "contents" }}>
      {x.values.message}
      {x.values.status}
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