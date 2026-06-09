// Seleciona os elementos do HTML
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const resultado = document.getElementById("resultado");

// Botões
const somar = document.getElementById("somar");
const subtrair = document.getElementById("subtrair");
const multiplicar = document.getElementById("multiplicar");
const dividir = document.getElementById("dividir");

// Soma
somar.addEventListener("click", function () {

    let n1 = Number(num1.value);
    let n2 = Number(num2.value);

    mostrarResultado(n1 + n2);
});

// Subtração
subtrair.addEventListener("click", function () {

    let n1 = Number(num1.value);
    let n2 = Number(num2.value);

    mostrarResultado(n1 - n2);
});

// Multiplicação
multiplicar.addEventListener("click", function () {

    let n1 = Number(num1.value);
    let n2 = Number(num2.value);

    mostrarResultado(n1 * n2);
});

// Divisão
dividir.addEventListener("click", function () {

    let n1 = Number(num1.value);
    let n2 = Number(num2.value);

    if (n2 === 0) {
        resultado.textContent = "Erro";
    } else {
        mostrarResultado(n1 / n2);
    }
});
function mostrarResultado(valor){
    resultado.textContent = valor;
//se o resultaado for negativo
    if (valor < 0) {
        resultado.style.color = "red";
    } else {
        resultado.style.color = "blue";
    }
}