import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { 
  TelaInicialPage, LoginPage, 
  FeedPage, 
  SignupPage, SignupPreenchidoPage, EnderecoCadastroPage, 
  PerfilPage, EditarCadastroPage, EditarEnderecoPage,
  SearchPage, SearchResultsPage, 
  RestaurantePage, DefaultRestauratePage, ConfirmacaoPage, 
  CarrinhoVazioPage, CarrinhoPage, 
  PedidoAndamentoPage
} from '../Pages'

export const Router = () => {
    return(
        <BrowserRouter>
              <Routes>
                <Route path="/telainicial" element={<TelaInicialPage/>}/>
                <Route index element={<LoginPage/>}/>
                <Route path="/feed" element={<FeedPage/>}/>
                <Route path="/signup" element={<SignupPage/>}/>
                <Route path="/signup-preenchido" element={<SignupPreenchidoPage/>}/>
                <Route path="/endereco" element={<EnderecoCadastroPage/>}/>
                <Route path="/perfil" element={<PerfilPage/>}/>
                <Route path="/editar-cadastro" element={<EditarCadastroPage/>}/>
                <Route path="/editar-endereco" element={<EditarEnderecoPage/>}/>
                <Route path="/searchplaceholder" element={<SearchPage/>}/>
                <Route path="/search-results" element={<SearchResultsPage/>}/>
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

