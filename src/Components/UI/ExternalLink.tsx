import React from "react";
import styled from "styled-components";

interface Props {
    url?: string;
    isInline?: boolean;
}

const ExtLink = styled.a<{ isInline?: boolean }>`
    margin-right: ${({ isInline }) => (isInline ? "0" : "2%")};
    :hover {
        color: red;
    }
`;

const ExternalLink: React.FC<Props> = ({
    url = "",
    children,
    isInline = false,
}) => {
    return (
        <ExtLink
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            isInline={isInline}
        >
            {children}
        </ExtLink>
    );
};
export default ExternalLink;
