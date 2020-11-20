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
import Wave from "react-wavify";

function App() {
	const [theme, themeToggler] = useDarkMode();
	const themeMode = theme === "light" ? lightTheme : darkTheme;
	const [isMenu, setMenu] = useState(false);

	const menuToggler = () => {
		setMenu((prevValue) => !prevValue);
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
					<Wave
						className="wave-background"
						fill={theme == "light" ? "#363537" : "#FAFAFA"}
						paused={false}
						options={{
							height: 20,
							amplitude: 50,
							speed: 0.2,
							points: 5
						}}
					/>
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
