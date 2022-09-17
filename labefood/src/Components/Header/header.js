import back from '../../img/back.png'
import { HeaderStyled } from './style'
import { DivTitulo } from './style'
import { TituloHeader } from './style'
import { BotaoVoltar } from './style'
import {paginaAnterior} from '../../Routes/coordinator'
import {DivTituloFeed} from './style'

export const Header1 = () => {
    return(
        <HeaderStyled>
            <BotaoVoltar onClick={paginaAnterior} src={back} alt='Voltar'/>           
        </HeaderStyled>
    )
}
export const HeaderSearch = () => {
    return(
        <HeaderStyled>
            <BotaoVoltar onClick={paginaAnterior} src={back} alt='Voltar'/>
            <DivTitulo>
            <TituloHeader>
            Busca
            </TituloHeader>
            </DivTitulo>            
        </HeaderStyled>
    )
}
export const HeaderRestaurante = () => {
    return(
        <HeaderStyled>
            <BotaoVoltar onClick={paginaAnterior} src={back} alt='Voltar'/>
            <DivTitulo>
            <TituloHeader>
            Restaurante
            </TituloHeader>
            </DivTitulo>            
        </HeaderStyled>
    )
}
export const HeaderFeed = () => {
    return(
        <HeaderStyled>
            <DivTituloFeed>
            <TituloHeader>
            FutureEats
            </TituloHeader>
            </DivTituloFeed>            
        </HeaderStyled>
    )
}
export const HeaderCarrinho = () => {
    return(
        <HeaderStyled>
            <DivTituloFeed>
            <TituloHeader>
            Carrinho
            </TituloHeader>
            </DivTituloFeed>            
        </HeaderStyled>
    )
}
export const HeaderPerfil = () => {
    return(
        <HeaderStyled>
            <DivTituloFeed>
            <TituloHeader>
            Meu Perfil
            </TituloHeader>
            </DivTituloFeed>            
        </HeaderStyled>
    )
}
export const HeaderEditar = () => {
    return(
        <HeaderStyled>
            <BotaoVoltar onClick={paginaAnterior} src={back} alt='Voltar'/>
            <DivTitulo>
            <TituloHeader>
            Editar
            </TituloHeader>
            </DivTitulo>            
        </HeaderStyled>
    )
}
export const HeaderEndereco = () => {
    return(
        <HeaderStyled>
            <BotaoVoltar onClick={paginaAnterior} src={back} alt='Voltar'/>
            <DivTitulo>
            <TituloHeader>
            Endereço
            </TituloHeader>
            </DivTitulo>            
        </HeaderStyled>
    )
}





