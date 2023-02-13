/************************************************************************************************
 * Objetivo: Tabuadas
 * Autor: Luiz Gustavo
 * Data: 12/02/2023
 * Versão: 1.0
************************************************************************************************/

const tabuadas = function (tabuadaInicial, tabuadaFinal, multiplicadorMinimo, multiplicadorMaximo) {
    let inicialTabuada = Number(String(tabuadaInicial).replace(',','.'))
    let finalTabuada = Number(String(tabuadaFinal).replace(',','.'))
    let minMultiplicador = Number(String(multiplicadorMinimo).replace(',','.'))
    let maxMultiplicador = Number(String(multiplicadorMaximo).replace(',','.'))
    let status = true

    if (maxMultiplicador == '' || minMultiplicador == '' || inicialTabuada == '' || finalTabuada == '') {
        console.log('ERRO: Digite todos os valores')
        status = false
    }else if(isNaN(maxMultiplicador) || isNaN(minMultiplicador) || isNaN(inicialTabuada) || isNaN(finalTabuada)){
        console.log('ERRO: Digite número em todos os valores')
        status = false  
    } else if (maxMultiplicador < 1 || maxMultiplicador > 50 || minMultiplicador < 1 || minMultiplicador > 50) {
        console.log('ERRO: Digite um número válido, Entre 2 e 100')
        status = false
    } else if (maxMultiplicador < minMultiplicador) {
        console.log('ERRO: Maximo multiplicador tem que ser maior que o minimo multiplicador')
        status = false
    } else if (finalTabuada < inicialTabuada) {
        console.log('ERRO: Tabuada final tem que ser maior que a inicial')
        status = false
    } else if (tabuadaInicial < 2 || tabuadaFinal > 100) {
        status = false
        console.log('ERRO: A tabuada tem que começar no minimo 2 e a final só pode ir até 200')
    } else {
        let resultado
        let minMultiplicadorCalculado

        while (inicialTabuada <= finalTabuada) {
            console.log('Tabuda do: ' + inicialTabuada)
            minMultiplicadorCalculado = Number(minMultiplicador)
            while (minMultiplicadorCalculado <= maxMultiplicador) {
                resultado = inicialTabuada * minMultiplicadorCalculado
                console.log(`${inicialTabuada} x ${minMultiplicadorCalculado} = ${resultado}`)
                minMultiplicadorCalculado++
            }
            inicialTabuada++
            console.log('******************************')
        } 
    }
    return status
}

module.exports = {
    tabuadas
}