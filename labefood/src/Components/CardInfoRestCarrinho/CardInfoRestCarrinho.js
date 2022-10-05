import React from 'react'

import { theme } from '../../Constants/theme'
import { Box, Container, Card, Grid, CardContent, Typography, ThemeProvider } from '@mui/material'

export const CardInfoRestCarrinho = (props) => {
    return (
        <ThemeProvider theme={theme}>
            <Box marginTop={'1em'}>
                <Container>
                    <Card sx={{ maxWidth: 345, boxShadow: 'none', borderRadius: '0.5em' }}>
                        <CardContent sx={{ padding: '0' }}>
                            <Typography color='secondary' sx={{ pb: 0.5}} variant="subtitle1">
                                {props.name}
                            </Typography>
                            <Grid container spacing={1}>
                                <Grid item xs={12}>
                                    <Typography textAlign={'left'} color='primary' sx={{ height: '1.1rem' }} variant="body2" >
                                        {props.deliveryTime} - {props.deliveryTime + 10} min
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
