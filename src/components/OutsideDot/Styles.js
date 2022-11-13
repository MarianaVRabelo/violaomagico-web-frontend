import styled from "styled-components";


export const Button = styled.button`
    align-self: center;
    padding: 0;
    outline: none;
    cursor: pointer;
    ${({ state }) =>
    state === 'S0'
      ? `width: 13px;
        height: 13px;
        background-color: white;
        border-radius: 50%;
        border-style: solid;
        border-width: 1px;`

      : `background: none; 
        width: 13px;
        height: 13px;
        color: black;
        border: none;`}
`;