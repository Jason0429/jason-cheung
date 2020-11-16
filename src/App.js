import logo from './logo.svg';
import './App.css';
import './components/global.scss';
import { useState, useEffect } from 'react';
import { ThemeProvider } from "styled-components";
import  { useDarkMode } from "./components/useDarkMode";
import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./components/Themes";
import Card from './components/Card';
import Navbar from './components/Navbar';
import { Fade } from 'react-awesome-reveal';

function App() {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  var myCard = {
    title: "Hi, Nice to Meet You!",
    img: "https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/118155121_3346396542251593_3278468722248117115_n.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=Z2BGhMb-VSQAX9Y9e7g&_nc_ht=scontent-lga3-1.xx&oh=9884d302a39af0fa6a45802636ed13d8&oe=5FD55A77",
    name: "I'm Jason"
  };

  return (
    <ThemeProvider theme={themeMode}>
      <>
      <GlobalStyles/>
        <div className="App">
          <Navbar themeToggler={themeToggler} />
          <Card info={myCard} />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
