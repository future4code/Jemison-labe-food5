import { Header1 } from "../../../Components/Header/header"
import useProtectPage from "../../../Hook/useProtectPage"

export const EnderecoCadastroPage = () => {

    useProtectPage();
    
    return (
     <div>
          <Header1/>
         <h1>Endereço de cadastro</h1>
     </div>
    )
    }