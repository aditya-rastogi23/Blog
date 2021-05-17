import styled from "styled-components";

interface Props {
    isRow?: boolean;
    basis?: string;
    isStretch?: boolean;
    gap?: string;
    width?: string;
}
const FlexCentralWrapper = styled.div<Props>`
    display: flex;
    flex-direction: ${({ isRow }) => (isRow ? "row" : "column")};
    gap: ${({ gap }) => gap || "2em"};
    align-items: ${({ isStretch }) => (isStretch ? "stretch" : "center")};
    justify-content: center;
    flex-basis: ${({ basis }) => basis || null};
    flex-wrap: ${({ basis }) => (basis ? "wrap" : null)};
    margin-bottom: 5%;
    > * {
        flex-basis: 100%;
    }
`;
export default FlexCentralWrapper;
