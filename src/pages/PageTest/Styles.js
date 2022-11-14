import styled from "styled-components";

export const BotaoNovaBatida = styled.button`
  display: flex;
  padding:0.5%;
  padding-left: 1%;
  padding-right: 1%;
  align-items: center;
  justify-content: center;
  background-color: #78866b;
  color: white;
  border-width:1px;
  margin-bottom: 1.5%;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 500;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #302004;

  @media (max-width: 970px) {
    width: fit-content;
    padding-left: 40px;
    padding-right: 40px;
  }
`;
