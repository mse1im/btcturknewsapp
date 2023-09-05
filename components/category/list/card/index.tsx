"use client"

import { FC, MouseEvent } from "react";
import { formatter } from "@/utils/dateFormatter";
import Picture from "@/common/Picture";
import handle from "@/utils/handleClick";
import "./index.scss";

type CardData = {
    title: string;
    publishedAt: string;
    urlToImage: string;
    author: string;
    handleClick: (e: MouseEvent, author: string) => void;
    list: string[] | null
}

const Card: FC<CardData> = ({ publishedAt, title, urlToImage, author, handleClick, list }) => {
    return (
        <div className="card" onClick={() => handle(author)}>
            <figure className="card-figure">
                <Picture src={urlToImage} alt="" width={100} height={145} />
                <figcaption>
                    <h3>{title}</h3>
                    <div className="info">
                        <div className="read">
                            <span onClick={(e) => handleClick(e, author)}>{list?.includes(author) ?
                                <>
                                    <img src='/icon-remove.png' alt="remove list" width="10" height="10" /> Remove my read list
                                </>
                                :
                                <>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="7" height="8" viewBox="0 0 7 8" fill="none">
                                        <path d="M2.62704 2.91074C2.62704 2.34228 2.62704 1.86128 2.62704 1.38027C2.64162 0.666051 2.96229 0.257925 3.51618 0.301652C4.20124 0.34538 4.39073 0.81181 4.37615 1.424C4.36158 1.89043 4.37615 2.34228 4.37615 2.92532C4.91546 2.92532 5.4402 2.92532 5.96493 2.92532C6.56254 2.92532 6.98525 3.15853 6.98525 3.79988C6.98525 4.42664 6.56254 4.67443 5.96493 4.67443C5.45477 4.67443 4.95919 4.67443 4.37615 4.67443C4.37615 5.18459 4.37615 5.63644 4.37615 6.10287C4.37615 6.88997 4.08464 7.28352 3.51618 7.2981C2.93314 7.31267 2.62704 6.88997 2.62704 6.05914C2.62704 5.62187 2.62704 5.19916 2.62704 4.67443C2.05858 4.67443 1.53385 4.68901 1.00912 4.67443C0.367774 4.65985 -0.0257757 4.29546 0.0179521 3.77072C0.0616799 3.15853 0.440654 2.91074 0.994539 2.91074C1.5047 2.91074 2.01485 2.91074 2.62704 2.91074Z" fill="#052C54" />
                                    </svg> Add my read list
                                </>
                            }</span>
                        </div>
                        <time>
                            {formatter(publishedAt)}
                        </time>
                    </div>
                </figcaption>
            </figure>
        </div>
    )
}

export default Card;