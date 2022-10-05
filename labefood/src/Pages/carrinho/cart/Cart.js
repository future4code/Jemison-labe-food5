import { HeaderCarrinho } from "../../../Components/Header/header"
import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import { Footer } from "../../../Components/Footer/footer"
import { CardInfoRestCarrinho } from "../../../Components/CardInfoRestCarrinho/CardInfoRestCarrinho";
import { CardPratoRestaurante } from '../../../Components/CardPratoRestaurante/CardPratoRestaurante'
import { Subtotal } from "../../../Components/Subtotal/Subtotal";
import { Subtitulo } from '../../../Components/Subtitulo/Subtitulo'
import { CardPagamento } from "../../../Components/CardPagamento/CardPagamento";
import { useContext } from "react";
import { Contexts } from "../../../Global/context";

export const Cart = () => {

    const { states, setters } = useContext(Contexts)

    return (
        <div>
            <HeaderCarrinho />
            <Box backgroundColor={'#eeeeee'} paddingY={'1rem'}>
                <Container>
                    <Grid container alignItems={'center'}>
                        <Grid item xs={11}>
                            <Stack spacing={0.5}>
                                <Typography color={'#b8b8b8'}>Endereço cadastrado</Typography>
                                <Typography color={'#000'}>
                                    {states && states.perfil && states.perfil.user && states.perfil.user.address}
                                </Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <CardInfoRestCarrinho name={states && states.restaurantDetails && states.restaurantDetails.restaurant && states.restaurantDetails.restaurant.name} deliveryTime={states && states.restaurantDetails && states.restaurantDetails.restaurant && states.restaurantDetails.restaurant.deliveryTime} address={states && states.restaurantDetails && states.restaurantDetails.restaurant && states.restaurantDetails.restaurant.address} />
            {states && states.productsCart && states.productsCart.map((product, index) => {
                return <CardPratoRestaurante key={index} image={product.photoUrl} description={product.description} name={product.name} price={product.price} />
            })}
            <Subtotal shipping={states && states.restaurantDetails && states.restaurantDetails.restaurant && states.restaurantDetails.restaurant.shipping} totalValue={states && states.productsCart && states.productsCart.map((product) => {
                let total = product.price * product.qtd
                total =+ product.price * product.qtd
                return total
            })} />
            <Subtitulo Subtitulo='Forma de pagamento' />
            <CardPagamento  />
            <Footer />
        </div>
    )
}