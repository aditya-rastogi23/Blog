import React from "react";

import FlexCentralWrapper from "../UI/FlexCentralWrapper";
import Title from "../UI/Title";

const About: React.FC = () => {
    return (
        <FlexCentralWrapper isRow>
            <div>
                <img src="" alt="title" />
            </div>
            <div>
                <Title title="About The Blog writer" />
                <Title
                    title={
                        "(not narcissistic enough to call myself an author just yet)"
                    }
                    headerType={5}
                />
            </div>
        </FlexCentralWrapper>
    );
};
export default About;
