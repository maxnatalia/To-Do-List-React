import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 50px;

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
    width: 190px;
    padding: 10px 15px;
    cursor: pointer;
    border:2px solid ${({ theme }) => theme.color.primaryColor};;
    color: ${({ theme }) => theme.color.primaryColor};
    background-color: ${({ theme }) => theme.color.backgroundBody};

    &:hover {
        font-weight: 600;
    }

    ${({ lang }) => lang && css`
        width: 60px;

        @media (max-width: 767px) {
            margin-bottom: 10px;
        }
    `}
`;

export const ButtonWrapper = styled.div`
    display: flex;
    gap: 5px;
    align-items: center;
`;
