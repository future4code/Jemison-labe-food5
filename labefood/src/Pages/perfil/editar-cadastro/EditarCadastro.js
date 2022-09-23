import { HeaderEditar } from "../../../Components/Header/header"

import { Box, Container, Stack, TextField, Button } from '@mui/material'

export const EditarCadastro = () => {
    return (
        <Box>
            <HeaderEditar />
            <Box marginY={'1.5rem'}>
                <Container>
                    <Stack spacing={2}>
                        <TextField label="Nome" variant="outlined" color='primary' required />
                        <TextField label="E-mail" variant="outlined" color='primary' type='email' required />
                        <TextField label="CPF" variant="outlined" color='primary' required />
                        <Button variant="contained" disableElevation sx={{borderRadius: '2px', backgroundColor: '#5cb646' ,color: '#000', textTransform: 'none', fontSize: '1rem'}}>Salvar</Button>
                    </Stack>
                </Container>
            </Box>
        </Box>
    )
}