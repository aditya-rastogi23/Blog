import styled from "styled-components";

interface Props {
    isRow?: boolean;
    basis?: string;
    isStretch?: boolean;
}
const FlexCentralWrapper = styled.div<Props>`
    display: flex;
    flex-direction: ${(props) => (props.isRow ? "row" : "column")};
    gap: 2em;
    align-items: ${(props) => (props.isStretch ? "stretch" : "center")};
    justify-content: center;
    flex-basis: ${(props) => props.basis || null};
    flex-wrap: ${(props) => (props.basis ? "wrap" : null)};
    margin-bottom: 5%;
`;
export default FlexCentralWrapper;
