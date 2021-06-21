import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
    background-color: #8C11BE;
    font-family: 'Raleway', sans-serif;
    font-size: 20px;
    input{
        height: 58px;
        width: calc(100% - 50px);
        margin: 0 25px;
        padding: 0 15px;
        border-radius: 5px;
        border:none;
        margin-bottom: 13px;
        &::placeholder{
            color:#000;
            font-size: 20px;
        }
    }
    button{
        height: 46px;
        width: calc(100% - 50px);
        text-align: center;
        margin: 0 25px;
        color: #fff;
        background: #A328D6;
        border-radius: 5px;
        border:none;
        font-weight: bold;  
        line-height: 23px;
    }
}

`

export default GlobalStyle;