
var saldo = 100.5; // Variavel de uso global
const nome = prompt("escreva seu nome:");
var senha;
const validar =3589;


alert("Olá, "  + nome + " é um prazer ter você por aqui");



function inicio(){
    
    var escolha = parseInt(prompt('Selecione uma opção: 1.) Saldo 2.) Extrato 3.) Saque 4.) Depósito 5.) Transferência 6.) Sair'));

    switch (escolha) {
    case 1:
        visualizar_saldo();
    break;


    case 2:
        visualizar_extrato();
    break;


    case 3:
        realizar_saque();
    break;


    case 4:
        realizar_deposito();
    break;
    
    
    case 5:
        realizar_transferencia();
    break;


    case 6:
        sair();
    break;


    default:
        erro();
    break;
    }
}


function visualizar_saldo() {

    senha = parseInt(prompt("Digite sua senha:"));

    if (senha === validar) {

        alert('Seu saldo atual é:'+ saldo);
        inicio();
    }

}

function visualizar_extrato(){

    senha = parseInt(prompt("Digite sua senha:"));

    if (senha === validar) {

        alert(' Extratos:'+ "\n" + '1. Nike = 789,99.' + '2. Giga Atacado = 256,39'+ "\n" + "3. Transferência PIX recebida = 3.605;00. ");
         inicio();
    }

}

function realizar_saque(){
    senha = parseInt(prompt("Digite sua senha:"));

    if (senha === validar) {
    
    var saque = parseInt(prompt('Qual o valor deseja retirar?'));

    if (isNaN(saque)|| saque === ''){
        alert ("Informe o valor");
        realizar_saque();

    }else if ( saque <= 0) {
        alert("não autorizado")
        realizar_saque();

    }else if ( saque > saldo) {
        alert("não autorizado")
        realizar_saque();

    } else {
        saldo -= saque;
        visualizar_saldo();
    }
}else{
    alert("erro.")
}
}

function realizar_deposito() {

    var deposito = parseInt(prompt("Qual o valor que deseja depositar?"));

    if (depolsito <= 0) {
        alert("Não autorizado.")
    }else{
        saldo += deposito;
        visualizar_saldo();        
    }
}

function realizar_transferencia() {

    var transferencia = parseInt(prompt('Qual o valor a transferir?'));

    alert(parseInt(prompt("Informe o número da conta:")));

    senha = parseInt(prompt("Digite sua senha: "));

    if (senha === validar) {
        (transferencia <= 0)
        alert("Operação não autorizada.");
    } else if (transferencia > saldo) {
        alert("Operação não autorizada.");
    } else {
        saldo -= transferencia;
        ver_saldo();
    }
}

function validar_senha() {

    if (senha === validar) {

    } else {
        alert("Erro.")
        inicio();
    }

}

function sair() {
    var confirma = confirm('Você deseja sair?');
    if (confirma) {
        alert(nome + ", foi um prazer ter você por aqui!")
        window.close();
    } else {
        inicio();
    }
}

function erro() {
    alert('Por favor, informe um número entre 1 e 6.');
    inicio();
}



inicio();


