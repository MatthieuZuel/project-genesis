import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md'

export const HeroContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background: #0c0c0c;
    padding: 0 1.875rem;
    height: 100vh;
    z-index: 1;

    &:before {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(180deg, rgba(0,0,0,.2) 0%, rgba(0,0,0,.6) 100%),
        linear-gradient(180deg, rgba(0,0,0,.2) 0%, transparent);
        z-index: 2;
    }
`

export const HeroBg = styled.div`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const ImageBg = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 75rem;
    position: absolute;
    margin-top: 5rem;
    padding: .5rem 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 2.5rem;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 2.5rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`

export const HeroP = styled.p`
    margin-top: 1.5rem;
    color: #fff;
    font-size: 1.5rem;
    text-align: center;
    max-width: 37.5rem;

    @media screen and (max-width: 768px) {
        font-size: 1.5rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 1.125rem;
    }
`

export const HeroBtnWrapper = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: .5rem;
    font-size: 1.25rem;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: .5rem;
    font-size: 1.25rem;
`