/************************************************************************************************
 * Objetivo: Gerenciador de Cálculos de Tabuada
 * Autor: Luiz Gustavo
 * Data: 12/02/2023
 * Versão: 1.0
************************************************************************************************/

var readline = require('readline')
const calcTabuadas = require('./modulo/calcTabuadas.js')

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log('************* Gerenciador de Tabuadas *****************')
entradaDados.question('Digite a tabuada inicial: \n', function (tabInicial) {
    let tabuadaInicial = tabInicial

    entradaDados.question('Digite a tabuada final: \n', function (tabFinal) {
        let tabuadaFinal = tabFinal

        entradaDados.question('Digite o minimo multiplicador: \n', function (minMultiplicador) {
            let multiplicadorMinimo = minMultiplicador

            entradaDados.question('Digite o maximo multiplicador: \n', function (maxMultiplicador) {
                let multiplicadorMaximo = maxMultiplicador
                let calculoTabuadas = Number()

                calculoTabuadas = calcTabuadas.tabuadas(tabuadaInicial, tabuadaFinal, multiplicadorMinimo, multiplicadorMaximo)
                if (calculoTabuadas == false) {
                    entradaDados.close()
                } else {
                    console.log('************* Fim Das Tabuadas *****************')
                    entradaDados.close()
                }
            })
        })
    })
})