import React from 'react'
import {
    Form,
    FormButton,
    FormInput,
    Icon,
    Recaptcha
} from './Contact.element'

const Contact = () => {

    return (
        <>
            <Icon to="/"> Genesis Marketing </Icon>
            <Form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-recaptcha="true"
                data-netlify-honeypot="bot-field"
                onSubmit="submit"
            >
                <FormInput type="hidden" name="form-name" value="contact" />
                <Recaptcha data-netlify-recaptcha="true"></Recaptcha>
                <FormButton type="submit"> Send </FormButton>
            </Form>
        </>
    )
}

export default Contact
