// 1. Seleciona o formulário e o elemento de erro por seus respectivos IDs
const formulario = document.getElementById("meuFormulario");
const elementoErro = document.getElementById("erro");

// 2. Adiciona o ouvinte de evento (addEventListener) para o momento do envio (submit)
formulario.addEventListener("submit", function(event) {
    
    // Captura os valores atuais dos campos de entrada
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const idade = document.getElementById("idade").value;

    // Criamos uma variável para armazenar o texto do erro, se houver
    let mensagemErro = "";

    // 3. Validações solicitadas
    if (nome.trim() === "") {
        mensagemErro = "O campo Nome não pode estar vazio.";
    } 
    else if (!email.includes("@")) {
        mensagemErro = "O campo Email deve conter o caractere '@'.";
    } 
    else if (idade === "" || Number(idade) <= 0) {
        mensagemErro = "A Idade deve ser um número maior que 0.";
    }

    // 4. Verificação de erros e comportamento de envio
    if (mensagemErro !== "") {
        // Se houver algum erro, impede o envio do formulário padrão
        event.preventDefault();
        
        // Exibe a mensagem de erro específica na tela usando textContent
        elementoErro.textContent = mensagemErro;
    } else {
        // Se estiver tudo certo, limpa qualquer erro antigo (boa prática!)
        elementoErro.textContent = "";
        alert("Formulário validado e enviado com sucesso!");
    }
});