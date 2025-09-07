let listasDeNumerosAcertados = [];
let numeroLimite = 10;
let numeroSecreto = 0;
let tentativas = 1;

// Sua função de exibir texto na tela e gerar número aleatório estão corretas, não precisam de alteração.

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas': 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`; 
        exibirTextoNaTela('p', mensagemTentativas);
        
        // Ativar o botão de "Novo Jogo"
        document.getElementById('reiniciar').removeAttribute('disabled');
        
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela ('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

// Adicione esta nova função para iniciar um novo jogo
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um Número entre 1 e 10');
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

// Adicione esta função para limpar o campo de texto
function limparCampo() {
    let chute = document.querySelector('input');
    chute.value = '';
    chute.focus();
}

// Inicialize o jogo ao carregar a página
window.onload = function() {
    reiniciarJogo();
};

function exibirTextoNaTela(tag, Texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = Texto;
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listasDeNumerosAcertados.length;
    
    // Se todos os números já foram sorteados, a lista é limpa para recomeçar.
    if (quantidadeDeElementosNaLista == numeroLimite) {
        listasDeNumerosAcertados = [];
    }
    
    // Verifica se o número já está na lista.
    if (listasDeNumerosAcertados.includes(numeroEscolhido)) {
        // Se estiver, chama a função novamente para gerar um novo número.
        return gerarNumeroAleatorio();
    } else {
        // Se não estiver, adiciona à lista e o retorna.
        listasDeNumerosAcertados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}