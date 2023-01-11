import styled from "styled-components";
import { Colors, Fonts } from '../../variables';

export const Paginao = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${Fonts.quicksand};
  font-weight: 600;
  flex-direction: column;
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: rgba(245,237,230,1);
`;


export const Modal = styled.div`
  min-height: 370px;
  width: 40%;
  margin-bottom:40px;
  background-color: rgba(185, 156, 122, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: 1px solid black;
  border-radius: 10px;
  
  @media (max-width: 1280px){
    width: 50%;
  }
  
  @media (max-width: 960px){
    width: 60%;
  }

  @media (max-width: 700px){
    width: 80%;
  }
`;

export const Batidas = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  `;

export const Tab = styled.div`
  padding:10px;
  height: 40px;
  width: 33.3%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
  border: 1px solid black;

  @media (max-width: 309px){
      font-size: 14px;
      font-weight: bold;
    }
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
  font-size: 32px;
  height: 100px;
  width: 80%;
  row-gap:10px;
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
    @media (max-width: 1280px){
      font-size: 18px;
    }
  }

  label{
    font-family: ${Fonts.quicksand}
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

  @media (max-width: 1280px){
    font-size: 24px;
  }
  
  @media (max-width: 600px){
    font-size: 18px;
  }

`;

export const Title = styled.div`
  font-size: 40px;
  font-family: ${Fonts.quicksand};
  font-style: normal;
  font-weight: 700;

  @media (max-width: 1280px){
    font-size: 32px;
  }
  
  @media (max-width: 500px){
    font-size: 24px;
  }
  
  @media (max-width: 360px){
    font-size: 18px;
  }
  `;

export const BpmSelector = styled.select`

font-family: ${Fonts.roboto};
font-weight: 500;
font-size: 24px;
padding: 12px;
@media (max-width: 1280px){
  font-size: 16px;
}
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