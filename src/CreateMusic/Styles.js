import styled from "styled-components";

export const BotaoNovaBatida = styled.button`


`;

export const CreateMusic = styled.button`
    height: 40%;
    width: 40%;
    background-color: #cfaa00;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    `;


export const Title = styled.button`
    font-family: 'Ubuntu';
`;

export const bpmSelector = styled(Select)`
width: 400px;
  color: black;
  padding-right: 2%;
  height: 32px;

  border-radius: 3px;
  border-width: 1px;
  border-style: solid;
  border-color: gray;

  @media (max-width: 940px) {
    width: 80%;
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