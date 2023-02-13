/************************************************************************************************
 * Objetivo: Gerenciador de Números Impares e Pares
 * Autor: Luiz Gustavo
 * Data: 12/02/2023
 * Versão: 1.0
************************************************************************************************/

var readline = require('readline')
const paresImpares = require('./modulo/paresImpares.js')

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log('************* Gerenciador de Números Pares e Impares *****************')
entradaDados.question('Digite o primeiro valor da sequência: \n', function (numero1) {
    let numeroInicial = numero1.replace(',', '.')

    entradaDados.question('Digite o ultimo número: \n', function (numero2) {
        let numeroFinal = numero2.replace(',', '.')

        entradaDados.question('Digite quais núemros deseja: \n 1 - Pares \n 2 - Impares \n 3 - Ambos \n', function (decisao) {
            let escolha = decisao

            if (escolha == '') {
                console.log('ERRO: Digite sua decisão')
                entradaDados.close()
            } else if (escolha != 1 && escolha != 2 && escolha != 3) {
                console.log('ERRO: Digite uma decisão válida')
                entradaDados.close()
            } else if (escolha == 1) {
                let pares
                console.log('\nTabuada no Número Pares:')
                pares = paresImpares.numerosPares(numeroInicial, numeroFinal)
                entradaDados.close()
                console.log('Quantidade de números encontrados: ' + pares)
                console.log('************* Fim Dos Números *****************')
            } else if (escolha == 2) {
                let impares
                console.log('\nTabuada no Número Impares:')
                impares = paresImpares.numerosImpares(numeroInicial, numeroFinal)
                entradaDados.close()
                console.log('Quantidade de números encontrados: ' + impares)
                console.log('************* Fim Dos Números *****************')
            } else {
                let ambosPar
                let ambosImpar
                console.log('\nTabuada no Número Pares:')
                ambosPar = paresImpares.numerosPares(numeroInicial, numeroFinal)
                console.log('Quantidade de números encontrados: ' + ambosPar + '\n')
                console.log('\nTabuada no Número Impares:')
                ambosImpar = paresImpares.numerosImpares(numeroInicial, numeroFinal)
                entradaDados.close()
                console.log('Quantidade de números encontrados: ' + ambosImpar)
                console.log('************* Fim Dos Números *****************')
            }
        })
    })
})
