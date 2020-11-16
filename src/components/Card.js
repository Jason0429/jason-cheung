import React from 'react';
import './Card.scss';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { IconButton } from '@material-ui/core';
import { Fade, Slide } from 'react-awesome-reveal';
import ReactTooltip from 'react-tooltip';

function Card({info}) {
    return (
        <Slide triggerOnce left>
            <div className="card box-shadow">
                <div className="text-container">
                    <Fade triggerOnce delay={100}>
                        <div className="title">
                            {info.title}
                        </div>
                    </Fade>
                    <Fade triggerOnce delay={300}>
                        <div className="name">
                            {info.name}
                        </div>
                    </Fade>
                </div>
                <Fade triggerOnce delay={500}>
                    <div className="img-container">
                        <img src={info.img} alt=""/>
                    </div>
                </Fade>
                <Fade triggerOnce delay={700}>
                    <div className="control-panel">
                        <a href="">
                            <IconButton>
                                <FacebookIcon className="my-svg" data-tip="Facebook"/>
                                <ReactTooltip effect="solid" delayShow={400}/>
                            </IconButton>                      
                        </a>

                        <a href="">
                            <IconButton>
                                <InstagramIcon className="my-svg" data-tip="Instagram"/>
                                <ReactTooltip effect="solid" delayShow={400}/>
                            </IconButton>
                        </a>

                        <a href="">
                            <IconButton>
                                <LinkedInIcon className="my-svg" data-tip="LinkedIn"/>
                                <ReactTooltip effect="solid" delayShow={400}/>
                            </IconButton>
                        </a>
                    </div>
                </Fade>
                <button className="my-btn">
                    Resume
                </button>
            </div>
        </Slide>
    )
}

export default Card;
