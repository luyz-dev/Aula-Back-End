/************************************************************************************************
 * Objetivo: Projeto para realizar calculos matemáticos(SOMAR, SUBTRAIR, MULTIPLICAR E DIVIDIR)
 * Autor: Luiz Gustavo
 * Data: 03/02/2023
 * Versão: 1.0
************************************************************************************************/

//import da biblioteca readline
var readline = require('readline')

//Cria o objeto para ser especialista em entrada de dados pelo teclado
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Valor 1
entradaDados.question('Valor1: \n', function (numero1) {
    //replace - método da classe String que localiza um caracter e substitui por outro 
    let valor1 = numero1.replace(',', '.')

    //Valor 2
    entradaDados.question('Valor2: \n', function (numero2) {
        let valor2 = numero2.replace(',', '.')

        //Tipo de operação matemática
        entradaDados.question('Escolha uma operação matemática: [SOMAR | SUBTRAIR | MULTIPLICAR | DIVIDIR] \n', function (tipoCalculo) {
            let operacao = tipoCalculo.toUpperCase()
            let resultado

            //Validação para entrada vazia
            if (valor1 == '' || valor2 == '' || operacao == '') {
                console.log('ERRO: Não é possivel calcular se algum dado estiver vazio.')
                entradaDados.close()
                //Validação para entrada de dados numéricos
            } else if (isNaN(valor1) || isNaN(valor2)) {
                console.log('ERRO: Não é possível calcular se os dados digitados não forem números.')
                entradaDados.close()
            } else {
                //toUpperCase - converte uma string em MAIUSCULO
                //toLowerCase - converte uma string em minusulo
                if (operacao == 'SOMAR') {
                    resultado = Number(valor1) + Number(valor2)
                } else if (operacao == 'SUBTRAIR') {
                    resultado = Number(valor1) - Number(valor2)
                } else if (operacao == 'MULTIPLICAR') {
                    resultado = Number(valor1) * Number(valor2)
                } else if (operacao == 'DIVIDIR') {
                    if (valor1 == 0 || valor2 == 0) {
                        console.log('0 não pode ser utilizado em divisão')
                        entradaDados.close()
                    } else {
                        resultado = Number(valor1) / Number(valor2)
                    }
                }

                //Validação para tratar quando a variável resultado não for processada por algum problema
                if(resultado == undefined){
                    console.log('Não foi possivel encontrar um valor válido')
                    entradaDados.close()
                }else{
                    console.log(resultado.toFixed(2))
                }
                
            }
        })
    })
})