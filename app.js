let numeroSecreto = geraNumeroAleatorio();
let tentativas = 1;

exibirMensagemInicial()

function exibeTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial(){
    exibeTextoNaTela('h1', 'Jogo do número secreto');
    exibeTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

function verificaChute() {
    let chute = document.querySelector('#inputChute').value;

    if (chute == numeroSecreto) {
        exibeTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`;
        exibeTextoNaTela('p', mensagemTentativas);

        document.getElementById('inputChute').style.display = 'none';
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('botaoChutar').setAttribute('disabled', 'disabled');
    } else {
        if (chute > numeroSecreto) {
            exibeTextoNaTela('p', 'O número secreto é menor.');
        } else {
            exibeTextoNaTela('p', 'O número secreto é maior.');
        }
    }

    tentativas++;
    limparCampo();
}

function reiniciarJogo() {
    numeroSecreto = geraNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();

    document.getElementById('inputChute').style.display = 'block';
    document.getElementById('botaoChutar').removeAttribute('disabled');
    document.getElementById('reiniciar').setAttribute('disabled', 'disabled');
}

function geraNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

function limparCampo() {
    let chute = document.querySelector('#inputChute');
    chute.value = '';
}

document.querySelector('#inputChute').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        verificaChute();  // Chama a função ao pressionar Enter
    }
});

document.getElementById('reiniciar').addEventListener('click', reiniciarJogo);