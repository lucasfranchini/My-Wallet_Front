import { Body,Title } from "./SignStyle";
import Input from "../../styles/Input";
import Button from "../../styles/Button";
import {Link, useHistory} from "react-router-dom";
import { useContext, useState } from "react";
import UserContext from "../../Context/UserContext";
import axios from "axios";
export default function Login(){
    const {setUser} =useContext(UserContext)
    const [body,setBody] = useState({
        email: "" ,
        password: ""
    });
    const [load,setLoad] = useState(false);
    const history = useHistory();
    
    function login(e){
        e.preventDefault();
        setLoad(true);
        const promise = axios.post('http://localhost:4000/sign-in',body);
        promise.then(answer=>{
            setUser(answer.data);
            history.push('/transactions')
        });
        promise.catch(()=>{
            alert('Usuario ou senha incorreta, tente novamente');
            setLoad(false)
        })
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

