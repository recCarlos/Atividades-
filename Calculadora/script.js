// Função responsável por realizar os cálculos
function calcular(operacao) {

    // Obtém o valor digitado no primeiro campo
    const n1 = Number(document.getElementById("num1").value);

    // Obtém o valor digitado no segundo campo
    const n2 = Number(document.getElementById("num2").value);

    // Verifica se os valores informados são números válidos
    if (isNaN(n1) || isNaN(n2)) {

        // Exibe uma mensagem de erro
        document.getElementById("resultado").textContent =
            "Digite números válidos.";

        // Encerra a execução da função
        return;
    }

    // Variável que armazenará o resultado da operação
    let resultado;

    // Escolhe qual operação será executada
    switch (operacao) {

        // Caso a operação seja soma
        case "+":
            resultado = n1 + n2;
            break;

        // Caso a operação seja subtração
        case "-":
            resultado = n1 - n2;
            break;

        // Caso a operação seja multiplicação
        case "*":
            resultado = n1 * n2;
            break;

        // Caso a operação seja divisão
        case "/":

            // Verifica se o divisor é zero
            if (n2 === 0) {

                // Exibe mensagem de erro
                resultado = "Erro: divisão por zero";

            } else {

                // Realiza a divisão
                resultado = n1 / n2;
            }

            break;

        // Caso seja informada uma operação inválida
        default:
            resultado = "Operação inválida";
    }

    // Exibe o resultado na página
    document.getElementById("resultado").textContent =
        `Resultado: ${resultado}`;
}