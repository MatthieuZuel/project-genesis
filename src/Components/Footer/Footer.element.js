import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const FooterContainer = styled.footer`
    background: #101522;
`

export const FooterWrap = styled.div`
    padding: 3rem 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`

export const SocialMedia = styled.section`
    max-width: 62.5rem;
    width: 100%;
`

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 2.5rem auto 0 auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`

export const SocialLogo = styled(LinkR)`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-family: 'Comfortaa', cursive;
    font-size: 1.5rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
`

export const WebsiteRights = styled.small`
    color: #fff;
    margin-bottom: 1rem;
    text-transform: capitalize;
`

export const SocialIcons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15rem;
`

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 1.5rem;
`