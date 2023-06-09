import styled from "styled-components";

export const Container = styled.div`
  //conteiner
  //background-color:cyan; 
  display:flex;
  flex-direction: column;
  align-items: center;
`; 

export const TitleText = styled.p`
  //texto do título 
  //background-color:yellow;
  font-size:20px;
`;

export const TitleInput = styled.input`
  //input do título
  //background-color: blue;
  width: 150px;
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
