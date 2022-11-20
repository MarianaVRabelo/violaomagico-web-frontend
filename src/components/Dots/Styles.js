import styled from "styled-components";

export const Dot = styled.button`
	align-self: center;
	padding: 0;
	outline: none;
	/* margin-left: 43px; */
	cursor: pointer;

	width: 20px;
	height: 20px;
	border-radius: 50%;
	border-style: solid;
	border-width: 1px;

	background-color: ${(props) => (props.state ? "#98ADD7" : "white")};
`;
