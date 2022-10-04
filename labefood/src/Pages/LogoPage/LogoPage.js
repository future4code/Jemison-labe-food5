import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ContainerLogo, Botao } from "./style";
import logo from '../../img/logo-black.png'
import { goToLoginPage } from './../../Routes/coordinator';




export const LogoPage = () => {

    const navigate = useNavigate()

    const loginPage = () => {
        goToLoginPage(navigate)
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            loginPage()
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <ContainerLogo>
            <Botao>
                <img src={logo} alt='' /> 
            </Botao>
        </ContainerLogo>
    )
}