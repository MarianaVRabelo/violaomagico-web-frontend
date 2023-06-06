import styled from "styled-components";

export const ButtonDots = styled.button`
  width: 11px;
  height: 11px;
  margin-left: 34px;
  align-self: center;
  border-radius: 50%;
  border-style: solid;
  border-width: 1px;
  cursor: pointer;

  ${({ state }) =>
    state === "empty"
      ? `
      background-color: aliceblue;`
      : `background-color: black;`}
`;
