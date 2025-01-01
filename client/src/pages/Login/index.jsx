import Card from "../../components/Card";
import Heading from "../../components/Heading";
import Text from "../../components/Text";
import TextLink from "../../components/TextLink";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <Card>
      <Heading tag={"h3"}>Login</Heading>
      <LoginForm />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Text>

          <TextLink underline bold to="/forgot-password">
            Forgot your password?
          </TextLink>
        </Text>

        <Text>

          Not a member yet?{" "}
          <TextLink underline bold to="/register">
            Register Now
          </TextLink>
        </Text>
      </div>
    </Card>
  );
};

export default Login;
