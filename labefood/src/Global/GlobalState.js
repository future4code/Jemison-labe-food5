import React, { useState } from 'react'
import { useRequestData } from '../Hook/useRequestData'
import { Contexts } from './context'
import { BASE_URL, auth } from '../Constants/constants'
import { useForm } from '../Hook/useForm'
import { usePutRequest } from '../Services/usePutRequest'

export const GlobalState = (props) => {

    const [atualizado, setAtualizado] = useState('')

    const [abreConfirm, setAbreConfirm] = useState(false)

    const [selectControl, setSelectControl] = useState('')

    const [radioControl, setRadioControl] = useState('')

    const [product, setProduct] = useState('')

    const [perfil] = useRequestData(`${BASE_URL}/profile`, { headers: {'auth': auth}}, {})

    const [rest, loadingRestaurants, errorRestaurants] = useRequestData(
      `${BASE_URL}/restaurants`,
      { headers: {'auth': auth}}, {}
    );

    const [restaurantId, setRestaurantId] = useState('')

    const [restaurantDetails, loadingDetails, errorDetails] = useRequestData(`${BASE_URL}/restaurants/${restaurantId}`, { headers: {'auth': auth}}, {})

    const [pedidos, carregando, erro] = useRequestData(`${BASE_URL}/orders/history`, { headers: {'auth': auth}}, {})
    
    const [productsCart, setProductsCart] = useState([])

    const [totalValue, setTotalValue] = useState([])

    const [form, onChangeInputs, clearInputs] = useForm({ name:'', email: '', cpf: ''})

    const [searchInput, onChangeSearch] = useForm({searchResults: ''})

    const putRequest = usePutRequest(`${BASE_URL}/profile`, form, { headers: {'auth': auth}})
    
    const states = {perfil, 
                    pedidos, 
                    carregando, 
                    erro, 
                    form, 
                    onChangeInputs,
                    clearInputs,
                    rest,
                    loadingRestaurants,
                    errorRestaurants,
                    atualizado, 
                    restaurantId,
                    productsCart,
                    searchInput, 
                    onChangeSearch,
                    restaurantDetails,
                    loadingDetails,
                    errorDetails,
                    abreConfirm,
                    selectControl,
                    product,
                    totalValue,
                    radioControl
                  }
    const setters = { setAtualizado, setRestaurantId, setProductsCart, setAbreConfirm, setSelectControl, setProduct, setTotalValue, setRadioControl }
    const requests = { putRequest }

  return (
      <Contexts.Provider value={{ states, setters, requests }}>
        {props.children}
      </Contexts.Provider>
  )
}
