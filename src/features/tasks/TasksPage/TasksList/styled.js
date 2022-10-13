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
    grid-template-columns: auto 1fr auto auto;
    justify-content:center;
    align-items: center;
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

export const EditableContent = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 10px;
    align-items: center;
`;

export const ContentInput = styled.input`
    width: 100%;
    padding: 5px;
    border: 1px solid ${({ theme }) => theme.color.border};
    background-color: ${({ theme }) => theme.color.backgroundColorsMain};
    color: ${({ theme }) => theme.color.text};
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
    color: ${({ theme }) => theme.color.textButton};
    font-weight: 700;
    font-size: 15px;
    cursor: pointer;
    transition: 1s;

    &:hover {
            filter: brightness(130%);
            transition: 1s; 
        }

        &:active {
            filter: brightness(140%);
        }

    ${({ toggleDone }) => toggleDone && css`
        background-color: ${({ theme }) => theme.color.toggleButton};
        color: ${({ theme }) => theme.color.textToggleButton};
    `}

    ${({ remove }) => remove && css`
        background-color: ${({ theme }) => theme.color.removeButton};
    `}

    ${({ edit }) => edit && css`
        background-color: ${({ theme }) => theme.color.saveButton};
    `}

    ${({ save }) => save && css`
        background-color: ${({ theme }) => theme.color.saveButton};
        padding: 0px 5px;
    `}
`;

export const ExtraContent = styled.p`
    margin-bottom: 10px;
`;