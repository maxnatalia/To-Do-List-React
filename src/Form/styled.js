import styled from "styled-components";

export const FormContainer = styled.form`
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;
    box-shadow: 1px 1px 2px ${({ theme }) => theme.color.silver};
    border-radius: 5px;
    
    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        grid-template-columns: 1fr;
    }
`;

export const Input = styled.input`
    padding: 10px;
    border: 2px solid ${({ theme }) => theme.color.silver};
    background-color: ${({ theme }) => theme.color.whisper};
    border-radius: 5px;
`;

export const Button = styled.button`
    border: none;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.color.teal};
    color: ${({ theme }) => theme.color.whisper};
    padding: 10px;
    cursor: pointer;
    transition: 1s;

    &:hover {
        background-color: ${({ theme }) => theme.color.gossamer};
        transform: scale(1.2);
    }

    &:active {
        background-color: ${({ theme }) => theme.color.java};
    }
`;