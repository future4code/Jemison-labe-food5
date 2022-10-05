export const paginaAnterior = (navigator) => {
    navigator(-1);
}
export const goToTelaInicialPage = (navigator) => {
    navigator('/telainicial');
}

export const goToLoginPage = (navigator) => {
    navigator('/loginpage');
}

export const goToFeed = (navigator) => {
    navigator('/feed');
}

export const goToSignupPage = (navigator) => {
    navigator('/signup');
}


export const goToEnderecocadastroPage = (navigator) => {
    navigator('/endereco');
}

export const goToPerfilPage = (navigator) => {
    navigator('/perfil');
}

export const goToEditarCadastroPage = (navigator) => {
    navigator('/editar-cadastro');
}

export const goToEditarEnderecoPage = (navigator) => {
    navigator('/editar-endereco');
}

export const goToSearchPage = (navigator) => {
    navigator('/search');
}
export const goToRestaurantePage = (navigator) => {
    navigator('/restaurantepage');
}

export const goToDefaultRestaurantePage = (navigator, id) => {
    navigator(`/restaurante/${id}`);
}

export const goToConfirmacaoPage = (navigator) => {
    navigator('/confirmacaopage');
}

export const goToCarrinhoVazioPage = (navigator) => {
    navigator('/carrinho-vazio');
}

export const goToCarrinhoPage = (navigator) => {
    navigator('/cart');
}

export const goToPedidoAndamentoPage = (navigator) => {
    navigator('/pedido-andamento');
}

