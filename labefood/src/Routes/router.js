import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { 
  TelaInicialPage, LoginPage, 
  SignupPage, EnderecoCadastroPage,
  Perfil, EditarCadastro, EditarEnderecoPage,
  Busca, Confirmacao, CarrinhoPage, 
  PedidoAndamentoPage, FeedPage, Restaurante, Cart
} from '../Pages'
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
                <Route path="/restaurante/:id" element={<Restaurante/>}/>
                <Route path="/confirmacao" element={<Confirmacao/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/carrinho" element={<CarrinhoPage/>}/>
                <Route path="/pedido-andamento" element={<PedidoAndamentoPage/>}/>
              </Routes>
        </BrowserRouter>
    )
}

