import { createGlobalStyle, css } from "styled-components";
import theme from "styled-theming";

const primary = "#c7f8ff";
const secondary = "#013574";

const colorTheme = theme("mode", {
    light: css`
        background-color: ${primary};
        color: ${secondary};
    `,
    dark: css`
        background-color: ${secondary};
        color: ${primary};
    `,
});

export const GlobalStyle = createGlobalStyle`
    button {
        outline: none;
        border: none;
    }
    *{
        ${colorTheme};
    }
`;
