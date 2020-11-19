import logo from "./logo.svg";
import "./App.css";
import "./components/global.scss";
import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "./components/useDarkMode";
import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./components/Themes";
import Navbar from "./components/Navbar";
import { Fade } from "react-awesome-reveal";
import AnchorLink from "react-anchor-link-smooth-scroll";
import AboutCard from "./components/AboutCard";
import ExperienceCard from "./components/ExperienceCard";

function App() {
	const [theme, themeToggler] = useDarkMode();
	const themeMode = theme === "light" ? lightTheme : darkTheme;
	const [isMenu, setMenu] = useState(false);

	const menuToggler = () => {
		setMenu((prevValue) => !prevValue);
	};

	var myCard = {
		title: "Hi, Nice to Meet You!",
		img:
			"https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/118155121_3346396542251593_3278468722248117115_n.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=Z2BGhMb-VSQAX9Y9e7g&_nc_ht=scontent-lga3-1.xx&oh=9884d302a39af0fa6a45802636ed13d8&oe=5FD55A77",
		name: "I'm Jason"
	};

	var navLinks = [
		{
			id: "#about",
			title: "About"
		},
		{
			id: "#experience",
			title: "Experience"
		},
		{
			id: "#projects",
			title: "Projects"
		},
		{
			id: "#contact",
			title: "Contact"
		}
	];

	return (
		<ThemeProvider theme={themeMode}>
			<>
				<GlobalStyles />
				<div className="App">
					<Navbar
						themeToggler={themeToggler}
						isMenu={isMenu}
						menuToggler={menuToggler}
						navLinks={navLinks}
					/>
					<div className="section align-center" id="about">
						<AboutCard />
					</div>
					<div className="section align-center" id="experience">
						<ExperienceCard />
					</div>
				</div>
			</>
		</ThemeProvider>
	);
}

export default App;
