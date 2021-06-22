import { Body,Title } from "./SignStyle";
import Input from "../../styles/Input";
import Button from "../../styles/Button";
import {Link} from "react-router-dom";
import { useState } from "react";
export default function Login(){

    const [body,setBody] = useState({
        email: "" ,
        password: ""
    });
    const [load,setLoad] = useState(false);
    
    function login(e){
        e.preventDefault();
    }
    
    return (
        <Body>
            <Title>MyWallet</Title>
                <form onSubmit={login}>
                    <Input type="email" placeholder="E-mail" value={body.email} onChange={e=>setBody({...body,email: e.target.value})} disabled={load}/>
                    <Input type="password" placeholder="senha" value={body.password} onChange={e=>setBody({...body,password: e.target.value})} disabled={load}/>
                    <Button type="submit" disabled={load}>Entrar</Button>
                </form>
                <Link to="/Register">Primeira vez? Cadastre-se!</Link>
        </Body>
    );
}

