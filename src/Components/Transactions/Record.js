import styled from "styled-components";

export default function Record({record}){

    return(
        <Body>
            <div>
                <Date>{record.date}</Date>
                <Name>{record.name} </Name>
            </div>
            <Value type={record.type}>{(record.value/100).toFixed(2).replace('.',',')}</Value>
        </Body>
    );
}

const Body = styled.div`
    width: 100%;
    font-size: 16px;
    line-height: 19px;
    padding: 0 12px;
    height: 20px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
    div{
        display: flex;
        overflow: hidden;
    }
`
const Date = styled.div`
    color:#c6c6c6;
    min-width: 45px;
    margin-right: 10px;
`
const Name = styled.div`
    color:#000;
    margin-right: 5px;
`
const Value = styled.div`
    color: ${props=>props.type==='expense'?'#c70000':'#03AC00'};
    flex-shrink: 0;
`