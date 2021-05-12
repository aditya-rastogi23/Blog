import React from "react";
import styled from "styled-components";

import Title from "../../UI/Title";
import { primary } from "../../../Assets/theme";
interface Props {
    title: string;
    description: string;
    image: string;
}

const StyledCard = styled.div`
    box-shadow: 0 0 0.25em 0.125em ${primary};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2em;
    max-width: 20em;
    min-height: 20em;
    > img {
        position: relative;
        top: 0;
        width: 100%;
    }
    p {
        text-align: center;
        padding: 1em;
    }
`;

const Card: React.FC<Props> = ({ title, description, image }) => {
    return (
        <StyledCard>
            <img src={image} alt={title} />
            <Title title={title} />
            <p>{description}</p>
        </StyledCard>
    );
};
export default Card;
