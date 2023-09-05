import { FC } from "react";
import Link from "next/link";
import "./index.scss";
import { CardType } from "@/types/cardType";


const Card:FC<CardType> = ({desc, url, name}) => {
    return (
        <Link href={url}>
            <div className="news">
                <div className="news-content">
                    <h2>{name}</h2>
                    <p>{desc}</p>
                </div>
                <div className="news-goto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none">
                        <path d="M2.0556 0C2.3556 0.1 2.5556 0.3 2.7556 0.5C5.02226 2.76667 7.28893 5.03333 9.5556 7.3C9.82226 7.56667 9.9556 7.9 9.82226 8.26667C9.78893 8.4 9.68893 8.53333 9.58893 8.66667C7.2556 11.0333 4.88893 13.3667 2.5556 15.7C2.1556 16.1 1.6556 16.1 1.2556 15.7C1.0556 15.5333 0.888931 15.3333 0.722264 15.1333C0.422264 14.8 0.455597 14.3333 0.755597 14C0.788931 13.9333 0.855597 13.9 0.888931 13.8667C2.78893 11.9667 4.72226 10.0333 6.62226 8.13333C6.6556 8.1 6.72226 8.06667 6.78893 7.93333C6.72226 7.9 6.6556 7.9 6.62226 7.83333C4.6556 5.93333 2.7556 4 0.822264 2.06667C0.455597 1.7 0.388931 1.2 0.688931 0.866667C0.988931 0.533333 1.28893 0.133333 1.72226 0C1.82226 0 1.9556 0 2.0556 0Z" fill="#7E7E7E" />
                    </svg>
                </div>
            </div>
        </Link>
    )
}

export default Card;