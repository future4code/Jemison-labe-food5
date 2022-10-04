import {useForm} from '../../../Hook/useForm'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { LoginPageContainer, FormContainer, DivEntrar, BotaoEntrar,
ImagemLogo, TituloEntrar, NovoCadastro, BotaoCadastro } from './style'
import logo from '../../../img/logo.png'
import {goToSignupPage} from '../../../Routes/coordinator'
import { FormControl, 
         IconButton, 
         InputAdornment, 
         InputLabel, 
         OutlinedInput, 
         Typography } from '@mui/material'
import { useState } from 'react'
import { Visibility, VisibilityOff } from '@mui/icons-material'



export const LoginPage = () => {

    const [showPassword, setShowPassword] = useState(false)

    const onClickShowPassword = () => {
          setShowPassword(!showPassword)
    }

     // const atualizando = (e) => {
     //      e.preventDefault()
     // }


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

                    <FormControl fullWidth sx={{ m: 0, mb: 1}} variant="outlined">
                    <InputLabel  htmlFor="outlined-adornment-password" >E-mail*</InputLabel>
                    <OutlinedInput
                    name="email"
                    value={form.email}
                    onChange={onChangeInputs}
                    variant={"outlined"}
                    margin={"normal"}
                    placeholder="Ex: email@email.com"
                    type={'email'}
                    InputLabelProps={{
                         shrink: true
                    }}
                    fullWidth
                    label={"E-mail"}
                    required
                    />
                    </FormControl> 

                    <FormControl fullWidth sx={{ m: 0, mb: 1}} variant="outlined">
                    <InputLabel  htmlFor="outlined-adornment-password" >Senha*</InputLabel>
                    <OutlinedInput
                    name="password"
                    value={form.password}
                    onChange={onChangeInputs}
                    variant={"outlined"}
                    margin={"normal"}
                    fullWidth
                    label={"Senha"}
                    type={showPassword ? 'text' : 'password'}
                    InputLabelProps={{
                         shrink: true
                    }}    
                    required
                    endAdornment={
                         <InputAdornment position='end'>
                              <IconButton
                                   aria-label='toogle password visibility'
                                   onClick={onClickShowPassword}
                                   edge="end"
                              >
                              {showPassword ?  <Visibility/> : <VisibilityOff/> }
                              </IconButton>
                         </InputAdornment>
                    }
                    
                    />
                    </FormControl> 

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