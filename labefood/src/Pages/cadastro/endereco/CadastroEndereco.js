import React, { useState } from "react";

import { City } from "../../../Components/Inputs/City";
import { Complement } from "../../../Components/Inputs/Complement";
import { Neighbourhood } from "../../../Components/Inputs/Neighbourhood";
import { Number } from "../../../Components/Inputs/Number";
import { State } from "../../../Components/Inputs/State";
import { Street } from "../../../Components/Inputs/Street";
import { EnderecoCadastroStyled, TextContainer} from "./styled";
import { Button } from '@mui/material';
import { useForm } from "../../../Hook/useForm";
import axios from "axios";
import { BASE_URL } from "../../../Constants/constants";
import { useNavigate } from "react-router-dom";
import { validateStreet, validateNumber, validateComplement, 
        validateNeighbourhood, validateCity, validateState } from "../../../Constants/constants";
import { goToFeed, goToLoginPage } from "../../../Routes/coordinator";
import { Header1 } from '../../../Components/Header/header'



const CadastroEndereco = () => {

    const navigate = useNavigate()

    const token = localStorage.getItem("token")

    const [form, onChange] = useForm({
        street: "", 
        number: "", 
        neighbourhood: "",
        city: "", 
        state: "",
        complement: ""
    })

    const [isValid, setIsValid] = useState(true)
    const [isStreetValid, setIsStreetValid] = useState(true)
    const [isNumberValid, setIsNumberValid] = useState(true)
    const [isComplementValid, setIsComplementValid] = useState(true)
    const [isNeighbourhoodValid, setIsNeighbourhoodValid] = useState(true)
    const [isCityValid, setIsCityValid] = useState(true)
    const [isStateValid, setIsStateValid] = useState(true)

    const [errorText, setErrorText] = useState(undefined)

    const EditAddress = () => {
        axios.put(`${BASE_URL}/address`, form, { headers: {
            "auth": token
        }})
        .then((response) => {
            setIsValid(true)
            localStorage.setItem("token", response.data.token)
            goToFeed(navigate)
        })
        .catch((error) => {
            setErrorText(error.response.data.message)
            setIsValid(false)
        })
    }

    const onSubmit = (e) => {
        console.log(token)
        e.preventDefault();
        setIsStreetValid(validateStreet(form.street))
        setIsNumberValid(validateNumber(form.number))
        setIsNeighbourhoodValid(validateNeighbourhood(form.neighbourhood))
        setIsCityValid(validateCity(form.city))
        setIsStateValid(validateState(form.state))
        setIsComplementValid(validateComplement(form.complement))
        isStateValid && isNumberValid && isComplementValid && isNeighbourhoodValid && isCityValid && isStateValid && EditAddress()
    }

    return(
        <>
        <Header1 showArrow={'true'} showTitle={'false'}/>
        <EnderecoCadastroStyled>
            <TextContainer><p>Meu endereço</p></TextContainer>

            {isValid ?

                <form onSubmit={onSubmit}>
                <Street name="street" value={form.street} onChange={onChange} color="#B8B8B8" isValid={setIsValid}/>
                <Number name="number" value={form.number} onChange={onChange} color="#B8B8B8" isValid={isNumberValid}/>
                <Complement name="complement" value={form.complement} onChange={onChange} color="#B8B8B8" isValid={isComplementValid}/>
                <Neighbourhood name="neighbourhood" value={form.neighbourhood} onChange={onChange} color="#B8B8B8" isValid={isNeighbourhoodValid}/>
                <City name="city" value={form.city} onChange={onChange} color="#B8B8B8" isValid={isCityValid}/>
                <State name="state" value={form.state} onChange={onChange} color="#B8B8B8" isValid={isStateValid}/>
                <Button onClick={() => goToFeed(navigate) }variant="contained">Salvar</Button>
                </form>

                : 

                <form onSubmit={onSubmit}>
                <Street name="street" value={form.street} onChange={onChange} color="#e02020" isValid={isStreetValid}/>
                <Number name="number" value={form.number} onChange={onChange} color="#e02020" isValid={isNumberValid}/>
                <Complement name="complement" value={form.complement} onChange={onChange} color="#e02020"isValid={isComplementValid}/>
                <Neighbourhood name="neighbourhood" value={form.neighbourhood} onChange={onChange} color="#e02020" isValid={isNeighbourhoodValid}/>
                <City name="city" value={form.city} onChange={onChange} color="#e02020" isValid={isCityValid}/>
                <State name="state" value={form.state} onChange={onChange} color="#e02020" isValid={isStateValid}/>
                <p>{errorText}.</p>
                <Button onClick={() => goToFeed(navigate) }variant="contained">Salvar</Button>
                </form>}
        </EnderecoCadastroStyled>
        </>
    )
}

export default CadastroEndereco;
