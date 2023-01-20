import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: center;

	position: sticky;
	top: 0;
	z-index: 20;

	color: white;
	background-color: #231709;

	font-family: QuickSand;

	height: 100px;
	width: 100%;
`;
export const HeaderContainer = styled.header`
	display: flex;
	justify-content: center;
	align-items: center;

	height: 100px;
	width: 100%;
	max-width: 1500px;

	padding: 0px 2em;
`;

export const LogoContainer = styled(NavLink)`
	display: flex;
	align-items: center;
	flex-grow: 1;
	gap: 32px;

	font-weight: 700;
	font-size: 32px;

	cursor: pointer;
	color: white;
	text-decoration: none;

	@media screen and (max-width: 438px){
		gap: 16px;
	}
	@media screen and (max-width: 350px){
		font-size:25px;
	}
	@media screen and (max-width: 300px){
		font-size:22px;
	}

`;
export const LinksList = styled.ul`
	display: flex;
	list-style: none;
	text-align: center;
	margin-right: 0;

	font-size: 1.5em;

	@media screen and (max-width: 960px) {
		flex-direction: column;
		width: 100%;
		border-top: 1px solid white;
		position: absolute;
		top: 100px;
		left: -110%;
		opacity: 1;
		transition: all 0.5s ease;

		&.active {
			background: #231709;
			left: 0px;
			z-index: 1;
		}
	}
`;

export const LinkItem = styled.li`
	line-height: 40px;
	margin-right: 1em;

	&:after {
		content: "";
		display: block;
		height: 3px;
		width: 0;
		background: transparent;
		transition: width 0.7s ease, background-color 0.5s ease;
	}

	&:hover:after {
		width: 100%;
		background: white;
	}

	@media screen and (max-width: 960px) {
		width: 100%;
	}
`;

export const activeClassName = "active";
export const NavLinkItem = styled(NavLink)`
	text-decoration: none;
	color: white;

	height: 100%;
	padding: 0.5em 1em;
	border-bottom: 3px solid transparent;

	&.${activeClassName} {
		border: 1px solid white;
	}

	@media screen and (max-width: 960px) {
		padding: 1.5em;
		width: 100%;
		display: table;
	}
`;

export const ResponsiveIcon = styled.div`
	display: none;
	cursor: pointer;

	@media screen and (max-width: 960px) {
		display: block;
	}
`;
