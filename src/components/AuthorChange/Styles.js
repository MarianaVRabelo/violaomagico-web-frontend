import styled from "styled-components";

export const Container = styled.div`
  /* Estilos para o contêiner principal */
  //background-color: #445564;
  display: flex; 
  flex-direction: column;
  align-items: center; 
`; 

export const AuthorText = styled.p`
  /* Estilos para o texto do autor */
  //background-color: crimson; 
  font-size:20px;
`;

export const AuthorInput = styled.input`
  /* Estilos para o input do autor */
  //background-color: chocolate;
  border-radius:5px;
  height:100px;
  //background-color: rgba(185, 156, 122, 1);
  color: #000;
  font-size: 28px;
  width: 100%;
  padding: 10px 15px 5px;
  background-color: #fff;
  border: solid 1px #000000;
  border-radius: 4px;
  text-align:center;
  text-justify:center;
  flex: 1;
`;
