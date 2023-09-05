import { FC } from "react";
import "./index.scss";
import { useRouter } from "next/navigation";
import Button from "@/types/button";

const Button:FC<Button> = ({name,href}) => {
    const navigate = useRouter();
    const goToPage = () => {
        navigate.push(href)
    }
    return (
        <button onClick={goToPage}>
            <span>{name}</span>
        </button>
    )
}

export default Button;