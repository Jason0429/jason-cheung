import { IconButton } from "@material-ui/core";
import React from "react";
import ReactTooltip from "react-tooltip";
import {
	Card,
	Title,
	SubTitle,
	Image,
	ControlPanel,
	Button,
	Wrapper
} from "./AboutCardStyles";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function AboutCard() {
	return (
		<Card className="box-shadow">
			<Wrapper>
				<Title>Hi, Nice to Meet You!</Title>
				<SubTitle>I'm Jason</SubTitle>
			</Wrapper>

			<Image
				src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/118155121_3346396542251593_3278468722248117115_n.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=Z2BGhMb-VSQAX9Y9e7g&_nc_ht=scontent-lga3-1.xx&oh=9884d302a39af0fa6a45802636ed13d8&oe=5FD55A77"
				alt="Jason"
				className="box-shadow"
			/>

			<ControlPanel>
				<a href="">
					<IconButton>
						<FacebookIcon
							className="my-svg media-icons box-shadow"
							data-tip="Facebook"
						/>
						<ReactTooltip effect="solid" delayShow={400} />
					</IconButton>
				</a>

				<a href="">
					<IconButton>
						<InstagramIcon
							className="my-svg media-icons box-shadow"
							data-tip="Instagram"
						/>
						<ReactTooltip effect="solid" delayShow={400} />
					</IconButton>
				</a>

				<a href="">
					<IconButton>
						<LinkedInIcon
							className="my-svg media-icons box-shadow"
							data-tip="LinkedIn"
						/>
						<ReactTooltip effect="solid" delayShow={400} />
					</IconButton>
				</a>
			</ControlPanel>
			<Button className="box-shadow toggle-mode">Resume</Button>
		</Card>
	);
}

export default AboutCard;
