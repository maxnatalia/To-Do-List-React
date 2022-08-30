import styled, { css } from "styled-components";

export const List = styled.ul`
    list-style: none;
    word-break: break-word;
    padding: 40px;
    margin: 0;
    background-color: white;
    box-shadow: 1px 1px 2px rgb(174, 169, 169);
    border-radius: 5px;
`;

export const Item = styled.li`
    border-bottom: 3px solid #eee;
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

export const Button = styled.button`
    padding: 0;
    border: none;
    width: 30px;
    height: 30px;
    color: white;
    cursor: pointer;
    transition: 1s;

    ${({ toggleDone }) => toggleDone && css`
        background-color: hwb(120 13% 45%);

        &:hover {
            background-color: hwb(120 13% 35%);
            transition: 1s; 
        }

        &:active {
            background-color: hwb(120 13% 25%);
        }
    `}

    ${({ remove }) => remove && css`
        background-color: hsl(348, 83%, 47%);

        &:hover {
            background-color: hsl(348, 83%, 57%);
            transition: 1s; 
        }

        &:active {
            background-color: hsl(348, 83%, 67%);
        }
    `}
`;