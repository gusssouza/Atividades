// atividade 1
var nomeCorretista = "Leandro"
var nomeBanco = "Bradesco"
var numeroConta = 232356
var chequesDebitar = 560
var totalDinheiro = 6000
var chequesCreditar = 985
var limiteCredito = 3600
var saldoAtual = 6000
var saldoDisponivel = saldoAtual + chequesCreditar + limiteCredito - chequesDebitar;
console.log("Seu corretor " + nomeCorretista + " do banco " + nomeBanco + " informa que a conta número:" + numeroConta + " tem o saldo disponível de: R$" + saldoDisponivel)

// atividade 2

var dolar = 5;
var real = 1;
var realDolar = real * dolar;
var valor1 = Math.random() * 5000
var valorConvertido = valor1 * dolar;
console.log("Um real em dolar é R$" + realDolar + " O valor de: $" + valor1 + " em Real é: R$" + valorConvertido)

// atividade 3

var numero = Math.random().toFixed(0) * 11;

if (numero % 2 == 0) {

   //alert("O número " + numero + " é par, pois o resto da divisão por dois é igual a zero")
    
    }else{
    
    //alert("Existe resto na divisão por dois, portando o número " + numero + " é ímpar")
    
    }

// atividade 4 

var vendas = Math.random().toFixed(1) * 900
var meta = 600
if (vendas >= meta) {
    console.log("Você vendeu " + vendas + " A meta era " + meta + " Parabéns, você bateu a meta")
} else { console.log("Você vendeu " + vendas + " A meta era " + meta + " Infelizmente você não bateu a meta :(")
}

// atividade 5 

var vendas = Math.random().toFixed(1) * 600
var funcionario = "Rogério"
var comissao = 0


if (vendas <= 250) 
{comissao = 1}

else if (vendas <= 500) {
comissao = 1.5

} else (comissao = 2)


var comissaoFinal =  comissao * vendas;
console.log("Olá " + funcionario + " você vendeu " + vendas + " e teve " + comissaoFinal + " de comissão")