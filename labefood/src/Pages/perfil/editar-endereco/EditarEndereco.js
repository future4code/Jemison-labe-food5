import { useContext } from "react"
import { Contexts } from "../../../Global/context"
import { useNavigate } from "react-router-dom"

import { goToPerfilPage } from '../../../Routes/coordinator'
import { HeaderEditar } from "../../../Components/Header/header"
import { Box, Container, Stack, TextField, Button, Alert, AlertTitle } from '@mui/material'


export const EditarEndereco = () => {
    const navigate = useNavigate()

    const { states, setters, requests } = useContext(Contexts)

    const salvaDadosUsuario = () => {
        setters.setAtualizado(1)
        requests.putRequest()
        states.clearInputs()
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
                    Os dados de endereço foram atualizados
                </Alert>
            )
        } else {
            return (
                <Box marginY={'1.5rem'}>
                    <Container>
                        <Stack spacing={2}>
                            <TextField error={states.endereco.street ? false : true} helperText={states.endereco.street ? '' : ''} name="street" value={states.endereco.street} onChange={states.onChangeEndereco} label="Logradouro" variant="outlined" color='primary' required />
                            <TextField error={(/[0-9]{1,5}/).test(states.endereco.number) ? false : true} helperText={states.endereco.number ? '' : ''} name='number' value={states.endereco.number} onChange={states.onChangeEndereco} label="Número" variant="outlined" color='primary' required />
                            <TextField name='complement' value={states.endereco.complement} onChange={states.onChangeEndereco} label="Complemento" variant="outlined" color='primary' />
                            <TextField error={states.endereco.neighbourhood ? false : true} helperText={states.endereco.neighbourhood ? '' : ''} name="neighbourhood" value={states.endereco.neighbourhood} onChange={states.onChangeEndereco} label="Bairro" variant="outlined" color='primary' required />
                            <TextField error={states.endereco.city ? false : true} helperText={states.endereco.city ? '' : ''} name="city" value={states.endereco.city} onChange={states.onChangeEndereco} label="Cidade" variant="outlined" color='primary' required />
                            <TextField error={states.endereco.state ? false : true} helperText={states.endereco.state ? '' : ''} name="state" value={states.endereco.state} onChange={states.onChangeEndereco} label="Estado" variant="outlined" color='primary' required />
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

