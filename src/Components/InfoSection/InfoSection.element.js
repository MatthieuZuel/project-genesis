import styled from "styled-components";

export const InfoContainer = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#101522')};

    @media screen and (max-width: 768px) {
        padding: 6.25rem 0;
    }
`

export const InfoWrapper = styled.div`
    display: flex;
    align-items: center;
    z-index: 1;
    height: 100vh;
    width: 100%;
    max-width: 1100px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 1.5rem;
    justify-content: center;
`

export const InfoRow = styled.div`
    display: flex;
    align-items: center;
    gap: 0 2rem;
    flex-direction: ${({imgStart}) => (imgStart ? 'row-reverse' : 'row')};
    width: 100%;

    @media screen and (max-width: 768px) {
        gap: 2rem 0;
        flex-direction: column;
    }
`

export const Column = styled.div`
    margin-bottom: .938rem;
    padding: 0 .938rem;
    width: 50%;
    flex: 50%;

    @media screen and (max-width: 768px) {
        width: 100%;
        flex: 100%;
    }
`

export const TextWrapper = styled.div`
    max-width: 33.75rem;
    padding-top: 0;
    padding-bottom: 3.75rem;
`
export const TopLine = styled.p`
    color: #01bf71; // Primary Color
    font-size: 1rem;
    font-weight: 700;
    line-height: 1rem;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 1rem;
`

export const Heading = styled.h1`
    margin-bottom: 1.5rem;
    font-size: 3rem;
    line-height: 1.1;
    color: ${({lightText}) => (lightText ? '#f7f8fa' : '#010606')};

    @media screen and (max-width: 768px) {
        font-size: 2.5rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`

export const Subtitle = styled.p`
    max-width: 27.5rem;
    font-size: 1.125rem;
    line-height: 1.5rem;
    color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-top: 2.188rem;
`

export const ImgWrap = styled.div`
    max-width: 34.688rem;
    height: 100%;
`

export const Img = styled.img`
    width: 100%;
    margin: 0 0 .625rem 0;
    padding-right: 0;
`