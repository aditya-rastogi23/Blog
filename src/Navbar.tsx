import React from "react";
import { Link } from "react-router-dom";

import StyledNav from "./StyledNav";

interface Props {
    themeHandler: () => void;
}

const Navbar: React.FC<Props> = ({ themeHandler }) => {
    return (
        <StyledNav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <a href="/" target="_blank" rel="noopener noreferrer">
                        About
                    </a>
                </li>
                <li>
                    <button onClick={() => themeHandler()}>Click me</button>
                </li>
            </ul>
        </StyledNav>
    );
};
export default Navbar;
