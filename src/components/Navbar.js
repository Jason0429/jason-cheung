import React from 'react';
import './Navbar.scss';
import MenuIcon from '@material-ui/icons/Menu';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { IconButton } from '@material-ui/core';
import ReactTooltip from 'react-tooltip';
import { Slide } from 'react-awesome-reveal';


function Navbar({ themeToggler }) {
    return (
        <Slide left delay={100} className="navbar box-shadow">
            <div className="navbar box-shadow">
                <div className="name">Jason Cheung</div>

                {/* <ul className="nav-links">
                    <li>Projects</li>
                    <li>Experience</li>
                </ul> */}
                <div className="control-panel">
                    {/* Theme Toggler */}
                    <IconButton onClick={themeToggler}>
                        <Brightness4Icon className="my-svg" data-tip="Toggle Mode"/> 
                        <ReactTooltip effect="solid" delayShow={500}/>
                    </IconButton>

                    {/* Hamburger */}
                    <IconButton>
                        <MenuIcon className="my-svg" />
                    </IconButton>
                </div>
            </div>
        </Slide>
        
    )
}

export default Navbar
