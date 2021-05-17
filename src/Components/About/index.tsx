import React from "react";
import styled from "styled-components";
import { Github } from "@styled-icons/simple-icons/Github";
import { Gmail } from "@styled-icons/simple-icons/Gmail";
import { Linkedin as LinkedIn } from "@styled-icons/simple-icons/Linkedin";

import Container from "../UI/Container";
import FlexCentralWrapper from "../UI/FlexCentralWrapper";
import Title from "../UI/Title";
import { Content } from "../UI/Content";
import ExternalLink from "../UI/ExternalLink";

const iconsArray = [
    { icon: Github, link: "https://github.com/aditya-rastogi23" },
    {
        icon: LinkedIn,
        link: "https://www.linkedin.com/in/aditya-rastogi-33a42916a/",
    },
    { icon: Gmail, link: "mailto:adit.rastogi2014@gmail.com" },
];

const iconsComponents = iconsArray.map(({ icon, link }) => {
    const IconComponent = styled(icon)`
        width: 1.5em;
        height: 1.5em;
    `;
    return (
        <ExternalLink url={link} key={link}>
            <IconComponent />
        </ExternalLink>
    );
});

const About: React.FC = () => {
    return (
        <FlexCentralWrapper gap="0.5em">
            <Title>About The Blog writer</Title>
            <Title headerType={4}>
                (not narcissistic enough to call myself an author just yet)
            </Title>
            <p>Quote? Inspiration? Inspirational Quote?</p>
            <pre>Coding, football, writing, Star wars.</pre>
            <Container>
                <FlexCentralWrapper>
                    <Content>
                        Honestly, the four words above kind of summarize my
                        interests. This blog over the days is going to be home
                        to my thoughts, my works and in general me rambling. If
                        you think that interests you, for whatever godforsaken
                        reason, stay tuned cos ramble I will.
                    </Content>
                    <p> If you wanna know more about me, contact me here:</p>
                    <FlexCentralWrapper isRow>
                        {iconsComponents}
                    </FlexCentralWrapper>
                </FlexCentralWrapper>
            </Container>
        </FlexCentralWrapper>
    );
};
export default About;
