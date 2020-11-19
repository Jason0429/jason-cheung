import styled from "styled-components";

export const NavContainer = styled.div`
	position: fixed;
	z-index: 101;
	top: 0;
	width: 100%;
	padding: 20px 0px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Nav = styled.nav`
	height: auto;
	width: 500px;
	box-shadow: 0 0 15px 3px #00000010;
	border-radius: 15px;
	padding: 5px 20px;
	display: flex;
	flex-direction: column;
	transition: all 5s cubic-bezier(0.42, 0, 0.58, 1);

	@media only screen and (max-width: 768px) {
		width: 80%;
	}
`;

export const NavTop = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-between;
`;

export const NavLogo = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: 600;
`;

export const ControlPanel = styled.div`
	display: flex;
	align-items: center;
`;

export const Menu = styled.div`
	/* border: thin solid black; */
	position: relative;
	padding: 20px 0;
	min-height: 200px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	/* justify-content: space-evenly; */
`;

export const NavLink = styled.div`
	font-weight: 600;
	font-size: 1em;
	width: 400px;
	cursor: pointer;
	text-align: center;
	border-radius: 15px;
	padding: 10px;

	@media only screen and (max-width: 768px) {
		width: 250px;
	}
	/* border: thin solid black; */
`;
