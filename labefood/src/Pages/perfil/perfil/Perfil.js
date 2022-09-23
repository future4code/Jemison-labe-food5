import { useContext } from "react"

import { HeaderPerfil } from "../../../Components/Header/header"
import { DadosMeuPerfil } from "../../../Components/DadosMeuPerfil/DadosMeuPerfil"
import { CardHistoricoPedidos } from '../../../Components/CardHistoricoPedidos/CardHistoricoPedidos'
import { Contexts } from "../../../Global/context"

import { Box, Container, Typography, Divider} from '@mui/material';


export const Perfil = () => {

    const { states } = useContext(Contexts)
    return (
     <Box>
        <HeaderPerfil/>
        <DadosMeuPerfil user={states.perfil.user} />
        <Container>
            <Box marginY={'2.5%'}>
              <Typography marginBottom={'1.25%'} color='#000' component='h2' variant="subtitle1">Histórico de pedidos</Typography>
              <Divider color='#000' />
            </Box>
        </Container>
        {states.carregando && (<p>Carregando Histórico de Pedidos</p>)}
        {!states.carregando && states.erro && (<p>Houve um erro ao carregar o histórico. Recarregue a página.</p>)}
        {!states.carregando && states.pedidos && states.pedidos.orders && states.pedidos.orders.map((order, index) => {
          return <CardHistoricoPedidos key={index} nomeRestaurante={order.restaurantName} criado={order.createdAt} subtotal={order.totalPrice}/>
        })}
        
     </Box>
    )
}