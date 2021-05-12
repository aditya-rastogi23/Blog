import React from "react";

import FlexCentralWrapper from "../../UI/FlexCentralWrapper";
import Card from "./Card";

interface CardData {
    title: string;
    description: string;
    image: string;
    isTech?: boolean;
}
interface Props {
    data: CardData[];
    isTech: boolean;
}

const filterer = (cardIsTech: boolean | undefined, isTech: boolean) => {
    return isTech ? cardIsTech : !cardIsTech;
};

const CardList: React.FC<Props> = ({ data, isTech }) => {
    return (
        <FlexCentralWrapper isStretch isRow basis="min(20em,80vw)">
            {data
                .filter((item) =>
                    isTech
                        ? filterer(item.isTech, true)
                        : filterer(item.isTech, false)
                )
                .map((card) => {
                    const { title, description, image } = card;
                    return (
                        <Card
                            title={title}
                            description={description}
                            image={image}
                        />
                    );
                })}
        </FlexCentralWrapper>
    );
};
export default CardList;
