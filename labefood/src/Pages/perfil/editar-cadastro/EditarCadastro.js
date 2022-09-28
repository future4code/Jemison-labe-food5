import { useContext } from "react"
import { Contexts } from "../../../Global/context"
import { useNavigate } from "react-router-dom"

import { HeaderEditar } from "../../../Components/Header/header"
import { Box, Container, Stack, TextField, Button, Alert, AlertTitle } from '@mui/material'
import { goToPerfilPage } from "../../../Routes/coordinator"


export const EditarCadastro = () => {
    const navigate = useNavigate()

    const { states, setters, requests } = useContext(Contexts)

    const salvaDadosUsuario = () => {
        if (states.usuario.name && states.usuario.email && states.usuario.cpf) {
            setters.setAtualizado(1)
            requests.putRequest()
            states.clearInputsUsuario()
        }
    }

    const respostaDoUsuario = () => {
        if (states.atualizado === 1) {
            return (
                <Alert severity="success" action={
                    <Button onClick={() => goToPerfilPage(navigate)} color="inherit" size="small">
                        VOLTAR
                    </Button>
                }>
                    <AlertTitle>Successo</AlertTitle>
                    Os dados de perfil foram atualizados
                </Alert>
            )
        } else {
            return (
                <Box marginY={'1.5rem'}>
                    <Container>
                        <Stack spacing={2}>
                            <TextField error={states.usuario.name ? false : true} helperText={states.usuario.name ? '' : ''} name="name" value={states.usuario.name} onChange={states.onChangeUsuario} label="Nome" variant="outlined" color='primary' required />
                            <TextField error={(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g).test(states.usuario.email) ? false : true} helperText={states.usuario.email ? '' : 'Insira um e-mail válido'} name="email" value={states.usuario.email} onChange={states.onChangeUsuario} label="E-mail" variant="outlined" color='primary' type='email' required />
                            <TextField error={(/[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}/g).test(states.usuario.cpf) ? false : true} helperText={states.usuario.cpf ? '' : 'Insira um CPF válido'} name='cpf' value={states.usuario.cpf} onChange={states.onChangeUsuario} label="CPF" variant="outlined" color='primary' required />
                            <Button onClick={() => salvaDadosUsuario()} variant="contained" disableElevation sx={{ borderRadius: '2px', backgroundColor: '#5cb646', color: '#000', textTransform: 'none', fontSize: '1rem' }}>Salvar</Button>
                        </Stack>
                    </Container>
                </Box>
            )
        }
    }


    return (
        <Box>
            <HeaderEditar />
            {respostaDoUsuario()}
        </Box>
    )
}