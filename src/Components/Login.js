import styled from "styled-components";
export default function Login(){
    
    function login(e){
        e.preventDefault();
    }
    
    return (
        <Body>
            <Title>MyWallet</Title>
                <form onSubmit={login}>
                    <input/>
                    <input/>
                    <Button/>
                </form>
                <span>Primeira vez? Cadastre-se!</span>
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
`

const Title = styled.h1`
    font-family: 'Saira Stencil One';
    color:#fff;
    font-size: 32px;
    line-height: 51px;
`

const Button = styled.button`

`