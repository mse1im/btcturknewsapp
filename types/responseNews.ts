export interface NewsType {
    author: string;
    content: string;
    description:string;
    source: {
        id: string;
        name: string;
    }
    publishedAt:string;
    title:string;
    url: string;
    urlToImage:string;
    articleId:string;
}

export interface IProps {
    articles: NewsType[];
}