import styled from 'styled-components';

export const InfoContainer = styled.div`
	color: #fff;
	background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#101522')};
	padding-block: 20vh;

	@media screen and (max-width: 768px) {
		padding-block: 10vh;
	}
`;

export const InfoWrapper = styled.div`
	display: flex;
	align-items: center;
	z-index: 1;
	width: 100%;
	max-width: 1100px;
	margin-inline: auto;
	padding-inline: 1.5rem;
	justify-content: center;
`;

export const InfoRow = styled.div`
	display: flex;
	align-items: center;
	gap: 2rem;
	flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};
	width: 100%;

	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`;

export const Column = styled.div`
	/* margin-bottom: 0.938rem;
	padding-inline: 0.938rem; */
	width: 50%;
	flex: 50%;

	@media screen and (max-width: 768px) {
		width: 100%;
		flex: 100%;
	}
`;

export const TextWrapper = styled.div`
	max-width: 33.75rem;
	padding-top: 0;
	/* padding-bottom: 3.75rem; */
`;
export const TopLine = styled.p`
	color: #5ce1e6; // Primary Color
	font-size: 1.2rem;
	font-weight: 700;
	line-height: 1rem;
	letter-spacing: 1.4px;
	text-transform: uppercase;
	margin-bottom: 1rem;
`;

export const Heading = styled.h1`
	margin-bottom: 1.5rem;
	font-size: 2.5rem;
	line-height: 1.1;
	color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};

	@media screen and (max-width: 768px) {
		font-size: 2rem;
	}

	@media screen and (max-width: 480px) {
		font-size: 1.5rem;
	}
`;

export const Subtitle = styled.p`
	max-width: 27.5rem;
	font-size: 1.125rem;
	line-height: 1.5rem;
	color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
`;

export const BtnWrap = styled.div`
	display: flex;
	justify-content: flex-start;
	margin-top: 2.188rem;
`;

export const ImgWrap = styled.div`
	max-width: 34.688rem;
	height: 100%;
`;

export const Img = styled.img`
	width: auto;
	height: 100%;
	max-width: 100%;
	max-height: 100%;
	/* margin-block-end: 0.625rem; */
	padding-right: 0;
`;
