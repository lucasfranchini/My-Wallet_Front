import styled from "styled-components";
import { IoExitOutline } from "react-icons/io5";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../Context/UserContext";
import { Link, useHistory } from "react-router-dom";
import Records from "./Records";
import { HiOutlineMinusCircle,HiOutlinePlusCircle } from "react-icons/hi";
import axios from "axios";

export default function Transactions(){
    const {user} = useContext(UserContext);
    const history = useHistory();
    const [records,setRecords] = useState(null);
    useEffect(()=>{
        const headers = {headers:{Authorization: `Bearer ${user.token}`}}
        const promise = axios.get('http://localhost:4000/transactions',headers);
        promise.then(answer=>{
            setRecords(answer.data);
        })
        promise.catch(()=>{
            alert('houve um erro ao buscar seus registros, tente entrar novamente na pagina');
        })
    },[user.token])
    console.log(records)
    return(
        <Body>
            <Header>
                <h1>Ola, {user?.name}</h1>
                <IoExitOutline onClick={()=>history.push('/')}/>
            </Header>
            <Records/>
            <Buttons>
                <Link to='/'>
                    <OutlinePlus/>
                    <span>Nova entrada</span>
                </Link>
                <Link to='/'>
                    <OutlineMinus/>
                    <span>Nova saida</span>
                </Link>
            </Buttons>
        </Body>
    )
}

const Body=styled.div`
    width: 100%;
    height: 100vh;
    padding:20px 25px;
`
const Header = styled.div`
    margin-bottom: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    font-weight: 700;
    font-size: 26px;
`
const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    a{
        width: calc(50% - 7.5px);
        height: 17vh;
        background: #A328D6;
        border-radius: 5px;
        border: none;
        color: #fff;
        position: relative;
        font-weight: 700;
        span{
            position: absolute;
            bottom:10px;
            left:10px;
            width: 50%;
            font-size: 17px;
            line-height: 20px;
            text-align: start;
        }
    }
`
const OutlinePlus = styled(HiOutlinePlusCircle)`
    position: absolute;
    top:10px;
    left: 10px;
`
const OutlineMinus = styled(HiOutlineMinusCircle)`
    position: absolute;
    top:10px;
    left: 10px;
`
