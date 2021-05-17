import { createGlobalStyle, css } from "styled-components";
import theme from "styled-theming";

import PrimaryFont from "./fonts/text.ttf";
import QB from "./fonts/Quantico/Quantico-Bold.ttf";
import QBI from "./fonts/Quantico/Quantico-BoldItalic.ttf";
import Q from "./fonts/Quantico/Quantico-Regular.ttf";
import QI from "./fonts/Quantico/Quantico-Italic.ttf";

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
    @font-face {
        font-family: Quantico;
        src: url(${Q});
        font-weight:normal;
        font-style:normal;
    }
    @font-face {
        font-family: Quantico;
        src: url(${QB});
        font-weight:bold;
        font-style:normal;
    } 
    @font-face {
        font-family: Quantico;
        src: url(${QI});
        font-weight:normal;
        font-style:italic;
    }
    @font-face {
        font-family: Quantico;
        src: url(${QBI});
        font-weight:bold;
        font-style:italic;
    }
    *{
        ${colorTheme};
        font-family: primary;
    }
    body {
        margin:0 5%;
    }
`;
