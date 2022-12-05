import styled from "styled-components";

export const StyledFooter = styled.footer`
    width: 100%;
    margin-top: 40px;
`;

export const ContainerAbout = styled.div`
    text-align: center;
    color: ${({ theme }) => theme.color.backgroundColorsMain};
    background-color: ${({ theme }) => theme.color.primaryColor};
    padding: 20px 0;
`;

export const ContainerAddress = styled.address`
    font-style: unset;
    display: flex;
    justify-content: space-between;
    align-content: center;
    
    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
    }
`;
export const LinkEmail = styled.a`
    text-decoration: none;
    font-size: 30px;
    font-weight: 700;
    color: ${({ theme }) => theme.color.primaryColor};
    padding: 10px;

    &:hover {
        filter: brightness(120%);
        transition: 1s; 
    }

    @media (max-width:768px) {
        font-size: 18px;
        text-align: center;
    }
`;
export const WrapperIcon = styled.div`
    display: flex;
    justify-content: flex-end;

    @media (max-width: 768px) {
        justify-content: center;
    }
`;
export const IconLink = styled.a`
    cursor: pointer;
    padding: 10px;

    & path {
        fill: ${({ theme }) => theme.color.primaryColor};
    }

    &:hover {
        filter: brightness(120%);
        transition: 1s; 
    }
`;

