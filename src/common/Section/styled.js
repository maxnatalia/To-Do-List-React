import styled from "styled-components";

export const StyledSection = styled.section`
    background-color: ${({ theme }) => theme.color.whisper};
    box-shadow: 1px 1px 2px ${({ theme }) => theme.color.silver};
    border-radius: 5px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
`;

export const Header = styled.header`
    display: grid;
    grid-template-columns: 1fr auto auto;
    align-items: center;
    font-size: 22px;
    padding: 0;
    margin-bottom: 0;
    margin-top: 10px;
    border-bottom: 3px solid ${({ theme }) => theme.color.silver};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        grid-template-columns: 1fr;
    }
`;

export const Title = styled.h2`
    font-size: 22px;
    padding: 20px;
    margin-bottom: 0;
    margin-top: 0;
`;