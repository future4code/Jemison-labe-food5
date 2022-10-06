import {BrowserRouter, Routes, Route} from 'react-router-dom'
//import Signup from '../Pages/cadastro/signup/Signup'
import { 
  LoginPage, 
  FeedPage,  
  Perfil, EditarCadastro, EditarEndereco,
  Busca, Confirmacao, 
  CarrinhoVazioPage, CarrinhoPage, 
  PedidoAndamentoPage, Restaurante
} from '../Pages'
import CadastroEndereco from '../Pages/cadastro/endereco/CadastroEndereco'
import { LogoPage } from './../Pages/LogoPage/LogoPage';



export const Router = () => {
    return(
        <BrowserRouter>
          <Routes>
                <Route path="/telainicial" element={<LogoPage/>}/>
                <Route index element={<LoginPage/>}/>
                <Route path="/feed" element={<FeedPage/>}/>
                <Route path="/signup" element={<SignupPage/>}/>
                <Route path="/endereco" element={<CadastroEndereco/>}/>
                <Route path="/perfil" element={<Perfil />}/>
                <Route path="/perfil/editar-cadastro" element={<EditarCadastro/>}/>
                <Route path="/perfil/editar-endereco" element={<EditarEndereco/>}/>
                <Route path="/search" element={<Busca/>}/>
                <Route path="/restaurante/:id" element={<Restaurante/>}/>
                <Route path="/confirmacao" element={<Confirmacao/>}/>
                <Route path="/carrinho-vazio" element={<CarrinhoVazioPage/>}/>
                <Route path="/carrinho" element={<CarrinhoPage/>}/>
                <Route path="/pedido-andamento" element={<PedidoAndamentoPage/>}/>
              </Routes>
        </BrowserRouter>
    )
}

