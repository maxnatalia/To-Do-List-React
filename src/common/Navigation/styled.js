import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink)`
    color: ${({ theme }) => theme.color.whisper};
    text-decoration: none;
    padding: 10px;

    &:hover {
        font-weight: 700;
    }

    &.active {
        font-weight: 700;
        color: ${({ theme }) => theme.color.whisper};
        text-decoration: none;
    }
`;

export const Nav = styled.nav`
    background-color: ${({ theme }) => theme.color.teal};
    display: grid;
    grid-template-columns: max-content max-content;
    justify-content: center;
    width: 100%;
    padding: 10px;
    position: fixed;
    overflow: auto;
`;