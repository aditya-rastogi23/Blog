import styled from "styled-components";

const StyledNav = styled.div`
    min-height: 10vmin;
    ul {
        display: flex;
        flex-direction: row;
        justify-content:space-evenly;
        align-items: center;
        list-style-type: none;
    }
    ul * {
        margin: auto;
        text-decoration: none;
    }
`;
export default StyledNav;
