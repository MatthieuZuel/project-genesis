import React, { useState } from 'react';
import Image from '../../Images/hero.jpg';
import { Button } from '../ButtonElement/Button';
import {
	ArrowForward,
	ArrowRight,
	HeroBg,
	HeroBtnWrapper,
	HeroContainer,
	HeroContent,
	HeroH1,
	HeroP,
	ImageBg,
} from './Hero.element';

const Hero = () => {
	const [hover, setHover] = useState(false);

	const onHover = () => {
		setHover(!hover);
	};

	return (
		<HeroContainer>
			<HeroBg>
				<ImageBg src={Image} alt='Genesis Marketing' />
			</HeroBg>
			<HeroContent>
				<HeroH1>
					Recruter pour vous, c'est notre savoir&#8209;faire. Chez
					Genesis&nbsp;Marketing, la discr&eacute;tion reste notre&nbsp;force.
				</HeroH1>
				<HeroP>
					Genesis&nbsp;Marketing, the&nbsp;beginning, your&nbsp;future.
				</HeroP>
				<HeroBtnWrapper>
					<Button
						to='about'
						onMouseEnter={onHover}
						onMouseLeave={onHover}
						primary='true'
						dark='true'
						smooth={true}
						duration={500}
						spy={true}
						exact='true'
						offset={-80}>
						En&nbsp;savoir&nbsp;plus {hover ? <ArrowForward /> : <ArrowRight />}
					</Button>
				</HeroBtnWrapper>
			</HeroContent>
		</HeroContainer>
	);
};

export default Hero;
