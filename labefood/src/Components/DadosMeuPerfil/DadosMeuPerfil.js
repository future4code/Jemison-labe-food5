import React, { useContext } from 'react'
import { Contexts } from '../../Global/context';
import { useNavigate } from 'react-router-dom';

import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { goToEditarCadastroPage, goToEditarEnderecoPage } from '../../Routes/coordinator'


export const DadosMeuPerfil = (props) => {

  const { setters } = useContext(Contexts)

  const navigate = useNavigate()

  const editorCadastro = () => {
    setters.setAtualizado(0)
    goToEditarCadastroPage(navigate)
  }

  const editorEndereco = () => {
    setters.setAtualizado(0)
    goToEditarEnderecoPage(navigate)
  }

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
              <EditOutlinedIcon onClick={editorCadastro} fontSize='small' />
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
              <EditOutlinedIcon onClick={editorEndereco} fontSize='small' />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}
