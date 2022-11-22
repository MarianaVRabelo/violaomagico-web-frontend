import styled from "styled-components";
import { Colors, Fonts } from '../../variables';

export const Paginao = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  row-gap: 10vh;
  font-family: ${Fonts.quicksand};
  font-weight: 600;
  flex-direction: column;
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;


export const Modal = styled.div`
  height: 350px;
  width: 33%;
  background-color: ${Colors.wood};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: 1px solid black;
  border-radius: 10px;
  
  @media (max-width: 900px){
    width: 50%;
  }
  
`;

export const Batidas = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  width: 100%;
  `;

export const Tab = styled.div`
  width: 33%;
  height: 80%;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.backgroundColor};
  border: 1px solid black;
  color: ${(props) => props.color};
  `;

export const Music = styled.div`
  background-color: ${Colors.blackwood};
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const Data = styled.div`
  font-size: 20px;
  height: 100px;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  
  input {
    width: 100%;
    border: none;
    background-color: transparent;
  }

  input:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
  
  form {
    width: 80%;
    font-size: large;
  }
  
  #fields {
    display: flex;
    width: 100%;
    border-bottom: 0.1px solid black;
  }
`;

export const Title = styled.div`
  font-size: 30px;
`;

export const BpmSelector = styled.select`


  option {

  }
`;

// #createMusic.musicCreation {

// }

// #createMusic input {
//     border: none;
//     background - color: transparent;
// }

// #createMusic form {
//     width: 80 %;
//     font - size: large;
// }

// #createMusic #fields {
//     border - bottom: 2px solid black;
// }