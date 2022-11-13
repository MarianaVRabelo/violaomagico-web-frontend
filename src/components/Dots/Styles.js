import styled from "styled-components";

export const Dot = styled.button`
    align-self: center;
    padding: 0;
    outline: none;
    margin-left: 33px;
    cursor: pointer;
    ${({ state }) =>
    state === ''
      ? `width: 13px;
        height: 13px;
        background-color: white;
        border-radius: 50%;
        border-style: solid;
        border-width: 1px;`

      : `
        width: 13px;
        height: 13px;
        background-color: yellow;
        border-radius: 50%;
        border-style: solid;
        border-width: 1px;`}
`;