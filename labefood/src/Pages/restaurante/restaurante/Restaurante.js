import { useParams } from "react-router-dom"
import { useContext, useEffect } from "react"

import { Contexts } from "../../../Global/context"
import { CardInfoRestaurante } from "../../../Components/CardInfoRestaurante/CardInfoRestaurante"
import { Subtitulo } from '../../../Components/Subtitulo/Subtitulo'
import { HeaderRestaurante } from "../../../Components/Header/header"
import { CardPratoRestaurante } from "../../../Components/CardPratoRestaurante/CardPratoRestaurante"
import { CardConfirmacao } from "../../../Components/CardConfirmacao/CardConfirmacao"
import { Box } from '@mui/material'
import { Footer } from '../../../Components/Footer/footer'
import useProtectPage from "../../../Hook/useProtectPage"


export const Restaurante = () => {
    
    useProtectPage();

    const pathParam = useParams()

    const { states, setters } = useContext(Contexts)

    useEffect(() => {
        setters.setRestaurantId(pathParam.id)
    }, [pathParam.id])
    
    const addToCart = (order, qtd) => {
        const newCart = [...states.productsCart]
        newCart.push({...order, qtd: qtd})
        setters.setProductsCart(newCart)
    }

    return (
        <Box>
            <HeaderRestaurante />
            {states.loadingDetails && (<p>Carregando Detalhes do Restaurante</p>)}
            {!states.loadingDetails && states.errorDetails && (<p>Houve um erro ao carregar o histórico. Recarregue a página.</p>)}
            {!states.loadingDetails && states.restaurantDetails && states.restaurantDetails.restaurant && (<CardInfoRestaurante image={states.restaurantDetails.restaurant.logoUrl} name={states.restaurantDetails.restaurant.name} category={states.restaurantDetails.restaurant.category} deliveryTime={states.restaurantDetails.restaurant.deliveryTime} shipping={states.restaurantDetails.restaurant.shipping} address={states.restaurantDetails.restaurant.address} />)}
            <Subtitulo Subtitulo='Principais' />
            {states.loadingDetails && (<p>Carregando Pratos do Restaurante</p>)}
            {!states.loadingDetails && states.errorDetails && (<p>Houve um erro ao carregar o histórico. Recarregue a página.</p>)}
            {!states.loadingDetails && states.restaurantDetails && states.restaurantDetails.restaurant && states.restaurantDetails.restaurant.products && states.restaurantDetails.restaurant.products.map((principal, index) => {
                return <CardPratoRestaurante onClick={(ev) => { ev.preventDefault(); setters.setProduct(principal) ; setters.setAbreConfirm(true)}} key={index} image={principal.photoUrl} description={principal.description} name={principal.name} price={principal.price} />
            })}
            {states.abreConfirm && ( <CardConfirmacao onClick={() => { addToCart(states.product, states.selectControl) }} open={states.abreConfirm} close={() => { setters.setAbreConfirm(false)}} /> )}
            <Footer />
        </Box>
    )
}