import styled from "styled-components";

export const Container = styled.div`
    align-items: center;
    transition: 1s;
    font-size: 16px;
    padding: 20px;

    @media (max-width: 767px) {
        display: grid;
        grid-template-rows: 1fr;
    }
`;

export const Button = styled.button`
    background-color: transparent;
    color: hsl(180, 100%, 25%);
    border: none;
    margin: 0;
    cursor: pointer;

    &:hover {
        color: hsl(180, 100%, 35%);
    }

    &:active {
        color: hsl(180, 100%, 45%);
    }

    &:disabled {
        color: #aaa;
    }
`;