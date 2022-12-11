import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

export const Container = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100vh;
   background-color: rgba(0, 0, 0, 0.8);
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`;

export const ModalWrapper = styled.div`
    height: 300px;
    width: 500px;
    background-color: ${({ theme }) => theme.color.backgroundColorsMain};
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    z-index: 10;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 15px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px ) {
        height: 200px;
        width: 250px;
    }
`;

export const Title = styled.h2`
    text-align: center;
    color: ${({ theme }) => theme.color.primaryColor};
    flex-grow: 1;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px ) {
        font-size: 14px;
    }
`;

export const ButtonWrapper = styled.div`
    display: flex;
    gap: 40px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px ) {
        gap: 20px;
    }
`;

export const ConfirmButton = styled.button`
    width: 150px;
    padding: 10px 20px;
    cursor: pointer;
    color: ${({ theme }) => theme.color.primaryColor};
    font-weight: 600;
    border: 2px solid ${({ theme }) => theme.color.primaryColor};
    border-radius: 15px;
    background-color: ${({ theme }) => theme.color.backgroundColorsMain};

    &:hover {
        filter: brightness(120%);
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px ) {
        font-size: 14px;
        width: 75px;
    }
`;

export const ClosedIconWrapper = styled.div`
    justify-self: end;
    align-self: flex-end;
    flex-grow: 2;
`;

export const ClosedIcon = styled(FaTimes)`
    color: ${({ theme }) => theme.color.primaryColor};
    font-size: 30px;
    justify-self: flex-end;
    cursor: pointer;

    @media (max-width: 767px) {
        font-size: 20px;
    }
`;

