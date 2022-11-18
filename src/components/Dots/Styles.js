import styled from "styled-components";

export const Dot = styled.button`
    align-self: center;
    padding: 0;
    outline: none;
    margin-left: 43px;
    cursor: pointer;
    ${({ state }) =>
    state
      ? `width: 20px;
        height: 20px;
        background-color: #98ADD7;
        border-radius: 50%;
        border-style: solid;
        border-width: 1px;`

      : `
        width: 20px;
        height: 20px;
        background-color: white;
        border-radius: 50%;
        border-style: solid;
        border-width: 1px;`}
`;