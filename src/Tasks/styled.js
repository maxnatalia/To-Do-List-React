import styled, { css } from "styled-components";

export const List = styled.ul`
    list-style: none;
    word-break: break-word;
    padding: 40px;
    margin: 0;
    background-color: ${({ theme }) => theme.color.whisper};
    box-shadow: 1px 1px 2px ${({ theme }) => theme.color.silver};
    border-radius: 5px;
`;

export const Item = styled.li`
    border-bottom: 2px solid ${({ theme }) => theme.color.silver};
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
    color: ${({ theme }) => theme.color.whisper};
    cursor: pointer;
    transition: 1s;

    ${({ toggleDone }) => toggleDone && css`
        background-color: ${({ theme }) => theme.color.eucalyptus};

        &:hover {
            background-color: ${({ theme }) => theme.color.jade};
            transition: 1s; 
        }

        &:active {
            background-color: ${({ theme }) => theme.color.jungle};
        }
    `}

    ${({ remove }) => remove && css`
        background-color: ${({ theme }) => theme.color.crimson};

        &:hover {
            background-color: ${({ theme }) => theme.color.mandy};
            transition: 1s; 
        }

        &:active {
            background-color: ${({ theme }) => theme.color.blossom};
        }
    `}
`;