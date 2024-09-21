function recebeDadoDeLogin() {
    // Obtém todos os elementos com a classe 'boxLog'
    let inputs = document.querySelectorAll('.boxLog');
    
    // Pega os valores dos inputs
    let email = inputs[0].value;
    let senha = inputs[1].value;

    //retorna os dados adicionados no input
    console.log(`usuario: ${email} senha: ${senha}`);
}
