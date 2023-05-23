import styled from "styled-components";

export const Fret = styled.div`
	display: flex;
	flex-direction: column;
	height: 110px;
	width: 25%; //cada compasso ocupar 1/4 do braço
	border-style: solid; // coloca a divisão entre os compassos
	border-width: 3px;
	border-top: 0ch;
	border-bottom: 0ch;
	border-left: 0ch;
	background-color: #ffffff;

	justify-content: space-between;
	padding-top: 1.1%;
	padding-bottom: 1.1%;
`;

export const Line = styled.div`
	width: 100%;
	display: flex;
	height: 1px;
	background-color: #000000;
`;