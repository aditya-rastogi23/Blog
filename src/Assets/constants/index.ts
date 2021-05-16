import { contents } from "./TSReact";
import { contents as personalContent } from "./ToastToNITK";

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

export const Articles: ArticleInterface[] = [contents, personalContent];
