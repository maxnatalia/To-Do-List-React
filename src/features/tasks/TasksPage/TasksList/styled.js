import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const List = styled.ul`
    list-style: none;
    word-break: break-word;
    padding: 40px;
    margin: 0;
    background-color: ${({ theme }) => theme.color.backgroundColorsMain};
`;

export const Item = styled.li`
    border-bottom: 2px solid ${({ theme }) => theme.color.border};
    display: grid;
    grid-template-columns: auto 1fr auto;
    padding: 10px;
    grid-gap: 10px;

    ${({ hidden }) => hidden && css`
        display:none;
    `}
`;

export const Content = styled.span`
    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;

export const StyledLinkTask = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.color.primaryColor};

    &:hover {
        filter: brightness(120%);
        transition: 1s; 
    }

    &:active {
        filter: brightness(130%);
    }
`;

export const Button = styled.button`
    padding: 0;
    border: none;
    width: 30px;
    height: 30px;
    color: ${({ theme }) => theme.color.backgroundColorsMain};
    cursor: pointer;
    transition: 1s;

    ${({ toggleDone }) => toggleDone && css`
        background-color: ${({ theme }) => theme.color.toggleButton};

        &:hover {
            filter: brightness(130%);
            transition: 1s; 
        }

        &:active {
            filter: brightness(140%);
        }
    `}

    ${({ remove }) => remove && css`
        background-color: ${({ theme }) => theme.color.removeButton};

        &:hover {
            filter: brightness(130%);
            transition: 1s; 
        }

        &:active {
            filter: brightness(140%);
        }
    `}
`;