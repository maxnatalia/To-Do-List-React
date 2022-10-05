import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px ) {
        display: grid;
        grid-template-rows: 1fr;
    }
`;

export const StyledHeader = styled.h1`
    margin: 0;
`;

export const Button = styled.button`
    border-radius: 5px;
    width: 180px;
    padding: 10px 15px;
    cursor: pointer;
    border:2px solid ${({ theme }) => theme.color.primaryColor};;
    color: ${({ theme }) => theme.color.primaryColor};
    background-color: ${({ theme }) => theme.color.backgroundBody};

    &:hover {
        font-weight: 600;
    }
`;