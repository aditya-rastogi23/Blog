import { useState } from "react";

import { imgUrl, img2 } from "../../constants";
import { TabbedButtonLayout } from "./TabbedLayout";
import { TabbedButton } from "./TabbedLayout/TabbedButton";
import Title from "../UI/Title";
import CardList from "./CardList";
import FlexCentralWrapper from "../UI/FlexCentralWrapper";

const CardData = [
    {
        image: imgUrl,
        title: "This is a tech title",
        description: "This is the card description",
        isTech: true,
    },
    {
        image: img2,
        title: "This is also a tech title",
        description: "This is also a card description",
        isTech: true,
    },
    {
        image: imgUrl,
        title: "This is a personal title",
        description: "This is also a card description",
    },
    {
        image: img2,
        title: "This is also a personal title",
        description: "This is also a card description",
    },
    {
        image: imgUrl,
        title: "This is also a personal title",
        description: "This is also a card description",
    },
];

const Home = () => {
    const [isTech, setTech] = useState(true);

    return (
        <FlexCentralWrapper>
            <Title title="Old Ben's Log" headerType={1} />
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
