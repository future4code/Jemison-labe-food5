import React from "react";
import { useNavigate } from "react-router-dom";
import { ContainerLogo, Botao } from "./style";
import logo from '../../img/logo-black.png'
import { goToLoginPage } from './../../Routes/coordinator';




export const LogoPage = () => {

    const navigate = useNavigate()

    const loginPage = () => {
        goToLoginPage(navigate)
    }

    return(
        <ContainerLogo>
            <Botao onClick={() => loginPage(navigate)} > <img src={logo} /> </Botao>
            
        </ContainerLogo>
    )
}