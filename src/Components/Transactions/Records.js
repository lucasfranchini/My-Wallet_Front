import { useState } from "react";
import styled from "styled-components";

export default function Records(){
    const [records,setRecords] = useState(null)
    return(
        <Body records={null}>
            {
                records ?
                "":
                <span>Não há registros de entrada ou saída</span>
            }
        </Body>
    );
}

const Body = styled.div`
    background: #FFFFFF;
    border-radius: 5px;
    width: 100%;
    height: 67vh;
    display: flex;
    flex-direction: column;
    justify-content: ${props=>props.records?'flex-start':'center'};
    align-items: center;
    line-height: 23px;
    text-align: center;
    color: #868686;
    span{
        width: 75%;
    }
    margin-bottom: 13px;
`