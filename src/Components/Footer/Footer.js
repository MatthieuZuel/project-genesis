import React from 'react';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import logo from '../../Images/Genesis Logo-01.svg';
import {
	FooterContainer,
	FooterWrap,
	SocialIconLink,
	SocialIcons,
	SocialLogo,
	SocialMedia,
	SocialMediaWrap,
	WebsiteRights,
} from './Footer.element';

const Footer = () => {
	const toggleHome = () => {
		scroll.scrollToTop();
	};

	return (
		<FooterContainer>
			<FooterWrap>
				<SocialMedia>
					<SocialMediaWrap>
						<SocialLogo to='/' onClick={toggleHome}>
							<img src={logo} alt='logo' />
						</SocialLogo>
						<WebsiteRights>
							&copy;&nbsp;Genesis Marketing {new Date().getFullYear()} | All
							rights reserved&reg;.
						</WebsiteRights>
						<SocialIcons>
							<SocialIconLink
								href='//www.facebook.com/gensmarketing/'
								target='_blank'
								aria-label="Link to Genesis Marketing's Facebook Page">
								<FaFacebook />
							</SocialIconLink>
							<SocialIconLink
								href='//www.linkedin.com/in/genesis-marketing-bb5810222/'
								target='_blank'
								aria-label="Link to Genesis Marketing's LinkedIn">
								<FaLinkedin />
							</SocialIconLink>
						</SocialIcons>
					</SocialMediaWrap>
				</SocialMedia>
			</FooterWrap>
		</FooterContainer>
	);
};

export default Footer;
