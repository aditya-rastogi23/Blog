import styled from "styled-components";

const StyledNav = styled.div`
    min-height: 10vmin;
    position: sticky;
    top: 0;
    ul {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        list-style-type: none;
    }
    ul * {
        margin: auto;
        text-decoration: none;
    }
`;
export default StyledNav;
