import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import { IconButton } from "@material-ui/core";
import { Fade } from "react-awesome-reveal";
import ReactTooltip from "react-tooltip";
import AnchorLink from "react-anchor-link-smooth-scroll";
import $ from "jquery";
import {
	NavContainer,
	Nav,
	NavLogo,
	ControlPanel,
	Menu,
	NavLink,
	NavTop
} from "./NavbarStyles";
import SmoothCollapse from "react-smooth-collapse";

function Navbar({ themeToggler, isMenu, menuToggler, navLinks }) {
	return (
		<NavContainer>
			<Nav className="box-shadow toggle-mode">
				<NavTop>
					<NavLogo>Jason Cheung</NavLogo>
					<ControlPanel>
						<IconButton onClick={themeToggler}>
							<Brightness4Icon
								className="my-svg"
								data-tip="Toggle Mode"
								data-for="toggle"
							/>
							<ReactTooltip
								id="toggle"
								effect="solid"
								delayShow={400}
							/>
						</IconButton>
						{!isMenu ? (
							<IconButton>
								<MenuIcon
									className="my-svg z-index"
									onClick={menuToggler}
								/>
							</IconButton>
						) : (
							<IconButton>
								<CloseIcon
									className="my-svg z-index"
									onClick={menuToggler}
								/>
							</IconButton>
						)}
					</ControlPanel>
				</NavTop>
				<SmoothCollapse expanded={isMenu}>
					<Menu>
						<Fade cascade>
							{navLinks.map((link) => (
								<AnchorLink href={link.id}>
									<NavLink className="toggle-mode box-shadow">
										{link.title}
									</NavLink>
								</AnchorLink>
							))}
						</Fade>
					</Menu>
				</SmoothCollapse>
			</Nav>
		</NavContainer>
	);
}

export default Navbar;
