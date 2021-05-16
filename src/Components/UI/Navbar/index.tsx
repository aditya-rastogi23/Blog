import React from "react";
import { Link } from "react-router-dom";

import Button from "../Button";
import StyledNav from "./StyledNav";

interface Props {
    themeHandler: () => void;
    theme: string;
}

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
                <li>
                    <Link to="/About">About</Link>
                </li>
            </ul>
        </StyledNav>
    );
};
export default Navbar;
