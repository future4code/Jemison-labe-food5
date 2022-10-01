import {useForm} from '../../../Hook/useForm'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { LoginPageContainer, FormContainer, DivEntrar, BotaoEntrar,
ImagemLogo, TituloEntrar, NovoCadastro, BotaoCadastro } from './style'
import logo from '../../../img/logo.png'
import {goToSignupPage} from '../../../Routes/coordinator'
import { InputAdornment, TextField, Typography } from '@mui/material'
import { Visibility, VisibilityOff} from '@mui/icons-material'
import { useState } from 'react'
import {IconButton} from '@mui/material'


 

export const LoginPage = () => {

     const [linhaInput, setLinhaInput] = useState({
          showPassword: false
     })
     const showPassword = () => {
          setLinhaInput({...linhaInput, showPassword: !linhaInput.showPassword})
     }

     const atualizando = (e) => {
          e.preventDefault()
     }


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
          <TituloEntrar>
              <Typography component='h2' variant="subtitle1">Entrar</Typography>
          </TituloEntrar>
          <FormContainer>
               <form onSubmit={handleClick}>
                    <TextField
                    name="email"
                    value={form.email}
                    onChange={onChangeInputs}
                    variant={"outlined"}
                    margin={"normal"}
                    placeholder="email@email.com"
                    type={linhaInput.showPassword ? "text": "email"}
                    InputLabelProps={{
                         shrink: true
                    }}
                    fullWidth
                    label={"E-mail"}
                    required
                    />
                    <TextField
                    name="password"
                    value={form.password}
                    onChange={onChangeInputs}
                    variant={"outlined"}
                    margin={"normal"}
                    placeholder="Mínimo 6 caracteres"
                    pattern="^.{6,}$"
                    fullWidth
                    label={"Senha"}
                    type={linhaInput.showPassword ? "text": "password"}
                    InputLabelProps={{
                         shrink: true
                    }}
                    inputProps={{
                         endAdornment:(
                              <InputAdornment position='end'>
                                   <IconButton 
                                   arial-label="toggle password visibility"
                                   onClick={showPassword} 
                                   onMouseDown={atualizando}
                                   edge="end"
                                   >
                                        {linhaInput.showPassword ? <Visibility/>: <VisibilityOff/>}

                                   </IconButton>
                              </InputAdornment>
                         )
                    }}
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