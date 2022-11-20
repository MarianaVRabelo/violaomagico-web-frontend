import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	gap: 25px;

	width: 100%;
	height: 447.73px;
	background-color: #b99c7a;

	font-family: "Inter", sans-serif;

	@media (max-width: 970px) {
		width: fit-content;
		padding-left: 40px;
		padding-right: 40px;
	}
`;

export const Title = styled.h1`
	color: white;
`;

export const Select = styled.select`
	background-color: #f4f4f4;
	color: black;
	border-width: 1px;
	margin-bottom: 1.5%;
	font-size: 20px;
	font-weight: 700;
	line-height: 24px;
	letter-spacing: 0em;
	text-align: center;
	height: 44px;
	width: 250px;
	padding: 10px 15px 10px 15px;
`;

export const Button = styled.button`
	background-color: #f4f4f4;
	color: black;
	border-width: 1px;
	margin-bottom: 1.5%;
	font-family: "Inter", sans-serif;
	font-size: 20px;
	font-weight: 700;
	line-height: 24px;
	letter-spacing: 0em;
	text-align: center;
	height: 44px;
	width: 164px;
	border-radius: 9px;
	padding: 10px 15px 10px 15px;
`;
