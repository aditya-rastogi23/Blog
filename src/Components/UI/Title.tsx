import React from "react";
import styled, { css } from "styled-components";
interface Props {
    title: string;
}
const titleStyles = css`
    text-align: center;
`;
const StyledTitle = styled.h2``;
const Title: React.FC<Props> = ({ title }) => {
    return <div>Hello Title</div>;
};
export default Title;
