import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.1s ease-in;

    .box-shadow {
        box-shadow: ${({ theme }) => theme.boxShadow};
    }
    
    .my-svg {
        fill: ${({ theme }) => theme.fill};
    }

    .my-btn {
        color: ${({theme}) => theme.text};

        &:hover {
            background: ${({theme}) => theme.btnHoverBackground}
        }
    }
  }
  `
