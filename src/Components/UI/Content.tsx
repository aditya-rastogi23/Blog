import styled from "styled-components";

interface Props {
    lowHeight?: boolean;
}

export const Content = styled.p<Props>`
    line-height: ${({ lowHeight }) => (lowHeight ? "1.5" : "2.5")};
    @media (max-width: 768px) {
        line-height: 1.5;
    }
`;
