import { HeaderRestaurante } from "../../../Components/Header/header"
import { Box } from '@mui/material'
import { CardConfirmacao } from "../../../Components/CardConfirmacao/CardConfirmacao"

export const Confirmacao = () => {
    return (
        <Box>
            <HeaderRestaurante />
            <CardConfirmacao />
        </Box>
    )
}