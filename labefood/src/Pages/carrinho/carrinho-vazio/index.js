import { HeaderCarrinho } from "../../../Components/Header/header"
import { Footer } from "../../../Components/Footer/footer"
import useProtectPage from "../../../Hook/useProtectPage"

export const CarrinhoVazioPage = () => {

    useProtectPage();
    
    return (
     <div>
          <HeaderCarrinho/>
         <h1>Carrinho vazio</h1>
         <Footer/>
     </div>
    )
    }