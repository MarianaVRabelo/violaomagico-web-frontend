import styled from "styled-components";
import { Colors, Fonts } from "../../styles/variables";

export const Paginao = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${Fonts.quicksand};
  font-weight: 600;
  flex-direction: column;
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: rgba(245, 237, 230, 1);
`;

export const Modal = styled.div`
  min-height: 370px;
  width: 40%;
  margin-bottom: 40px;
  margin-top: 50px;
  background-color: rgba(185, 156, 122, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: 1px solid black;
  border-radius: 10px;

  @media (max-width: 1280px) {
    width: 50%;
  }

  @media (max-width: 960px) {
    width: 60%;
  }

  @media (max-width: 700px) {
    width: 80%;
  }
`;

export const Batidas = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Tab = styled.div`
  padding: 10px;
  height: 40px;
  width: 33.3%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
  border-top: 1px solid black;
  border-left: 1px solid black;
  border-right: 1px solid black;

  cursor: ${(props) => (props.isSelected ? "default" : "pointer")};
  border-bottom: ${(props) => (props.isSelected ? "none" : "1px solid black")};

  @media (max-width: 309px) {
    font-size: 14px;
    font-weight: bold;
  }
`;

export const Music = styled.div`
  background-color: ${Colors.darkwood};
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const Data = styled.div`
  font-size: 32px;
  height: 100px;
  width: 100%;
  row-gap: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: red;

  label {
    font-family: ${Fonts.quicksand};
  }

  @media (max-width: 1280px) {
    font-size: 24px;
  }

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

export const Title = styled.div`
  font-size: 40px;
  font-family: ${Fonts.quicksand};
  font-style: normal;
  font-weight: 700;

  @media (max-width: 1280px) {
    font-size: 32px;
  }

  @media (max-width: 500px) {
    font-size: 24px;
  }

  @media (max-width: 360px) {
    font-size: 18px;
  }
`;

export const BpmSelector = styled.select`
  font-family: ${Fonts.roboto};
  font-weight: 500;
  font-size: 24px;
  padding: 12px;
  @media (max-width: 1280px) {
    font-size: 16px;
  }
  option {
  }
`;

export const BotaoNovaLinha = styled.button`
  display: flex;
  padding: 0.5%;
  padding-left: 1%;
  padding-right: 1%;
  align-items: center;
  justify-content: center;
  background-color: #78866b;
  color: white;
  border-width: 1px;
  margin-bottom: 1.5%;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 500;
`;
