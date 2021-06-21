import styled from "styled-components";
import Input from "../styles/Input";
import Button from "../styles/Button";
import {Link} from "react-router-dom";
export default function Login(){
    
    function login(e){
        e.preventDefault();
    }
    
    return (
        <Body>
            <Title>MyWallet</Title>
                <form onSubmit={login}>
                    <Input type="email" placeholder="E-mail"/>
                    <Input type="password" placeholder="senha"/>
                    <Button type="submit">Entrar</Button>
                </form>
                <Link to="/Register">Primeira vez? Cadastre-se!</Link>
        </Body>
    );
}

const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    a{
        color:#fff;
        font-size: 15px;
        margin-top: 36px;
    }
`

const Title = styled.h1`
    font-family: 'Saira Stencil One';
    color:#fff;
    font-size: 32px;
    line-height: 51px;
    margin-bottom: 24px;
`