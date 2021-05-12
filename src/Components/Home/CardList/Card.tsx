import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { Link } from "react-router-dom";

import Title from "../../UI/Title";
import { primary, secondary } from "../../../Assets/theme";
interface Props {
    title: string;
    description: string;
    image: string;
    id: number;
}
interface PropsColor {
    color: string;
}
const StyledCard = styled.div<PropsColor>`
    box-shadow: 0 0 0.25em 0.125em ${(props) => props.color};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2em;
    max-width: 20em;
    min-height: 20em;
    > * {
        margin: 1em;
    }
    > img {
        width: 90%;
    }
    p {
        text-align: center;
    }
`;

const Card: React.FC<Props> = ({ title, description, image, id }) => {
    const color =
        useContext(ThemeContext).mode === "dark" ? primary : secondary;
    return (
        <StyledCard color={color}>
            <img src={image} alt={title} />
            <Title title={title} />
            <p>{description}</p>
            <Link to={`/${id}`}>View More!</Link>
        </StyledCard>
    );
};
export default Card;
