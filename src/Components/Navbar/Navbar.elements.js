import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    height: 5rem;
    margin-top: -5rem;
    background: ${({scrollNav}) => (scrollNav ? '#333' : 'transparent')};
    font-size: 1rem;
    z-index: 10;
    transition: all .8s ease, background .3s ease;

    @media screen and (max-width: 960px) {
        transition: all .8s ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 5rem;
    z-index: 1;
    width: 100%;
    padding: 0 1.5rem;
    max-width: 1200px;
`
export const NavLogo = styled(LinkR)`
    display: flex;
    align-items: center;
    justify-self: flex-start;
    cursor: pointer;
    margin-left: 1.5rem;
    color: #fff;
    font-size: 1.5rem;
    font-weight: 700;
    text-decoration: none;
    padding: .5rem;
    
    img {
        height: 100%;
        max-width: auto;
    }
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -1.375rem;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavItem = styled.li`
    height: 5rem;
`

export const NavLinks = styled(LinkS)`
    display: flex;
    align-items: center;
    color: #fff;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #5ce1e6; // Primary Color
    }
`;

export const NavBtn = styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px){
        display: none;
    }
`
export const NavBtnLink = styled(LinkR)`
    border-radius: 3.125rem;
    background: #5ce1e6; // Primary Color
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