import { useContext } from "react"
import { Contexts } from "../../../Global/context"

import { HeaderEditar } from "../../../Components/Header/header"
import { Box, Container, Stack, TextField, Button } from '@mui/material'




export const EditarCadastro = () => {
    const { states, requests } = useContext(Contexts)

    return (
        <Box>
            <HeaderEditar />
            <Box marginY={'1.5rem'}>
                <Container>
                    <Stack spacing={2}>
                        <TextField name="name" value={states.form.name} onChange={states.onChangeInputs} label="Nome" variant="outlined" color='primary' required />
                        <TextField name="email" value={states.form.email} onChange={states.onChangeInputs} label="E-mail" variant="outlined" color='primary' type='email' required />
                        <TextField name='cpf' value={states.form.cpf} onChange={states.onChangeInputs} label="CPF" variant="outlined" color='primary' required />
                        <Button onClick={requests.putRequest} variant="contained" disableElevation sx={{borderRadius: '2px', backgroundColor: '#5cb646' ,color: '#000', textTransform: 'none', fontSize: '1rem'}}>Salvar</Button>
                    </Stack>
                </Container>
            </Box>
        </Box>
    )
}