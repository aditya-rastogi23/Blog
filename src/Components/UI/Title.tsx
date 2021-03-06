import React from "react";
import styled, { css } from "styled-components";
interface Props {
    headerType?: number;
}
const titleStyles = css`
    text-align: center;
    margin: 1em;
    font-family: Quantico;
`;
const StyledH1 = styled.h1`
    ${titleStyles}
`;
const StyledH2 = styled.h2`
    ${titleStyles}
`;
const StyledH3 = styled.h3`
    ${titleStyles}
`;
const StyledH4 = styled.h4`
    ${titleStyles}
`;
const StyledH5 = styled.h5`
    ${titleStyles}
`;
const StyledH6 = styled.h6`
    ${titleStyles}
`;
const defaultHeader = 2;
const AdjustOffset = 1;
const Title: React.FC<Props> = ({ children, headerType = defaultHeader }) => {
    const headerSwitch = [
        <StyledH1 key={1}>{children}</StyledH1>,
        <StyledH2 key={2}>{children}</StyledH2>,
        <StyledH3 key={3}>{children}</StyledH3>,
        <StyledH4 key={4}>{children}</StyledH4>,
        <StyledH5 key={5}>{children}</StyledH5>,
        <StyledH6 key={6}>{children}</StyledH6>,
    ];
    return headerSwitch[headerType - AdjustOffset];
};
export default Title;
