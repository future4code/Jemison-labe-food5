import React from 'react'

import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';


export const DadosMeuPerfil = (props) => {
  return (
    <Box>
      <Box paddingY={'1rem'}>
        <Container >
          <Grid container>
            <Grid item xs={11}>
              <Stack spacing={0.5} >
                <Typography color={'#000'}>{props.user && props.user.name}</Typography>
                <Typography color={'#000'}>{props.user && props.user.email}</Typography>
                <Typography color={'#000'}>{props.user && props.user.cpf}</Typography>
              </Stack>
            </Grid>
            <Grid item xs={1}>
              <EditOutlinedIcon fontSize='small' />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box backgroundColor={'#eeeeee'} paddingY={'1rem'}>
        <Container>
          <Grid container alignItems={'center'}>
            <Grid item xs={11}>
              <Stack spacing={0.5}>
                <Typography color={'#b8b8b8'} >Endereço cadastrado</Typography>
                <Typography color={'#000'}>{props.user && props.user.address}</Typography>
              </Stack>
            </Grid>
            <Grid item xs={1}>
              <EditOutlinedIcon fontSize='small' />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}
