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
    background-color: ${({ theme }) => theme.color.backgroundBody};
    color: ${({ theme }) => theme.color.text};
    line-height: 1.5;
    word-break: break-word;
    }
`;