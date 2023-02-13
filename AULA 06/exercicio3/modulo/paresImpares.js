/************************************************************************************************
 * Objetivo: Gerenciador de Impares e Pares
 * Autor: Luiz Gustavo
 * Data: 12/02/2023
 * Versão: 1.0
************************************************************************************************/

const numerosPares = function (numeroInicial, numeroFinal) {
    let valorInicial = numeroInicial
    let valorFinal = numeroFinal
    let status = true

    if (valorInicial == '' || valorFinal == '') {
        console.log('ERRO: Digite todos os valores')
        status = false
    } else if(isNaN(valorInicial) || isNaN(valorFinal)){
        console.log('ERRO: Digite valores númericos')
        status = false
    } else if (valorInicial < 0 || valorInicial > 500) {
        console.log('ERRO: Digite um valor inicial válido, Entre 0 e 500')
        status = false
    } else if (valorFinal < 100 || valorFinal > 1000) {
        console.log('ERRO: Digite um valor final válido, Entre 100 e 1000')
        status = false
    } else if (valorFinal <= valorInicial) {
        console.log('ERRO: Digite um valor final maior que o inicial')
        status = false
    } else {
        let contador = 0
        while (valorInicial <= valorFinal) {
            if (valorInicial % 2 == false) {
                console.log(`${valorInicial}`)
                contador++
            }
            valorInicial++
        }
        return contador
    }
    return status
}

const numerosImpares = function (numeroInicial, numeroFinal) {
    let valorInicial = numeroInicial
    let valorFinal = numeroFinal
    let status = true

    if (valorInicial == '' || valorFinal == '') {
        console.log('ERRO: Digite todos os valores')
        status = false
    }else if(isNaN(valorInicial) || isNaN(valorFinal)){
        console.log('ERRO: Digite valores númericos')
        status = false
    } else if (valorInicial < 0 || valorInicial > 500) {
        console.log('ERRO: Digite um valor inicial válido, Entre 0 e 500')
        status = false
    } else if (valorFinal < 100 || valorFinal > 1000) {
        console.log('ERRO: Digite um valor final válido, Entre 100 e 1000')
        status = false
    } else if (valorFinal < valorInicial) {
        console.log('ERRO: Digite um valor final maior que o inicial')
        status = false
    } else {
        let contador = 0
        while (valorInicial <= valorFinal) {
            if (valorInicial % 2 == true) {
                console.log(`${valorInicial}`)
                contador++
            }
            valorInicial++
        }
        return contador
    }
    return status
}

module.exports = {
    numerosImpares,
    numerosPares,
}