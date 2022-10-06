import { Header1 } from "../../../Components/Header/header"
import useProtectPage from "../../../Hook/useProtectPage"

export const SignupPage = () => {

    useProtectPage();
    
    return (
     <div>
          <Header1/>
         <h1>Sign up</h1>
     </div>
    )
    }