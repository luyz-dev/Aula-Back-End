/************************************************************************************************
 * Objetivo: Gerenciador de Impares e Pares
 * Autor: Luiz Gustavo
 * Data: 12/02/2023
 * Versão: 1.0
************************************************************************************************/

const numerosPares = function (numeroInicial, numeroFinal) {
    let valorInicial = numeroInicial
    let valorFinal = numeroFinal
    let status

    if (valorInicial == '' || valorFinal == '') {
        console.log('ERRO: Digite todos os valores')
    } else if (valorInicial < 0 || valorInicial > 500) {
        console.log('ERRO: Digite um valor inicial válido, Entre 0 e 500')
    } else if (valorFinal < 100 || valorFinal > 1000) {
        console.log('ERRO: Digite um valor final válido, Entre 100 e 1000')
    } else if (valorFinal <= valorInicial) {
        console.log('ERRO: Digite um valor final maior que o inicial')
    } else if (isNaN(valorInicial) || isNaN(valorFinal)) {
        console.log('ERRO: Digite número nos dois valores')
    } else {
        while (valorInicial <= valorFinal) {
            if (valorInicial % 2 == false) {
                console.log(`${valorInicial} \n`)
            }
            valorInicial++
        }
    }
}

const numerosImpares = function (numeroInicial, numeroFinal) {
    let valorInicial = numeroInicial
    let valorFinal = numeroFinal
    let status

    if (valorInicial == '' || valorFinal == '') {
        console.log('ERRO: Digite todos os valores')
    } else if (valorInicial < 0 || valorInicial > 500) {
        console.log('ERRO: Digite um valor inicial válido, Entre 0 e 500')
    } else if (valorFinal < 100 || valorFinal > 1000) {
        console.log('ERRO: Digite um valor final válido, Entre 100 e 1000')
    } else if (valorFinal <= valorInicial) {
        console.log('ERRO: Digite um valor final maior que o inicial')
    } else if (isNaN(valorInicial) || isNaN(valorFinal)) {
        console.log('ERRO: Digite número nos dois valores')
    } else {
        while (valorInicial <= valorFinal) {
            if (valorInicial % 2 == false) {
                console.log(`${valorInicial} \n`)
            }
            valorInicial++
        }
    }
}

module.exports = {
    numerosImpares,
    numerosPares
}