import styled, { css } from "styled-components";
import theme from "styled-theming";

import Button from "../../UI/Button";
import { primary, secondary } from "../../../theme";
interface Props {
    isSelected: boolean;
}
const themeSelected = theme("mode", {
    light: css`
        background-color: ${secondary};
        color: ${primary};
    `,
    dark: css`
        background-color: ${primary};
        color: ${secondary};
    `,
});
export const TabbedButton = styled(Button)<Props>`
    flex-grow: 1;
    ${(props) => (props.isSelected ? themeSelected : null)};
    border-radius: 10px;
`;
