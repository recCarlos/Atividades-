// Cria uma variável chamada contador com valor inicial 0
let contador = 0;

// Seleciona o h1 que exibe o número
const numero = document.getElementById("numero");

// Seleciona os botões
const btnIncrementar = document.getElementById("incrementar");
const btnDecrementar = document.getElementById("decrementar");
const btnZerar = document.getElementById("zerar");

// Função responsável por atualizar o número e a cor
function atualizarContador() {

    // Atualiza o valor exibido na tela
    numero.textContent = contador;

    // Se o número for negativo, fica vermelho
    if (contador < 0) {
        numero.style.color = "red";
    }
    // Se for positivo, fica verde
    else if (contador > 0) {
        numero.style.color = "green";
    }
    // Se for zero, fica preto
    else {
        numero.style.color = "black";
    }
}

// Botão Incrementar
btnIncrementar.addEventListener("click", function () {
    contador++;
    atualizarContador();
});

// Botão Decrementar
btnDecrementar.addEventListener("click", function () {
    contador--;
    atualizarContador();
});

// Botão Zerar
btnZerar.addEventListener("click", function () {
    contador = 0;
    atualizarContador();
});