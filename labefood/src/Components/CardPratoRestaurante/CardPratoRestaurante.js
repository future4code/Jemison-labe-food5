import React from 'react'
import { theme } from '../../Constants/theme'
import { ThemeProvider, Box, Container, Card, CardContent, CardMedia, Grid, Typography, Button } from '@mui/material'
import { useContext } from 'react'
import { Contexts } from '../../Global/context'

export const CardPratoRestaurante = (props) => {
    const { states, setters } = useContext(Contexts)
    const total = props.total
    setters.setTotalValue(total)
    
    console.log(states.product)


    const checkCart = (order) => {
        const cartIndex = states.productsCart.findIndex((item) => { return item.id === order.id })
        if (cartIndex === -1) {
            return (
                <Button onClick={props.onClick} variant="outlined" size='small' color='secondary' sx={{ ml: 2.5, mt: 1, borderRadius: '8px 0px 8px 0px' }}>Adicionar</Button>
            )
        } else {
            return (
                <Button onClick={props.onClick} variant="outlined" size='small' color='alert' sx={{ ml: 2.5, mt: 1, borderRadius: '8px 0px 8px 0px' }}>Remover</Button>
            )
        }
    }
    
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{mt: 1}}>
                <Container>
                    <Card sx={{ display: 'flex', boxShadow: 'none', border: '1px solid #b8b8b8', borderRadius: '0.5em' }}>
                        <CardMedia component="img" sx={{ width: '6rem' }} image={props.image} />
                        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography color='secondary' variant="subtitle1">
                                    {props.name}
                                </Typography>
                                <Typography textAlign={'center'} color='primary' variant="caption">
                                    {props.description}
                                </Typography>
                            </CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Grid container spacing={1}>
                                    <Grid item xs={6}>
                                        <Typography textAlign={'left'} color='primary' sx={{ height: '1.1rem', ml: 2, mb: 2 }} variant="body2" >
                                            {props.price && props.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6} sx={{ padding: 0 }}>
                                        {checkCart(states.product)}
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Card>
                </Container>
            </Box>
        </ThemeProvider>
    )
}
