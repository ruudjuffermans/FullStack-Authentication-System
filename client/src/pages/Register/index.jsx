import Card from "../../components/Card";
import Heading from "../../components/Heading";
import Text from "../../components/Text";
import TextLink from "../../components/TextLink";
import RegisterForm from "./RegisterForm";

const Register = () => {
  return (
    <Card>
      <Heading tag={"h3"}>Register</Heading>
      <RegisterForm />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Text>

        <TextLink underline bold to="/login">
          Return to Login
        </TextLink>
        </Text>

      </div>
    </Card>
  );
};

export default Register;
