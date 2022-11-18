import styled from "styled-components";


export const GuitarNeck = styled.div`
  display: flex;
  flex-direction: row;
  width: 1280px;
  margin-top: 2%;
  
`;

export const GuitarStrings = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 80px;
  background-color: #F5EDE6;
  border: 4px;
  border-right: 0ch;
  border-style:solid;
`;

export const String = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 32px;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: 0em;
  text-align: center;

`;

export const GuitarFrets = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  border-width: 4px;
  border-right: 0ch;
  border-style:solid;
`;

export const Fret = styled.div`
  display: flex;
  flex-direction:column;
  height: 200px;
  width: 100%;
  border-style:solid;
  border-width: 4px;
  border-top: 0ch;
  border-bottom: 0ch;
  border-left:0ch;
  background-color: #F5EDE6;

  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 20px;
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
  width: 1197px;
  height: 36px;
  justify-content: space-between;
  margin-bottom: 2%;
  background-color: #F5EDE6;
  border-style:solid;
  border-width: 4px;
  border-top: 0px;
  border-left: 0;
  margin-left: 78px;

`;
  


export const OutsideDots = styled.div`
  display: flex;
  width: 100%;
  `;

export const BotaoNovaBatida = styled.button`
  display: flex;
  padding:0.5%;
  padding-left: 1%;
  padding-right: 1%;
  align-items: center;
  justify-content: center;
  background-color: #98ADD7;
  color: black;
  border-width:1px;
  border-radius: 8px;
  margin-bottom: 1.5%;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 500;
`;

