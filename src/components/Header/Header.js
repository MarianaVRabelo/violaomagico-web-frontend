import GuitarIcon from "../../assets/GuitarIcon";
import { GoThreeBars } from "react-icons/go";
import { AiOutlineClose } from "react-icons/ai";
import {
	Container,
	HeaderContainer,
	LogoContainer,
	LinksList,
	LinkItem,
	activeClassName,
	NavLinkItem,
	ResponsiveIcon,
} from "./Styles";
import { useState } from "react";

export default function Header() {
	const iconsSize = 35;
	const [click, setClick] = useState(false);
	const handleIconClick = () => setClick((prev) => !prev);
	const handleLinkClick = () => setClick(false);
	const handleActive = ({ isActive }) =>
		isActive ? activeClassName : undefined;
	return (
		<Container>
			<HeaderContainer>
				<LogoContainer to="/">
					<GuitarIcon />
					<p>VIOLÃO MÁGICO</p>
				</LogoContainer>
				<LinksList className={click && activeClassName}>
					<LinkItem>
						<NavLinkItem
							to="/page-test"
							onClick={handleLinkClick}
							className={handleActive}
						>
							Criar Música
						</NavLinkItem>
					</LinkItem>
					<LinkItem>
						<NavLinkItem
							to="/contact"
							onClick={handleLinkClick}
							className={handleActive}
						>
							Contate-nos
						</NavLinkItem>
					</LinkItem>
				</LinksList>
				<ResponsiveIcon onClick={handleIconClick}>
					{click ? (
						<AiOutlineClose size={iconsSize} />
					) : (
						<GoThreeBars size={iconsSize} />
					)}
				</ResponsiveIcon>
			</HeaderContainer>
		</Container>
	);
}
