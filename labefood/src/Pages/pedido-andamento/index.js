import { HeaderFeed } from "../../Components/Header/header"
import { Footer } from "../../Components/Footer/footer"
import useProtectPage from "../../Hook/useProtectPage"

export const PedidoAndamentoPage = () => {

     useProtectPage()

     return (
          <div>
          <HeaderFeed/>
         <h1>Pedido em andamento</h1>
         <Footer/>
          </div>
         )
         }