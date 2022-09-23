import React from 'react'
import { useRequestData } from '../Hook/useRequestData'
import { Contexts } from './context'
import { BASE_URL, auth } from '../Constants/constants'

export const GlobalState = (props) => {

    const [perfil] = useRequestData(`${BASE_URL}/profile`, { headers: {'auth': auth}}, {})
    const [pedidos, carregando, erro] = useRequestData(`${BASE_URL}/orders/history`, { headers: {'auth': auth}}, {})
    
    const states = {perfil, pedidos, carregando, erro}

  return (
    <Contexts.Provider value={{ states }}>
        {props.children}
      </Contexts.Provider>
  )
}
