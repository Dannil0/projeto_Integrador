function recebeDadoDeLogin() {
    // Obtém todos os elementos com a classe 'boxLog'
    let inputs = document.querySelectorAll('.boxLog');

    // Pega os valores dos inputs
    let email = inputs[0].value;
    let senha = inputs[1].value;

    //retorna os dados adicionados no input
    console.log(`usuario: ${email} senha: ${senha}`);

    // Define os valores esperados
    const emailEsperado = "funfa";
    const senhaEsperada = "prf";

    // Verifica se os valores são os esperados
    if (email === emailEsperado && senha === senhaEsperada) {
        // Redireciona para a nova página desejada
        window.location.href = "feed.html"; // Substitua "nova_pagina.html" pelo caminho da nova página
    } else {
        // Exibe uma mensagem de erro
        alert("Usuário ou senha incorretos!");
    }
}
