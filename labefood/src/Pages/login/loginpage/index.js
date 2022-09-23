import {useForm} from '../../../Hook/useForm'
import { LoginPageContainer, FormContainer, DivEntrar, BotaoEntrar,
InputEmail,InputSenha, ImagemLogo, TituloEntrar } from './style'
import logo from '../../../img/logo.png'

export const LoginPage = () => {
     const [form, onChangeInputs, clearInputs] = useForm({
          email: "",
          password: ""
     })

     const handleClick = (event) => {
          event.preventDefault()

     clearInputs()
     }


return (
     <LoginPageContainer>
          <ImagemLogo src={logo} alt="Logotipo"/>
          <TituloEntrar>Entrar</TituloEntrar>
          <FormContainer>
               <form onSubmit={handleClick}>
                    <InputEmail
                    name="e-mail"
                    value={form.email}
                    onChange={onChangeInputs}
                    placeholder="email@email.com"
                    type="e-mail"
                    required
                    />
                    <InputSenha
                    name="password"
                    value={form.password}
                    onChange={onChangeInputs}
                    placeholder="Mínimo 6 caracteres"
                    type="password"
                    pattern="^.{6,}$"
                    required
                    />
                    <DivEntrar>
                    <BotaoEntrar>Entrar</BotaoEntrar>
                    </DivEntrar>
               </form>
          </FormContainer>
     </LoginPageContainer>
)
}