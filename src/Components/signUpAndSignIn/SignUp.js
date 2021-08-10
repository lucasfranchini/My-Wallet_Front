import { useState } from "react";
import { Body, Title } from "./SignStyle";
import Input from "../../styles/Input";
import Button from "../../styles/Button";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

export default function SignUp() {
  const [body, setBody] = useState({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
  });
  const [load, setLoad] = useState(false);
  const history = useHistory();

  function register(e) {
    e.preventDefault();
    setLoad(true);
    if (body.password !== body.confirmPassword) {
      alert("password must be the same");
      setLoad(false);
    } else {
      delete body.confirmPassword;
      const promise = axios.post("http://localhost:4000/sign-up", body);
      promise.then((answer) => {
        history.push("/");
      });
      promise.catch(() => {
        alert("error on sign Up, please try again");
        setLoad(false);
      });
    }
  }

  return (
    <Body>
      <Title>MyWallet</Title>
      <form onSubmit={register}>
        <Input
          type="text"
          placeholder="Nome"
          value={body.name}
          onChange={(e) => setBody({ ...body, name: e.target.value })}
          disabled={load}
        />
        <Input
          type="email"
          placeholder="E-mail"
          value={body.email}
          onChange={(e) => setBody({ ...body, email: e.target.value })}
          disabled={load}
        />
        <Input
          type="password"
          placeholder="Senha"
          value={body.password}
          onChange={(e) => setBody({ ...body, password: e.target.value })}
          disabled={load}
        />
        <Input
          type="password"
          placeholder="Confirme a senha"
          value={body.confirmPassword}
          onChange={(e) =>
            setBody({ ...body, confirmPassword: e.target.value })
          }
          disabled={load}
        />
        <Button type="submit" disabled={load}>
          Registrar
        </Button>
      </form>
      <Link to="/">Já tem uma conta? Entre agora!</Link>
    </Body>
  );
}
