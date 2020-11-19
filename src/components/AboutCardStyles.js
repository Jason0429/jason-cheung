import styled from "styled-components";

export const Card = styled.div`
	height: 600px;
	width: 450px;
	border-radius: 15px;
	padding: 30px;
	transition: 0.2s ease-out;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

export const Wrapper = styled.div`
	width: 100%;
`;

export const Title = styled.h2`
	font-weight: 600;
	letter-spacing: -1px;
`;

export const SubTitle = styled.h3`
	font-weight: 600;
	letter-spacing: -1px;
	color: #999;
`;

export const Image = styled.img`
	transform: scale(0.85);
	border-radius: 100%;
	padding: 15px;
	/* border: thin solid black; */
`;

export const ControlPanel = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 10px;
`;

export const Button = styled.button`
	width: 100%;
	padding: 12px;
	border-radius: 15px;
	border: none;
	font-weight: 600;
	font-family: "Montserrat", sans-serif;
	cursor: pointer;
`;
