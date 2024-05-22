let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let trys = 1;
let numeroDeErros = 4;
let paalavrachance = numeroDeErros > 1 ? 'chances' : 'chance';
let mensagemErro = `ERROUU, você perdeu. O número Secreto é o ${numeroSecreto}!`

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag,texto);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
function exibirMensagemInicial() {
    exibirTextoNaTela("h1", "Adivinhe o Número Secreto");
    exibirTextoNaTela("p", `Escolha um número entre 1 e ${numeroLimite}, você só tem ${numeroDeErros - 1} ${paalavrachance}!`);
}
exibirMensagemInicial();
console.log(numeroSecreto);
function verificarChute() {
    let chute = document.querySelector("input").value;

    if (chute == numeroSecreto){
        let palavraTry = trys > 1 ? 'tentativas' : 'tentativa';
        let mensagemtrys = `você descobriu o número secreto com ${trys} ${palavraTry}!`;
    exibirTextoNaTela("h1", "Acertou!");
    exibirTextoNaTela("p", mensagemtrys);
    document.getElementById("reiniciar").removeAttribute("disabled");
    } else
    if(trys >= numeroDeErros){
        VocePerdeu();
        document.getElementById("reiniciar").removeAttribute("disabled");
    
}
  
    if (chute > numeroSecreto) {
        exibirTextoNaTela("p", "O número secreto é menor");
        trys++
        LimparCampo();
    }else{
        exibirTextoNaTela("p", "O número secreto é maior");
        trys++
        LimparCampo();
    }  
}
function gerarNumeroAleatorio() {
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if (quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   if(listaDeNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
   } else{
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
   }
}
function LimparCampo() {
    chute = document.querySelector("input");
    chute.value = " ";
}
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    LimparCampo();
    trys = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}
function VocePerdeu(){
    numeroSecreto = gerarNumeroAleatorio();
    LimparCampo();
    trys = 1;
  
    exibirTextoNaTela("h1", mensagemErro);
    document.getElementById("reiniciar").setAttribute("disabled", true); 
}
