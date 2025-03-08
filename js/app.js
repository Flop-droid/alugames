// função principal que será chamada ao pressionar o botão, seja para alugar ou devolver um jogo
function alterarStatus(jogo) {
    if (jogo == 1) {
        funcionamentoJogo(1);
    } else if (jogo == 2) {
        funcionamentoJogo(2);
    // assim, caso os dois jogos anteriores não tenham sido os objetos da interação partimos para o terceiro jogo.
    } else {
        funcionamentoJogo(3);
    }   
}

// função responsável por alterar o filtro das capas, além da cor e texto dos botões
function funcionamentoJogo(botao) {
    let reconhecerBotao = document.getElementById(`game-${botao}`);
    let estadoImagem = reconhecerBotao.querySelector('.dashboard__item__img');
    let estadoBotao = reconhecerBotao.querySelector('.dashboard__item__button');

    if (estadoImagem.classList.contains('dashboard__item__img--rented')) {
        estadoImagem.classList.remove('dashboard__item__img--rented');
    } else {
        estadoImagem.classList.add('dashboard__item__img--rented');
    }

    if (estadoBotao.classList.contains('dashboard__item__button--return')) {
        estadoBotao.classList.remove('dashboard__item__button--return');
        estadoBotao.textContent = 'Alugar';
    } else {
        estadoBotao.classList.add('dashboard__item__button--return');
        estadoBotao.textContent = 'Devolver';
    }
}
