import { createGlobalStyle, css } from "styled-components";
import theme from "styled-theming";

import PrimaryFont from "./fonts/primary.ttf";

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
    @font-face {
        font-family: primary;
        src: url(${PrimaryFont});
    }
    *{
        ${colorTheme};
        font-family: primary;
    }
    body {
        margin:0 5%;
    }
`;
