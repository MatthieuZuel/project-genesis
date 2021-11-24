import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { GoLocation, GoMail } from 'react-icons/go'
import { IoCallOutline } from 'react-icons/io5'
import { IconContext } from 'react-icons/lib';
import emailjs from 'emailjs-com'
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
    TextArea
} from './Contact.element'

const Contact = () => {

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_703xrui", "template_dlnvsdi", e.target, "user_gb5C5jCdWZfbtiTbYSNAF")
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset();
    }

    return (
        <>
        <IconContext.Provider value={{color: '#010606', size: '20'}}>
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
                                        2912 Meadowbrook Road <br/>
                                        Los Angeles, CA <br/>
                                        90017
                                    </Text>
                                </InfoItem>
                                <InfoItem>
                                    <IconWrapper>
                                        <GoMail />
                                    </IconWrapper>
                                    <Text>
                                        lorem@ipsum.com
                                    </Text>
                                </InfoItem>
                                <InfoItem>
                                    <IconWrapper>
                                        <IoCallOutline />
                                    </IconWrapper>
                                    <Text>
                                        310-286-1623
                                    </Text>
                                </InfoItem>
                            </Info>
                        </InfoContent>
                        <Sci>
                            <SocialItems>
                                <SocialLink href="//www.facebook.com">
                                    <FaFacebookF />
                                </SocialLink>
                            </SocialItems>
                        </Sci>
                    </InfoWrapper>
                    <FormWrapper>
                        <FormTitle> Send a Message </FormTitle>
                        <Form onSubmit={sendEmail}>
                            <FormInputs>
                                <Input type="text" name="user_firstname" required />
                                <Label> First Name </Label>
                            </FormInputs>
                            <FormInputs>
                                <Input type="text" name="user_lastname" required />
                                <Label> Last Name </Label>
                            </FormInputs>
                            <FormInputs>
                                <Input type="text" name="subject" required/>
                                <Label> Subject </Label>
                            </FormInputs>
                            <FormInputs>
                                <Input type="email" name="user_email" required />
                                <Label> Email Address </Label>
                            </FormInputs>
                            <FormInputs full="true">
                                <TextArea type="text" name="message" required></TextArea>
                                <Label> Write your message here... </Label>
                            </FormInputs>
                            <FormInputs full="true">
                                <FormButton type="submit" > Send </FormButton>
                            </FormInputs>
                        </Form>
                    </FormWrapper>
                </Container>
            </Section>
        </IconContext.Provider>
        </>
    )
}

export default Contact
