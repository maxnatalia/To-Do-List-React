import styled from "styled-components";

export const MainSection = styled.section`
    background-color: white;
    box-shadow: 1px 1px 2px rgb(174, 169, 169);
    border-radius: 5px;
`;

export const Header = styled.header`
    display: grid;
    grid-template-columns: 1fr auto auto;
    align-items: center;
    font-size: 22px;
    padding: 0;
    margin-bottom: 0;
    margin-top: 10px;
    border-bottom: 3px solid #eee;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

export const Title = styled.h2`
    font-size: 22px;
    padding: 20px;
    margin-bottom: 0;
    margin-top: 0;
`;