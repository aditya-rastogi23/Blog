import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";

import ExternalLink from "../UI/ExternalLink";
import FlexCentralWrapper from "../UI/FlexCentralWrapper";
import Title from "../UI/Title";
import { Content } from "../UI/Content";
import { Articles } from "../../Assets/constants/";
import Container from "../UI/Container";
import { Image } from "../UI/Image";
interface MatchParams {
    id: string;
}

const Article: React.FC<RouteComponentProps<MatchParams>> = (props) => {
    const defaultArrayId = 0;
    const [ArticleId, setArticleId] = useState(defaultArrayId);

    useEffect(() => {
        setArticleId(Number(props.match.params.id));
    });
    const contentStruct = (text: string) => {
        return <Content lowHeight>{text}</Content>;
    };
    const linkStruct = (url: string, title?: string) => {
        return <ExternalLink url={url}>{title || "Click here"}</ExternalLink>;
    };
    const imgStruct = (src: string, title = "testing") => {
        return (
            <FlexCentralWrapper gap="0em">
                <Image src={src} alt={src} />
                <Title headerType={5}>{title}</Title>
            </FlexCentralWrapper>
        );
    };
    const linkText = (
        url: string,
        textBefore?: string,
        textAfter?: string,
        linkText?: string
    ) => {
        return (
            <Content lowHeight>
                {textBefore}{" "}
                <ExternalLink url={url} isInline>
                    {linkText}
                </ExternalLink>{" "}
                {textAfter}
            </Content>
        );
    };
    const mapper = {
        text: (text: string) => contentStruct(text),
        "link and text": (
            url: string,
            textBefore?: string,
            textAfter?: string,
            title?: string
        ) => linkText(url, textBefore, textAfter, title),
        image: (src: string, title?: string) => imgStruct(src, title),
        link: (url: string, title?: string) => linkStruct(url, title),
    };
    const contentMapping = Articles[ArticleId].contents.map(
        ({
            content,
            contentType,
            title = undefined,
            textAfter = undefined,
            textBefore = undefined,
        }) => {
            if (textAfter && title)
                return mapper[contentType](
                    content,
                    textBefore,
                    textAfter,
                    title
                );
            if (title) return mapper[contentType](content, title);
            return mapper[contentType](content);
        }
    );
    const title = Articles[ArticleId].cardData.title;
    return (
        <Container>
            <Title>{title}</Title>
            {contentMapping}
        </Container>
    );
};
export default Article;
