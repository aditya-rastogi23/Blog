import styled, { css } from "styled-components";
import theme from "styled-theming";

import { primary, secondary } from "../../../Assets/theme";

const shadow = theme("mode", {
    light: css`
        box-shadow: 0 0 8px 1px ${secondary};
    `,
    dark: css`
        box-shadow: 0 0 8px 1px ${primary};
    `,
});

const StyledNav = styled.div`
    margin-top: 0;
    min-height: 10vmin;
    ${shadow};
    position: sticky;
    display: flex;
    justify-content: center;
    top: 0;
    ul {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        list-style-type: none;
        flex-grow: 1;
        @media (max-width: 768px) {
            flex-direction: column;
            padding: 0;
        }
    }
    ul * {
        margin: auto;
        text-decoration: none;
    }
`;
export default StyledNav;
