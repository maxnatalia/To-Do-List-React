import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export const StyledNavLink = styled(NavLink)`
    color: ${({ theme }) => theme.color.backgroundColorsMain};
    text-decoration: none;
    padding: 10px;

    &:hover {
        font-weight: 700;
    }

    &.active {
        font-weight: 700;
        color: ${({ theme }) => theme.color.backgroundColorsMain};
        text-decoration: none;
    }
`;

export const Nav = styled.nav`
    background-color: ${({ theme }) => theme.color.primaryColor};
    display: flex;
    justify-content: center;
    gap: 20px;
    width: 100%;
    padding: 20px;
    position: fixed;
    height: 60px;
    text-align: center;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px ) {
        padding: 0;
    }
`;

export const NavMenu = styled.div`
    flex-grow: 2;
    
    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px ) {
        opacity: ${({ show }) => show ? "1" : "0"};
        visibility: ${({ show }) => show ? "visible" : "hidden"};
        background-color: ${({ theme }) => theme.color.primaryColor};
        width: 100%;
        height: 100vh;
        display: grid;
        grid-template-columns: 1fr;
        justify-content: center;
        align-items: center;
    }
`;

export const MobileMenu = styled.div`
`;

export const Container = styled.div`
    display: flex;
    width: 100%;
`;

export const MenuBars = styled(FaBars)`
    display: none;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px ) {
        display: flex;
        color: ${({ theme }) => theme.color.backgroundColorsMain};
        justify-self: flex-end;
        align-self: center;
        margin: 15px;
        font-size: 20px;
        position: absolute;
        right: 20px;
        top: 10px;
        cursor: pointer;
        z-index: 50;
    }
`;

export const MenuClose = styled(FaTimes)`
        display: none;

        @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px ) {
            display: flex;
            color: ${({ theme }) => theme.color.backgroundColorsMain};
            justify-self: flex-end;
            align-self: center;
            margin: 15px;
            font-size: 20px;
            position: absolute;
            right: 20px;
            top: 10px;
            cursor: pointer;
            z-index: 50;
        }
`;