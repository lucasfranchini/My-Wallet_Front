import Record from "./Record";
import styled from "styled-components";
import totalSum from "./totalSum";

export default function Records({ records }) {
  const total = totalSum(records);
  return (
    <Body records={records}>
      <List records={records}>
        {records?.length > 0 ? (
          records.map((r) => <Record key={r.id} record={r} />)
        ) : (
          <span>Não há registros de entrada ou saída</span>
        )}
      </List>
      {records?.length > 0 && (
        <Total total={total}>
          <span>SALDO</span>
          {(total / 100).toFixed(2).replace(".", ",")}
        </Total>
      )}
    </Body>
  );
}
const Body = styled.div`
  background: #ffffff;
  border-radius: 5px;
  width: 100%;
  height: 67vh;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) =>
    props.records?.length > 0 ? "flex-start" : "center"};
  align-items: center;
  line-height: 23px;
  text-align: center;
  color: #868686;
  padding-top: 20px;
  padding-bottom: 45px;
  position: relative;
  margin-bottom: 13px;
`;
const List = styled.ul`
  width: ${(props) => (props.records?.length > 0 ? "100%" : "75%")};
  overflow-y: scroll;
`;
const Total = styled.div`
  color: ${(props) => (props.total < 0 ? "#c70000" : "#03AC00")};
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: absolute;
  padding: 10px 12px;
  bottom: 0;
  left: 0;
  font-size: 17px;
  height: 45px;
  background-color: #fff;
  border-radius: 5px;
  span {
    color: #000;
    text-align: start;
    font-weight: 700;
  }
`;
