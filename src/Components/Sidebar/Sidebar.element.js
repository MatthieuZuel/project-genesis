import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const SidebarContainer = styled.aside`
    display: grid;
    align-items: center;
    position: fixed;
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    left: 0;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #101522;
    transition: all .3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`

export const SidebarWrapper = styled.div`
    color: #fff;
`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 5rem);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(5, 3.75rem);
    }
`

export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: all .2s ease-in-out;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #5ce1e6; // Primary Color
        transition: all .2s ease-in-out;
    }
`

export const SidebarBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`

export const SidebarRoute = styled(LinkR)`
    border-radius: 3.125rem;
    background: #5ce1e6; // Primary Color
    white-space: nowrap;
    padding: 1rem 4rem;
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