import React from 'react'

import { theme } from '../../Constants/theme'
import { Box, Container, Card, Grid, CardContent, CardMedia, Typography, ThemeProvider } from '@mui/material'

export const CardInfoRestaurante = (props) => {
    return (
        <ThemeProvider theme={theme}>
            <Box marginTop={'1em'}>
                <Container>
                    <Card sx={{ maxWidth: 345, boxShadow: 'none', borderRadius: '0.5em' }}>
                        <CardMedia component="img" height="120" image={props.image} alt="Logo Restaurante" />
                        <CardContent sx={{ padding: '0.75em' }}>
                            <Typography color='secondary' sx={{  paddingBottom: '0.5em' }} variant="subtitle1">
                                {props.name}
                            </Typography>
                            <Grid container spacing={1}>
                                <Grid item xs={12}>
                                    <Typography textAlign={'left'} color='primary' sx={{ height: '1.1rem' }} variant="body2" >
                                        {props.category}
                                    </Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography textAlign={'left'} color='primary' sx={{ height: '1.1rem' }} variant="body2" >
                                        {props.deliveryTime} - {props.deliveryTime + 10} min
                                    </Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography textAlign={'left'} color='primary' sx={{ height: '1.1rem' }} variant="body2">
                                        Frete {props.shipping.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography textAlign={'left'} color='primary' sx={{ height: '1.1rem' }} variant="body2">
                                        {props.address}
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
