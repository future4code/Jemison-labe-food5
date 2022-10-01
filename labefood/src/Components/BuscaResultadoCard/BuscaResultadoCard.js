import React from 'react'

import { theme } from '../../Constants/theme'
import { Box, Container, Card, CardMedia, CardContent, Typography, Grid, ThemeProvider } from '@mui/material'

export const BuscaResultadoCard = (props) => {
    return (

        <ThemeProvider theme={theme}>
            <Box marginTop={'1em'}>
                <Container>
                    <Card sx={{ border: '0.5px solid #B8B8B8', borderRadius: '0.5em', boxShadow: 'none'}}>
                        <CardMedia component="img" height="120" image={props.logo} alt="Logo do Restaurante" />
                        <CardContent sx={{padding:'0.75em'}}>
                            <Typography color='secondary' sx={{ height:'1.7rem', paddingBottom: '0.5em'}} variant="subtitle1">
                                {props.name}
                            </Typography>
                            <Grid container spacing={0}>
                                <Grid item xs={6}>
                                    <Typography textAlign={'left'} color='primary' sx={{ height:'1.1rem'}} variant="body2" >
                                        {props.deliveryTime} - {props.deliveryTime + 10} min
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography textAlign={'right'} color='primary' sx={{ height:'1.1rem'}} variant="body2">
                                       Frete {props.shipping.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                                    </Typography>
                                </Grid>
                            </Grid>

                        </CardContent>
                    </Card>
                </Container>
            </Box>
        </ThemeProvider>
    )
}
