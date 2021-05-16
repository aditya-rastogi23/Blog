import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
// import styled from "styled-components";

import { Articles } from "../../Assets/constants/";
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
        return <p>{text}</p>;
    };
    const linkStruct = (url: string) => {
        return <a href={url}>Click here</a>;
    };
    const imgStruct = (src: string) => {
        return <img src={src} alt={src} />;
    };
    const mapper = {
        text: (text: string) => contentStruct(text),
        link: (url: string) => linkStruct(url),
        image: (src: string) => imgStruct(src),
    };
    const contentMapping = Articles[ArticleId].contents.map((item) => {
        return mapper[item.contentType](item.content);
    });
    return <div>{contentMapping}</div>;
};
export default Article;
