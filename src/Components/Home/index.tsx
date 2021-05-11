import { useState } from "react";
import styled, { css } from "styled-components";
import theme from "styled-theming";

import { primary, secondary } from "../../theme";
import Button from "../UI/Button";

interface Props {
    isSelected: boolean;
}
const TabbedButtonLayout = styled.div`
    margin-inline: auto;
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5em;
`;
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
const TabbedButton = styled(Button)<Props>`
    flex-grow: 1;
    ${(props) => (props.isSelected ? themeSelected : null)};
    border-radius: 10px;
`;
const Home = () => {
    const [isTech, setTech] = useState(true);

    return (
        <TabbedButtonLayout>
            <TabbedButton onClick={() => setTech(true)} isSelected={isTech}>
                Tech
            </TabbedButton>
            <TabbedButton onClick={() => setTech(false)} isSelected={!isTech}>
                Personal
            </TabbedButton>
        </TabbedButtonLayout>
    );
};
export default Home;
