import { HeaderRestaurante } from "../../../Components/Header/header"
import { Box } from '@mui/material'
import { CardConfirmacao } from "../../../Components/CardConfirmacao/CardConfirmacao"
import useProtectPage from "../../../Hook/useProtectPage"

export const Confirmacao = () => {

    useProtectPage();

    return (
        <Box>
            <HeaderRestaurante />
            <CardConfirmacao />
        </Box>
    )
}