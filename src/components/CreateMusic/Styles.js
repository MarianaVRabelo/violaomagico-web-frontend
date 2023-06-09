import styled from "styled-components";

export const BodyMusic = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: red;
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
  border-style: solid;
`;

export const String = styled.div`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 500;
`;

export const GuitarCompass = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  border-width: 3px;
  border-right: none;
  border-style: solid;
`;

export const ContainerOutsideDots = styled.div`
  display: flex;
  flex-direction: row;
  width: 65%;
  justify-content: space-between;
  margin-bottom: 2%;
  margin-left: 1.5%;
`;

export const OutsideDots = styled.div`
  display: flex;
`;
