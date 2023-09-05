"use client"
import { FC } from "react";
import "./index.scss";
import logo from "../../public/logo.png"
import Container from "../../layout/container";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Header:FC = () => {
    const navigate = useRouter();
    const goToHome = () => {
        navigate.push("/")
    }
    return (
        <header>
            <Container>
                <Image src={logo} alt="BtcTurk" width={215} height={36} onClick={goToHome} />
            </Container>
        </header>
    )
}

export default Header;