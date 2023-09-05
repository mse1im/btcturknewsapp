import { FC } from "react";
import "./styles/layout.scss";
import tyContainer from "../types/container";

const Container:FC<tyContainer> = ({children}) => {
    return (
        <div className="container">
            {children}
        </div>
    )
}

export default Container;