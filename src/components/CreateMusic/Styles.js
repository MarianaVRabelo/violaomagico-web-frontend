import styled from "styled-components";

export const Body = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	height: 100%;
	background-color: #231709;
`;

export const GuitarNeck = styled.div`
	display: flex;
	flex-direction: row;
	width: 70%;
	margin-top: 2%;
	margin-bottom: 0.5%;
	//background-color: green;
`;

export const GuitarStrings = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	width: 38px;
	background-color: #ffffff;
	border: 3px;
	border-right: 0ch;
	border-style: solid;
`;

export const String = styled.div`
	font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
	font-weight: 500;
`;

export const GuitarFrets = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	border-width: 3px;
	border-right: none;
	border-style: solid;
	//background-color: red;
`;

export const ContainerOutsideDots = styled.div`
	display: flex;
	flex-direction: row;
	width: 65%;
	justify-content: space-between;
	margin-bottom: 2%;
	margin-left: 1.5%;
`;

export const OutsideDots = styled.div`
	display: flex;
`;

export const OutsideDot = styled.div`
	width: 10px;
	height: 10px;
	background-color: aliceblue;
	margin-left: 34px;
	align-self: center;
	border-radius: 50%;
	border-style: solid;
	border-width: 1px;
`;

export const BotaoNovoCompasso = styled.button`
	display: flex;
	padding: 0.5%;
	padding-left: 1%;
	padding-right: 1%;
	align-items: center;
	justify-content: center;
	background-color: #78866b;
	color: white;
	border-width: 1px;
	margin-bottom: 1.5%;
	font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
	font-weight: 500;
`;
