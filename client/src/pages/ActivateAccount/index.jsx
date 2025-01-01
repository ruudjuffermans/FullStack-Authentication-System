import Card from "../../components/Card";
import Heading from "../../components/Heading";
import Text from "../../components/Text";
import TextLink from "../../components/TextLink";
import ActivateAccountForm from "./ActivateAccountForm";

const ActivateAccount = () => {
  return (
    <Card>
      <Heading tag={"h3"}>Activate Account</Heading>
      <ActivateAccountForm />
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

export default ActivateAccount;
