import { useForm } from "react-hook-form";
import Api from "../../services/api";
import { ButtonRegister, Container, Form } from "./style";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { LogOutContext } from "../../Provider/LoginHeader/logOut";
interface LoginRequest {
  name: string;
  password: string;
}
const FormLogin = () => {
  const url = useHistory();

  const { setLogin } = useContext(LogOutContext);

  const { register, handleSubmit } = useForm<LoginRequest>();

  const requestLogin = (data: LoginRequest) => {
    Api.post("/login", data)
      .then((res) => {
        toast.success("Login Realizado Com Sucesso");
        url.push("/");
        setLogin(true);
        localStorage.setItem("login", "true");
        localStorage.setItem("token", res.data.token);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  return (
    <Container>
      <h2>Login</h2>
      <Form onSubmit={handleSubmit(requestLogin)}>
        <span>Name</span>
        <input placeholder="Name" {...register("name")} />
        <span>Password</span>
        <input
          placeholder="Password"
          type="password"
          {...register("password")}
        />
        <button type="submit">Login</button>
        <ButtonRegister
          onClick={() => {
            url.push("/register");
          }}
        >
          Register
        </ButtonRegister>
      </Form>
    </Container>
  );
};

export default FormLogin;
