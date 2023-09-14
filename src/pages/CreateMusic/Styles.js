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
  background-color: #181818;
`;

export const Modal = styled.div`
  min-height: 370px;
  width: 40%;
  margin-bottom: 40px;
  margin-top: 50px;
  background-color: gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: 3px solid white;
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
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.isSelected ? "#4b4a4a" : "gray")};
  color: white;
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

export const ValorBatidaText = styled.p`
  color: white;
`;

export const Music = styled.div`
  background-color: #181818;
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
  background-color: white;

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
  background-color: gray;
  color: white;
  border-width: 2px white;
  margin-bottom: 1.5%;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 500;
  cursor: pointer;
`;

export const DivBotoesBatida = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4rem;
`;

export const BotaoSalvar = styled.button`
  display: flex;
  padding: 0.5%;
  padding-left: 1%;
  padding-right: 1%;
  align-items: center;
  justify-content: center;
  background-color: green;
  color: white;
  border-width: 2px white;
  width: 10rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 500;
  cursor: pointer;
`;

export const BotaoDeletar = styled.button`
  display: flex;
  padding: 0.5%;
  padding-left: 1%;
  padding-right: 1%;
  align-items: center;
  justify-content: center;
  background-color: red;
  color: white;
  border-width: 2px white;
  width: 10rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 500;
  cursor: pointer;
`;

export const SelectBatida = styled.select`
  width: 10rem;
`;

export const CompassChange = styled.p`
  font-size: 20px;
`;
export const StyledMatrixButton = styled.button`
  width: 10px;
  height: 10px;
  margin-right: 2rem;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  border: none;
  border-radius: 50%;
  cursor: pointer;
  color: ${(props) => (props.isSelected ? "white" : "black")};
  font-weight: bold;
  transition: background-color 0.3s, color 0.3s;
  position: relative; /* Adicione position: relative; aqui */
  z-index: 1;
  border: 0.5px solid black;

  &:hover {
    background-color: black;
    color: white;
  }
`;

export const BiggerC = styled.div``;
export const ButtonMatrixContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(32, 1fr);
  gap: 4px;
  position: relative; /* Adicione position: relative; aqui */
  z-index: 1rem;
  padding-top: 0.5rem;
  padding-left: 1rem;
  background-color: white;
  bottom: unset;
  max-height: 8rem;
  top: 0.3rem;
  border: 3px solid #000;
  gap: 0.5rem;

  .vertical-line-1 {
    position: absolute;
    top: 0;
    right: 26.8rem; /* Coloca a linha vertical no lado direito do contêiner */
    height: 100%; /* Define a altura para cobrir toda a altura do contêiner */
    width: 3px; /* Largura da linha vertical */
    background-color: black; /* Cor da linha */
  }

  /* Linha vertical 2 */
  .vertical-line-2 {
    content: "";
    position: absolute;
    top: 0;
    right: 51.8em; /* Coloca a linha vertical no lado direito do contêiner */
    height: 100%; /* Define a altura para cobrir toda a altura do contêiner */
    width: 3px; /* Largura da linha vertical */
    background-color: black;
    content: "";

    /* Cor da linha */
  }

  /* Linha vertical 3 */

  .vertical-line-3 {
    position: absolute;
    top: 0;
    right: 76.8rem; /* Coloca a linha vertical no lado direito do contêiner */
    height: 100%; /* Define a altura para cobrir toda a altura do contêiner */
    width: 3px; /* Largura da linha vertical */
    background-color: black;
  }
`;
export const Container44 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.2rem;
  margin-top: 2rem;
`;
export const ContainerLine = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: absolute; /* Adicione position: absolute; aqui */
  top: 0.7rem;
  gap: 1.13rem;
  right: 0.1rem;
`;

export const ContainerLetter = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.6rem;
  background-color: white;
  max-height: 8rem;
`;
export const Letter = styled.div``;

export const StyledMatrixButton34 = styled.button`
  width: 10px;
  height: 10px;
  margin-right: 2rem;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  border: none;
  border-radius: 50%; /* Make the buttons round */
  cursor: pointer;
  color: ${(props) => (props.isSelected ? "white" : "black")};
  font-weight: bold;
  transition: background-color 0.3s, color 0.3s;
  position: relative;
  z-index: 10;
  top: 0.2rem;
  border: 0.5px solid black;
  color: black;

  &:hover {
    background-color: black;
    color: white;
  }
`;

export const ButtonMatrixContainer34 = styled.div`
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  grid-template-rows: repeat(6, 1fr);
  gap: 4px;
  position: relative;
  z-index: 1rem;
  padding-top: 0.5rem;
  padding-left: 1rem;
  bottom: unset;
  max-height: 8rem;
  top: 0.26rem;
  border: 3px solid #000;
  gap: 0.5rem;
  background-color: white;

  .vertical-line-1 {
    position: absolute;
    top: 0;
    right: 20.6rem; /* Coloca a linha vertical no lado direito do contêiner */
    height: 100%; /* Define a altura para cobrir toda a altura do contêiner */
    width: 3px; /* Largura da linha vertical */
    background-color: black; /* Cor da linha */
  }

  /* Linha vertical 2 */
  .vertical-line-2 {
    content: "";
    position: absolute;
    top: 0;
    right: 39.3rem; /* Coloca a linha vertical no lado direito do contêiner */
    height: 100%; /* Define a altura para cobrir toda a altura do contêiner */
    width: 3px; /* Largura da linha vertical */
    background-color: black;
    content: "oi";

    /* Cor da linha */
  }

  /* Linha vertical 3 */
  .vertical-line-3 {
    position: absolute;
    top: 0;
    right: 58.1rem; /* Coloca a linha vertical no lado direito do contêiner */
    height: 100%; /* Define a altura para cobrir toda a altura do contêiner */
    width: 3px; /* Largura da linha vertical */
    background-color: black;
  }
`;

export const Container34 = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2rem;
  gap: 0.2rem;
`;

export const ContainerLetter34 = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
  background-color: white;
`;

export const Letter34 = styled.div``;

export const Line34 = styled.div`
  width: 100%;
  height: 1px; /* Defina a altura desejada para a linha */
  background-color: black;
`;

export const ContainerLine34 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: absolute; /* Adicione position: absolute; aqui */
  top: 0.9rem;
  gap: 1.12rem;
  right: 0.1rem;
`;
export const BiggerC34 = styled.div``;
export const LineT = styled.div`
  color: black;
`;
