import logo from "../SO-styled-components-emmett-disable.png";
import logo2 from "../crypt.jpg";

import { contents } from "./TypescriptBlog";
import { contents as personalContent } from "./PersonalBlog";

export const imgUrl = logo;
export const img2 = logo2;
export const title = "Old Ben's Log";

interface CardData {
    title: string;
    description: string;
    image: string;
    isTech: boolean;
}

interface Content {
    contentType: "text" | "link" | "image";
    content: string;
}

export interface ArticleInterface {
    contents: Content[];
    cardData: CardData;
}

export const Articles: ArticleInterface[] = [
    contents,
    contents,
    personalContent,
    contents,
];
