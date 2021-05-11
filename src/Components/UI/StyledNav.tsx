import styled from "styled-components";

const StyledNav = styled.div`
    min-height: 10vmin;
    border: 1px solid red;
    ul {
        display: flex;
        flex-direction: row;
        list-style-type: none;
    }
    ul * {
        margin: auto;
        text-decoration: none;
    }
    ul li:last-child {
        margin-right: 5%;
    }
`;
export default StyledNav;
