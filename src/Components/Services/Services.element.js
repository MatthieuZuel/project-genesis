import styled from "styled-components";

export const ServicesContainer = styled.div`
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #101522;
    padding: 5rem 0;

    @media screen and (max-width: 768px) {
        height: auto;
    }
`

export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 4rem;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`

export const ServicesWrapper = styled.div`
    max-width: 62.5rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 2rem;
    padding: 0 3.125rem;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 1.25rem;
    }
`

export const ServicesCard = styled.div`
    background: #fff;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    border-radius: 10px;
    /*min-height: 21.25rem;*/
    min-height: 100%;
    padding: 1.875rem;
    box-shadow: 0 1px 3px rgba(0,0,0,.2);
    transition:  all .2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all .2s ease-in-out;
        cursor: pointer;
    }
`

export const ServicesIcon = styled.img`
    max-height: 5rem;
    max-width: 5rem;
    margin-bottom: .625rem;
`

export const ServicesH2 = styled.h2`
    font-size: 1.5rem;
    margin-bottom: .625rem;
    text-align: center;
`

export const ServicesP = styled.p`
    font-size: 1rem;
    text-align: center;
`