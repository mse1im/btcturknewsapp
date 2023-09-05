"use client"
import { FC } from "react";
import "./index.scss";
import Card from "./card";
import { ListType } from "@/types/cardType";

const List: FC<ListType> = ({ data, listedData }) => {
    return (
        <section className="cards">
            {listedData && listedData.length > 0 ?
                listedData.map(item => (
                    <Card key={item.id} desc={item.description} name={item.name} url={item.url} />
                ))
                :
                data.map(item => (
                    <Card key={item.id} desc={item.description} name={item.name} url={item.url} />
                ))
            }
        </section>
    )
}

export default List;