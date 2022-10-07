import React from 'react'

import { Box, Container, Radio, RadioGroup, FormControlLabel, FormControl, Button } from '@mui/material'
import { useContext } from 'react'
import { Contexts } from '../../Global/context'

export const CardPagamento = () => {

    const { states, setters } = useContext(Contexts)
    return (
        <Box>
            <Container>
                <FormControl>
                    <RadioGroup
                        name="formas-pagamento"
                        value={states.radioControl}
                        onChange={(ev, val) => setters.setRadioControl(val)}
                        sx={{ mb: 2}}
                    >
                        <FormControlLabel value="dinheiro" control={<Radio />} label="Dinheiro" />
                        <FormControlLabel value="cartao" control={<Radio />} label="Cartão de crédito" />
                    </RadioGroup>
                    <Button variant="contained" disableElevation sx={{borderRadius: '2px', textTransform: 'none', fontSize: '1rem', minWidth: '328px'}}>Salvar</Button>
                </FormControl>
            </Container>
        </Box>
    )
}
