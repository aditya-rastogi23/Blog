import React, { useState } from "react";

import { imgUrl, img2, title } from "../../Assets/constants";
import { TabbedButtonLayout } from "./TabbedLayout";
import { TabbedButton } from "./TabbedLayout/TabbedButton";
import Title from "../UI/Title";
import CardList from "./CardList";
import FlexCentralWrapper from "../UI/FlexCentralWrapper";
import { Articles } from "../../Assets/constants/";

const CardData = Articles.map((Article, idx) => {
    return {
        ...Article.cardData,
        id: idx,
    };
});

const Home: React.FC = () => {
    const [isTech, setTech] = useState(true);

    return (
        <FlexCentralWrapper>
            <Title title={title} headerType={1} />
            <TabbedButtonLayout>
                <TabbedButton onClick={() => setTech(true)} isSelected={isTech}>
                    Tech
                </TabbedButton>
                <TabbedButton
                    onClick={() => setTech(false)}
                    isSelected={!isTech}
                >
                    Personal
                </TabbedButton>
            </TabbedButtonLayout>
            <CardList data={CardData} isTech={isTech} />
        </FlexCentralWrapper>
    );
};
export default Home;
