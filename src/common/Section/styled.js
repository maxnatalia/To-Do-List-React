import styled from "styled-components";

export const StyledSection = styled.section`
    background-color: ${({ theme }) => theme.color.backgroundColorsMain};
    box-shadow: 1px 1px 2px ${({ theme }) => theme.color.border};
    border-radius: 5px;
`;
export const Wrapper = styled.div`
    padding: 20px;
`;

export const Header = styled.header`
    display: grid;
    grid-template-columns: 1fr auto auto;
    align-items: center;
    font-size: 22px;
    margin-top: 10px;
    border-bottom: 2px solid ${({ theme }) => theme.color.border};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        grid-template-columns: 1fr;
    }
`;

export const Title = styled.h2`
    font-size: 20px;
    padding: 10px;
`;