import { useState } from "react";
import { Body,Title } from "./SignStyle";
import Input from "../../styles/Input";
import Button from "../../styles/Button";
import { Link } from "react-router-dom";


export default function SignUp(){
    const [body,setBody] = useState({
        email: "",
        name: "",
        password: "",
        confirmPassword: ""
    })
    const [load,setLoad] = useState(false);

    function register(e){
        e.preventDefault();
    }

    return (
        <Body>
            <Title>MyWallet</Title>
            <form onSubmit={register}>
                <Input type="text" placeholder="Nome" value={body.name} onChange={e=>setBody({...body,name:e.target.value})} disabled={load}/>
                <Input type="email" placeholder="E-mail" value={body.email} onChange={e=>setBody({...body,email:e.target.value})} disabled={load}/>
                <Input type="password" placeholder="Senha" value={body.password} onChange={e=>setBody({...body,password:e.target.value})} disabled={load}/>
                <Input type="password" placeholder="Confirme a senha" value={body.confirmPassword} onChange={e=>setBody({...body,confirmPassword:e.target.value})} disabled={load}/>
                <Button type="submit" disabled={load}>Registrar</Button>
            </form>
            <Link to="/">Já tem uma conta? Entre agora!</Link>
        </Body>
    );
}
