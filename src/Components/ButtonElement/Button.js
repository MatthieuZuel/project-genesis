import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const Button = styled(LinkS)`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3.125rem;
    background: ${({primary}) => (primary ? '#01bf71' : '#010606')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '.875rem 3rem' : '.75rem 1.875rem')};
    color: ${({ dark }) => ( dark ? '#010606' : '#fff' )};
    font-size: ${({fontBig}) => (fontBig ? '1.25rem' : '1rem')};
    outline: none;
    border: none;
    cursor: pointer;
    transition: all .2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all .2 ease-in-out;
        background: ${({primary}) => (primary ? '#fff' : '#01bf71')};
    }
`;