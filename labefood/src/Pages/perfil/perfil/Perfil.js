import { useContext } from "react"

import { HeaderPerfil } from "../../../Components/Header/header"
import { DadosMeuPerfil } from "../../../Components/DadosMeuPerfil/DadosMeuPerfil"
import { CardHistoricoPedidos } from '../../../Components/CardHistoricoPedidos/CardHistoricoPedidos'
import { Contexts } from "../../../Global/context"

import { Box, Container, Typography, Divider} from '@mui/material';
import { Subtitulo } from "../../../Components/Subtitulo/Subtitulo"


export const Perfil = () => {

    const { states } = useContext(Contexts)
    return (
     <Box>
        <HeaderPerfil/>
        <DadosMeuPerfil user={states.perfil.user} />
        <Subtitulo Subtitulo='Histórico de Pedidos' />
        {states.carregando && (<p>Carregando Histórico de Pedidos</p>)}
        {!states.carregando && states.erro && (<p>Houve um erro ao carregar o histórico. Recarregue a página.</p>)}
        {!states.carregando && states.pedidos && states.pedidos.orders && states.pedidos.orders.map((order, index) => {
          return <CardHistoricoPedidos key={index} nomeRestaurante={order.restaurantName} criado={order.createdAt} subtotal={order.totalPrice}/>
        })}
        
     </Box>
    )
}