import React from 'react';
import { FaFacebookF, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { GoMail, GoLocation } from 'react-icons/go';
import { IconContext } from 'react-icons/lib';
import emailjs from 'emailjs-com';
import {
	Container,
	Form,
	FormButton,
	FormInputs,
	FormWrapper,
	FormTitle,
	IconWrapper,
	Info,
	InfoContent,
	InfoItem,
	InfoTitle,
	InfoWrapper,
	Input,
	Label,
	Sci,
	Section,
	SocialItems,
	SocialLink,
	Text,
	TextArea,
} from './Contact.element';

const Contact = () => {
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_703xrui',
				'template_dlnvsdi',
				e.target,
				'user_gb5C5jCdWZfbtiTbYSNAF',
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				},
			);

		e.target.reset();
	};

	return (
		<>
			<IconContext.Provider value={{ color: '#010606', size: '22' }}>
				<Section>
					<Container>
						<InfoWrapper>
							<InfoContent>
								<InfoTitle>Contact Info</InfoTitle>
								<Info>
									<InfoItem>
										<IconWrapper>
											<GoLocation />
										</IconWrapper>
										<Text>
											5th&nbsp;floor, medine mews La chauss&eacute;e Street,
											Port&nbsp;Louis, 11328. Port&nbsp;Louis Mauritius
										</Text>
									</InfoItem>
									<InfoItem>
										<IconWrapper>
											<GoMail />
										</IconWrapper>
										<Text>info@gnsmrting.com</Text>
									</InfoItem>
									<InfoItem>
										<IconWrapper>
											<FaWhatsapp />
										</IconWrapper>
										<Text>+230&nbsp;5904&nbsp;1963</Text>
									</InfoItem>
								</Info>
							</InfoContent>
							<Sci>
								<SocialItems>
									<SocialLink href='//www.facebook.com/gensmarketing/'>
										<FaFacebookF />
									</SocialLink>
								</SocialItems>
								<SocialItems>
									<SocialLink href='//www.linkedin.com/in/genesis-marketing-bb5810222/'>
										<FaLinkedin />
									</SocialLink>
								</SocialItems>
							</Sci>
						</InfoWrapper>
						<FormWrapper>
							<FormTitle> Send a Message </FormTitle>
							<Form onSubmit={sendEmail}>
								<FormInputs>
									<Input type='text' name='user_firstname' required />
									<Label> First Name </Label>
								</FormInputs>
								<FormInputs>
									<Input type='text' name='user_lastname' required />
									<Label> Last Name </Label>
								</FormInputs>
								<FormInputs>
									<Input type='text' name='subject' required />
									<Label> Subject </Label>
								</FormInputs>
								<FormInputs>
									<Input type='email' name='user_email' required />
									<Label> Email Address </Label>
								</FormInputs>
								<FormInputs full='true'>
									<TextArea type='text' name='message' required></TextArea>
									<Label> Write your message here... </Label>
								</FormInputs>
								<FormInputs full='true'>
									<FormButton type='submit'> Send </FormButton>
								</FormInputs>
							</Form>
						</FormWrapper>
					</Container>
				</Section>
			</IconContext.Provider>
		</>
	);
};

export default Contact;
