import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.1s ease-in;

    .toggle-mode {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        transition: all 0.1s ease-in;
    }

    .box-shadow {
        box-shadow: ${({ theme }) => theme.boxShadow};
    }
    
    .my-svg {
        fill: ${({ theme }) => theme.fill};
    }

    .media-icons {
        padding: 8px;
        border-radius: 100%;
    }

    .my-btn {
        color: ${({ theme }) => theme.text};

        &:hover {
            background: ${({ theme }) => theme.btnHoverBackground}
        }
    }

    a {
        text-decoration: none;
    }

    .z-index {
        z-index: 1001;
        pointer-events: all;
    }

    .wave-background {
        position: fixed;
        height: 30%;
        width: 100%;
        bottom: 0;
        z-index: -2 !important;
    }
  }
  `;
