import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh + 5rem);
    background: #011522;
`

export const Container = styled.div`
    position: relative;
    min-width: 1100px;
    min-height: 550px;
    display: flex;
`

export const InfoWrapper = styled.div`
    position: absolute;
    top: 40px;
    width: 350px;
    height: calc(100% - 80px);
    background: #01bf71;
    z-index: 1;
    padding: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    box-shadow: 0px 20px 25px rgba(0, 0, 0, .15);
`

export const InfoContent = styled.div`

`

export const InfoTitle = styled.h2`
    color: #010606;
    font-size: 24px;
    font-weight: 600;
`

export const Info = styled.ul`
    position: relative;
    margin: 20px 0;
`

export const InfoItem = styled.li`
    position: relative;
    list-style: none;
    display: flex;
    margin: 20px 0;
    cursor: pointer;
    align-items: flex-start;
`

export const IconWrapper = styled.span`
    width: 30px;
    min-width: 30px;
`

export const Text = styled.span`
    color: #010606;
    margin-left: 10px;
    font-weight: 400;
`

export const Sci = styled.ul`
    position: relative;
    display: flex;
`

export const SocialItems = styled.li`
    list-style: none;
    margin-right: 15px;
`

export const SocialLink = styled.a`
    text-decoration: none;
`

export const FormWrapper = styled.div`
    position: absolute;
    padding: 70px 50px;
    padding-left: 250px;
    margin-left: 150px;
    width: calc(100% - 150px);
    height: 100%;
    background: #fff;
    box-shadow: 0 50px 50px rgba(0, 0, 0, .25);
`

export const FormTitle = styled.h2`
    color: #011522;
    font-size: 24px;
    font-weight: 600;
`

export const Form = styled.form`
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-top: 30px;
`

export const FormInputs = styled.div`
    position: relative;
    margin-bottom: 35px;
    width: ${({full}) => (full ? '100%' : '47%')};
`

export const Input = styled.input`
    width: 100%;
    resize: none;
    padding: 5px 0;
    font-size: 18px;
    font-weight: 400;
    color: #333;
    border: none;
    outline: none;
    border-bottom: 1px solid #777;

    &:focus ~ Label,
    &:valid ~ Label {
        transform: translateY(-20px);
        font-size: 12px;
        letter-spacing: 1px;
        color: #01bf71;
    }
`

export const TextArea = styled.textarea`
    width: 100%;
    resize: none;
    padding: 5px 0;
    font-size: 18px;
    font-weight: 400;
    color: #333;
    border: none;
    outline: none;
    border-bottom: 1px solid #777;
    height: 120px;

    &:focus ~ Label,
    &:valid ~ Label {
        transform: translateY(-20px);
        font-size: 12px;
        letter-spacing: 1px;
        color: #01bf71;
    }
`

export const Label = styled.label`
    position: absolute;
    left: 0;
    padding: 5px 0;
    pointer-events: none;
    font-size: 18px;
    font-weight: 400;
    transition: .3s;
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