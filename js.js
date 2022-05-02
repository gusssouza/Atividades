// atividade 1
var nomeProduto = "Placa de Vídeo"
var precoCusto = 1250;
var meuImposto = precoCusto * 17 / 100;
var taxaDistribuidor = 250;
var valorFinal = precoCusto + meuImposto + taxaDistribuidor

console.log("Seu produto: " + nomeProduto + " custa " + valorFinal + " reais")

// atividade 2
var numero1 = 15
var numero2 = 9

function comparar() {
    if (numero1 > numero2) {
        console.log("O número1 é maior que número2")
    } else console.log("O número2 é maior que número1")
}

comparar()


