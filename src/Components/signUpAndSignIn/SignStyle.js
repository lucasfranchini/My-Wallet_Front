import styled from "styled-components";

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  a {
    color: #fff;
    font-size: 15px;
    margin-top: 36px;
  }
`;

const Title = styled.h1`
  font-family: "Saira Stencil One";
  color: #fff;
  font-size: 32px;
  line-height: 51px;
  margin-bottom: 24px;
`;

export { Body, Title };
