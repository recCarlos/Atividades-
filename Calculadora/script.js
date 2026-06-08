const visor = document.getElementById('visor');

// Adiciona os números e operadores no visor
function adicionarValor(valor) {
    visor.value += valor;
}

// Limpa tudo o que está no visor
function limparVisor() {
    visor.value = '';
}

// Apaga apenas o último caractere digitado
function apagarUltimo() {
    visor.value = visor.value.slice(0, -1);
}

// Faz a mágica da matemática acontecer usando a função eval()
function calcular() {
    try {
        // eval calcula a string que está dentro do visor (ex: "2+5*3")
        if (visor.value !== '') {
            visor.value = eval(visor.value);
        }
    } catch (error) {
        // Se o usuário digitar algo inválido (ex: "++5") mostra erro
        visor.value = 'Erro';
    }
}