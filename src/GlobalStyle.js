import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
    box-sizing: border-box;
    }

    *, ::after, ::before {
    box-sizing: inherit;
    }

    body {
    font-family: 'Montserrat', sans-serif;
    background-color: ${({ theme }) => theme.color.mercury};
    line-height: 1.5;
    padding: 20px;
    margin: 0 auto;
    max-width: 1000px;
    word-break: break-word;
    }
`;