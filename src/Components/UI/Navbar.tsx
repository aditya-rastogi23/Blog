import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Button from "./Button";
import StyledNav from "./StyledNav";

interface Props {
    themeHandler: () => void;
    theme: string;
}
const RightListItem = styled.li`
    margin-left: auto;
    margin-right: 5vmax;
`;

const Navbar: React.FC<Props> = ({ themeHandler, theme }) => {
    return (
        <StyledNav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Button onClick={() => themeHandler()}>{theme}</Button>
                </li>
                <RightListItem>
                    <a href="/" target="_blank" rel="noopener noreferrer">
                        About
                    </a>
                </RightListItem>
            </ul>
        </StyledNav>
    );
};
export default Navbar;
