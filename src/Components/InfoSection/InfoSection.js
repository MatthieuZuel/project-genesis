import React from 'react';
import { Button } from '../ButtonElement/Button';
import {
	BtnWrap,
	Column,
	Heading,
	Img,
	ImgWrap,
	InfoContainer,
	InfoRow,
	InfoWrapper,
	Subtitle,
	TextWrapper,
	TopLine,
} from './InfoSection.element';

const InfoSection = ({
	id,
	lightBg,
	imgStart,
	topLine,
	lightText,
	headline,
	darkText,
	description,
	primary,
	dark,
	dark2,
	buttonLabel,
	img,
	alt,
	btn,
	pathTo,
}) => {
	return (
		<>
			<InfoContainer id={id} lightBg={lightBg}>
				<InfoWrapper>
					<InfoRow imgStart={imgStart}>
						<Column>
							<TextWrapper>
								<TopLine> {topLine} </TopLine>
								<Heading lightText={lightText}> {headline} </Heading>
								<Subtitle darkText={darkText}> {description} </Subtitle>
								{btn ? (
									<BtnWrap>
										<Button
											to={pathTo}
											smooth={true}
											duration={500}
											spy={true}
											exact='true'
											offset={-80}
											primary={primary ? 1 : 0}
											dark={dark ? 1 : 0}
											dark2={dark ? 1 : 0}>
											{buttonLabel}
										</Button>
									</BtnWrap>
								) : (
									<></>
								)}
							</TextWrapper>
						</Column>
						<Column>
							<ImgWrap>
								<Img src={img} alt={alt ? alt : ''} />
							</ImgWrap>
						</Column>
					</InfoRow>
				</InfoWrapper>
			</InfoContainer>
		</>
	);
};

export default InfoSection;
