import styled from "styled-components";

export const Button = styled.button`
	align-self: center;
	padding: 0;
	outline: none;
	/* margin-left: 50px; */
	cursor: pointer;

	width: 13px;
	height: 13px;

	${({ state }) =>
		state === "empty"
			? `
        background-color: black;
        border-radius: 50%;
        border-style: solid;
        border-width: 1px;`
			: `
        background: none; 
        color: black;
        border: none;
  `}
`;
