import styled from "styled-components";
import { IoExitOutline } from "react-icons/io5";
import { useContext } from "react";
import UserContext from "../../Context/UserContext";
import { useHistory } from "react-router-dom";
import Records from "./Records";

export default function Transactions(){
    const {user,setUser} = useContext(UserContext);
    const history = useHistory();
    return(
        <Body>
            <Header>
                <h1>Ola, {user?.name}</h1>
                <IoExitOutline onClick={()=>history.push('/')}/>
            </Header>
            <Records/>
        </Body>
    )
}

const Body=styled.div`
    width: 100%;
    height: 100vh;
    padding:25px;
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
