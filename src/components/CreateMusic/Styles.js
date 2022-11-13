import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #302004;
`;

export const GuitarNeck = styled.div`
  display: flex;
  flex-direction: row;
  width: 70%;
  margin-top: 2%;
  margin-bottom: 0.5%;
`;

export const GuitarStrings = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 38px;
  background-color: #ffffff;
  border: 3px;
  border-right: 0ch;
  border-style:solid;
`;

export const String = styled.div`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 500;
`;

export const GuitarFrets = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  border-width: 3px;
  border-right: 0ch;
  border-style:solid;
`;

export const Fret = styled.div`
  display: flex;
  flex-direction:column;
  height: 110px;
  width: 100%;
  border-style:solid;
  border-width: 3px;
  border-top: 0ch;
  border-bottom: 0ch;
  border-left:0ch;
  background-color: #ffffff;

  justify-content: space-between;
  padding-top: 1.1%;
  padding-bottom: 1.1%;
`;

export const Line = styled.div`
  width: 100%;
  display: flex;
  height: 1px;
  background-color: #000000;
`;

export const ContainerOutsideDots = styled.div`
  display: flex;
  flex-direction: row;
  width: 63.75%;
  justify-content: space-between;
  margin-bottom: 2%;
`;

export const OutsideDots = styled.div`
  display: flex;
  width: 17.7%;
  margin-left: 33px;
  justify-content: space-between;
`;

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

