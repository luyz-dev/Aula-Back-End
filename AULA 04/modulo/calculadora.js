/************************************************************************************************
 * Objetivo: Arquivo de funções para calculos matemáticos
 * Autor: Luiz Gustavo
 * Data: 03/02/2023
 * Versão: 1.0
************************************************************************************************/

//Função para realizar calculos matemáticos (SOMAR, SUBTRAIR, MULTIPLICAR E DIVIDIR)
function calculadora(numero1, numero2, tipoCalculo) {
    let valor1 = Number(numero1)
    let valor2 = Number(numero2)
    let operacao = tipoCalculo.toUpperCase()
    let resultado

    if (operacao == 'SOMAR') {
        resultado = valor1 + valor2
    } else if (operacao == 'SUBTRAIR') {
        resultado = valor1 - valor2
    } else if (operacao == 'MULTIPLICAR') {
        resultado = valor1 * valor2
    } else if (operacao == 'DIVIDIR') {
        if (valor1 == 0 || valor2 == 0) {
            console.log('0 não pode ser utilizado em divisão')
        } else {
            resultado = valor1 / valor2
        }
    }

    //Validação para tratar quando a variável resultado não for processada por algum problema
    if (resultado == undefined) {
        return false
    } else {
        return resultado
    }
}

//Permite adicionar uma fuction em escopo global (public)
//As fuctions que não estiverem com export serão tratadas apenas com escopo local
module.exports = {
    calculadora
}