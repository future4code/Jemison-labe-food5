import React from 'react'
import { Box, Container, Typography, Grid } from '@mui/material'

export const Subtotal = (props) => {
    const reduced = props.totalValue.reduce((a, b) => a + b)

    const finalValue = reduced + props.shipping

  return (
    <Box sx={{mt: 2, mb: 3}}>
        <Container>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Typography textAlign={'right'} variant='body1' component='p'>Frete {props.shipping.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant='button' component='p'>SUBTOTAL</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography textAlign={'right'} component='p' variant='button'>{finalValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Typography>
                </Grid>
            </Grid>
        </Container>
    </Box>
  )
}
