import { Link, useNavigate } from "react-router-dom";
import RegisterInput from "../components/RegisterInput";
import { register } from "../utils/network-data";

function RegisterPage() {
  const navigate = useNavigate();
  async function onRegisterHandler(user) {
    const { error } = await register(user);
    if (!error) {
      navigate("/");
    }
  }
  return (
    <section className="register-page">
      <h2>Please fill the form below ...</h2>
      <RegisterInput register={onRegisterHandler} />
      <p>
        Back to <Link to="/">Log in</Link>
      </p>
    </section>
  );
}

export default RegisterPage;
