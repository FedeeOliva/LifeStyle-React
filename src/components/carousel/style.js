import styled from "styled-components";

export const CarouselContainer = styled.div`
	position: relative;
	max-height: 500px;
	overflow: hidden;

`;

export const Arrow = styled.button`
	background: #0095ff;
	border: none;
	color: white;
	font-size: 2rem;
	padding: 7px;	
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	cursor: pointer;
	transition: 0.5s;
	${props => props.position === 'right'? 'right: 20px;' : 'left: 20px;' }

	&:hover{
		opacity: 0.5;
	}
`;

export const ImageSlide = styled.img`
	width: 100%;
	height: auto;
`;