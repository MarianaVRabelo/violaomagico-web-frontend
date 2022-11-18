import styled from "styled-components";

export const BotaoNovaBatida = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #F4F4F4;
  color: black;
  border-width: 1px;
  margin-bottom: 1.5%;
  font-family: 'Inter', sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  height: 44px;
  width: 164px;
  border-radius: 9px;
  padding: 10px 15px 10px 15px;

`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #B99C7A;

  @media (max-width: 970px) {
    width: fit-content;
    padding-left: 40px;
    padding-right: 40px;
  }
`;
