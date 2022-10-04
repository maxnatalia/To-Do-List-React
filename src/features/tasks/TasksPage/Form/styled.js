import styled from "styled-components";

export const FormContainer = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;
    
    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        grid-template-columns: 1fr;
    }
`;

export const Button = styled.button`
    border: none;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.color.primaryColor};
    color: ${({ theme }) => theme.color.backgroundColorsMain};
    padding: 10px;
    cursor: pointer;
    transition: 1s;

    &:hover {
        filter: brightness(130%);
        transform: scale(1.2);
    }

    &:active {
        filter: brightness(140%);
    }
`;