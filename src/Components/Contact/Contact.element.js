import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const Icon = styled(LinkR)`
    height: 5rem;
    display: flex;
    align-items: center;
    padding-inline: 1.5rem;
    font-size: 1.5rem;
    font-weight: 700;
    font-family: 'Comfortaa', cursive;
    text-decoration: none;
    cursor: pointer;
`

export const Form = styled.form`

`

export const FormInput = styled.input`

`

export const FormButton = styled.button`
    margin-top: 1.5rem;
    border-radius: 3.125rem;
    background: #01bf71; // Primary Color
    white-space: nowrap;
    padding: .625rem 1.375rem;
    color: #010606;
    font-size: 1rem;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all .2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all .2 ease-in-out;
        background: #fff;
        color: #010606;
    }
`

export const Recaptcha = styled.div`

`