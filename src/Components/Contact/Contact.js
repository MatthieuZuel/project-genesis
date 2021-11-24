import React from 'react'
import {
    Form,
    FormButton,
    FormInput,
    FormLabel,
    Icon,
    TextArea
} from './Contact.element'

const Contact = () => {
    return (
        <>
            <Icon to="/"> Genesis Marketing </Icon>
            <Form onSubmit="submit" >
                <FormLabel>
                    Name:
                    <FormInput 
                        type="text"
                        placeholder="Your Name"
                    />
                </FormLabel>
                <FormLabel>
                    Email:
                    <FormInput 
                        type="email"
                        placeholder="Your Email"
                    />
                </FormLabel>
                <FormLabel>
                    Message:
                    <TextArea
                        placeholder="Message"
                    ></TextArea>
                </FormLabel>
                <FormButton type="submit"> Send </FormButton>
            </Form>
        </>
    )
}

export default Contact
