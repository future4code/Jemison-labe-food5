import { Contexts } from "../../Global/context"
import { useContext} from "react"

import { HeaderSearch } from "../../Components/Header/header"
import { BarraBusca } from "../../Components/BarraBusca/BarraBusca"
import { BuscaResultadoCard } from "../../Components/BuscaResultadoCard/BuscaResultadoCard"
import { Container, Box, Typography } from '@mui/material'

export const Busca = () => {

    const { states } = useContext(Contexts)



    return (
            <div>
                <HeaderSearch />
                <BarraBusca />
                {(states.searchInput.searchResults) ?
                    states.rest && states.rest.restaurants && states.rest.restaurants.filter((item)=>{
                        return item.name.toLowerCase().includes(states.searchInput.searchResults.toLowerCase())}).map((restaurante, index) => {
                        return <BuscaResultadoCard key={index} logo={restaurante.logoUrl} name={restaurante.name} deliveryTime={restaurante.deliveryTime} shipping={restaurante.shipping} />
                     })
                :
                <Container><Box marginTop={'1rem'}><Typography textAlign={'center'} width={'100%'} variant="subtitle1">Busque por nome de restaurante</Typography></Box></Container>
            }
            </div>
        )
    }