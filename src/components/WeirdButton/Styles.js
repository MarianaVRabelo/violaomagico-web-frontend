import styled from "styled-components";

export const ButtonChangeable = styled.button`
  margin-left: 34.5px;
  align-self: center;
  padding: 0;
  outline: none;
  cursor: pointer;
  ${({ state }) =>
    state === "empty"
      ? `
      width: 13px;
    height: 13px;
        background-color: aliceblue;
        border-radius: 50%;
        border-style: solid;
        border-width: 1px;`
      : `background: none; 
      width: 10px;
    height: 10px;    
        color: white;
        border: none;`}
`;
