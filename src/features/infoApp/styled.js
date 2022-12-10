import styled from "styled-components";

export const StyledLink = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.color.primaryColor};
    font-weight: 700;
    letter-spacing: 1.5;

    &:hover {
        filter: brightness(120%);
    }
    
    &:active {
        filter: brightness(130%);
    }
`;