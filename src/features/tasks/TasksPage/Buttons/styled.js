import styled from "styled-components";

export const Container = styled.div`
    align-items: center;
    transition: 1s;
    font-size: 16px;
    padding: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        display: grid;
        grid-template-rows: 1fr;
    }
`;

export const Button = styled.button`
    background-color: transparent;
    color: ${({ theme }) => theme.color.teal};
    border: none;
    margin: 0;
    cursor: pointer;

    &:hover {
        filter: brightness(120%);
    }

    &:active {
        filter: brightness(130%);
    }

    &:disabled {
        color: ${({ theme }) => theme.color.silver};
        cursor: default;
        filter: none;
    }
`;