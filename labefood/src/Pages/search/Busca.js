import { Contexts } from "../../Global/context"
import { useContext } from "react"

import { HeaderSearch } from "../../Components/Header/header"
import { BarraBusca } from "../../Components/BarraBusca/BarraBusca"
import { BuscaResultadoCard } from "../../Components/BuscaResultadoCard/BuscaResultadoCard"
import { Container, Box, Typography } from '@mui/material'

export const Busca = () => {

    const { states } = useContext(Contexts)

    const restaurantsRender = () => {
        states.carregandoRestaurantes && (<p>Carregando Histórico de Pedidos</p>)
        !states.carregandoRestaurantes && states.erroRestaurantes && (<p>Houve um erro ao carregar o histórico. Recarregue a página.</p>)
        !states.carregandoRestaurante && states.restaurantes && states.restaurantes.restaurants && states.restaurantes.restaurants.filter((item) => {
            return item.name.includes(states.searchInput.searchResults)
        })
            .map((restaurante, index) => {
                return (
                    <BuscaResultadoCard key={index} logo={restaurante.logoUrl} name={restaurante.name} deliveryTime={restaurante.deliveryTime} shipping={restaurante.shipping} />
                )
            })
    }

    const condicaoPagina = () => {
        if (states.searchInput.searchResults === '') {
            return (
                <Container>
                    <Box marginTop={'1rem'}>
                        <Typography textAlign={'center'} width={'100%'} variant="subtitle1">Busque por nome de restaurante</Typography>
                    </Box>
                </Container>
            )
        } else {
            restaurantsRender()
        }
    }

    return (
        <div>
            <HeaderSearch />
            <BarraBusca />

            {condicaoPagina()}

        </div>
    )
}

/*
<Container>
    <Box marginTop={'1rem'}>
        <Typography textAlign={'center'} width={'100%'} variant="subtitle1">Busque por nome de restaurante</Typography>
    </Box>
</Container>
                        
                        
                        

*/