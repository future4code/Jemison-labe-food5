import React, { useState } from 'react'
import { useRequestData } from '../Hook/useRequestData'
import { Contexts } from './context'
import { BASE_URL } from '../Constants/constants'
import { useForm } from '../Hook/useForm'
import { usePutRequest } from '../Services/usePutRequest'

export const GlobalState = (props) => {

    const [atualizado, setAtualizado] = useState('')

    const [abreConfirm, setAbreConfirm] = useState(false)

    const [selectControl, setSelectControl] = useState('')

    const [radioControl, setRadioControl] = useState('')

    const [product, setProduct] = useState('')

    const [perfil] = useRequestData(`${BASE_URL}/profile`, { headers: {'auth': localStorage.getItem("token")}}, {})

    const [rest, loadingRestaurants, errorRestaurants] = useRequestData(
      `${BASE_URL}/restaurants`,
      { headers: {'auth': localStorage.getItem("token")}}, {}
    );

    const [restaurantId, setRestaurantId] = useState('')

    const [restaurantDetails, loadingDetails, errorDetails] = useRequestData(`${BASE_URL}/restaurants/${restaurantId}`, { headers: {'auth': localStorage.getItem("token")}}, {})

    const [pedidos, carregando, erro] = useRequestData(`${BASE_URL}/orders/history`, { headers: {'auth': localStorage.getItem("token")}}, {})
    
    const [productsCart, setProductsCart] = useState([])

    const [totalValue, setTotalValue] = useState([])

    const [usuario, onChangeUsuario, clearInputsUsuario] = useForm({ name:'', email: '', cpf: ''})
    const [endereco, onChangeEndereco, clearInputsEndereco] = useForm({ street:'', number: '', complement: '', neighbourhood: '', city: '', state: ''})
    const [searchInput, onChangeSearch] = useForm({searchResults: ''})

    const putUsuario = usePutRequest(`${BASE_URL}/profile`, usuario, { headers: {'auth': localStorage.getItem("token")}})
    const putEndereco = usePutRequest(`${BASE_URL}/address`, endereco, { headers: {'auth': localStorage.getItem("token")}})
    
    const states = {perfil, 
                    pedidos, 
                    carregando, 
                    erro, 
                    usuario, 
                    onChangeUsuario, 
                    clearInputsUsuario,
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
                    radioControl,
                    endereco,
                    onChangeEndereco,
                    clearInputsEndereco
                  }
                  
    const setters = { setAtualizado, setRestaurantId, setProductsCart, setAbreConfirm, setSelectControl, setProduct, setTotalValue, setRadioControl }
    const requests = { putUsuario, putEndereco }

  return (
      <Contexts.Provider value={{ states, setters, requests }}>
        {props.children}
      </Contexts.Provider>
  )
}
