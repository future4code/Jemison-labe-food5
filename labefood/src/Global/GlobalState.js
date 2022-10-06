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

    const [ product, setProduct ] = useState('')

    const [perfil] = useRequestData(`${BASE_URL}/profile`, { headers: {'auth': auth}}, {})

    const [rest, loadingRestaurants, errorRestaurants] = useRequestData(
      `${BASE_URL}/restaurants`,
      { headers: {'auth': auth}}, {}
    );

    const [restaurantId, setRestaurantId] = useState('')

    const [restaurantDetails, loadingDetails, errorDetails] = useRequestData(`${BASE_URL}/restaurants/${restaurantId}`, { headers: {'auth': auth}}, {})

    const [pedidos, carregando, erro] = useRequestData(`${BASE_URL}/orders/history`, { headers: {'auth': auth}}, {})
    
    const [productsCart, setProductsCart] = useState([])

    const [usuario, onChangeUsuario, clearInputsUsuario] = useForm({ name:'', email: '', cpf: ''})
    const [endereco, onChangeEndereco, clearInputsEndereco] = useForm({ street:'', number: '', complement: '', neighbourhood: '', city: '', state: ''})
    const [searchInput, onChangeSearch] = useForm({searchResults: ''})

    const putUsuario = usePutRequest(`${BASE_URL}/profile`, usuario, { headers: {'auth': auth}})
    const putEndereco = usePutRequest(`${BASE_URL}/address`, endereco, { headers: {'auth': auth}})
    
    const states = {perfil, 
                    pedidos, 
                    carregando, 
                    erro, 
                    usuario, onChangeUsuario, clearInputsUsuario
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
                    endereco, onChangeEndereco, clearInputsEndereco
                  }
    const setters = { setAtualizado, setRestaurantId, setProductsCart, setAbreConfirm, setSelectControl, setProduct }
    const requests = { putRequest, putUsuario, putEndereco }

  return (
      <Contexts.Provider value={{ states, setters, requests }}>
        {props.children}
      </Contexts.Provider>
  )
}
