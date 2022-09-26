import React, { useState } from 'react'
import { useRequestData } from '../Hook/useRequestData'
import { Contexts } from './context'
import { BASE_URL, auth } from '../Constants/constants'
import { useForm } from '../Hook/useForm'
import { usePutRequest } from '../Services/usePutRequest'

export const GlobalState = (props) => {

    const [atualizado, setAtualizado] = useState(0)

    const [perfil] = useRequestData(`${BASE_URL}/profile`, { headers: {'auth': auth}}, {})
    const [pedidos, carregando, erro] = useRequestData(`${BASE_URL}/orders/history`, { headers: {'auth': auth}}, {})

    const [usuario, onChangeUsuario, clearInputsUsuario] = useForm({ name:'', email: '', cpf: ''})
    const [endereco, onChangeEndereco, clearInputsEndereco] = useForm({ street: '', number: '', complement: '', neighbourhood: '', city: '', state: ''})

    const putRequest = usePutRequest(`${BASE_URL}/profile`, usuario, { headers: {'auth': auth}})
    
    const states = {perfil, pedidos, carregando, erro, usuario, onChangeUsuario, clearInputsUsuario, atualizado, endereco, onChangeEndereco, clearInputsEndereco}
    const setters = { setAtualizado }
    const requests = { putRequest }

  return (
    <Contexts.Provider value={{ states, setters, requests }}>
        {props.children}
      </Contexts.Provider>
  )
}
