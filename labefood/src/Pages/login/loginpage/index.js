import {useForm} from '../../../Hook/useForm'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { LoginPageContainer, FormContainer, DivEntrar, BotaoEntrar,
InputEmail,InputSenha, ImagemLogo, TituloEntrar, NovoCadastro, BotaoCadastro } from './style'
import logo from '../../../img/logo.png'
import {goToSignupPage} from '../../../Routes/coordinator'


export const LoginPage = () => {

     const navigate = useNavigate()
     const [form, onChangeInputs, clearInputs] = useForm({
          email: "",
          password: ""
     })

     const handleClick = (event) => {
          event.preventDefault()
         
          axios.post('https://us-central1-missao-newton.cloudfunctions.net/futureEatsB/login', form)
          .then((response) => {
               localStorage.setItem('token', response.data.token)
               console.log(response)
               if (response.data.user.hasAddress === true) {
                 navigate("/feed")
               } else { navigate("/signup") }
             }).catch((erro) => {
               console.log(erro.message)
               alert("Usuário incorreto ou não exite!")
             })

     clearInputs()
     }


return (
     <LoginPageContainer>
          <ImagemLogo src={logo} alt="Logotipo"/>
          <TituloEntrar>Entrar</TituloEntrar>
          <FormContainer>
               <form onSubmit={handleClick}>
                    <InputEmail
                    name="email"
                    value={form.email}
                    onChange={onChangeInputs}
                    placeholder="email@email.com"
                    type="email"
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
                    <BotaoEntrar type='submit'>Entrar</BotaoEntrar>
                    </DivEntrar>
               </form>
          </FormContainer>
          <NovoCadastro>
          <span>Não possui cadastro?</span><BotaoCadastro onClick={() => goToSignupPage(navigate)}> Clique aqui</BotaoCadastro>
          </NovoCadastro>
     </LoginPageContainer>
)
}