import styled from "styled-components";

const Input=styled.input`
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
`

export default Input;