// identificação de cada jogo
let jogo1Escolhido = 1;
let jogo2Escolhido = 2;

// função principal que será chamada ao pressionar o botão, seja para alugar ou devolver um jogo
function alterarStatus(jogo) {
    if (jogo == jogo1Escolhido) {
        funcionamentoBotao(1);
    } else if (jogo == jogo2Escolhido) {
        funcionamentoBotao(2);
    // assim, caso os dois jogos anteriores não tenham sido os objetos da interação partimos para o terceiro jogo.
    } else {
        funcionamentoBotao(3);
    }   
}

function funcionamentoBotao(botao) {
    let ativarBotao = document.getElementById(`game-${botao}`);
    console.log(ativarBotao);

    if (ativarBotao.contains('dashboard__item__button')) {
        console.log('Eita');
        //ativarBotao.classList.contains('dashboard__items__item')
        //ativarBotao.classList.remove('dashboard__item__button');
        //ativarBotao.classList.add('dashboard__item__button dashboard__item__button--return');
    } else {
        console.log('Caramba');
        //ativarBotao.classList.remove('dashboard__item__button dashboard__item__button--return');
        //ativarBotao.classList.add('dashboard__item__button');
    }
} 

document.querySelector


//  function escurecerCapa() {
//     let condicaoCapa = document.getElementById("game-1");

//      document.classList.contains("dashboard__item__img");
//      document.classList.contains("dashboard__item__img dashboard__item__img--rented");
    
//  }


 //"dashboard__item__button">Alugar
 //"dashboard__item__button dashboard__item__button--return">Devolver

 // botão ao ser apertado, precisa:
 // mudar de cor: azul para cinza e cinza para azul
 // mudar a mensagem escrita: alugar para devolver e devolver para alugar
 // além disso, a imagem do jogo precisa ser escurecida no caso do jogo ser alugado

