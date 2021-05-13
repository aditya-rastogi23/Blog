import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";

import { ArticleInterface, Articles } from "../../Assets/constants/";
interface MatchParams {
    id: string;
}

const Article: React.FC<RouteComponentProps<MatchParams>> = (props) => {
    const [ArticleId, setArticleId] = useState("");

    useEffect(() => {
        setArticleId(props.match.params.id);
    });

    return <div>Hello Article {ArticleId}</div>;
};
export default Article;
