import styled from "styled-components";

export const Fret = styled.div`
	display: flex;
	flex-direction: row;
	height: 110px;
	width: 25%; //cada compasso ocupar 1/4 do braço
	border-style: solid; // coloca a divisão entre os compassos
	border-width: 3px;
	border-top: 0ch;
	border-bottom: 0ch;
	border-left: 0ch;
	background-color: #ffffff;

	//justify-content: space-between;
	padding-top: 1.1%;
	padding-bottom: 1.1%;
`;
