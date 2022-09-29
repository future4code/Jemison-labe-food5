import {BrowserRouter, Routes, Route} from 'react-router-dom'
//import Signup from '../Pages/cadastro/signup/Signup'
import { 
  TelaInicialPage, LoginPage, 
  FeedPage, 
   EnderecoCadastroPage, 
  Perfil, EditarCadastro, EditarEnderecoPage,
  Busca, 
  RestaurantePage, DefaultRestauratePage, ConfirmacaoPage, 
  CarrinhoVazioPage, CarrinhoPage, 
  PedidoAndamentoPage, SignupPage 
} from '../Pages'
//import { SignupPage } from '../Pages/cadastro/signup/SignupPage'
//import RegisterForm from '../Pages/cadastro/registerForm'

export const Router = () => {
    return(
        <BrowserRouter>
          <Routes>
                <Route path="/telainicial" element={<TelaInicialPage/>}/>
                <Route index element={<LoginPage/>}/>
                <Route path="/feed" element={<FeedPage/>}/>
                <Route path="/signup" element={<SignupPage/>}/>
                <Route path="/endereco" element={<EnderecoCadastroPage/>}/>
                <Route path="/perfil" element={<Perfil />}/>
                <Route path="/perfil/editar-cadastro" element={<EditarCadastro/>}/>
                <Route path="/perfil/editar-endereco" element={<EditarEnderecoPage/>}/>
                <Route path="/search" element={<Busca/>}/>
                <Route path="/restaurantepage" element={<RestaurantePage/>}/>
                <Route path="/defalt-restaurante" element={<DefaultRestauratePage/>}/>
                <Route path="/confirmacaopage" element={<ConfirmacaoPage/>}/>
                <Route path="/carrinho-vazio" element={<CarrinhoVazioPage/>}/>
                <Route path="/carrinho" element={<CarrinhoPage/>}/>
                <Route path="/pedido-andamento" element={<PedidoAndamentoPage/>}/>
              </Routes>
        </BrowserRouter>
    )
}

