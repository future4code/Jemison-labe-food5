import homepage from '../../img/homepage.png'
import shoppingcart from '../../img/shoppingcart.png'
import avatar from '../../img/avatar.png'
import { goToCarrinhoPage, goToFeed, goToPerfilPage } from '../../Routes/coordinator'
import { FooterStyle, Imagem, ImagemFeed, ImagemCarrinho, ImagemPerfil } from './style'
import { useNavigate } from 'react-router-dom'


export const Footer = () => {
    const navigate = useNavigate()

    return(
        <FooterStyle>
            <Imagem>
            <ImagemFeed onClick={() => goToFeed(navigate)} src={homepage} alt={'Feed'}/>
            </Imagem>
            <Imagem>
            <ImagemCarrinho onClick={() => goToCarrinhoPage(navigate)} src={shoppingcart} alt={'Carrinho'}/>
            </Imagem>
            <Imagem>
            <ImagemPerfil onClick={() => goToPerfilPage(navigate)} src={avatar} alt={'Feed'}/>
            </Imagem>
        </FooterStyle>
    )
}