import { useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
import Input from "../styles/Input";
import Button from "../styles/Button";
import axios from "axios";
import { useContext, useState } from "react";
import UserContext from "../Context/UserContext";

export default function NewExchange(){
    const local = useLocation();
    const {user} = useContext(UserContext);
    const history = useHistory();
    const [exchange,setExchange] = useState({
        value:"",
        description:"",
        type: local.pathname==='/new-entry' ? 'income': 'expense'
    })
    function sendExchange(e){
        e.preventDefault();
        exchange.value=exchange.value.replace(',','').replace('.','');
        if(!Number(exchange.value)){
            alert('O valor deve ser um numero');
            return
        }
        const headers = {headers:{Authorization: `Bearer ${user.token}`}}
        const promise = axios.post('http://localhost:4000/transactions',exchange,headers);
        promise.then(res=>{
            history.push('/transactions')
        });
        promise.catch(res=>{
            alert("nao foi possivel cadastrar a transacao");
        })
    }
    return(
        <Body>
            <Title>Nova {local.pathname==='/new-entry' ? 'Entrada': 'Saida'}</Title>
            <form onSubmit={sendExchange}>
                <Input placeholder="Valor" value={exchange.value} onChange={e=>setExchange({...exchange,value:e.target.value})}/>
                <Input placeholder="Descrição" value={exchange.description} onChange={e=>setExchange({...exchange,description:e.target.value})}/>
                <Button type="submit">Salvar {local.pathname==='/new-entry' ? 'Entrada': 'Saida'}</Button>
            </form>
        </Body>
    );
}

const Body = styled.div`
    
`
const Title = styled.h1`
    color: #fff;
    font-weight: 700;
    margin: 25px;
    font-size: 26px;
    line-height: 100%;
`