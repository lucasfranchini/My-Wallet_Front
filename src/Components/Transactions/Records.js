import Record from "./Record"
import styled from "styled-components";

export default function Records({records}){
    
    return(
        <Body records={records}>
            {
                records ?
                records.map(r=><Record key={r.id} record={r}/>):
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
    padding-top: 20px;
    span{
        width: 75%;
    }
    margin-bottom: 13px;
`