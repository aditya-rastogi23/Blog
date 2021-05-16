import { createGlobalStyle, css } from "styled-components";
import theme from "styled-theming";

export const primary = "#15f2fd";
export const secondary = "#000c33";

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
    *{
        ${colorTheme};
    }
    body {
        margin-inline: 5%;
        margin-top:0;
    }
`;
