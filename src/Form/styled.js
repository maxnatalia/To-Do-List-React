import styled from "styled-components";

export const FormContainer = styled.form`
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;
    box-shadow: 1px 1px 2px rgb(174, 169, 169);
    border-radius: 5px;
    
    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

export const Input = styled.input`
    padding: 10px;
    border: 3px solid #eee;
    background-color: #fff;
    border-radius: 5px;
`;

export const Button = styled.button`
    border: none;
    border-radius: 5px;
    background-color: hsl(180, 100%, 25%);
    color: #fff;
    padding: 10px;
    cursor: pointer;
    transition: 1s;

    &:hover {
        background-color: hsl(180, 100%, 35%);
        transform: scale(1.2);
    }

    &:active {
        background-color: hsl(180, 100%, 45%);
    }
`;