import React from 'react'

import { Box, Container, Paper, Stack, Typography } from '@mui/material'


export const CardHistoricoPedidos = (props) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };

  return (
    <Box marginBottom={'0.5rem'}>
      <Container>
        <Paper variant='outlined' sx={{ borderRadius: '8px', borderColor: '#b8b8b8' }} >
          <Box padding={'1rem'}>
            <Stack spacing={1}>
              <Typography variant="subtitle1" color={'#5cb646'}>{props.nomeRestaurante}</Typography>
              <Typography variant="caption">{new Date(props.criado).toLocaleDateString('pt-BR', options)}</Typography>
              <Typography variant="subtitle1" fontWeight={'900'}>SUBTOTAL {props.subtotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Typography>
            </Stack>
          </Box>
        </Paper>
      </Container>
    </Box>
  )
}