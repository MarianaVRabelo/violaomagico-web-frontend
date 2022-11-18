import styled from "styled-components";


export const Button = styled.button`
    align-self: center;
    padding: 0;
    outline: none;
    margin-left: 50px;
    cursor: pointer;
    ${({ state }) =>
    state === "empty"
      ? `width: 13px;
        height: 13px;
        background-color: black;
        border-radius: 50%;
        border-style: solid;
        border-width: 1px;`

      : `background: none; 
        width: 13px;
        height: 13px;
        color: black;
        border: none;`}
`;