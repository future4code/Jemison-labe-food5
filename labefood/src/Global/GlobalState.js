import React, { useState } from 'react'
import { useRequestData } from '../Hook/useRequestData'
import { Contexts } from './context'
import { BASE_URL, auth } from '../Constants/constants'
import { useForm } from '../Hook/useForm'
import { usePutRequest } from '../Services/usePutRequest'

export const GlobalState = (props) => {

    const [atualizado, setAtualizado] = useState('')

    const [perfil] = useRequestData(`${BASE_URL}/profile`, { headers: {'auth': auth}}, {})

    const [restaurants, getRestaurants, loadingRestaurants, errorRestaurants] = useRequestData(
      `${BASE_URL}/restaurants`,
      { headers: {'auth': auth}},{}
    );

    const [restaurantId, setRestaurantId] = useState([])  

    const [pedidos, carregando, erro] = useRequestData(`${BASE_URL}/orders/history`, { headers: {'auth': auth}}, {})
    
    const [productsCart, setProductsCart] = useState([])

    const [form, onChangeInputs, clearInputs] = useForm({ name:'', email: '', cpf: ''})

    const putRequest = usePutRequest(`${BASE_URL}/profile`, form, { headers: {'auth': auth}})
    
    const states = {perfil, 
                    pedidos, 
                    carregando, 
                    erro, 
                    form, 
                    onChangeInputs,
                    clearInputs, 
                    atualizado, 
                    restaurants, 
                    restaurantId,
                    setRestaurantId,
                    getRestaurants,
                    loadingRestaurants,
                    errorRestaurants,
                    productsCart,
                    setProductsCart
                  }
    const setters = { setAtualizado }
    const requests = { putRequest }

  return (
      <Contexts.Provider value={states}>
        {props.children}
      </Contexts.Provider>
  )
}
