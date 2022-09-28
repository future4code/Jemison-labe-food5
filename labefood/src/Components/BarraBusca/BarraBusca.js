import React from 'react'
import { useContext } from 'react';
import { Contexts } from '../../Global/context';

import { theme } from '../../Constants/theme'
import { Box, Container, TextField, InputAdornment, ThemeProvider } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

export const BarraBusca = () => {

    const {states} = useContext(Contexts)
    return (
        <ThemeProvider theme={theme}>
            <Box marginTop={'0.5em'}>
                <Container>
                    <TextField name="searchResults" value={states.searchInput.searchResults} onChange={states.onChangeSearch} fullWidth placeholder='Restaurante' InputProps={{ startAdornment: (<InputAdornment position="start"><SearchIcon /></InputAdornment>), }} variant="outlined" color='secondary' />
                </Container>
            </Box>
        </ThemeProvider>
    )
}