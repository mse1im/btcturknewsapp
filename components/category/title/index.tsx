"use client"
import { FC } from "react";
import "./index.scss";
import Button from "@/common/gotoback";
import { useStorage } from "@/utils/storage";

const Title:FC = () => {
  const storage = useStorage('filterNames');
  const title = storage != null ? storage.map((item:string) => item.toUpperCase()).join(' + ') : '';

    return (
        <div className="category-title">
          <h2>{title}</h2>
          <Button name="< Go To News" href="/" />
        </div>
    )
}

export default Title;