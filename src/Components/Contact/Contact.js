import React, { useState } from 'react';
import axios from 'axios'
import {
    Form,
    FormButton,
    FormInput,
    FormLabel,
    Icon,
    TextArea
} from './Contact.element'

const Contact = () => {

    const [sent, setSent] = useState(false)

    const [text, setText] = useState("")

    const handleSend = async() => {
        setSent(true)
        try {
            await axios.post("http://localhost:4000/send_mail", {
                text
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Icon to="/"> Genesis Marketing </Icon>
            {!sent ? (
                <Form onSubmit={handleSend}>
                    <FormLabel>
                        <FormInput 
                            type="text"
                            value={text}
                            onChange={(e) => 
                                setText(e.target.value)
                            }
                        />
                    </FormLabel>
                    {/* <FormLabel>
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
                    </FormLabel> */}
                    <FormButton type="submit"> Send </FormButton>
                </Form>
            ) : (
                <h1>Email Sent</h1>
            )}
        </>
    )
}

export default Contact
