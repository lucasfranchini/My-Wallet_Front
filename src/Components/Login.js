import styled from "styled-components";
import {Link} from "react-router-dom";
export default function Login(){
    
    function login(e){
        e.preventDefault();
    }
    
    return (
        <Body>
            <Title>MyWallet</Title>
                <form onSubmit={login}>
                    <input type="email" placeholder="E-mail"/>
                    <input type="password" placeholder="senha"/>
                    <button type="submit">Entrar</button>
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