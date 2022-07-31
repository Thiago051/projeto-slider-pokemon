const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');
const cartoes = document.querySelectorAll('.cartao')
let cartaoAtual = 0;

function escoderCartaoSelecionado() {
  const cartaoSelecionado = document.querySelector('.selecionado');
  cartaoSelecionado.classList.remove('selecionado');
}

function mostrarCartao(indiceCartao) {
  cartoes[indiceCartao].classList.add('selecionado');
}


btnAvancar.addEventListener('click', () => { 
  
  if(cartaoAtual > 1) cartaoAtual = -1;

  escoderCartaoSelecionado()
  cartaoAtual++;
  mostrarCartao(cartaoAtual)
  
});

btnVoltar.addEventListener('click', () => {
  
  if(cartaoAtual === 0) cartaoAtual = cartoes.length;
  
  escoderCartaoSelecionado();
  cartaoAtual--;
  mostrarCartao(cartaoAtual);

});