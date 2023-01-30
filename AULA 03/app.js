/************************************************************************************
 * Objetivo: Calculadora
 * Autor: Luiz Gustavo
 * Data: 30/01/2023
 * Versão: 1.0
************************************************************************************/

//import da biblioteca readline
var readline = require('readline')

//Cria o objeto para ser especialista em entrada de dados pelo teclado
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Olá, qual operação deseja fazer? \n Digite: \n 1 para somar \n 2 para subtrair \n 3 para dividir \n 4 para multiplicar \n', function (operação) {
    let operaçãoMat = operação
    if (operaçãoMat == ''){
        console.log('Você não digitou nenhuma opção de caluclo')
    } else if (operaçãoMat == 1) {
        entradaDados.question('Digte o primeiro valor a somar: \n', function (valorSoma1) {
            let soma1 = valorSoma1.replace(',', '.')

            entradaDados.question('Digite o segundo valor: \n', function (valorSoma2) {
                let soma2 = valorSoma2.replace(',', '.')
                let resultadoSoma
                if (soma1 == '' || soma2 == '') {
                    console.log('ERRO: Você deixou de entrar algum valor')
                } else if (isNaN(soma1) || isNaN(soma2)) {
                    console.log('ERRO: Você deixou de digitar um número valido')
                } else {
                    resultadoSoma = parseFloat(soma1) + parseFloat(soma2)
                    console.log(resultadoSoma)
                }
            })

        })

    } else if (operaçãoMat == 2) {
        entradaDados.question('Digite o primeiro valor(o valor a ser subtraido): \n', function (valorSubtracao1) {
            let subtracao1 = valorSubtracao1.replace(',', '.')

            entradaDados.question('Digite o segundo valor(o valor que irá subtrair): \n', function (valorSubtracao2) {
                let subtracao2 = valorSubtracao2.replace(',', '.')
                let resultadoSubtracao
                if (subtracao1 == '' || subtracao2 == '') {
                    console.log('ERRO: Você deixou de entrar algum valor')
                } else if (isNaN(subtracao1) || isNaN(subtracao2)) {
                    console.log('ERRO: Você deixou de digitar um número valido')
                } else {
                    resultadoSubtracao = parseFloat(subtracao1) - parseFloat(subtracao2)
                    console.log(resultadoSubtracao)
                }
            })
        })
    } else if (operaçãoMat == 3) {
        entradaDados.question('Digite o primeiro valor(o valor que irá ser dividido): \n', function (valorDivisao1) {
            let divisao1 = valorDivisao1.replace(',', '.')

            entradaDados.question('Digite o segundo valor(o valor que irá dividir): \n', function (valorDivisao2) {
                let divisao2 = valorDivisao2.replace(',', '.')
                let resultadoDivisao
                if (divisao1 == '' || divisao2 == '') {
                    console.log('ERRO: Você deixou de entrar algum valor ')
                } else if (isNaN(divisao1) || isNaN(divisao2)) {
                    console.log('ERRO: Você deixou de digitar um número valido')
                }else if(divisao1 == 0 || divisao2 == 0){
                    console.log('ERRO: Você está usando 0 para dividir algum valor')
                } else {
                    resultadoDivisao = parseFloat(divisao1) / parseFloat(divisao2)
                    console.log(resultadoDivisao)
                }
            })
        })
    } else if (operaçãoMat == 4){
        entradaDados.question('Digite o primeiro valor(a ser multiplicado): \n', function(valorMultiplicacao1){
            let multiplicacao1 = valorMultiplicacao1.replace(',', '.')

            entradaDados.question('Digite o segundo valor(que irá multiplicar): \n', function(valorMultiplicacao2){
                let multiplicacao2 = valorMultiplicacao2.replace(',', '.')
                let resultadoMultiplicacao
                if (multiplicacao1 == '' || multiplicacao2 == '') {
                    console.log('ERRO: Você deixou de entrar algum valor')
                } else if (isNaN(multiplicacao1) || isNaN(multiplicacao2)) {
                    console.log('ERRO: Você deixou de digitar um número valido')
                } else {
                    resultadoMultiplicacao = parseFloat(multiplicacao1) * parseFloat(multiplicacao2)
                    console.log(resultadoMultiplicacao)
                }
            })
        })
    }else{
        console.log('O valor digitado não é uma opção de calculo')
    }
})