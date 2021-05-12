import { useState } from "react";

import { TabbedButtonLayout } from "./TabbedLayout";
import { TabbedButton } from "./TabbedLayout/TabbedButton";
import Title from "../UI/Title";
import CardList from "./CardList";
const Home = () => {
    const [isTech, setTech] = useState(true);

    return (
        <>
            <Title title="Old Ben's Guide" headerType={1} />
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
            <CardList />
        </>
    );
};
export default Home;
