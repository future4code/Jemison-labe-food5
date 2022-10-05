import React, { useContext } from 'react'

import { theme } from '../../Constants/theme'

import { ThemeProvider, Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, FormControlLabel, InputLabel, MenuItem, Select, Switch } from '@mui/material'
import { Contexts } from '../../Global/context'


export const CardConfirmacao = (props) => {

    const { states, setters } = useContext(Contexts)

    const adicionaQtd = (id) => {
        console.log(`${states.selectControl} é a quantidade de itens do produto ${props.product} escolhida`)
        const copyProductsCart = [...states.productsCart];

        const item = copyProductsCart.find((product) => product.id === id);

        if(!item){
            copyProductsCart.push({id:id, qtd:1});
        }else{
            item.qtd = item.qdt +1;
        }
        states.setProductsCart(copyProductsCart)
    }
    console.log(states.productsCart)
    return (
        <ThemeProvider theme={theme} >
            <Box>
                <Dialog open={props.open} onClose={props.close}  sx={{ borderRadius: 0 }}>
                    <DialogContent>
                        <DialogContentText sx={{ my: 3 }} color='#000'>
                            Selecione a quantidade desejada
                        </DialogContentText>
                        <Select
                            autoFocus
                            value={states.selectControl}
                            onChange={(ev) => setters.setSelectControl(ev.target.value)}
                            fullWidth
                        >
                            <MenuItem value={'0'}>0</MenuItem>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value="5">5</MenuItem>
                            <MenuItem value="6">6</MenuItem>
                            <MenuItem value="7">7</MenuItem>
                            <MenuItem value="8">8</MenuItem>
                            <MenuItem value="9">9</MenuItem>
                        </Select>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => adicionaQtd()} color='secondary'>Adicionar ao Carrinho</Button>
                    </DialogActions>
                </Dialog>
            </Box>
        </ThemeProvider>
    )
}
